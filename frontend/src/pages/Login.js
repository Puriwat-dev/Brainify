import { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom';
import Input from "../component/input";
import Axios from "axios";
import AuthService from "../services/auth.service";
const Login = () => {
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    useEffect(()=>{
        document.body.style.backgroundColor = "#E1E1E1"
        document.title = 'Brainify';
    })
    const handleLogin = async (event) => {
      setMessage("");
      AuthService.login(username, password).then(
        () => {
          history.push("/home")
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setMessage(resMessage);
        }
      );
    }
    return ( <div style={styles.container} className="mt-12">
        <div className="bg-white p-24 rounded-lg">
        <h1 className="text-4xl text-center font-bold caveat">Brainify</h1>
        <img src={require("../image/brainify.png")} alt="" width="200px" className="my-12"/>
            <form className="pt-5">
          <Input
            label=""
            name="Username"
            type=""
            value={username}
            onChange={(v) => setUsername(v.target.value)}
          />
          <Input
            label=""
            name="Password"
            type="password"
            value={password}
            onChange={(v) => setPassword(v.target.value)}
          />
          <div>
          </div>
        </form>
        <button
            className="bg-blue-500 px-4 py-2 rounded-full text-white hover:bg-blue-600 active:bg-blue-700"
            onClick={handleLogin}
          >
            Login
          </button>
          <a
            type="submit"
            className="bg-blue-500 px-4 py-2 rounded-full text-white hover:bg-blue-600 active:bg-blue-700 ml-4"
            href="/register"
          >
            Register
          </a>
            {message && (
              <div className="mt-4">
              <div className="text-red-600">
                {message}
              </div>
            </div>
            )}
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
export default Login;
