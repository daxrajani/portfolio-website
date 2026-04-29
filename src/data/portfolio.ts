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
  image?: string;
  imageAlt?: string;
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
  bio: "Embedded firmware engineer with 2+ years of production experience across 4 shipped firmware projects on ARM Cortex-M0+, M4, and M33 processors. Specialized in BLE 5.x, NFC, sub-GHz wireless, FreeRTOS, secure OTA bootloaders, and crash diagnostics. Graduating MEng ECE Concordia 2026.",
  email: "daxrajani@gmail.com",
  phone: "343.988.3978",
  location: "Montreal, QC, Canada",
  linkedin: "https://linkedin.com/in/daxrajani",
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
        title: "Associate Engineer, Embedded Firmware",
        type: "Full-time",
        duration: "Jul 2023 – Aug 2024",
        bullets: [
          "Resolved a production memory leak under a manufacturing deadline by delivering a validated golden firmware image before a 450-unit production run, preventing field failures across the entire batch.",
          "Reduced embedded device power consumption by 30% by restructuring FreeRTOS task architecture from periodic polling to interrupt-driven event handling, extending battery life without impacting real-time data throughput.",
          "Proactively identified and fixed a rare concurrent timing defect in a real-time BLE ranging system by developing a systematic reproduction strategy, reducing an intermittent once-per-day bug to a reliably reproducible state within 3 days.",
          "Built a remote firmware crash diagnostic pipeline enabling coredump retrieval from deployed embedded devices over a Sub-GHz wireless network with automated cloud upload, eliminating the need for physical hardware access during field debugging.",
          "Extended a multi-target OTA firmware update system to support a BLE fallback delivery path with persistent state across 3 co-processors and CRC validation, ensuring update integrity when the primary wireless connection was unavailable.",
          "Implemented BLE central role connection management and GATT characteristic data parsing on a secondary wearable device to establish real-time sensor data transfer from a paired primary device.",
          "Performed multi-temperature battery discharge cycle testing at 0°C, room temperature, and 50°C to generate and validate a production fuel gauge golden image.",
        ],
        tech: [
          "Embedded C",
          "ARM Cortex-M",
          "FreeRTOS",
          "BLE",
          "Sub-GHz RF",
          "UART",
          "SPI",
          "USB",
          "OTA/DFU",
          "A/B Firmware Update",
          "CRC",
          "Memfault",
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
          "Diagnosed and resolved a production-critical BLE firmware memory exhaustion defect within 2 weeks — heap allocations in the BLE scan path were causing the initial hardware validation units to reset every 5–10 seconds — and delivered a stable golden firmware image before the scheduled 450-unit production manufacturing run, preventing the defect from reaching the full production batch.",
          "Prototyped a wireless proximity and ranging system on an ARM Cortex-M33 BLE SoC, implementing RSSI-based distance calculation with data-frame validation logic for filtering malformed sensor packets.",
          "Built practical foundation in bare-metal C, FreeRTOS, ARM Cortex-M, BLE, NFC, Sub-GHz wireless, UART/SPI/I2C, JTAG debugging, and production crash diagnostics.",
        ],
        tech: [
          "Embedded C",
          "ARM Cortex-M33",
          "BLE",
          "NFC",
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
    name: "Zephyr BLE Sensor Node",
    subtitle: "Embedded Firmware Project: Zephyr BLE Peripheral",
    description:
      "BLE 5 peripheral firmware on nRF52840 built with Zephyr RTOS. Implements a custom 128-bit GATT service with temperature, humidity, and configurable sample rate characteristics. Features LE Secure Connections pairing, per-characteristic CCCD notification tracking, NVS-backed settings persistence, Eddystone-URL beacon advertising, and automatic re-advertising on disconnect via Zephyr work queue. Deployed and tested on nRF52840 DK hardware.",
    tech: [
      "C",
      "Zephyr RTOS",
      "BLE 5",
      "GATT",
      "nRF52840",
      "LE Secure Connections",
      "NVS",
      "Embedded Security",
    ],
    github: "https://github.com/daxrajani/zephyr_ble_app",
    demo: null,
    image: "/projects/hardware_setup.jpg",
    imageAlt: "nRF52840 DK running Dax_BLE firmware connected via nRF Connect",
  },
  {
    name: "Secure A/B OTA Bootloader on nRF52840",
    subtitle: "Embedded Firmware Project: Zephyr + MCUboot",
    description:
      "Production-grade OTA firmware update system on nRF52840 using MCUboot with swap-scratch A/B slots, ECDSA-P256 image signing, and BLE SMP wireless delivery via nRF Connect mobile. Implements automatic image confirmation and rollback on boot failure, static partition pinning across NCS upgrades, and GitHub Actions CI that builds and verifies signed binaries on every push. Extends professional OTA experience from prior production multi-target firmware update systems in a commercial wearable product.",
    tech: [
      "C",
      "MCUboot",
      "Zephyr RTOS",
      "BLE SMP",
      "ECDSA",
      "nRF52840",
      "OTA",
      "GitHub Actions",
    ],
    github: "https://github.com/daxrajani/nrf52840-mcuboot-ble-ota",
    demo: null,
  },
  {
    name: "Scalable E-Commerce Analytics Pipeline",
    subtitle: "Distributed Systems Project: Spark + GCP Dataproc",
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
];

