pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                echo 'Hello World'
                script{
                    if(isUnix()){
                        sh 'npm install'
                    }else{
                        bat 'npm install'
                    }
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Hello World'
                script{
                    if(isUnix()){
                        sh 'npm test'
                    }else{
                        bat 'npm test'
                    }
                }
            }
        }
        stage('Report') {
            steps {
                echo 'Hello World'
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
            }
        }
    }
}
