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

        stage('Docker check and deploy') {
            steps {
                sh "docker build -t homepageclient_image_v1 ."
                sh '''
                #!/bin/bash
                set +e
                docker container list | grep hompageclient-app
                if [ $? -eq 0 ]; then
                    echo "Container already running"
                    echo "removing it"
                    docker stop hompageclient-app
                    docker rm hompageclient-app

                else
                    docker ps -a | grep hompageclient-app
                    if [ $? -eq 0 ]; then
                        docker container start grep hompageclient-app && echo "Container wasnt running - starting it again"
                        docker stop hompageclient-app
                        docker rm hompageclient-app
                    else
                        echo "Container was not running"
                    fi
                fi
                '''

                sh "docker run -d -p 3000:3000 --name hompageclient-app homepageclient_image_v1"
            }
        }


        //  stage('Deploy') {
        //     steps {
        //         sh "docker build -t homepageclient_image_v1 ."
        //         sh 

        //     }
        // }

    }
}