// ─── Skills ──────────────────────────────────────────────────

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["C", "Embedded C", "C++", "Python", "Bash"],
  },
  {
    category: "Microcontrollers & SoCs",
    skills: [
      "ARM Cortex-M0+",
      "ARM Cortex-M33",
      "nRF52840",
      "ARM Cortex-M0+ BLE SoC",
      "ARM Cortex-M33 BLE SoC",
      "Microchip Sub-GHz SoC",
      "NXP MCUs",
    ],
  },
  {
    category: "RTOS & OS",
    skills: [
      "FreeRTOS",
      "Zephyr RTOS",
      "Yocto Linux",
      "Embedded Linux",
    ],
  },
  {
    category: "Wireless Protocols",
    skills: [
      "BLE 5.x (Central + Peripheral)",
      "NFC (ISO 14443)",
      "Sub-GHz RF (star topology)",
      "Eddystone-URL",
    ],
  },
  {
    category: "Communication Protocols",
    skills: [
      "UART",
      "SPI",
      "I2C",
      "USB",
      "CRC Validation",
    ],
  },
  {
    category: "Bootloaders & OTA",
    skills: [
      "MCUboot",
      "A/B swap",
      "ECDSA-P256 image signing",
      "BLE OTA",
      "USB DFU",
      "multi-target OTA",
      "dual-stage bootloader",
      "imgtool",
      "DFU",
    ],
  },
  {
    category: "Crash Diagnostics",
    skills: [
      "Memfault (coredump, trace events, reboot tracking, metrics heartbeat)",
    ],
  },
  {
    category: "Cryptography & Security",
    skills: [
      "ECDSA-P256",
      "ECDH",
      "SHA-256",
      "NFC password protection",
      "secure boot",
    ],
  },
  {
    category: "Debug & Tools",
    skills: [
      "JTAG",
      "J-Link",
      "GDB",
      "SEGGER RTT",
      "Oscilloscope",
      "Logic Analyzer",
      "nRF Connect SDK",
      "west",
      "Eclipse CDT",
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
    title: "Emerging Star of the Year 2023-24",
    issuer: "Glide Technology Pvt. Ltd.",
    date: "Jul 2024",
    description:
      "Awarded for exceptional technical contributions and firmware improvements across multiple client production projects.",
    highlight: false,
  },
  {
    title: "Certificate of Excellence: Volunteer of the Year 2023-24",
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
    title: "Baroda Achiever Award: Best in Sports",
    issuer: "Bank of Baroda / Ganpat University",
    date: "Jun 2022",
    highlight: false,
  },
  {
    title: "3x Provincial and District Gold Medals: Powerlifting",
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
