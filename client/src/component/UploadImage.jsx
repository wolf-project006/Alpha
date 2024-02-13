import axios from 'axios';
import React, { useState } from 'react';

function UploadImage(){
    const preset_key = "kmoeini";
    const cloud_name = "dcxutsge5";
    const [image, setImage] = useState();

    function handleFile(event) {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append("upload_preset", preset_key);
        axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
        .then(res => setImage(res.data.secure_url))
        .catch( err => console.log(err));
    }

    return (
        <>
        <input type = "file" name = "image" onChange = {handleFile}></input>
        <br></br>
        <img src = {image} />
        </>
    )
}

export default UploadImage;