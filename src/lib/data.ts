export const profile = {
  name: "Zaid Shaikh",
  role: "Senior Data Engineer",
  location: "Berlin, Germany",
  email: "zaids609@gmail.com",
  phone: "+49 157 3877 9413",
  summary:
    "I design cloud-native lakehouses and ETL/ELT pipelines that hold up at scale — across Azure Databricks, Spark, and DBT — with the data quality and governance layer built in from the start, not bolted on after.",
};

export const stages = [
  {
    tag: "01",
    name: "Ingest",
    detail: "Azure Data Factory, REST APIs",
    color: "flow",
  },
  {
    tag: "02",
    name: "Transform",
    detail: "Spark, PySpark, DBT",
    color: "flow",
  },
  {
    tag: "03",
    name: "Serve",
    detail: "Delta Lake, Power BI",
    color: "flow",
  },
  {
    tag: "04",
    name: "Govern",
    detail: "Unity Catalog, data quality",
    color: "signal",
  },
];

export const experience = [
  {
    role: "Senior Data Engineer",
    company: "SoftPixel Solutions Pvt. Ltd.",
    period: "Feb 2022 — Feb 2024",
    points: [
      "Designed and optimized scalable cloud-native data architectures using Azure Databricks, Apache Spark, Python, SQL, and Azure Data Services.",
      "Built enterprise-grade ETL and ELT pipelines supporting analytical workloads and BI initiatives.",
      "Developed and maintained DBT models for transforming, cataloging, and validating structured and semi-structured data.",
      "Implemented data quality monitoring frameworks, improving reliability and operational efficiency.",
      "Contributed to governance initiatives involving metadata management and Unity Catalog.",
    ],
  },
  {
    role: "Junior Data Engineer",
    company: "Ziff Davis Performance Marketing",
    period: "Mar 2021 — Feb 2022",
    points: [
      "Developed SQL and Apache Spark based ETL pipelines supporting e-commerce analytics and reporting platforms.",
      "Designed data models supporting marketing, sales, and customer analytics use cases.",
      "Automated reporting workflows using Python and SQL, reducing manual operational effort.",
      "Improved reporting performance and scalability through processing optimization.",
    ],
  },
  {
    role: "Business Development Executive",
    company: "XDBS",
    period: "Dec 2018 — Mar 2021",
    points: [
      "Managed enterprise client relationships and collaborated with technical delivery teams.",
      "Gathered business requirements and translated customer needs into actionable recommendations.",
      "Supported finance, supply chain, and business operations initiatives through stakeholder engagement.",
    ],
  },
];

export const projects = [
  {
    name: "Databricks Lakehouse Platform",
    description:
      "A modern Lakehouse architecture on Azure Databricks with Delta Lake and Unity Catalog — Spark pipelines for structured and unstructured data, DBT transformations, automated testing, and metadata cataloging for enterprise analytics.",
    stack: ["Azure Databricks", "Apache Spark", "DBT", "Delta Lake", "Unity Catalog", "Python", "SQL"],
    stage: "Govern",
  },
  {
    name: "E-Commerce Analytics Data Platform",
    description:
      "End-to-end cloud-native pipelines for e-commerce sales and customer analytics — dimensional models for reporting and forecasting, with automated ingestion and distributed processing.",
    stack: ["Azure Data Factory", "Databricks", "Spark", "SQL", "Python", "DBT"],
    stage: "Transform",
  },
  {
    name: "Enterprise RAG Knowledge Assistant",
    description:
      "Document retrieval and semantic search using Retrieval-Augmented Generation — ingestion, indexing, and search workflows for enterprise knowledge management.",
    stack: ["Python", "LangChain", "OpenAI API", "Vector Databases"],
    stage: "Serve",
  },
];

export const skillGroups = [
  {
    label: "Data Engineering",
    items: ["Azure Databricks", "Apache Spark", "PySpark", "SQL", "DBT", "Delta Lake", "Unity Catalog", "Data Modeling"],
  },
  {
    label: "Cloud & DevOps",
    items: ["Microsoft Azure", "Azure Data Factory", "Azure Data Lake", "Docker", "Kubernetes", "GitHub Actions", "Airflow"],
  },
  {
    label: "Programming",
    items: ["Python", "SQL", "REST APIs", "Scala", "Java"],
  },
  {
    label: "AI & Automation",
    items: ["Generative AI", "LLMs", "RAG", "LangChain", "OpenAI API", "AI Agents", "MLOps"],
  },
];

export const education = [
  {
    degree: "M.Sc. Data Science",
    school: "University of Europe for Applied Sciences, Potsdam, Germany",
    period: "2024 — 2025",
  },
  {
    degree: "PG Program in Business Analytics",
    school: "MIT Pune",
    period: "2023",
  },
  {
    degree: "B.Sc. Computer Science & Engineering",
    school: "RKDF University",
    period: "2021",
  },
];

export const certifications = [
  "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
  "Certified ScrumMaster (CSM)",
];
