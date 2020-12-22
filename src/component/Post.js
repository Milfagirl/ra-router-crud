import { NavLink } from 'react-router-dom';
import PostPicture from './PostPicture';

export default function Post(props) {
    return (
        props.data.map(item => {
            return (
                <NavLink to={`/posts/${item.id}`} >
                <div key={item.id} className='post'>
                   
                        <PostPicture item={item} />
                        <div className = 'content'>{item.content}</div>
                   
                </div>
                </NavLink>
            )
        })
    )
}
