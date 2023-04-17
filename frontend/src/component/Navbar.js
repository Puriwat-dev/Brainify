import authService from "../services/auth.service";
import {useHistory} from 'react-router-dom';

const Navbar = () => {
    const history = useHistory();
    const state = {
        currentUser: authService.getCurrentUser()
    }
    const {currentUser} = state;
    const handleLogout =  (event) =>{
        authService.logout();
        history.push("/");
    }
    return (
        <div className="flex justify-between border-b py-4 px-8">
            <div className="flex items-center">
                <a href="/home">
                <img src={require("../image/brainify.png")} alt="" width="75px"/>
                </a>
            <a className="caveat ml-4 text-5xl" href="/home">Brainify</a>
            </div>
            <div className="flex items-center">
                <button className="mr-6 bg-red-300 px-4 py-2 rounded-xl" onClick={handleLogout}>Logout</button>
                <div className="mr-6 text-2xl" style={{color : "#0F567B"}}>
                Welcome, {currentUser.firstname} {currentUser.lastname}
                </div>
            <a href="/home" className="mr-6 text-2xl">Home</a>
            <a href="/course" className="mr-6 text-2xl">Course</a>
            <a href="/question" className="text-2xl">Question</a>
            </div>
        </div>
     );
}

const styles = {
    headering: {
        fontSize: "20px",
        color: "red",
    },
};
export default Navbar;
