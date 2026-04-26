// ============================================================
// src/data/portfolio.ts
// SINGLE SOURCE OF TRUTH — all site content lives here
// ============================================================

// ─── Interfaces ─────────────────────────────────────────────

export interface PersonalInfo {
  name: string;
  tagline: string[];
  bio: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  resumeFile: string;
}

export interface Role {
  title: string;
  type: string;
  duration: string;
  bullets: string[];
  tech: string[];
}

export interface WorkExperience {
  company: string;
  location: string;
  roles: Role[];
}

export interface Project {
  name: string;
  subtitle: string;
  description: string;
  tech: string[];
  github: string | null;
  demo: string | null;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  field: string;
  university: string;
  location: string;
  duration: string;
  grade?: string;
  courses?: string[];
}

export interface Award {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  highlight?: boolean;
}

// ─── Personal Info ───────────────────────────────────────────

export const personalInfo: PersonalInfo = {
  name: "Dax Rajani",
  tagline: [
    "Embedded Firmware Engineer",
    "ARM Cortex-M | FreeRTOS | BLE",
    "MEng @ Concordia University 2026",
    "3× Provincial Powerlifting Gold Medalist",
  ],
  bio: "Close to two years writing production embedded C firmware on ARM Cortex-M microcontrollers. Currently finishing a Master of Engineering at Concordia University in Montreal. Competitive powerlifter. 3× Provincial Gold Medalist.",
  email: "daxrajani@gmail.com",
  phone: "343.988.3978",
  location: "Montreal, QC, Canada",
  linkedin: "https://linkedin.com/in/dax-rajani-3430a1141",
  github: "https://github.com/daxrajani",
  resumeFile: "/DaxRajani_Resume.pdf",
};

// ─── Work Experience ─────────────────────────────────────────

