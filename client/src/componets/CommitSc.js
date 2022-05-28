import axios from "axios"
// import {request} from "../helpers/api/gitapi";
import React, { Component } from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import moment from 'moment'
// import ForLoop from "./ForLoop"
// import {CommitArr} from "./ForLoop"
// import Xbox from "bootstrap-icons/icons/xbox"
// import { ReactDOM } from "react"
// import CommitConstructor from "./CommitConstructor"
// export const commit = []

class Commit extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        data : [],
       
      };
    }
      
    componentDidMount() {
        let config = {
          headers: {
            Authorization : "BrightNate1022",
            // Token: "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"
          }
        }
        axios.get("https://api.github.com/repos/BrightNate1022/git_scrap/commits",config)
        // request()
        .then(  
        
              
          (result) => {
            this.setState({
              isLoaded: true,
              data: result.data ,
             
            });
            
           
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
          
        )
        
    }
    
    render() {
    //  console.log(data)
      const { error, isLoaded, data } = this.state;
      if (error) {
        return (
          
          <Container className="CardsA">
            <Row >
              <Col >
              <Card >
              {error.message}
            </Card>
            </Col>
            </Row>
          </Container>
        
        );
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        // for (let i = 0 ; i < data.length; i++) {
        // const Comarr = []  
        
        // Comarr.push(data)
        data.reverse()
        //  console.log(data[i])
        // ForLoop(data)
        return (        
          <>
              
              {data.map((ComData,index) => (
                 
              <Container >
                <Row>
                  <Col>
                  <Card className="CardsA mb-3 border-2 border-success">
                    <Card.Body className="CardS text-white">
                    <Card.Title className="my-3">Commit {index + 1}</Card.Title>
                    <Card.Subtitle className="my-4 ">Commit Message: {ComData.commit.message} </Card.Subtitle>
                      <Row className="mb-3">
                        <Col>
                        <i class="bi bi-check-circle text-success" style={{ fontSize: 25 }}></i>
                        </Col>
                        <Col>
                          <p className="float-left CardText"> Committer: {ComData.commit.author.name}</p>
                         
                        </Col>
                        <Col>
                          
                          <p className="float-right CardText"> Date: {moment(ComData.commit.author.date).format( ' dddd MM-DD-YYYY hh:mm a')}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col></Col>
                        <Col>
                        <Button variant="secondary" href={ComData.html_url} className="position-relative w-75 text-white"> Visit Commit Page </Button>
                        </Col>
                        <Col></Col>  
                      </Row>
                    </Card.Body>
                </Card>
                </Col>
                </Row>
              </Container>
            
           ))}
           </>
        )}}
        // }
        // return (
          // console.log(data)
  
        // );
        
      }
    // }
  // }
export default Commit
 
