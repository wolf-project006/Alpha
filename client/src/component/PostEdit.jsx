import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; //Import styles

const PostEdit = () => {
    const [content, setContent] = useState('');

    const handleChange = (value) => {
        setContent(value);
      };
    
    return (
        <>
        <ReactQuill 
          theme="snow"
          value={content}
          onChange={handleChange}
        />
      </>
    )
}

export default PostEdit;