import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../hooks/userInfo";
import axios from "axios";

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [postBody, setPostBody] = useState('');

    const { user } = useUser();
    const nav = useNavigate();
    !user && nav('/');

    const sendPost = async () => {
        const idToken = user && await user.getIdToken();
        const headers = idToken ? { authtoken: idToken } : {};

        if (title.trim() !== '' && postBody.trim() !== '') {
            try {
                const response = await axios.post('http://localhost:8000/addPost', { 
                    username: JSON.stringify(user.email),
                    title: title,
                    copy: postBody
                }, {
                    headers
                });
    
                nav('/yourposts');
            } catch(e) {
                //setErr(e.message);
            }
        }
        
    }

    return (
        <>
            <h3>Create Post</h3>
            <input className="formElement" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
            <textarea className="formElement formTextArea" placeholder="Post" value={postBody} onChange={e => setPostBody(e.target.value)} rows="8"/>
            <button style={{display: "block", margin: "10px auto", backgroundColor: "white",border: "none", padding: "10px", borderRadius: "5px"}} onClick={sendPost}>Post</button>
        </>
    )
}

export default CreatePost;