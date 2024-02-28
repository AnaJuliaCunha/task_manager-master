import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../../../Frontend/Components/Footer/Footer";
import Navbar from "../../../Frontend/Components/Navbar/Navbar";
import Container from "../../../Frontend/Components/Containner/Container";
import Home from "../../../Frontend/Screens/Home/Home";
import Projects from "../../../Frontend/Screens/Projects/Projects";
import NewProject from "../../../Frontend/Screens/NewProject/NewProject";
import Company from "../../../Frontend/Screens/Company/Company";
import Contact from "../../../Frontend/Screens/Contact/Contact";
import Project from "../../../Frontend/Screens/Project/Project";
import { Login } from "../../../Frontend/Screens/Login/Login.Screen";
import { Register } from "../../../Frontend/Screens/Register/Register.Screen";

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Container customClass="min-height">
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/company">
                        <Company />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/newproject">
                        <NewProject />
                    </Route>
                    <Route path="/project/:id">
                        <Project />
                    </Route>
                </Container>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
};


export default AppRouter;