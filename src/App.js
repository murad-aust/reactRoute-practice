import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Friend from './Components/Friend/Friend';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [friends, setFriends] = useState([])
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriends(data))
  },[])
  return (
    <div>
     <h1>Friends: {friends.length}</h1>
     {
       friends.map(friend => <Friend friend={friend}></Friend>)
     }
    </div>
  );
}

export default App;
