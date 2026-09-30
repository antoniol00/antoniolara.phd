// Source: docs/cv.pdf (last updated September 2026).

export const researchProfile =
  'PhD candidate and FPU predoctoral researcher at the University of Málaga (NICS Lab). My research lies at the intersection of Artificial Intelligence and Cybersecurity, with emphasis on concept-drift detection and adaptation in AI-driven threat detection systems; multimodal malware classification and attribution through static, dynamic and visual feature fusion; generative models (GANs and LLMs) for adversarial robustness of intrusion detection and for adaptive cyber deception; and LLM agents for automated threat intelligence. My goal is to build robust, verifiable and maintainable AI defenses against advanced cyber threats.';

export interface TimelineEntry {
  period: string;
  role: string;
  where: string;
  location?: string;
  summary?: string;
  bullets?: string[];
}

export const education: TimelineEntry[] = [
  {
    period: 'Sep 2024 – Present',
    role: 'PhD in Information Technologies',
    where: 'University of Málaga — NICS Lab',
    location: 'Málaga, Spain',
    bullets: [
      'Research focus: AI-based malware analysis and attribution, GAN-driven proactive defense, concept-drift adaptation and threat intelligence.',
      'Supervisors: Dr. Carmen Fernández-Gago and Dr. Jose A. Onieva.',
      'Funded by an FPU predoctoral contract (Spanish Ministry of Science, Innovation and Universities).',
    ],
  },
  {
    period: 'Oct 2023 – Oct 2024',
    role: "Master's in Big Data and Business Analytics",
    where: 'School of Industrial Organisation (EOI)',
    location: 'Madrid, Spain',
    summary:
      'Data-driven strategy, Business Intelligence, Big Data technologies and advanced analytics.',
  },
  {
    period: 'Jul 2022 – Jun 2024',
    role: 'M.Sc. in Computer Engineering — Cybersecurity',
    where: 'University of Málaga',
    location: 'Málaga, Spain',
    bullets: [
      'GPA 9.56 / 10. 5 courses with Distinction (22.5 ECTS). Ranked 1st in cohort (Extraordinary Graduation Award).',
      'Thesis: Dynamic Risk Management and Resilience in Industrial Environments using Artificial Intelligence — 10/10, Outstanding Thesis Award.',
    ],
  },
  {
    period: 'Jul 2018 – Jul 2022',
    role: 'B.Sc. in Computer Engineering — Information Technologies',
    where: 'University of Málaga',
    location: 'Málaga, Spain',
    bullets: [
      'GPA 9.29 / 10. 22 courses with Distinction (138 ECTS). Ranked 1st in cohort (Extraordinary Graduation Award).',
      'Thesis: Traceability of Control Actions in EV Charging Stations via Mobile App and Blockchain — 10/10 (Distinction), Outstanding Thesis Award.',
    ],
  },
];

export const researchExperience: TimelineEntry[] = [
  {
    period: 'Feb 2026 – Present',
    role: 'Visiting Researcher',
    where: 'University of Waikato — Te Ipu o Te Mahara (Artificial Intelligence Institute)',
    location: 'Hamilton, New Zealand',
    summary:
      "International research stay on AI security and intelligent systems at one of New Zealand's leading AI research centres.",
  },
  {
    period: 'Apr 2024 – Present',
    role: 'R&D Engineer / Researcher',
    where: 'University of Málaga — NICS Lab (Network, Information and Computer Security)',
    location: 'Málaga, Spain',
    bullets: [
      'Lead research on intelligent threat detection, proactive defense, honeypots, and AI-based malware classification and attribution.',
      'Contributing to a national public collaboration project with INCIBE (Spanish National Cybersecurity Institute).',
    ],
  },
  {
    period: 'Mar 2022 – Oct 2023',
    role: 'Research & Technical Assistant',
    where: 'University of Málaga — Dept. of Languages and Computer Science',
    location: 'Málaga, Spain',
    bullets: [
      'Built a private web area and multilingual editors (Django, MySQL, Linux) for the INMOCOR macrocorpus research project.',
      'Engineered a Java/Spring web application and MLP-regression visualisation tools.',
    ],
  },
];

export const industryExperience: TimelineEntry[] = [
  {
    period: 'Jan 2023 – Jan 2024',
    role: 'Junior Integration Engineer',
    where: 'SoftProject Ibérica S.L.',
    location: 'Málaga, Spain',
    bullets: [
      'Maintained and deployed applications on Windows and Linux for international enterprise clients.',
      'Developed demo web applications in CI/CD DevOps environments (XML/XSLT, JavaScript, SQL, JEE).',
    ],
  },
];

