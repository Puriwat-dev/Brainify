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
            <div className="content w-100 py-60 px-4">
            <h1 className="text-8xl indieflower max-w-8xl  text-center">A website for online learning for free education.</h1>
            <h1 className="text-8xl indieflower max-w-8xl px-20 mt-40">About</h1>
            <div className="mt-40 flex px-20 justify-between">
            <p className="text-3xl notori-thai max-w-3xl">ยินดีต้อนรับสู่เว็บไซต์การศึกษาของเราที่ออกแบบมาเพื่อให้บริการการเรียนรู้โดยไม่มีค่าใช้จ่ายและสะดวกสบายสำหรับทุกคนที่สนใจเรียนรู้ พวกเรามีพันธกิจเพื่อให้การศึกษาเป็นไปได้สำหรับทุกคนไม่ว่าจะเป็นเรื่องการเงินหรือสถานที่ตั้ง บนเว็บไซต์ของเรามีการเรียนรู้ที่หลากหลายเช่นคอร์สเรียน บรรยาย สอนสังคม และทรัพยากรต่างๆในหลายๆหัวข้อเช่นคณิตศาสตร์ วิทยาศาสตร์ ประวัติศาสตร์ วรรณกรรม ศิลปะ และเทคโนโลยี เรามีผู้เชี่ยวชาญในการศึกษาและนักวิชาการคอยคัดสรรเนื้อหาเพื่อให้มีคุณภาพและเหมาะสมกับผู้เรียนในทุกๆระดับ ไม่ว่าคุณจะเป็นนักเรียน นักวิชาการ หรือเพียงแค่ผู้มีความอยากรู้สาระ บนเว็บไซต์ของเรามีสิ่งอะไรสำหรับคุณ เริ่มการเรียนรู้ของคุณได้ทันทีวันนี้ ร่วมเรียนรู้กับเราเพื่อเข้าสู่การเรียนรู้ใหม่</p>
            <img src={require("../image/about.png")} alt=""  width="900px"/>
            </div>
        </div>
    </div>
     );
}

export default Home;
