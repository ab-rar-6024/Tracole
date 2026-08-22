import { ShieldCheck, Radio, MapPin, Bot, Route, Lock, Printer, Sparkles, Signpost } from 'lucide-react';
import { PRODUCTS } from './productsData';

const reflectiveSolutions = PRODUCTS.find((p) => p.id === 'reflective-tape');
const trafficJet = PRODUCTS.find((p) => p.id === 'traffic-jet');

export const SOLUTION_TYPES = [
  {
    id: 'mobility',
    label: 'Mobility',
    icon: ShieldCheck,
    thumb: '/images/mobility/mobility-diagnostics.jpg',
    kicker: 'Vehicle Programs From Concept To Production',
    tagline: 'Engineering & Securing Every Vehicle Program',
    description:
      'Automotive engineering, cybersecurity consulting and connected vehicle platforms for OEMs, Tier-1 suppliers and mobility technology companies — from concept development through certification and production deployment.',
    products: [
      {
        id: 'automotive-engineering',
        name: 'Automotive Engineering & Cybersecurity Consulting',
        icon: ShieldCheck,
        badge: null,
        kicker: 'Vehicle Programs From Concept To Production',
        tagline: 'Securing Every Layer of the Vehicle',
        image: '/images/mobility/automotive-engineering.jpg',
        description:
          'Specialized consulting for automotive OEMs, Tier-1 suppliers and mobility technology companies across cybersecurity, connected vehicle systems, digital cockpit technologies and regulatory compliance — supporting programs from concept development through validation, certification and production deployment.',
        capabilities: [
          'Automotive Cybersecurity',
          'UNECE R155 & R156 Compliance',
          'ISO/SAE 21434 Alignment',
          'Cybersecurity Management Systems (CSMS)',
          'Threat Analysis & Risk Assessment (TARA)',
          'Vulnerability Assessment & Penetration Testing'
        ]
      },
      {
        id: 'connected-vehicle',
        name: 'Connected Vehicle Engineering',
        icon: Radio,
        badge: null,
        kicker: 'Software-Defined & Cloud-Connected',
        tagline: 'Always Connected. Always In Control.',
        image: '/images/mobility/connected-vehicle.jpg',
        description:
          'Supporting the next generation of connected and software-defined vehicles, from embedded telematics through cloud-scale services — including digital cockpit engineering for advanced driver and passenger experiences.',
        capabilities: [
          'Telematics Control Units (TCU)',
          'Vehicle Connectivity Platforms',
          'Cloud Integration & OTA Ecosystems',
          'Fleet Management Systems',
          'Digital Cockpit & HMI Systems',
          'API Integration Platforms'
        ]
      },
      {
        id: 'transport-cybersecurity',
        name: 'Transport Cybersecurity Platform',
        icon: Lock,
        badge: null,
        kicker: 'End-to-End Transport Security',
        tagline: 'Trust Built Into Every Byte of Mobility',
        image: '/images/mobility/cybersecurity-platform.jpg',
        description:
          'Purpose-built cybersecurity solutions designed to secure intelligent transportation ecosystems end to end.',
        capabilities: [
          'End-to-End Data Protection',
          'Secure Communications',
          'Threat Monitoring',
          'Intrusion Detection',
          'Security Operations Integration',
          'Regulatory Compliance Support'
        ]
      }
    ]
  },
  {
    id: 'iot',
    label: 'IoT',
    icon: Radio,
    thumb: '/images/mobility/ais-140.jpg',
    kicker: 'From Vehicle To Command Centre',
    tagline: 'Connected Hardware For Governments & Fleets',
    description:
      'Advanced IoT hardware and infrastructure for governments, transport departments and enterprise fleet operators, delivering real-time fleet visibility, compliance monitoring and automated vehicle testing.',
    products: [
      {
        id: 'ais-140',
        name: 'AIS-140',
        icon: MapPin,
        badge: null,
        kicker: 'Government-Mandated Vehicle Tracking',
        tagline: 'AIS-140 Certified GPS Tracker',
        image: '/images/mobility/ais-140.jpg',
        description:
          'A government-mandated GPS tracker for buses, taxis and school vehicles, reporting location straight to official tracking systems — delivered in partnership with APM Group.',
        capabilities: [
          'AIS-140 Certified Hardware & Firmware',
          'SOS Panic Button',
          'Government VLTD Database Integration',
          'Tamper-Proof Installation',
          'Real-Time Location Reporting',
          'GPS + GLONASS Positioning'
        ]
      },
      {
        id: 'rover',
        name: 'ROVER™',
        icon: Bot,
        badge: 'New Product',
        kicker: 'Advanced Mobility Innovation',
        tagline: 'Autonomous Vehicle Testing & Inspection Robot',
        image: '/images/mobility/rover-inspection.jpg',
        description:
          'An AI-assisted inspection platform designed to support next-generation Automated Testing Stations and vehicle-fitness infrastructure modernization.',
        capabilities: [
          'Under-Vehicle Inspection',
          'Tyre & Brake Assessment',
          'Automated Reporting',
          'AI Image Verification',
          'Integration with Digital Compliance Platforms'
        ]
      },
      {
        id: 'test-track',
        name: 'Automated Test Driving Track',
        icon: Route,
        badge: null,
        kicker: 'Driver Licensing Track Infrastructure',
        tagline: 'Sensor-Instrumented Track for Automated License Testing',
        image: '/images/mobility/test-track.png',
        description:
          'A sensor-equipped track that scores driving test candidates automatically and fairly, used by RTOs across India — delivered in partnership with APM Group.',
        capabilities: [
          'Sensor-Based Maneuver Detection',
          'Automated Pass/Fail Scoring',
          'Camera-Based Violation Recording',
          'Track Modules: Reverse, Parallel Park, Gradient & S-Curve',
          'Integration with RTO Licensing Systems (SARATHI)',
          '100% Bias-Free Scoring'
        ]
      }
    ]
  },
  {
    id: 'road-safety',
    label: 'Road Safety',
    icon: Signpost,
    thumb: reflectiveSolutions.bannerImg,
    kicker: 'Compliance You Can See On Every Road',
    tagline: 'Reflective Materials & Digital Sign Systems',
    description:
      'Road safety infrastructure covering high-grade reflective sheeting and digital traffic sign printing, trusted across South India.',
    products: [
      {
        id: 'reflective-solutions',
        name: reflectiveSolutions.title,
        icon: Sparkles,
        badge: null,
        kicker: reflectiveSolutions.tag,
        tagline: reflectiveSolutions.title,
        image: reflectiveSolutions.bannerImg,
        description: reflectiveSolutions.description,
        capabilities: reflectiveSolutions.features.map((f) => f.title),
        link: `/products/${reflectiveSolutions.slug}`,
        linkLabel: 'View Full Product Page'
      },
      {
        id: 'trafficjet',
        name: trafficJet.title,
        icon: Printer,
        badge: null,
        kicker: trafficJet.tag,
        tagline: trafficJet.title,
        image: trafficJet.bannerImg,
        description: trafficJet.description,
        capabilities: trafficJet.features.map((f) => f.title),
        link: `/products/${trafficJet.slug}`,
        linkLabel: 'View Full Product Page'
      }
    ]
  }
];
