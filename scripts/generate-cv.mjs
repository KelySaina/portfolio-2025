import puppeteer from "puppeteer-core";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = resolve(__dirname, "..", "public");

// ─── Shared Data ─────────────────────────────────────────────
const data = {
  name: "Thierry Michaël RAVELOMAHARAVO",
  title: { en: "DevOps & Application Security Engineer — Full Stack Developer", fr: "Ingénieur DevOps & Sécurité applicative — Développeur Full Stack" },
  email: "thierrymichael2001@gmail.com",
  phone: "+261 34 88 359 57",
  location: { en: "Antsirabe, Madagascar", fr: "Antsirabe, Madagascar" },
  github: "github.com/KelySaina",
  portfolio: "thierry-michael.vercel.app",

  summary: {
    en: "DevOps engineer and full stack developer, project lead for DevOps & QA, where application security has become the core of the role: code audits and authorized penetration testing of business applications, delivering replayable proof-of-concept evidence and surgical fixes. Google Cloud Certified Associate Cloud Engineer. Specialized in containerized ecosystems, CI/CD pipelines, and securing PHP/Laravel and JavaScript applications in production.",
    fr: "Ingénieur DevOps et développeur Full Stack, chef de projet DevOps & QA, où la sécurité applicative est devenue le cœur du poste : audits de code et tests d'intrusion autorisés sur les applications métier, avec preuves d'exploitation rejouables et correctifs chirurgicaux. Certifié Google Cloud Associate Cloud Engineer. Spécialisé dans les écosystèmes conteneurisés, les pipelines CI/CD et la sécurisation d'applications PHP/Laravel et JavaScript en production.",
  },

  skills: {
    security: {
      en: ["Authorized web penetration testing", "OWASP Top 10", "Object-level access control", "Burp Suite", "Semgrep", "Security code review", "Replayable PoC harnesses"],
      fr: ["Tests d'intrusion web autorisés", "OWASP Top 10", "Contrôle d'accès au niveau objet", "Burp Suite", "Semgrep", "Revue de code sécurité", "Harnais de PoC rejouables"],
    },
    frontend: ["React", "Vue 3", "Next.js", "Nuxt.js", "Tailwind CSS", "TypeScript"],
    backend: ["Node.js", "NestJS", "Express", "PHP 5.6-8.2", "Laravel", "CodeIgniter 2/3", "Lumen", "GraphQL", "Prisma"],
    devops: ["Docker", "Docker Compose", "Kubernetes", "Nginx", "GitLab CI", "GitHub Actions", "Jenkins", "Ansible", "Bash", "Tailscale"],
    cloud: ["Google Cloud Platform (ACE)", "AWS (EC2, S3)", "Vercel", "Supabase"],
    databases: ["PostgreSQL", "MariaDB", "MySQL", "Redis", "MinIO"],
    testing: ["Cypress", "Faker.js", "SonarQube"],
    languages: ["JavaScript", "TypeScript", "PHP", "Python", "Java", "Bash", "GDScript"],
  },

  experience: [
    {
      title: { en: "Project Lead — DevOps, QA & Application Security", fr: "Chef de Projet — DevOps, QA & Sécurité applicative" },
      company: "MANAO Group - SIDINA",
      period: { en: "Dec 2024 - Present", fr: "Déc 2024 - Présent" },
      items: {
        en: [
          "Ran authorized security audits and penetration tests against business web applications and APIs: code review, exploitation in isolated environments on test data, severity-ranked reporting and proposed fixes",
          "Qualified access-control vulnerabilities escalated from client support: reproduced the issue, traced it to its root cause in code, and fixed the authorization layer rather than the symptom in the UI",
          "Adversarial review of technical solution documents before implementation (session handling, real-time revocation), verified against the deployment branches",
          "Designed an isolated per-developer test environment: 8 slots, 4 descriptor-driven applications, versioned reference datasets, web dashboard",
          "Hardened a self-hosted automation platform: access restricted to a private mesh network, secrets removed from version control, encrypted daily backups",
          "Led and coordinated the DevOps and QA teams, overseeing project delivery, tooling strategy, and quality standards",
          "Architected an interconnected Docker platform ecosystem with shared networking across 5+ microservices; containerized legacy PHP 5.6/7.4 CodeIgniter apps with GHCR CI/CD",
          "Built 'ocompose' — a reproducible Docker mini-OS platform with CLI + Web UI — and 'DB Docker Server', a multi-engine database manager with React Web UI and SSE real-time logs",
          "Created comprehensive Cypress E2E test suites for Paie and Compta with auto-generated test data via Faker.js",
        ],
        fr: [
          "Conduite d'audits de sécurité et de tests d'intrusion autorisés sur les applications web et les API métier : revue de code, exploitation en environnement isolé sur données de test, rapport hiérarchisé et correctifs proposés",
          "Qualification de vulnérabilités de contrôle d'accès remontées par le support : reproduction, remontée à la cause racine dans le code, correctif en profondeur côté API plutôt qu'au niveau de l'affichage",
          "Audit contradictoire de dossiers de solution technique avant implémentation (gestion de session, révocation en temps réel), conduit sur les branches de déploiement",
          "Conception d'un environnement de tests isolé par développeur : 8 slots, 4 applications pilotées par descripteur, jeux de données de référence versionnés, tableau de bord web",
          "Durcissement d'une plateforme d'automatisation auto-hébergée : accès restreint à un réseau privé maillé, secrets sortis du dépôt, sauvegardes chiffrées quotidiennes",
          "Direction et coordination des équipes DevOps et QA, supervision de la livraison des projets et des standards qualité",
          "Conception d'un écosystème Docker interconnecté avec réseau partagé pour 5+ microservices ; conteneurisation d'applications legacy PHP 5.6/7.4 CodeIgniter avec CI/CD GHCR",
          "Développement d'ocompose — plateforme Docker mini-OS reproductible avec CLI + Web UI — et de DB Docker Server, gestionnaire de bases de données multi-moteur avec Web UI React et logs SSE temps réel",
          "Création de suites de tests E2E Cypress pour Paie et Compta avec données de test auto-générées via Faker.js",
        ],
      },
    },
    {
      title: { en: "FullStack JavaScript Developer", fr: "Développeur JavaScript FullStack" },
      company: "MAR IT Consulting",
      period: { en: "Aug - Nov 2024", fr: "Août - Nov 2024" },
      items: {
        en: [
          "Built secure, scalable web applications using Vue3, Nuxt.js, Node.js, and Supabase",
          "Developed and integrated dynamic role-based access control (RBAC) systems",
          "Utilized OCR technologies to extract structured data from invoices",
        ],
        fr: [
          "Construction d'applications web sécurisées et scalables avec Vue3, Nuxt.js, Node.js et Supabase",
          "Développement et intégration de systèmes de contrôle d'accès basé sur les rôles (RBAC)",
          "Utilisation de technologies OCR pour extraire des données structurées depuis des factures",
        ],
      },
    },
    {
      title: { en: "Back-End Node.js Developer", fr: "Développeur Back-End Node.js" },
      company: "OnlyTravaux",
      period: { en: "Jan 2024", fr: "Jan 2024" },
      items: {
        en: [
          "Contributed to backend development using Node.js and GraphQL",
          "Implemented API endpoints to support front-end requirements",
        ],
        fr: [
          "Contribution au développement backend avec Node.js et GraphQL",
          "Implémentation d'endpoints API pour les besoins du front-end",
        ],
      },
    },
    {
      title: { en: "DevOps Intern", fr: "Stagiaire DevOps" },
      company: "OpenData Madagascar",
      period: { en: "Oct - Dec 2023", fr: "Oct - Déc 2023" },
      items: {
        en: [
          "Implemented CI/CD pipeline using Jenkins for automated Node.js API deployment",
          "Streamlined development workflow and deployment processes",
        ],
        fr: [
          "Mise en place de pipelines CI/CD avec Jenkins pour le déploiement automatisé d'API Node.js",
          "Optimisation des workflows de développement et processus de déploiement",
        ],
      },
    },
    {
      title: { en: "Network Administrator Intern", fr: "Stagiaire Administrateur Réseau" },
      company: "ESD",
      period: { en: "Oct - Dec 2022", fr: "Oct - Déc 2022" },
      items: {
        en: [
          "Implemented captive portal solution with dedicated application",
          "Managed network infrastructure and security",
        ],
        fr: [
          "Mise en place d'un portail captif avec application dédiée",
          "Gestion de l'infrastructure réseau et de la sécurité",
        ],
      },
    },
  ],

  education: [
    {
      degree: { en: "Master's Degree in Computer Science", fr: "Master en Informatique" },
      school: "École Nationale d'Informatique",
      year: "2025",
      note: {
        en: "Thesis on Microservices Architecture — 19.75/20. Summa Cum Laude.",
        fr: "Mémoire sur l'Architecture Microservices — 19.75/20. Très Honorable avec Félicitations du Jury.",
      },
    },
    {
      degree: { en: "Bachelor of Computer Science", fr: "Licence en Informatique" },
      school: "École Nationale d'Informatique",
      year: "2023",
      note: {
        en: "Highest honors for thesis on CI/CD of a Node.js API with Jenkins.",
        fr: "Mention très honorable pour le mémoire sur le CI/CD d'une API Node.js avec Jenkins.",
      },
    },
  ],

  certifications: [
    {
      name: "Google Cloud Associate Cloud Engineer (ACE)",
      issuer: "Google Cloud Platform",
      date: { en: "October 2024", fr: "Octobre 2024" },
    },
  ],

  projects: [
    {
      name: "Road to sudo",
      desc: {
        en: "Educational game teaching Linux through a simulated terminal: virtual filesystem, 74 commands, 64 challenges across 14 levels validated against machine state rather than typed strings. Released as Linux and Windows binaries",
        fr: "Jeu éducatif enseignant Linux par un terminal simulé : système de fichiers virtuel, 74 commandes, 64 défis sur 14 niveaux validés par l'état de la machine et non par la chaîne tapée. Publié en binaires Linux et Windows",
      },
      tech: "Godot 4.4, GDScript, GitHub Actions",
    },
    {
      name: "AKD-MI",
      desc: {
        en: "Full-stack institution directory platform with GPS mapping, RBAC, and GraphQL API",
        fr: "Plateforme annuaire d'institutions full-stack avec cartographie GPS, RBAC et API GraphQL",
      },
      tech: "Next.js, NestJS, GraphQL, Prisma, PostgreSQL, Docker",
    },
    {
      name: "ASSBEP Health Platform",
      desc: {
        en: "Multilingual health platform with admin backoffice, REST API, and CI/CD to AWS EC2",
        fr: "Plateforme santé multilingue avec backoffice admin, API REST et CI/CD vers AWS EC2",
      },
      tech: "Vue 3, NestJS, Prisma, PostgreSQL, MinIO, Docker, GitHub Actions",
    },
    {
      name: "DB Docker Server",
      desc: {
        en: "Multi-engine database manager (MariaDB, MySQL, PostgreSQL) with React Web UI, SSE real-time logs, and MinIO backup sync",
        fr: "Gestionnaire de bases de données multi-moteur (MariaDB, MySQL, PostgreSQL) avec Web UI React, logs SSE temps réel et sync MinIO",
      },
      tech: "Node.js, React, Vite, Docker Compose, Bash, PostgreSQL, MinIO",
    },
    {
      name: "Konnect IDP/SSO",
      desc: {
        en: "Identity Provider implementing OAuth 2.0, OpenID Connect, and TOTP-based MFA",
        fr: "Fournisseur d'identité implémentant OAuth 2.0, OpenID Connect et MFA TOTP",
      },
      tech: "Node.js, Express, MySQL, JWT, OAuth 2.0, Docker",
    },
    {
      name: "ocompose",
      desc: {
        en: "Reproducible Docker platform with CLI + Web UI for multi-instance dev environments",
        fr: "Plateforme Docker reproductible avec CLI + Web UI pour environnements de dev multi-instances",
      },
      tech: "Bash, Docker Compose, Nginx, PHP-FPM, Node.js, Python",
    },
  ],

  languages: {
    en: [
      { lang: "French", level: "Native" },
      { lang: "English", level: "Professional" },
      { lang: "Malagasy", level: "Native" },
    ],
    fr: [
      { lang: "Français", level: "Langue maternelle" },
      { lang: "Anglais", level: "Professionnel" },
      { lang: "Malagasy", level: "Langue maternelle" },
    ],
  },
};

