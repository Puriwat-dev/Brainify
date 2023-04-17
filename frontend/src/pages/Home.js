import { useState, useEffect } from "react";
import Navbar from '../component/Navbar';
import Question from "./Question";
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
const Home = () => {
    useEffect(()=>{
        document.body.style.backgroundColor = "white"
        document.title = 'Brainify';
    })
    return (
        <div>
        <Navbar/>
            <div className="content w-100 text-center py-60 px-4">
            <h1 className="text-8xl indieflower max-w-8xl">A website for online learning for free education.</h1>
        </div>
    </div>
     );
}

export default Home;
