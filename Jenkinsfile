pipeline {
    agent { docker 'node:20' }
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