pipeline {
    agent any
    tools { nodejs 'NodeJS22' }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                sh 'git log --oneline -3'
            }
        }
        stage('Install Dependencies') {
            steps {
                dir('next-version') {    
                    sh 'npm ci'
                }
            }
        }
        stage('Build') {
            steps {
                dir('next-version') {    
                    sh 'npm run build'
                }
            }
        }
    }

    post {
        success { echo '✅ Build réussi.' }
        failure { echo '❌ Build échoué.' }
    }
}