export const workExperience: WorkExperience[] = [
  {
    company: "Glide Technology Pvt. Ltd.",
    location: "Ahmedabad, Gujarat, India",
    roles: [
      {
        title: "Associate Engineer, Embedded Software",
        type: "Full-time",
        duration: "Jul 2023 – Aug 2024",
        bullets: [
          "Designed and implemented connection-management firmware for a low-power wireless star network in embedded C on ARM Cortex-M, including channel scanning, node registration, identifier exchange, and automatic recovery paths across 4,000+ deployed nodes.",
          "Reduced wearable power consumption by 30% by migrating legacy wireless communication to BLE and restructuring RTOS task scheduling to minimize active-state time during continuous telemetry workloads.",
          "Improved indoor ranging accuracy by 25% by combining signal-strength based distance estimation with strict packet-validation filters for real-time wireless advertisements.",
          "Increased packet transfer reliability by 20% by implementing frame parsing, CRC validation, and structured retry logic between host and edge controllers over UART and SPI.",
          "Built robust OTA and recovery workflows using dual-image update patterns, rollback-safe boot behavior, and staged firmware delivery across connected embedded targets.",
          "Integrated production-grade crash diagnostics and reboot telemetry, enabling faster root-cause analysis for field failures in memory- and power-constrained devices.",
          "Reduced host command-dispatch overhead by 15% by developing transport-agnostic USB/UART control firmware with interrupt-driven execution and optimized state-machine transitions.",
        ],
        tech: [
          "Embedded C",
          "ARM Cortex-M",
          "FreeRTOS",
          "BLE",
          "Low-Power RF Networks",
          "UART",
          "SPI",
          "USB",
          "OTA/DFU",
          "A/B Firmware Update",
          "CRC",
          "JTAG",
          "Oscilloscope",
          "Logic Analyzer",
          "Git",
        ],
      },
      {
        title: "Software Engineering Intern, Embedded Systems",
        type: "Internship",
        duration: "Dec 2022 – Jun 2023",
        bullets: [
          "Resolved a critical memory exhaustion defect in production BLE ToF Sensor firmware within 2 weeks — 4,000+ deployed sensors were resetting every 5 to 10 seconds across client infrastructure. Traced every heap allocation and deallocation call across a multithreaded state machine codebase to identify and fix the root cause.",
          "Built a prototype WiRa indoor positioning system on the DA14695 BLE SoC — multiple sensor nodes advertised over BLE, a central device calculated inter-node distances using RSSI, and custom validation logic filtered non-compliant advertising packets before processing.",
          "Built foundation in bare-metal C, FreeRTOS, Yocto Linux, ARM Cortex-M, I2C, SPI, UART, BLE, sensor integration, and hardware debugging using oscilloscope, logic analyzer, and JTAG.",
        ],
        tech: [
          "Embedded C",
          "ARM Cortex-M",
          "DA14695",
          "BLE",
          "FreeRTOS",
          "Yocto Linux",
          "I2C",
          "SPI",
          "UART",
          "JTAG",
          "Logic Analyzer",
          "Oscilloscope",
          "Git",
        ],
      },
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────

export const projects: Project[] = [
  {
    name: "Secure A/B OTA Bootloader on nRF52840",
    subtitle: "Embedded Firmware Project — Zephyr + MCUboot",
    description:
      "Implemented a secure BLE firmware update reference for nRF52840 using MCUboot with A/B slots, ECDSA image signing, automatic image confirmation, and rollback on failed boot. Built and validated OTA flow over BLE from mobile tooling, with static partitioning and CI checks for signed image integrity.",
    tech: [
      "C",
      "Zephyr RTOS",
      "MCUboot",
      "BLE",
      "MCUmgr",
      "ECDSA",
      "nRF52840",
      "GitHub Actions",
    ],
    github: "https://github.com/daxrajani/nrf52840-mcuboot-ble-ota",
    demo: null,
  },
  {
    name: "Scalable E-Commerce Analytics Pipeline",
    subtitle: "Distributed Systems Project — Spark + GCP Dataproc",
    description:
      "Built a distributed analytics pipeline for a 42M-event e-commerce dataset with ETL, sessionization, funnel conversion, attribution, and anomaly detection stages. Ran live cloud benchmarks and scaling experiments, and added an interactive dashboard for job execution, logs, VM metrics, and fault-tolerance demonstrations.",
    tech: [
      "Apache Spark",
      "GCP Dataproc",
      "PySpark",
      "Python",
      "Flask",
      "Google Cloud Storage",
    ],
    github: "https://github.com/daxrajani/dss_project",
    demo: null,
  },
  {
    name: "BLE Sensor Node with Secure Telemetry",
    subtitle: "Embedded Firmware Project — Zephyr BLE Peripheral",
    description:
      "Developed Zephyr-based BLE peripheral firmware with encrypted GATT access, bonded pairing flow, persistent runtime configuration in NVS, and background sensor updates with per-characteristic notifications. Added low-friction device discovery via beacon-style advertising payloads for app-less scanning.",
    tech: [
      "C",
      "Zephyr RTOS",
      "BLE",
      "GATT",
      "NVS",
      "nRF52840",
      "Embedded Security",
    ],
    github: "https://github.com/daxrajani/zephyr_ble_app",
    demo: null,
  },
];

// ─── Skills ──────────────────────────────────────────────────

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["C", "Embedded C", "C++", "Python", "Bash"],
  },
  {
    category: "Microcontrollers & Hardware",
    skills: [
      "ARM Cortex-M3/M4",
      "Dialog DA14695",
      "Microchip Studio",
      "NXP MCUs",
    ],
  },
  {
    category: "RTOS & Operating Systems",
    skills: [
      "FreeRTOS",
      "Yocto Linux",
      "Embedded Linux",
      "Cross-compiler Toolchains",
    ],
  },
  {
    category: "Communication Protocols",
    skills: [
      "BLE",
      "MiWi (Proprietary)",
      "UART",
      "SPI",
      "I2C",
      "USB",
      "CRC Validation",
    ],
  },
  {
    category: "Debug Tools",
    skills: [
      "JTAG",
      "Oscilloscope",
      "Logic Analyzer",
      "Digital Multimeter",
    ],
  },
  {
    category: "ML & AI",
    skills: [
      "PyTorch",
      "scikit-learn",
      "XGBoost",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Streamlit",
    ],
  },
  {
    category: "Tools & Workflow",
    skills: ["Git", "Apache Spark", "GCP Dataproc", "MATLAB", "Agile"],
  },
];

// ─── Education ───────────────────────────────────────────────

export const education: Education[] = [
  {
    degree: "Master of Engineering (MEng)",
    field: "Electrical and Computer Engineering",
    university: "Concordia University",
    location: "Montreal, QC, Canada",
    duration: "Sep 2024 – Apr 2026 (Expected)",
    courses: [
      "Applied Machine Learning",
      "Computer Neural Networks",
      "Biological and Medical Image Processing",
      "Embedded Systems",
      "Distributed Systems",
    ],
  },
  {
    degree: "Bachelor of Technology (BTech)",
    field: "Computer Engineering",
    university: "Ganpat University",
    location: "Gujarat, India",
    duration: "Jul 2019 – Jun 2023",
    grade: "8.54 / 10 CGPA",
  },
];

// ─── Awards ──────────────────────────────────────────────────

export const awards: Award[] = [
  {
    title: "Emerging Star of the Year 2023–24",
    issuer: "Glide Technology Pvt. Ltd.",
    date: "Jul 2024",
    description:
      "Awarded for exceptional technical contributions and firmware improvements across multiple client production projects.",
    highlight: false,
  },
  {
    title: "Certificate of Excellence — Volunteer of the Year 2023–24",
    issuer: "Glide Technology Pvt. Ltd.",
    date: "Jul 2024",
    description:
      "Awarded for organising corporate events and managing digital content for company social media channels.",
    highlight: false,
  },
  {
    title: "Director General Award",
    issuer: "Ganpat University",
    date: "Jan 2023",
    description: "University-level academic and achievement recognition.",
    highlight: false,
  },
  {
    title: "Baroda Achiever Award — Best in Sports",
    issuer: "Bank of Baroda / Ganpat University",
    date: "Jun 2022",
    highlight: false,
  },
  {
    title: "3× Provincial & District Gold Medals — Powerlifting",
    issuer: "Competitive Powerlifting",
    date: "2020 – 2023",
    description:
      "Provincial and district gold medal wins demonstrating sustained high-performance discipline and resilience.",
    highlight: true,
  },
];

// ─── Default export ──────────────────────────────────────────

const portfolioData = {
  personalInfo,
  workExperience,
  projects,
  skills,
  education,
  awards,
};

export default portfolioData;
