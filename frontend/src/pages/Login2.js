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
        document.body.style.backgroundColor = "#F9F7F7"
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
    return ( <div>
        <section class="">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-7xl font-semibold text-gray-900 caveat" style={{color : "#112D4E"}}>
          <img class="w-24 mr-2" src={require("../image/brainify.png")} alt="logo"/>
          Brainify
      </a>
      <div class="w-full bg-white rounded-xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8 rounded-xl"  style={{backgroundColor : "#3F72AF"}}>
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl " style={{color : "#F9F7F7"}}>
                  Sign in to your account
              </h1>
              <div class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 " style={{color : "#F9F7F7"}}>Username</label>
                      <input name="email" id="email" class=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400" placeholder="Your username" required=""
                      value={username}
                      onChange={(v) => setUsername(v.target.value)}
                      />
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 " style={{color : "#F9F7F7"}}>Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""  value={password}
            onChange={(v) => setPassword(v.target.value)}/>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500" style={{color : "#F9F7F7"}}>Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium hover:underline" style={{color: "white"}}>Forgot password?</a>
                  </div>
                  <button class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{backgroundColor: "#112D4E"}} onClick={handleLogin}>Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="/register" class="font-medium hover:underline" style={{color: "white"}}>Sign up</a>
                  </p>
              </div>
          </div>
      </div>
  </div>
</section>
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
