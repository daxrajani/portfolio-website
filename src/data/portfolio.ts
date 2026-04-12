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
          "Designed and implemented a full MiWi proprietary protocol connection management firmware module in embedded C on ARM Cortex-M, handling frequency channel scanning, device registration, identifier exchange, and automatic fallback — running across 4,000+ nodes in live production.",
          "Reduced wearable device power consumption by 30% by migrating from Bluetooth Classic to BLE and restructuring FreeRTOS task scheduling to minimise active-state duration during real-time core temperature monitoring.",
          "Improved WiRa indoor positioning accuracy by 25% by implementing RSSI-based distance calculation with data-frame validation filters that discarded non-compliant BLE advertising packets in real time.",
          "Increased packet transfer reliability by 20% by designing BLE data parsing, CRC validation, and structured retry logic between host and slave ARM Cortex-M controllers over UART and SPI.",
          "Reduced command-dispatch overhead by 15% by developing USB and UART host-control firmware in Microchip Studio using interrupt-driven task execution and state machine transition optimisation.",
        ],
        tech: [
          "Embedded C",
          "ARM Cortex-M",
          "FreeRTOS",
          "BLE",
          "MiWi",
          "UART",
          "SPI",
          "USB",
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
    name: "Health Symptom Analyzer",
    subtitle: "Applied ML Course Project — Concordia University (Fall 2025)",
    description:
      "End-to-end ML pipeline predicting diseases from patient-entered symptoms. Built a 7-model Soft Voting Ensemble combining Random Forest, SVM, Naive Bayes, KNN, Decision Tree, Logistic Regression, and XGBoost across 41 disease classes. Deployed as a real-time Streamlit web app with sub-50ms inference. Includes per-class confusion matrices, confidence scoring, and model explainability.",
    tech: [
      "Python",
      "PyTorch",
      "scikit-learn",
      "XGBoost",
      "NumPy",
      "Pandas",
      "Streamlit",
      "Matplotlib",
    ],
    github: "https://github.com/daxrajani/AppliedML_Fall2025_Project",
    demo: null,
  },
  {
    name: "E-Commerce Analytics Pipeline",
    subtitle:
      "Distributed Systems Course Project — Concordia University (Winter 2026)",
    description:
      "Large-scale e-commerce analytics pipeline built with Apache Spark on GCP Dataproc. Covers sessionisation, funnel analysis, last-touch attribution, and anomaly detection on the REES46 dataset. Includes a cloud scaling study across multiple cluster and data size configurations.",
    tech: [
      "Apache Spark",
      "GCP Dataproc",
      "PySpark",
      "Python",
      "Google Cloud Storage",
    ],
    github: null,
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
