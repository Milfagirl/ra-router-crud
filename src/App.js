import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, {useState} from 'react'
import Context from './context';
import PostList from './component/PostList';
import NewPost from './component/NewPost';
import PostView from './component/PostView';
import './App.css';


function App() {
  const [data, setData] = useState([])  //массив постов
  
  const changeData = (value) => {setData(value)}
  
  return (
    <Context.Provider value = {{changeData, data}}>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route exact path="/posts/new" component={NewPost} />
          <Route exact path="/posts/:id" component={PostView} /> 
        </Switch>
      </div>
    </Router>
    </Context.Provider>
    )

}

export default App;
