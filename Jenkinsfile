pipeline {
    agent any
    stages {
        
        stage('Clone the repo') {
             steps {
                // Get some code from a GitHub repository
                git url: 'https://github.com/AndreasGammelgaardJensen/HomePage-Client.git', branch: 'main'
                
                sh 'docker ps -a'
            }
            
        }


         stage('Deploy') {
            steps {
                sh "docker build -t homepageClient_image_v1 ."
                sh "docker run - d -p 3000:3000 --name hompageclient-app homepageClient_image_v1"

            }
        }

    }
}
