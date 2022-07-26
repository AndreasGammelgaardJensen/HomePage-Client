import React, { FC } from 'react';
import { Button, Card } from 'react-bootstrap';
import './ProjectItem.css';

interface IProjectItemProps {
    title: string,
    description: string,
    url: string,
  }

  interface MyState {
    title: string,
    description: string,
    url: string,
    count:number,
  }
  
  

  class ProjectItem extends React.Component<IProjectItemProps, MyState> {
   
    //TODO: Give as a param so that I can change routing
    private callUrl(): void {
        window.open(this.props.url, '_blank', 'noopener,noreferrer')
      }

    render() {
    return(
        //    TODO: Make card increase in size when hover
        <Card className="card" style={{ width: '30rem',  margin:10 }} onClick={()=>this.callUrl()}>
            <Card.Img variant="top" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wpq6?ver=a9bb" />
            <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
                {this.props.description}
            </Card.Text>
            <Button variant="primary" onClick={()=>this.callUrl()}>Go to project</Button>
            </Card.Body>
    </Card>
        
    )
    }
}

export default ProjectItem;