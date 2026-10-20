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
