import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Header from './components/header'
import Menu from './components/menu'
import Main from './components/main'

const url = process.env.PUBLIC_URL + '/img/bg.PNG';
const MenuWrapper = styled.header`
	height: 89px;
	padding-top: 20px;
`
const HeaderWrapper = styled.div`
	width: 100%;
	height: 49px;
	background-color: #242424;
	opacity: 0.8;
`
const MainWrapper = styled.main`
	height: 600px;
	padding-top: 130px;
	background: url(${url}) no-repeat;
	background-size: cover;
`
class App extends Component {
  render() {
    return (
      <div className="App">
      	<HeaderWrapper>
      		<Grid>
      			<Header/>
      		</Grid>
      	</HeaderWrapper>
      	<MenuWrapper>
      		<Grid>
      			<Menu/>
      		</Grid>
      	</MenuWrapper>
      	<MainWrapper>
      		<Grid>
      			<Main/>
      		</Grid>
      	</MainWrapper>
      </div>
    );
  }
}

export default App;
