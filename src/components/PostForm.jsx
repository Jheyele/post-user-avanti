import { useState } from 'react'
import { savePost } from '../services/api';
import { useNavigate } from 'react-router-dom';

function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(image)
    const data = {
        title,
        content,
        image,
        userId: "98413332-7975-4d6a-b409-cdacf9220bb1"
    }
    await savePost(data);
    navigate('/')
  }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
     <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label>Title</label>
            <input 
                className='form-control'
                type='text' 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div className="mb-3">
            <label>Content</label>
            <input
                type='text' 
                className='form-control'
                value={content} 
                onChange={(e) => setContent(e.target.value)}
            />
        </div>
        <div className="mb-3">
            <label>Image</label>
            <input
                className='form-control'
                type='file' 
                onChange={(e) => setImage(e.target.files[0])}
            />
        </div>
        <button className="btn btn-primary" type="submit">Save</button>
     </form>
    </div>
  )
}

export default PostForm
