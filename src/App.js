import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import Reg from "./pages/Reg";
import Home from "./pages/Home";
import ArticleQuiz from "./pages/quiz/articleQuiz";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Cards from "./pages/Cards";
import FutureQuiz from "./pages/quiz/futureQuiz";
import EntranceTest from "./pages/EntranceTest";
import UserProfile from "./pages/UserProfile";
import ModalVerbs from "./pages/theory/ModalVerbs";
import PassiveVoice from "./pages/theory/PassiveVoice";
import PresentForm from "./pages/theory/PresentForm";
import PastForm from "./pages/theory/PastForm";
import FutureForm from "./pages/theory/FutureForm";
import ModalVerbsQuiz from "./pages/quiz/modalVerbsQuiz";
import PassiveVoiceQuiz from "./pages/quiz/passiveVoiceQuiz";
import PastFormQuiz from "./pages/quiz/pastFormQuiz";
import SimpleFormQuiz from "./pages/quiz/simpleFormQuiz";
import Article from "./pages/theory/Article";

function App() {
    return (
        <Router>
            <div>
                <Header/>
            </div>
            <main>
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>

                    <Route path="/registration">
                        <Reg/>
                    </Route>

                    //Роутеры теории
                    <Route path="/article">
                        <Article/>
                    </Route>
                    <Route path="/modalVerbs">
                        <ModalVerbs/>
                    </Route>
                    <Route path="/passiveVoice">
                        <PassiveVoice/>
                    </Route>
                    <Route path="/presentForm">
                        <PresentForm/>
                    </Route>
                    <Route path="/pastForm">
                        <PastForm/>
                    </Route>
                    <Route path="/futureForm">
                        <FutureForm/>
                    </Route>

                    <Route path="/Cards">
                        <Cards/>
                    </Route>

                    // Роутеры квизов
                    <Route path="/articleQuiz">
                        <ArticleQuiz/>
                    </Route>
                    <Route path="/passiveVoiceQuiz">
                        <PassiveVoiceQuiz/>
                    </Route>
                    <Route path="/simpleFormQuiz">
                        <SimpleFormQuiz/>
                    </Route>
                    <Route path="/pastFormQuiz">
                        <PastFormQuiz/>
                    </Route>
                    <Route path="/modalVerbsQuiz">
                        <ModalVerbsQuiz/>
                    </Route>
                    <Route path="/futureQuiz">
                        <FutureQuiz/>
                    </Route>

                    <Route path="/userProfile">
                        <UserProfile/>
                    </Route>
                    <Route path="/EntranceTest">
                        <EntranceTest/>
                    </Route>

                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </main >
        </Router>
    );
}

export default App;