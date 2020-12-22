import React, { useContext, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context';
import axios from 'axios';
import PostPicture from './PostPicture';

export default function PostView({ match }) {
    const [edit, setEdit] = useState(false);
    const [value, setValue] = useState('');
    
    
    let history = useHistory();
    const { data } = useContext(Context);
    const item = data.find(item => item.id === Number(match.params.id));
    const inputValue = useRef(item.content);
    const handleDelete = () => {
        axios.delete(`http://localhost:7777/posts/${item.id}`)
            .then(function (response) {
                history.push('/');
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const handleEdit = () => {
        setValue(inputValue.current);
        setEdit(true);
    }

    
    const handleEditSave = () => {
        axios.post('http://localhost:7777/posts', { id: item.id, content: value })
        .then(function (response) {
          inputValue.current = value
          setEdit(false);
         
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    if (!edit) {
        return (
        
            <div>
                <div><button onClick = {() => history.push('/')}>V</button></div>
                <PostPicture item={item} />
                <div className = 'content'>{inputValue.current}</div>
                <button onClick = {handleEdit}>Изменить</button>
                <button onClick={handleDelete}>Удалить</button>
            </div>
        )
    } else {
        return (
        
            <div>
                <div>Редактировать публикацию<button onClick = {() => setEdit(false)}>X</button></div>
                <PostPicture item={item} />
                <input  type = 'text' value = {value} onChange = {(e) => setValue(e.target.value)}></input>
                <button onClick = {handleEditSave}>Сохранить</button>
            </div>
        )
    }
   


}