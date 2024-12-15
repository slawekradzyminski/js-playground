pipeline {
    agent { docker 'node:20' }
    stages {
        stage('install and run tests') {
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
    }
}