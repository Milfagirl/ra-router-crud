
import { NavLink } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import Context from './../context';
import axios from 'axios';
import Post from './Post';
export default function PostList(props) {
  const { changeData, data } = useContext(Context)
  
  useEffect(() => {
    axios.get('http://localhost:7777/posts')
      .then(function (response) {
        changeData(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  // eslint-disable-next-line
  }, [])
  return (
    <div className='wrapper-list'>
      <div className='wrapper-list-button'>
        <NavLink to='/posts/new'><button>Создать</button></NavLink>
      </div>
       <Post data={data} />
    </div>
  )

}