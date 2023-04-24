import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    const nav = useNavigate();

    const login = async () => {
        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            nav('/yourposts');
        } catch(e) {
            setErr(e.message);
        }
        
    }

    return (
        <>
            <h3>Log in</h3>
            {err && <p>{err}</p>}
            <input className="formElement" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input className="formElement" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} type="password" />
            <button style={{display: "block", margin: "10px auto", backgroundColor: "white",border: "none", padding: "10px", borderRadius: "5px"}} onClick={login}>Log in</button>
            <Link to="/createaccount">Create account</Link>
        </>
    )
}

export default LoginPage;