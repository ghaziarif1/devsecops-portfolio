# DevSecOps Portfolio — Ghazi Arif

Portfolio DevSecOps single-page déployé avec Docker, Nginx et Docker Compose.

## Sommaire

- [1. Installation Ubuntu Server 26.04 et SSH](#1-installation-ubuntu-server-2604-et-ssh)
- [2. Test SSH depuis la machine physique](#2-test-ssh-depuis-la-machine-physique)
- [3. Installation Docker](#3-installation-docker)
- [4. Installation Jenkins](#4-installation-jenkins)
- [5. Mini CV One Page](#5-mini-cv-one-page)
- [6. Push GitHub via SSH](#6-push-github-via-ssh)
- [7. Évolution en DevSecOps Portfolio](#7-évolution-en-devsecops-portfolio)
- [8. Section DevSecOps Skills](#8-section-devsecops-skills)
- [9. Projets dynamiques en JavaScript](#9-projets-dynamiques-en-javascript)
- [10. Dockerfile Nginx](#10-dockerfile-nginx)
- [11. Image cv-docker](#11-image-cv-docker)
- [12. Conteneur Docker](#12-conteneur-docker)
- [13. Docker Compose](#13-docker-compose)
- [14. Publication GitHub](#14-publication-github)
- [15. Vagrant](#15-vagrant)
- [16. vagrant ssh](#16-vagrant-ssh)

---

## 1. Installation Ubuntu Server 26.04 et SSH

Ubuntu Server 26.04 LTS (kernel 7.0.0-34-generic) installé en VM avec OpenSSH server.

```bash
sudo apt update
sudo apt install openssh-server
sudo systemctl enable --now ssh
sudo systemctl status ssh
