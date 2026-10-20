pipeline {
    agent any
    tools { nodejs 'NodeJS22' }

    stages {
        stage('Checkout') {
            steps {
                echo 'Récupération du dépôt GitHub...'
                checkout scm
                sh 'git log --oneline -3'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installation des dépendances Next.js...'
                dir('next-version') {    // ← retirer si choix B
                    sh 'node --version'
                    sh 'npm --version'
                    sh 'npm ci'
                }
            }
        }
    }
}
