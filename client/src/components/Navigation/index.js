import React from 'react'
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom"
import About from './../About'
import Projects from './../Projects'
import Contact from './../Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from "react-bootstrap"


class NavigationBar extends React.Component {
    render() {
        return (
            <>
            <Router>
                <Navbar expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                        <img
                            alt="logo"
                            src="./logo192.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{'   '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">About</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <Nav.Link href="#" disabled>Blog - Coming Soon</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <br />
                <Switch>
                    <Route exact path ="/">
                        <About />
                    </Route>
                    <Route path ="/projects">
                        <Projects />
                    </Route>
                    <Route path = "/contact">
                        <Contact />
                    </Route>
                </Switch>
            </Router>
              
            </>
        )
    }
}
export default NavigationBar;



