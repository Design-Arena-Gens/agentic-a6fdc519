export const profile = {
  name: "Asha Ramanathan",
  role: "Senior Machine Learning Engineer",
  tagline:
    "Designing and deploying resilient ML systems that power human-centered products.",
  location: "San Francisco, CA",
  experience: "8+ years shipping ML to production",
  email: "hello@asharamanathan.ai",
  availability: "Open to technical leadership, advisory, and mission-driven collaborations.",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/asha-ramanathan",
    },
    {
      label: "GitHub",
      href: "https://github.com/asha-ramanathan",
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=asha",
    },
  ],
};

export const navigation = [
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

export const expertise = [
  {
    title: "Production ML Systems",
    description:
      "Design end-to-end systems with automated training pipelines, feature stores, continuous evaluation, and rollout governance.",
    highlights: [
      "Lead ML engineer for multi-tenant inference platform serving 40M daily requests",
      "Expanded model lifecycle automation to reduce release times by 70%",
    ],
  },
  {
    title: "Responsible & Explainable AI",
    description:
      "Bias detection, counterfactual evaluations, and transparency audits embedded into model development and monitoring.",
    highlights: [
      "Co-authored internal fairness playbook adopted by 12 product teams",
      "Shipped real-time explainability surfaces for regulated customers",
    ],
  },
  {
    title: "Applied Research",
    description:
      "Translate SOTA advances in representation learning, multimodal modeling, and causal inference into measurable product value.",
    highlights: [
      "Won best applied paper at RecSys 2023",
      "Secured 3 patents on online learning for personalization",
    ],
  },
];

export const skillGroups = [
  {
    name: "Languages",
    items: ["Python", "Go", "TypeScript", "SQL", "C++"],
  },
  {
    name: "Frameworks",
    items: ["PyTorch", "TensorFlow", "JAX", "scikit-learn", "LangChain"],
  },
  {
    name: "ML Ops",
    items: ["Kubernetes", "Ray", "Feast", "Weights & Biases", "Great Expectations"],
  },
  {
    name: "Data Systems",
    items: ["Snowflake", "Delta Lake", "Airflow", "dbt", "Kafka"],
  },
];

export const experience = [
  {
    company: "Lumina Health",
    role: "Staff Machine Learning Engineer",
    period: "2022 — Present",
    summary:
      "Leading the ML platform team responsible for clinical decision support models used by 6,500 hospitals worldwide.",
    impact: [
      "Architected a reinforcement learning policy that reduced avoidable ICU transfers by 14% within the first quarter of deployment.",
      "Implemented layered monitoring (data drift, performance, fairness) cutting mean-time-to-detection from 27 hours to 22 minutes.",
      "Mentored a team of 7 engineers and scientists, establishing promotion ladders and technical writing standards for the org.",
    ],
    tech: ["PyTorch", "Kubernetes", "Feast", "Tekton", "Grafana"],
  },
  {
    company: "Aurora Commerce",
    role: "Senior Applied Scientist",
    period: "2019 — 2022",
    summary:
      "Drove personalization models across search, recommendations, and pricing for a marketplace with 200M SKUs.",
    impact: [
      "Delivered a graph-enhanced retrieval model that increased conversion by 6.4% across high-intent cohorts.",
      "Launched continuous counterfactual evaluation suite reducing model regressions by 45% over six months.",
      "Partnered with privacy engineering to deploy federated learning pilot covering 18% of mobile traffic.",
    ],
    tech: ["PyTorch", "Hydra", "Faiss", "Airflow", "Snowflake"],
  },
  {
    company: "Vector Labs",
    role: "Machine Learning Engineer",
    period: "2016 — 2019",
    summary:
      "Early engineering hire at a Series A startup focused on industrial anomaly detection.",
    impact: [
      "Created an adaptive time-series model pipeline that reduced false positives by 38% across manufacturing sites.",
      "Standardized data contracts and observability metrics enabling SOC2 compliance ahead of schedule.",
    ],
    tech: ["TensorFlow", "Kubeflow", "BigQuery", "Docker", "Prometheus"],
  },
];

export const projects = [
  {
    title: "Aurora Foundry",
    description:
      "Modular ML platform unifying feature store, automated training, lineage tracking, and guardrailed rollout workflows.",
    impact:
      "Adopted by 15+ teams, accelerated model release cadence from quarterly to weekly while maintaining ISO-13485 compliance.",
    tags: ["Platform", "MLOps", "Kubernetes"],
    link: "https://auroracommerce.ai/blog/aurora-foundry",
  },
  {
    title: "Clinical Cohort Intelligence",
    description:
      "Sequence modeling toolkit for predicting readmission risk using EHR, wearable, and physician note embeddings.",
    impact:
      "Improved AUPRC by 18% against baseline and unlocked a $12M expansion contract with national provider network.",
    tags: ["Healthcare", "Multimodal", "Explainability"],
    link: "https://luminahealth.ai/case-study/cohort-intelligence",
  },
  {
    title: "Carbon Insights",
    description:
      "Geospatial ML product estimating supply-chain emissions with graph neural networks and satellite data.",
    impact:
      "Powered sustainability reporting for top retailers; recognized with Fast Company World Changing Ideas honorable mention.",
    tags: ["Climate", "GNN", "Remote Sensing"],
    link: "https://vectorlabs.ai/products/carbon-insights",
  },
];

export const publications = [
  {
    title:
      "Latent-Action Counterfactuals for Debiased Sequential Recommendations",
    venue: "RecSys",
    year: 2023,
    summary:
      "Demonstrated 11% uplift in offline fairness metrics while preserving revenue lift using constrained policy optimization.",
    link: "https://dl.acm.org/doi/10.1145/recsys2023-asha",
  },
  {
    title: "Probabilistic Monitoring for Continual Medical AI",
    venue: "NeurIPS MLOps Workshop",
    year: 2022,
    summary:
      "Introduced a lightweight Bayesian change-point detector for hybrid data drifts in clinical deployments.",
    link: "https://mlops.neurips.cc/paper/asha-ramanathan",
  },
  {
    title: "Self-Supervised Diagnostics for Industrial IoT",
    venue: "ICML",
    year: 2020,
    summary:
      "Presented a contrastive learning pipeline to flag micro-anomalies across heterogeneous sensor networks.",
    link: "https://icml.cc/virtual/2020/poster/asha",
  },
];

export const testimonials = [
  {
    quote:
      "Asha blends research rigor with product pragmatism better than anyone I've worked with. She repeatedly turned ambiguous bets into scalable platforms that teams love.",
    author: "Priya Desai",
    title: "VP of Engineering, Lumina Health",
  },
  {
    quote:
      "From bias evaluations to rollout playbooks, Asha defined our responsible AI practices end-to-end.",
    author: "Miguel Alvarez",
    title: "Director of Data Science, Aurora Commerce",
  },
];

export const metrics = [
  { label: "Models in production", value: "28" },
  { label: "Uplift delivered", value: "$180M+" },
  { label: "Latency improvements", value: "45%" },
  { label: "Team members mentored", value: "22" },
];

export const contactChannels = [
  {
    label: "Email",
    value: "hello@asharamanathan.ai",
    href: "mailto:hello@asharamanathan.ai",
  },
  {
    label: "Calendly",
    value: "15-minute intro chat",
    href: "https://cal.com/asha-ramanathan/intro",
  },
  {
    label: "Newsletter",
    value: "Model Signals",
    href: "https://modelsignals.substack.com",
  },
];
