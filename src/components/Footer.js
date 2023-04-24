import { Link, useNavigate } from "react-router-dom";
import useUser from "../hooks/userInfo";
import { getAuth, signOut } from "firebase/auth";

const Footer = () => {
    const { user } = useUser();
    const nav = useNavigate();

    function signUserOut() {
        const auth = getAuth();
        signOut(auth).then(() => {
            nav('/');
        }).catch((error) => {
            // An error happened.
        });
    }
    
    return (
        <footer>{user ? 
            <><p style={{ margin: "0", cursor: "pointer" }} onClick={signUserOut}>{/* JSON.stringify(user.email).replaceAll('"','') */}Sign Out</p></> : 
            <Link to='/login'>Log In / Create Account</Link>}</footer>
    )
}

export default Footer;