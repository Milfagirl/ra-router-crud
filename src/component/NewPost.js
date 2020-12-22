import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

export default function NewPost(props) {
  const [newInputPost, setNewInputPost] = useState('');
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:7777/posts', { id: 0, content: newInputPost })
      .then(function (response) {
        setNewInputPost('');
        history.push('/');
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const handleChange = (e) => {
    setNewInputPost(e.target.value);
  }
  const handleClickDelete = () => {
    history.push('/');
  }
  return (
    
    <form onSubmit={handleSubmit}>
      <button onClick={handleClickDelete}>X</button>
      <input type='text' onChange={handleChange} value={newInputPost}></input>
      <button onSubmit={handleSubmit}>Опубликовать</button>
    </form>
  )
}