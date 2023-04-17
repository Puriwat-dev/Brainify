import { useState, useEffect } from "react";
import Navbar from '../component/Navbar';
import Course from "../component/Course";
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
        <h1 className="px-12 mt-12 text-5xl font-bold">คณิตศาสตร์</h1>
            <div className="flex px-12 py-12">
            <Course title="ติวเตอร์คณิต ม.2 ออนไลน์ตัวต่อตัว" content="ติวเตอร์คณิต ม.2 ออนไลน์ตัวต่อตัว ครูสอนพิเศษจากมหาวิทยาลัยจุฬา ธรรมศาสตร์ พร้อมสอนคณิตแบบตัวต่อตัวให้น้องๆ บริการสอนพิเศษ... " image="course1.png"/>
            <Course title="เลขยกกำลัง ม.5" content="เลขยกกำลัง เนื้อหาพูดถึงการคูณกันหลายๆ ครั้งของจำนวนเดียวกัน สามารถเขียนให้อยู่ในรูปเลขยกกำลังได้ ..." image="course2.jpg"/>
            <Course title="สรุปเลขยกกำลัง ม.ต้น" content="สรุปเลขยกกำลัง ม.ต้น เป็นการสรุปสูตรต่างๆ ที่เกี่ยวข้องกับการดำเนินการของเลขยกกำลัง การเขียนเลขยกกำลัง..." image="course3.jpg"/>
            <Course title="คอร์สตะลุยโจทย์คณิตศาสตร์ สอบต่อ ม.4 และ สอบเข้าเตรียมฯ" content="โจทย์ทั้งหมดที่อยู่ในคอร์สตะลุยโจทย์นี้ครูพี่หนึ่งได้คัดเลือก มาจากข้อส..." image="course4.jpg"/>
            </div>
            <h1 className="px-12 mt-8 text-5xl font-bold">วิทยาศาสตร์</h1>
            <div className="flex px-12 py-12">
            <Course title="คอร์ส Physics Slayer
ฟิสิกส์สอบ TCAS" content="สำหรับนักเรียนสายวิทย์ศาสตร์ ที่มุ่งมั่นจะสอบเข้ามหาวิทยาลัยในคณะที่ใช้คะแนน PAT2 ฟิสิกส์ และฟิสิกส์ 9 วิชาสามัญ พี่ฟาร์มข... " image="science1.png"/>
            <Course title="Physics V-Series TCAS For Dek 66" content="รายละเอียดคอร์ส Physics V-Series TCAS เล่ม 1-7 for DEK66 สอนโดย พี่โหน่ง ทำได้ในทุกแนวข้อสอบ – โจทย์ครบครันมากกว่า 3,000 ข้อ..." image="science2.jpg"/>
            <Course title="คอร์สเรียนออนไลน์ ฟรี ติวเข้ม วิชาเคมี สำหรับเตรียมสอบ" content="วิชาเคมี เป็นอีกหนึ่งวิชาที่สำคัญกับน้องๆ สายวิทยาศาสตร์ ที่ต้องใช้ในการสอบ แล..." image="science3.jpg"/>
            <Course title="เรียนชีวะออนไลน์ กับพี่วิเวียน ได้แล้วที่ Learn anywhere" content="เทคนิคการสอนของพี่วิเวียนมีเอกลักษณ์ไม่เหมือนใคร อัดแน่นไปด้วยเนื้อหาคุณภาพครบถ้วน ครอบคลุมการสอบ สำหรับน้องๆ ที่ไม่แม่นเนื้..." image="science4.jpg"/>
            </div>
            <h1 className="px-12 mt-8 text-5xl font-bold">ภาษาอังกฤษ</h1>
            <div className="flex px-12 py-12">
            <Course title="เรียนภาษาอังกฤษสำหรับเด็ก
ฟิสิกส์สอบ TCAS" content="หลักสูตรการสอนภาษาอังกฤษสำหรับเด็ก ของโรงเรียนสอนภาษาอังกฤษ เอ็ด ดู เฟิร์สท์ EduFirst เหมาะสำหรับเด็กนักเรียน ตั้งแต่ อายุ 5 – 14 ปี หรื... " image="eng1.jpg"/>
            <Course title="เรียนภาษาอังกฤษฟรี คอร์สภาษาอังกฤษพื้นฐาน ตั้งแต่เริ่มต้นใหม่" content="คอร์สเรียนภาษาอังกฤษพื้นฐาน เรียนฟรี ปูพื้นฐานใหม่ตั้งแต่เริ่มต้น เข้าใจง่าย สามารดูคอร์สเรียนอื่นๆที่ www.unf..." image="eng2.jpg"/>
            <Course title="โรงเรียนสอนภาษา NYC School คอร์สภาษาอังกฤษพื้นฐาน" content="เรียนฟรี 12 คอร์สเรียนภาษาอังกฤษ สอนตั้งแต่พื้นฐาน และอีกหลายสาขาอาชีพ ใครที่อยากพัฒนาตัวเองต้อง..." image="eng3.jpg"/>
            <Course title="เรียนฟรี 12 คอร์สเรียนภาษาอังกฤษ สอนตั้งแต่พื้นฐาน และอีกหลายสาขาอาชีพ" content="📣 เรียนฟรี 12 คอร์สเรียนภาษาอังกฤษ สอนตั้งแต่พื้นฐาน และอีกหลายสาขาอาชีพ ใครที่อยากพัฒนาตัวเองต้องเรียน ช่วยอัพเงินได้ ..." image="eng4.jpg"/>
            </div>
    </div>

     );
}

export default Home;
