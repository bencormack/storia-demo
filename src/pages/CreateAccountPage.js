import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const CreateAccountPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [err, setErr] = useState('');

    const nav = useNavigate();

    const createAccount = async () => {
        try {
            if (password !== confirmPassword) {
                setErr('Passwords do not match.');
                return;
            }
            await createUserWithEmailAndPassword(getAuth(), email, password);
            nav('/yourposts');
        } catch(e) {
            setErr(e.message);
        }
    }

    return (
        <>
            <h3>Create Account</h3>
            {err && <p>{err}</p>}
            <input className="formElement" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input className="formElement" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} type="password" />
            <input className="formElement" placeholder="Confirm password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type="password" />
            <button style={{display: "block", margin: "10px auto", backgroundColor: "white",border: "none", padding: "10px", borderRadius: "5px"}} onClick={createAccount}>Create account</button>
            <Link to="/login">Have an account? Log in here.</Link>
        </>
    )
}

export default CreateAccountPage;