<div align="center">

# 🚀 DevSecOps Portfolio — Ghazi Arif

**Portfolio DevOps/DevSecOps décliné en deux versions — HTML/CSS/JS et Next.js — conteneurisé et intégré dans un pipeline CI/CD Jenkins.**

[![Ubuntu](https://img.shields.io/badge/Ubuntu-26.04_LTS-E95420?style=flat-square&logo=ubuntu&logoColor=white)](https://ubuntu.com/)
[![Docker](https://img.shields.io/badge/Docker-29.8-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)
[![Jenkins](https://img.shields.io/badge/Jenkins-2.580-D24939?style=flat-square&logo=jenkins&logoColor=white)](https://www.jenkins.io/)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Vagrant](https://img.shields.io/badge/Vagrant-2.4.9-1868F2?style=flat-square&logo=vagrant&logoColor=white)](https://www.vagrantup.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[📖 Documentation](#-table-des-matières) · [🐛 Signaler un bug](https://github.com/ghaziarif1/devsecops-portfolio/issues) · [✨ Proposer une amélioration](https://github.com/ghaziarif1/devsecops-portfolio/issues)

</div>

---

## 📋 Table des matières

<details open>
<summary><b>Cliquez pour déplier / replier</b></summary>

- [Aperçu du projet](#-aperçu-du-projet)
- [Stack technique](#-stack-technique)
- [Architecture du dépôt](#-architecture-du-dépôt)
- [Prérequis](#-prérequis)
- [Installation rapide](#-installation-rapide)
- [Étapes du projet](#-étapes-du-projet)
  - [I. Infrastructure](#i-infrastructure)
  - [II. Dockerisation](#ii-dockerisation)
  - [III. Automatisation](#iii-automatisation)
  - [IV. Portfolio HTML/CSS/JS](#iv-portfolio-htmlcssjs)
  - [V. Migration vers Next.js](#v-migration-vers-nextjs)
  - [VI. Pipeline Jenkins](#vi-pipeline-jenkins)
- [Auteur](#-auteur)

</details>

---

## 🎯 Aperçu du projet

Ce dépôt regroupe l'intégralité d'un projet **DevSecOps** mené de bout en bout :

<table>
<tr>
<td width="50%">

### 🎨 Version HTML/CSS/JS
Portfolio single-page construit en HTML5, CSS3 (variables, Grid, media queries) et JavaScript vanilla.  
→ Conteneurisé avec **Docker + Nginx**.

</td>
<td width="50%">

### ⚛️ Version Next.js
Portfolio moderne en **Next.js 16 + TypeScript + Tailwind CSS**, avec routage dynamique (`/projects/[slug]`) et composants réutilisables.

</td>
</tr>
</table>

Le tout est orchestré par un **pipeline Jenkins** qui automatise la récupération du code, l'installation des dépendances et le build de production.

---

## 🛠 Stack technique

| Domaine | Technologies |
|:--------|:-------------|
| **Système** | ![Ubuntu](https://img.shields.io/badge/Ubuntu_26.04-E95420?style=flat-square&logo=ubuntu&logoColor=white) |
| **Conteneurisation** | ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white) ![Nginx](https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white) |
| **Frontend v1** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) |
| **Frontend v2** | ![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=next.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) |
| **CI/CD** | ![Jenkins](https://img.shields.io/badge/Jenkins-2.580-D24939?style=flat-square&logo=jenkins&logoColor=white) ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) |
| **IaC** | ![Vagrant](https://img.shields.io/badge/Vagrant-1868F2?style=flat-square&logo=vagrant&logoColor=white) ![VirtualBox](https://img.shields.io/badge/VirtualBox-183A61?style=flat-square&logo=virtualbox&logoColor=white) |

---

## 📁 Architecture du dépôt

```
devsecops-portfolio/
│
├── 📄 README.md                    ← ce fichier
├── 📄 .gitignore
├── 📄 Jenkinsfile                  ← pipeline CI/CD (racine)
│
├── 📂 html-version/                ← Portfolio HTML/CSS/JS
│   ├── index.html
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── .dockerignore
│
├── 📂 next-version/                ← Portfolio Next.js
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── projects/
│   │       ├── page.tsx            → /projects
│   │       └── [slug]/page.tsx     → /projects/project-name
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── DevSecOpsSkills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── public/
│   ├── package.json
│   └── next.config.ts
│
└── 📂 images/                      ← captures d'écran du projet
```

---

## ✅ Prérequis

- **Ubuntu Server 26.04 LTS** (VM ou physique)
- **Docker 29.8+** et **Docker Compose v2**
- **Java 21** (pour Jenkins)
- **Node.js 22 LTS** et **npm**
- **Vagrant 2.4.9+** et **VirtualBox 7.2+** (optionnel, pour l'IaC)

---

## ⚡ Installation rapide

<details>
<summary><b>🐳 Lancer la version HTML/CSS/JS</b></summary>

```bash
cd html-version
docker compose up -d
docker compose ps
```

Accès : `http://<IP_VM>:8081`

</details>

<details>
<summary><b>⚛️ Lancer la version Next.js (dev)</b></summary>

```bash
cd next-version
npm install
npm run dev -- -H 0.0.0.0
```

Accès : `http://<IP_VM>:3000`

</details>

<details>
<summary><b>🔧 Lancer le pipeline Jenkins</b></summary>

1. Ouvrir `http://<IP_VM>:8080`
2. Multibranch Pipeline → `devsecops-portfolio-pipeline`
3. Branch `main` → **Build Now**

</details>

---

## 📚 Étapes du projet

### I. Infrastructure

<table>
<tr>
<td width="80">

**1️⃣**

</td>
<td>

**Installation Ubuntu Server 26.04 et SSH**

Installation d'Ubuntu Server 26.04 LTS avec OpenSSH server. Configuration du pare-feu UFW.

```bash
sudo apt install openssh-server
sudo systemctl enable --now ssh
sudo ufw allow ssh && sudo ufw enable
```

</td>
</tr>
</table>

**📸 Capture :** `images/01-ssh-status.png`

---

<table>
<tr>
<td width="80">

**2️⃣**

</td>
<td>

**Test SSH depuis la machine physique**

```powershell
ssh ghazi@192.168.109.128
```

Connexion réussie sur Ubuntu 26.04.1 LTS.

</td>
</tr>
</table>

**📸 Capture :** `images/02-ssh-login.png`

---

### II. Dockerisation

<table>
<tr>
<td width="80">

**3️⃣**

</td>
<td>

**Installation Docker**

Dépôt officiel Docker avec clé GPG, puis installation de Docker Engine et Compose v2.

```bash
sudo apt install docker-ce docker-ce-cli containerd.io \
  docker-buildx-plugin docker-compose-plugin
sudo docker run hello-world
```

</td>
</tr>
</table>

**📸 Capture :** `images/03-docker-hello.png`

---

<table>
<tr>
<td width="80">

**4️⃣**

</td>
<td>

**Installation Jenkins**

Java 21 requis (Java 17 n'est plus compatible avec Jenkins LTS ≥ 2.541). Clé GPG Jenkins 2026.

```bash
sudo apt install -y openjdk-21-jdk
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2026.key | \
  sudo tee /usr/share/keyrings/jenkins-keyring.asc > /dev/null
sudo apt install -y jenkins
sudo systemctl enable --now jenkins
```

</td>
</tr>
</table>

**📸 Capture :** `images/04-jenkins.png`

---

### III. Automatisation

<table>
<tr>
<td width="80">

**5️⃣**

</td>
<td>

**Mini CV One Page**

Première version du CV en HTML5/CSS3/JavaScript.

</td>
</tr>
</table>

**📸 Capture :** `images/05-mini-cv.png`

---

<table>
<tr>
<td width="80">

**6️⃣**

</td>
<td>

**Push GitHub via SSH**

Génération d'une clé SSH Ed25519, ajout sur GitHub, test de la connexion.

```bash
ssh-keygen -t ed25519 -C "ghaziarif2003@gmail.com"
ssh -T git@github.com
```

</td>
</tr>
</table>

**📸 Capture :** `images/06-github-ssh.png`

---

<table>
<tr>
<td width="80">

**1️⃣5️⃣**

</td>
<td>

**Installation Vagrant + VirtualBox**

```bash
# Vagrant via HashiCorp
wget -O - https://apt.releases.hashicorp.com/gpg | \
  sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
sudo apt install vagrant

# VirtualBox via multiverse
sudo add-apt-repository multiverse
sudo apt install virtualbox
```

</td>
</tr>
</table>

**📸 Capture :** `images/15-vagrant-up.png`

---

<table>
<tr>
<td width="80">

**1️⃣6️⃣**

</td>
<td>

**Connexion `vagrant ssh`**

```bash
cd ~/vagrant-project
vagrant ssh
# vagrant@vagrant-ubuntu
```

**Comparaison création manuelle vs Vagrant :**

| Critère | Manuel | Vagrant |
|:--------|:------:|:-------:|
| Temps | > 30 min | 2–5 min |
| Reproductibilité | Faible | ✅ Élevée |
| Configuration | Manuelle | Vagrantfile versionné |

</td>
</tr>
</table>

**📸 Capture :** `images/16-vagrant-ssh.png`

---

### IV. Portfolio HTML/CSS/JS

<table>
<tr>
<td width="80">

**7️⃣**

</td>
<td>

**Évolution en DevSecOps Portfolio**

| Amélioration | Description |
|:-------------|:------------|
| **CV → Portfolio interactif** | Navigation par ancres, animations `IntersectionObserver`, cartes cliquables, avatar animé |
| **Design responsive** | Media queries (768px, 480px), grilles adaptatives `auto-fit` |
| **Variables CSS** | Thème sombre centralisé dans `:root` |
| **Navigation fluide** | `scroll-behavior: smooth`, lien actif |
| **Projets dynamiques** | Générés par JS depuis un tableau d'objets |

</td>
</tr>
</table>

**📸 Capture :** `images/07-portfolio.png`

---

<table>
<tr>
<td width="80">

**8️⃣**

</td>
<td>

**Section DevSecOps Skills**

Grille CSS Grid avec les 7 technologies : Git, Docker, Jenkins, Kubernetes, Ansible, Terraform, Argo CD.

</td>
</tr>
</table>

**📸 Capture :** `images/08-devsecops-skills.png`

---

<table>
<tr>
<td width="80">

**9️⃣**

</td>
<td>

**Projets dynamiques en JavaScript**

```javascript
const projects = [
  { title: "DevSecOps Portfolio", description: "...", tech: ["Docker", "Nginx"] },
  // ...
];

const projectsContainer = document.getElementById('projects');
projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="tags">${project.tech.map(t => `<span>${t}</span>`).join('')}</div>
  `;
  projectsContainer.appendChild(card);
});
```

</td>
</tr>
</table>

**📸 Capture :** `images/09-projects.png`

---

<table>
<tr>
<td width="80">

**1️⃣0️⃣**

</td>
<td>

**Dockerfile Nginx**

```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

| Ligne | Rôle |
|:------|:-----|
| `FROM nginx:alpine` | Image légère (~50 Mo) |
| `COPY` | Copie les fichiers statiques |
| `EXPOSE 80` | Port d'écoute |
| `CMD` | Lance Nginx au premier plan |

</td>
</tr>
</table>

**📸 Capture :** `images/10-dockerfile.png`

---

<table>
<tr>
<td width="80">

**1️⃣1️⃣**

</td>
<td>

**Image cv-docker**

```bash
docker build -t cv-docker .
docker images | grep cv-docker
```

Résultat : `cv-docker:latest` (~93.6 Mo)

</td>
</tr>
</table>

**📸 Capture :** `images/11-docker-images.png`

---

<table>
<tr>
<td width="80">

**1️⃣2️⃣**

</td>
<td>

**Conteneur Docker**

```bash
docker run -d -p 8081:80 --name cv-container cv-docker
```

> ⚠️ **Note** : le port 8080 est occupé par Jenkins, le Portfolio HTML utilise 8081.

Accès : `http://192.168.109.128:8081`

</td>
</tr>
</table>

**📸 Captures :** `images/12-docker-ps.png` · `images/12-portfolio-browser.png`

---

<table>
<tr>
<td width="80">

**1️⃣3️⃣**

</td>
<td>

**Docker Compose**

```yaml
services:
  portfolio:
    build: .
    image: cv-docker
    container_name: cv-compose
    ports:
      - "8081:80"
    restart: unless-stopped
```

```bash
docker compose up -d
docker compose ps
```

</td>
</tr>
</table>

**📸 Capture :** `images/13-compose-ps.png`

---

<table>
<tr>
<td width="80">

**1️⃣4️⃣**

</td>
<td>

**Publication GitHub**

```bash
git init
git remote add origin git@github.com:ghaziarif1/devsecops-portfolio.git
git add . && git commit -m "Initial DevSecOps Portfolio"
git branch -M main && git push -u origin main
```

**Dépôt :** [ghaziarif1/devsecops-portfolio](https://github.com/ghaziarif1/devsecops-portfolio)

</td>
</tr>
</table>

**📸 Capture :** `images/14-github-repo.png`

---

### V. Migration vers Next.js

<table>
<tr>
<td width="80">

**1️⃣8️⃣**

</td>
<td>

**Création du projet Next.js**

```bash
npx create-next-app@latest devsecops-portfolio-next --yes
cd devsecops-portfolio-next
npm run dev -- -H 0.0.0.0
```

> 💡 `-H 0.0.0.0` rend Next.js accessible depuis la machine physique.

Accès : `http://192.168.109.128:3000`

</td>
</tr>
</table>

**📸 Captures :** `images/18-create-next-app.png` · `images/18-nextjs-browser.png`

---

<table>
<tr>
<td width="80">

**1️⃣9️⃣**

</td>
<td>

**Composants réutilisables**

| Composant | Rôle |
|:----------|:-----|
| `Header` | Navigation fixe avec ancres |
| `About` | Présentation personnelle |
| `Skills` | Barres de progression |
| `DevSecOpsSkills` | Grille des technologies |
| `Projects` | Cartes dynamiques |
| `Experience` | Timeline |
| `Contact` | Coordonnées |
| `Footer` | Pied de page |

</td>
</tr>
</table>

**📸 Capture :** `images/19-components.png`

---

<table>
<tr>
<td width="80">

**2️⃣0️⃣**

</td>
<td>

**Données séparées**

```typescript
// data/projects.ts
export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    slug: 'devsecops-portfolio',
    title: 'DevSecOps Portfolio',
    description: 'Portfolio dockerisé avec Nginx',
    longDescription: '...',
    tech: ['Docker', 'Nginx', 'Next.js']
  },
  // ...
];
```

</td>
</tr>
</table>

**📸 Capture :** `images/20-data-files.png`

---

<table>
<tr>
<td width="80">

**2️⃣1️⃣**

</td>
<td>

**Pages dédiées aux projets**

- `/projects` → liste des projets
- `/projects/[slug]` → détail d'un projet

```tsx
// app/projects/[slug]/page.tsx
export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <div>{/* ... */}</div>;
}
```

> ⚠️ Avec Next.js 15+, `params` est une `Promise`.

</td>
</tr>
</table>

**📸 Captures :** `images/21-projects-list.png` · `images/21-project-detail.png`

---

### VI. Pipeline Jenkins

<table>
<tr>
<td width="80">

**2️⃣2️⃣**

</td>
<td>

**Pipeline Jenkins initial**

**Jenkinsfile :**

```groovy
pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                echo 'Récupération du dépôt GitHub...'
                checkout scm
                sh 'git log --oneline -3'
            }
        }
    }
}
```

**Configuration Jenkins :**
- Multibranch Pipeline → `devsecops-portfolio-pipeline`
- Git URL : `git@github.com:ghaziarif1/devsecops-portfolio.git`
- Credentials : clé SSH GitHub
- Scan toutes les 2 minutes

</td>
</tr>
</table>

**📸 Captures :** `images/22-multibranch-config.png` · `images/22-checkout-stage.png`

---

<table>
<tr>
<td width="80">

**2️⃣3️⃣**

</td>
<td>

**Installation des dépendances**

Ajout du **NodeJS Plugin** dans Jenkins (`NodeJS22`) puis d'un stage d'installation.

```groovy
tools { nodejs 'NodeJS22' }

stage('Install Dependencies') {
    steps {
        dir('next-version') {
            sh 'node --version'
            sh 'npm --version'
            sh 'npm ci'
        }
    }
}
```

> 💡 `npm ci` garantit une installation reproductible.

</td>
</tr>
</table>

**📸 Capture :** `images/23-install-deps.png`

---

<table>
<tr>
<td width="80">

**2️⃣4️⃣**

</td>
<td>

**Build Next.js**

```groovy
stage('Build') {
    steps {
        dir('next-version') {
            sh 'npm run build'
        }
    }
}
```

**Résultat attendu :**

```
Route (app)                              Size     First Load JS
┌ ○ /                                    X kB     XX kB
├ ○ /projects                            X kB     XX kB
└ ● /projects/[slug]                     X kB     XX kB
```

> ✅ Le symbole `●` confirme la génération dynamique des routes.

</td>
</tr>
</table>

**📸 Captures :** `images/24-build-stage.png` · `images/24-build-routes.png`

---

## 🎓 Ce que ce projet démontre

<div align="center">

| 🎯 Compétence | 📌 Mise en œuvre |
|:--------------|:-----------------|
| **Administration Linux** | Ubuntu Server, SSH, UFW, systemd |
| **Conteneurisation** | Docker, Docker Compose, Nginx |
| **CI/CD** | Jenkins Multibranch Pipeline, Jenkinsfile |
| **Frontend moderne** | HTML/CSS/JS, Next.js, TypeScript, Tailwind |
| **Infrastructure as Code** | Vagrant, Vagrantfile |
| **Gestion de versions** | Git, GitHub, SSH keys |
| **DevSecOps** | Sécurité SSH, isolation conteneurs, pipeline |

</div>

---

## 👤 Auteur

<div align="center">

**Ghazi Arif**

*Étudiant en Mastère DevOps & Cloud Computing — ISET Tozeur*

[![Email](https://img.shields.io/badge/Email-ghaziarif2003@gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:ghaziarif2003@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-ghaziarif1-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/ghaziarif1)

</div>

---

<div align="center">

**⭐ Si ce projet vous a été utile, n'hésitez pas à lui donner une étoile ! ⭐**

<sub>Projet réalisé dans le cadre du Mastère DevOps & Cloud Computing — ISET Tozeur, 2026</sub>

</div>
