import { useState, useEffect } from "react";
import Input from "../component/input";
import Axios from 'axios';
import {useHistory} from 'react-router-dom';
import authService from "../services/auth.service";
const Register = () => {
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const register = async() => {
      authService.register(username, password, firstname, lastname, phone).then(
        () => {
          alert('Register Succesful')
          history.push("/")
          window.location.reload();
        })
    }
    useEffect(()=>{
        document.body.style.backgroundColor = "#E1E1E1"
        document.title = 'Brainify';
    })
    return ( <div style={styles.container} className="mt-12">
        <div className="bg-white p-24 rounded-lg px-48 w-2/4">
        <h1 className="text-4xl text-center font-bold">Register</h1>
            <form className="pt-5">
          <Input
            label=""
            name="Enter you firstname"
            type=""
            value={firstname}
            onChange={(v) => setFirstname(v.target.value)}
          />
          <Input
            label=""
            name="Enter you lastname"
            type=""
            value={lastname}
            onChange={(v) => setLastname(v.target.value)}
          />
          <Input
            label=""
            name="Enter you phone number"
            type=""
            value={phone}
            onChange={(v) => setPhone(v.target.value)}
          />
          <Input
            label=""
            name="Enter username"
            type=""
            className="px-14"
            value={username}
            onChange={(v) => setUsername(v.target.value)}
          />
          <Input
            label=""
            name="Enter the password"
            type="password"
            value={password}
            onChange={(v) => setPassword(v.target.value)}
          />
          <Input
            label=""
            name="Re enter the password"
            type="password"
          />
          <div>
          </div>
        </form>
        <button
            className="bg-blue-500 py-2 rounded-lg text-white hover:bg-blue-600 active:bg-blue-700 w-full mt-4"
            onClick={register}
          >
            Register
          </button>

        </div>
    </div>
    );
}
const styles = {
    container: {
        width : "100%",
        height : "100%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E1E1E1'

    },
    logo : {
        width : "50px",
        height : "50px"
    },
};
export default Register;
