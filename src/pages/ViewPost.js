import { useNavigate, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { useState, useEffect } from "react";
import axios from "axios";
import useUser from "../hooks/userInfo";

const ViewPost = () => {
    const [postInfo, setPostInfo] = useState({ username: '', title: '', copy: '' });
    const { postId } = useParams();
    const { user } = useUser();
    
    const nav = useNavigate();

    !user && nav('/');

    useEffect(() => {
        const loadPostData = async () => {
            const idToken = user && await user.getIdToken();
            const headers = idToken ? { authtoken: idToken } : {};
            const response = await axios.post('http://localhost:8000/getPost', {
                title: postId,
                headers
            });
            const postInfo = response.data;
            setPostInfo( postInfo );

            if(!postInfo) {
                return <NotFound />
            }
        }
        loadPostData();
    }, [postId, user])

    const deletePost = async () => {
        const idToken = user && await user.getIdToken();
        const headers = idToken ? { authtoken: idToken } : {};

        try {
            const response = await axios.post('http://localhost:8000/deletePost', {
                title: postInfo.title
            }, {
                headers
            });

            nav('/yourposts');
        } catch(e) {
            // TODO - handle the error
        }
    }

    const currentUser = user ? JSON.stringify(user.email).replaceAll('"','') : "";

    console.log("==============================");
    console.log("currentUser = " + currentUser);
    console.log("postInfo.username" + postInfo.username);
    console.log("==============================");

    return (
        <>
            <h3>{postInfo.title}</h3>
            <p>{postInfo.copy}</p>
            <p className="author">Posted by {postInfo.username}</p>
            {
                (currentUser === postInfo.username) && <p className="deleteBtn" onClick={deletePost}>Delete post</p>
            }
        </>
    )
}

export default ViewPost;