// ─── Labels ──────────────────────────────────────────────────
const labels = {
  en: {
    summary: "Profile",
    skills: "Technical Skills",
    experience: "Professional Experience",
    education: "Education",
    certifications: "Certifications",
    projects: "Personal Projects",
    languages: "Languages",
    security: "Security",
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps & CI/CD",
    cloud: "Cloud & Platforms",
    databases: "Databases",
    testing: "Testing & QA",
    programmingLangs: "Languages",
  },
  fr: {
    summary: "Profil",
    skills: "Compétences Techniques",
    experience: "Expérience Professionnelle",
    education: "Formation",
    certifications: "Certifications",
    projects: "Projets Personnels",
    languages: "Langues",
    security: "Sécurité",
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps & CI/CD",
    cloud: "Cloud & Plateformes",
    databases: "Bases de données",
    testing: "Tests & QA",
    programmingLangs: "Langages",
  },
};

// ─── HTML Template ───────────────────────────────────────────
function buildHTML(lang) {
  const l = labels[lang];
  const t = (obj) => (typeof obj === "string" ? obj : obj[lang]);

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="utf-8"/>
<style>
  @page { size: A4; margin: 18mm 16mm 14mm 16mm; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    color: #1a1a2e;
    font-size: 9.5pt;
    line-height: 1.45;
    background: #fff;
  }
  .page {
    width: 100%;
    position: relative;
  }
  /* Accent bar — first page only */
  .page::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 5px;
    background: linear-gradient(90deg, #0a192f, #5eaeff, #0a192f);
  }

  /* Page break control */
  /* Les sections peuvent se poursuivre d'une page a l'autre : sinon une section
     trop longue (l'experience) saute entiere a la page suivante et laisse un
     demi-page vide. Les entrees individuelles, elles, restent insecables. */
  .section { break-inside: auto; }
  .section-title { break-after: avoid; }
  .exp-item { break-inside: avoid; }
  .edu-item { break-inside: avoid; }
  .proj-item { break-inside: avoid; }

  /* Header */
  .header { margin-bottom: 14px; }
  .header h1 {
    font-size: 22pt;
    font-weight: 800;
    color: #0a192f;
    letter-spacing: -0.5px;
    margin-bottom: 2px;
  }
  .header .subtitle {
    font-size: 11pt;
    color: #5eaeff;
    font-weight: 600;
    margin-bottom: 6px;
  }
  .header .contact-row {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    font-size: 8.5pt;
    color: #555;
  }
  .header .contact-row span { display: inline-flex; align-items: center; gap: 3px; }

  /* Section */
  .section { margin-bottom: 12px; }
  .section-title {
    font-size: 10pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: #0a192f;
    border-bottom: 2px solid #5eaeff;
    padding-bottom: 3px;
    margin-bottom: 7px;
  }

  /* Summary */
  .summary { color: #333; font-size: 9pt; }

  /* Skills grid */
  .skills-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px 20px;
  }
  .skill-row { display: flex; gap: 6px; font-size: 8.5pt; }
  .skill-label { font-weight: 700; color: #0a192f; min-width: 105px; }
  .skill-value { color: #444; }

  /* Experience */
  .exp-item { margin-bottom: 9px; }
  .exp-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1px; }
  .exp-title { font-weight: 700; font-size: 10pt; color: #0a192f; }
  .exp-period { font-size: 8pt; color: #5eaeff; font-weight: 600; white-space: nowrap; }
  .exp-company { font-size: 8.5pt; color: #666; font-style: italic; margin-bottom: 3px; }
  .exp-list { padding-left: 14px; }
  .exp-list li { margin-bottom: 1.5px; color: #333; font-size: 8.5pt; }
  .exp-list li::marker { color: #5eaeff; }

  /* Education */
  .edu-item { margin-bottom: 6px; }
  .edu-header { display: flex; justify-content: space-between; align-items: baseline; }
  .edu-degree { font-weight: 700; font-size: 9.5pt; color: #0a192f; }
  .edu-year { font-size: 8pt; color: #5eaeff; font-weight: 600; }
  .edu-school { font-size: 8.5pt; color: #666; font-style: italic; }
  .edu-note { font-size: 8pt; color: #444; margin-top: 1px; }

  /* Certifications */
  .cert-item { display: flex; justify-content: space-between; font-size: 9pt; margin-bottom: 3px; }
  .cert-name { font-weight: 600; color: #0a192f; }
  .cert-detail { color: #666; font-size: 8pt; }

  /* Projects */
  .proj-item { margin-bottom: 5px; }
  .proj-name { font-weight: 700; font-size: 9pt; color: #0a192f; }
  .proj-desc { font-size: 8.5pt; color: #444; }
  .proj-tech { font-size: 7.5pt; color: #5eaeff; font-family: 'Consolas', monospace; }

  /* Languages */
  .lang-row { display: flex; gap: 24px; font-size: 9pt; }
  .lang-item { display: flex; gap: 6px; }
  .lang-name { font-weight: 600; color: #0a192f; }
  .lang-level { color: #666; }

  /* Two column layout */
  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 0 20px; }
</style>
</head>
<body>
<div class="page">
  <!-- Header -->
  <div class="header">
    <h1>${data.name}</h1>
    <div class="subtitle">${t(data.title)}</div>
    <div class="contact-row">
      <span>${data.email}</span>
      <span>${data.phone}</span>
      <span>${t(data.location)}</span>
      <span>${data.portfolio}</span>
      <span>${data.github}</span>
    </div>
  </div>

  <!-- Summary -->
  <div class="section">
    <div class="section-title">${l.summary}</div>
    <p class="summary">${t(data.summary)}</p>
  </div>

  <!-- Skills -->
  <div class="section">
    <div class="section-title">${l.skills}</div>
    <div class="skills-grid">
      <div class="skill-row"><span class="skill-label">${l.security}:</span><span class="skill-value">${data.skills.security[lang].join(", ")}</span></div>
      <div class="skill-row"><span class="skill-label">${l.frontend}:</span><span class="skill-value">${data.skills.frontend.join(", ")}</span></div>
      <div class="skill-row"><span class="skill-label">${l.backend}:</span><span class="skill-value">${data.skills.backend.join(", ")}</span></div>
      <div class="skill-row"><span class="skill-label">${l.devops}:</span><span class="skill-value">${data.skills.devops.join(", ")}</span></div>
      <div class="skill-row"><span class="skill-label">${l.cloud}:</span><span class="skill-value">${data.skills.cloud.join(", ")}</span></div>
      <div class="skill-row"><span class="skill-label">${l.databases}:</span><span class="skill-value">${data.skills.databases.join(", ")}</span></div>
      <div class="skill-row"><span class="skill-label">${l.testing}:</span><span class="skill-value">${data.skills.testing.join(", ")}</span></div>
      <div class="skill-row"><span class="skill-label">${l.programmingLangs}:</span><span class="skill-value">${data.skills.languages.join(", ")}</span></div>
    </div>
  </div>

  <!-- Experience -->
  <div class="section">
    <div class="section-title">${l.experience}</div>
    ${data.experience
      .map(
        (exp) => `
    <div class="exp-item">
      <div class="exp-header">
        <span class="exp-title">${t(exp.title)}</span>
        <span class="exp-period">${t(exp.period)}</span>
      </div>
      <div class="exp-company">${exp.company}</div>
      <ul class="exp-list">
        ${exp.items[lang].map((item) => `<li>${item}</li>`).join("\n        ")}
      </ul>
    </div>`
      )
      .join("\n")}
  </div>

  <!-- Education -->
  <div class="section">
    <div class="section-title">${l.education}</div>
    ${data.education
      .map(
        (edu) => `
    <div class="edu-item">
      <div class="edu-header">
        <span class="edu-degree">${t(edu.degree)}</span>
        <span class="edu-year">${edu.year}</span>
      </div>
      <div class="edu-school">${edu.school}</div>
      <div class="edu-note">${t(edu.note)}</div>
    </div>`
      )
      .join("\n")}
  </div>

  <!-- Certifications -->
  <div class="section">
    <div class="section-title">${l.certifications}</div>
    ${data.certifications
      .map(
        (cert) => `
    <div class="cert-item">
      <span class="cert-name">${cert.name}</span>
      <span class="cert-detail">${cert.issuer} — ${t(cert.date)}</span>
    </div>`
      )
      .join("\n")}
  </div>

  <!-- Languages -->
  <div class="section">
    <div class="section-title">${l.languages}</div>
    <div class="lang-row">
      ${data.languages[lang]
        .map(
          (l) => `<div class="lang-item"><span class="lang-name">${l.lang}</span><span class="lang-level">${l.level}</span></div>`
        )
        .join("\n        ")}
    </div>
  </div>

  <!-- Key Projects -->
  <div class="section">
    <div class="section-title">${l.projects}</div>
    ${data.projects
      .map(
        (p) => `
    <div class="proj-item">
      <span class="proj-name">${p.name}</span> — <span class="proj-desc">${t(p.desc)}</span>
      <div class="proj-tech">${p.tech}</div>
    </div>`
      )
      .join("\n")}
  </div>
</div>
</body>
</html>`;
}

// ─── Chrome lookup ───────────────────────────────────────────
// Ce depot est edite sous Linux et sous Windows : on cherche un navigateur
// plutot que de coder un chemin en dur. PUPPETEER_EXECUTABLE_PATH gagne.
function findChrome() {
  const fromEnv = process.env.PUPPETEER_EXECUTABLE_PATH;
  if (fromEnv) {
    if (!existsSync(fromEnv)) {
      throw new Error(`PUPPETEER_EXECUTABLE_PATH pointe sur un fichier absent : ${fromEnv}`);
    }
    return fromEnv;
  }

  const candidates =
    process.platform === "win32"
      ? [
          "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
          "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
          "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
        ]
      : process.platform === "darwin"
      ? [
          "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
          "/Applications/Chromium.app/Contents/MacOS/Chromium",
        ]
      : [
          "/usr/bin/google-chrome",
          "/usr/bin/chromium",
          "/usr/bin/chromium-browser",
          "/snap/bin/chromium",
        ];

  const found = candidates.find((c) => existsSync(c));
  if (!found) {
    throw new Error(
      "Aucun Chrome/Chromium trouve. Installez-en un, ou definissez PUPPETEER_EXECUTABLE_PATH.\n" +
        "Cherche :\n  " + candidates.join("\n  ")
    );
  }
  return found;
}

// ─── PDF Generation ──────────────────────────────────────────
async function generatePDF(lang) {
  const html = buildHTML(lang);
  const suffix = lang.toUpperCase();
  const htmlPath = resolve(OUTPUT_DIR, `CV_RAVELOMAHARAVO_${suffix}.html`);
  const pdfPath = resolve(OUTPUT_DIR, `CV_RAVELOMAHARAVO_${suffix}.pdf`);

  writeFileSync(htmlPath, html, "utf-8");
  console.log(`  ✓ HTML written: ${htmlPath}`);

  const browser = await puppeteer.launch({
    executablePath: findChrome(),
    headless: true,
    args: ["--no-sandbox"],
  });

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle0" });
  await page.pdf({
    path: pdfPath,
    format: "A4",
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();
  console.log(`  ✓ PDF generated: ${pdfPath}`);
  return pdfPath;
}

// ─── Main ────────────────────────────────────────────────────
async function main() {
  mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log("\n📄 Generating CV — English...");
  await generatePDF("en");

  console.log("\n📄 Generating CV — French...");
  await generatePDF("fr");

  console.log("\n✅ Done! PDFs are in public/\n");
}

main().catch((err) => {
  console.error("❌ Error:", err);
  process.exit(1);
});
