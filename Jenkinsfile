pipeline {
    agent { docker 'node:lts' }
    stages {
        stage('Example Build') {
            steps {
                echo 'Hello, Node'
                sh 'npm install'
            }
        }
        stage('Example Test') {
            steps {
                echo 'Hello, Test'
                sh 'npm test'
            }
        }
    }
}