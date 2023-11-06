import {useEffect, useState}  from "react"
import esfera from "./4estrellas"

const Root = () => {
    const [post,setPost] = useState('');
    useEffect(()=>{
        const postJSON = localStorage.getItem("post");
        const postArray = JSON.parse(postJSON);
        setPost(postArray);
    });
    return (
        <>
        <header>
            <img src={esfera}></img>
        </header>
        </>
    )
}
export default Root;