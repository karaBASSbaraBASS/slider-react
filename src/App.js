import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Button';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <SayFullName name='ivan' surname='petrychenko' link='vk.com' />
        <SayFullName name='anna' surname='volkova' link='vk.com' />
        <SayFullName name='jon' surname='jackson' link='vk.com' />
      </div>
    );
  }
}

function SayFullName(props) {
  return(
    <div>
      <h2>My name is {props.name}. My surname name is {props.surname}</h2>
      <a href={props.link}>
        profile link
      </a>
    </div>
  )
}

export default App;
