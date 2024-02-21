import React from 'react'
import SideBar from './SideBar'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'

const Dashboard = () => {
  return (
    <section>
            <Container>
                <Row>
                    <Col lg='3'>
                        <SideBar/>
                    </Col>
                    <Col>
                        <h5> Welcome manager!</h5>
                    </Col>
                </Row>
            </Container>
        </section>
  )
}

export default Dashboard