export const awards: TimelineEntry[] = [
  {
    period: 'Aug 2026',
    role: 'Awarded Project — Chair of Cybersecurity, University of Málaga & Google (VirusTotal)',
    where: 'Competitive call of the UMA–Google Cybersecurity Chair',
    location: 'Málaga, Spain',
    summary:
      'Project AgentAPT: an LLM agent with tool calling that interrogates Google Threat Intelligence / VirusTotal sandboxes to attribute malware samples to APT groups. Presented with the other awarded projects at the Google Safety Engineering Center (GSEC) Málaga, Sep. 2026.',
  },
  {
    period: 'Current',
    role: 'FPU Predoctoral Fellowship (Formación de Profesorado Universitario)',
    where: 'Spanish Ministry of Science, Innovation and Universities',
    location: 'Spain',
    summary:
      'Highly competitive national doctoral contract. Host: Dept. of Languages and Computer Science, ETSI Informática, University of Málaga.',
  },
  {
    period: '2022 – 2024',
    role: 'Extraordinary Graduation Award (Valedictorian)',
    where: 'School of Computer Engineering, University of Málaga',
    location: 'Málaga, Spain',
    summary: 'Highest academic record (ranked 1st) of the M.Sc. in Computer Engineering cohort.',
  },
  {
    period: '2018 – 2022',
    role: 'Extraordinary Graduation Award (Valedictorian) & Outstanding Thesis Award',
    where: 'School of Computer Engineering, University of Málaga',
    location: 'Málaga, Spain',
    summary: 'Highest academic record (ranked 1st) of the B.Sc. in Computer Engineering cohort.',
  },
  {
    period: '2018 – 2022',
    role: 'Best Final Degree Project Award (2nd edition)',
    where: 'Chair of Commerce and Digital Transformation, University of Málaga',
    location: 'Málaga, Spain',
    summary:
      "Recognises the best Bachelor's/Master's projects in digital transformation and consumer behaviour.",
  },
];

export const teaching: TimelineEntry[] = [
  {
    period: '2027',
    role: 'Invited Seminars — AIR Academy, AIR-Andalusia EDIH',
    where: 'European Digital Innovation Hub on AI & Robotics (University of Málaga)',
    location: 'Málaga, Spain',
    bullets: [
      'AI integration for anomaly detection (2 h, co-delivered) — scheduled Apr. 2027.',
      'AI integration for malware analysis (2 h) — scheduled Sep. 2027.',
    ],
  },
];

export const skills: { area: string; items: string }[] = [
  { area: 'Programming', items: 'Python, Java, C/C++, JavaScript, R, Shell, CUDA, SQL, PHP' },
  {
    area: 'ML & AI',
    items:
      'PyTorch, TensorFlow, scikit-learn, LightGBM, XGBoost, SHAP, Grad-CAM; GANs; LLMs (Gemma, LLaMA, Zephyr) and tool-calling agents',
  },
  {
    area: 'Security',
    items:
      'Metasploit, Wireshark, Snort/Suricata, honeypots (OpenCanary), malware sandboxes, VirusTotal / GTI API',
  },
  {
    area: 'Research',
    items: 'Academic writing, experimental design, statistical testing, peer review',
  },
];

export const languages = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'C2 — Cambridge Proficiency (score 207)' },
  { name: 'French', level: 'B1' },
];

export const researchInterests = [
  'Concept drift',
  'Intrusion detection',
  'Malware attribution',
  'GANs',
  'LLM agents',
  'Cyber deception',
];

export interface NewsItem {
  date: string;
  text: string;
}

export const news: NewsItem[] = [
  {
    date: 'Sep 2026',
    text: 'Presented AgentAPT with the other awarded projects at the Google Safety Engineering Center (GSEC) Málaga.',
  },
  {
    date: 'Aug 2026',
    text: 'AgentAPT awarded in the competitive call of the UMA–Google (VirusTotal) Cybersecurity Chair.',
  },
  {
    date: 'May 2026',
    text: 'HDDAF presented at JNIC 2026, Universitat Politècnica de Catalunya, Barcelona.',
  },
  {
    date: 'Mar 2026',
    text: 'HoneyV presented at RECSI 2026, Universidad de La Laguna, Tenerife.',
  },
  {
    date: 'Feb 2026',
    text: 'Started a research stay at the University of Waikato AI Institute (Te Ipu o Te Mahara), New Zealand.',
  },
];
