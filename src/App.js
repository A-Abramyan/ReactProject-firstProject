import React from 'react';
import './App.css';
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import News from "./News/News";
import Music from "./Music/Music";
import Setting from "./Setting/Setting";
import {Route, BrowserRouter} from "react-router-dom";

function App(props) {

   
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={()=><Profile posts={props.posts}/>}/>
                    <Route  path='/dialogs' render={()=><Dialogs dialogs = {props.dialogs} messages = {props.messages}/>}/>
                    <Route path='/news' render={()=><News/>}/>
                    <Route path='/music' render={()=><Music/>}/>
                    <Route path='/setting' render={()=><Setting/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
