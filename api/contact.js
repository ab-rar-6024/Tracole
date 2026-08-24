import nodemailer from 'nodemailer';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, subject, message, source } = req.body || {};

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }
  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, ADMIN_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.error('Contact form: SMTP environment variables are not configured.');
    return res.status(500).json({ error: 'Email service is not configured yet. Please try again later.' });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  });

  const fromAddress = SMTP_FROM || SMTP_USER;
  const adminAddress = ADMIN_EMAIL || SMTP_USER;
  const safeName = escapeHtml(name);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');
  const inquiryLabel = subject ? escapeHtml(subject) : 'General Inquiry';
  const sourceLabel = source ? `${escapeHtml(source)} ` : '';

  try {
    await transporter.sendMail({
      from: `"Tracole Website" <${fromAddress}>`,
      to: adminAddress,
      replyTo: email,
      subject: `New ${sourceLabel}Inquiry: ${inquiryLabel} — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject || 'General Inquiry'}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Subject:</strong> ${inquiryLabel}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `
    });

    await transporter.sendMail({
      from: `"Tracole Technologies" <${fromAddress}>`,
      to: email,
      subject: 'We received your message — Tracole Technologies',
      text: `Hi ${name},\n\nThanks for reaching out to Tracole Technologies. We've received your message and our team will get back to you shortly.\n\nYour message:\n${message}\n\n— Tracole Technologies`,
      html: `
        <p>Hi ${safeName},</p>
        <p>Thanks for reaching out to <strong>Tracole Technologies</strong>. We've received your message and our team will get back to you shortly.</p>
        <p><strong>Your message:</strong></p>
        <p style="white-space:pre-wrap;">${safeMessage}</p>
        <p>— Tracole Technologies</p>
      `
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Contact form: failed to send email.', err);
    return res.status(500).json({ error: 'Failed to send your message. Please try again in a moment.' });
  }
}
