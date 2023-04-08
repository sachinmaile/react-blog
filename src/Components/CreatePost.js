import { useFormInput } from "../hooks";
import { useState } from "react";
import { auth, db } from '../firebase';

function CreatePost(){
    const title=useFormInput('');
    const subTitle=useFormInput('');
    const content=useFormInput('');
    function handleSubmit(e){
        e.preventDefault();
        db.collection('post').add({
            title:title.value,
            content:content.value,
            subTitle:subTitle.value,
            createdAt:new Date()
        });
    }
    return (
        <div className="create-post">
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-feed">
                    <label>Title</label>
                    <input {...title}></input>
                </div>
                <div className="form-feed">
                    <label>SubTitle</label>
                    <input {...subTitle}></input>
                </div>
                <div className="form-feed">
                    <label>Content</label>
                    <input {...content}></input>
                </div>
            </form>
        </div>
    )
}
export default CreatePost;