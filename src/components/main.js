import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
import Slider from './slider'

const Repair = styled.div`
	display: block;
	width: 427px;
	color: #ffffff;
	font-family: Roboto;
	font-size: 40px;
	font-weight: 700;
	line-height: 50px;
	
	span {
		display: block;
		font-size: 24px;
		line-height: 30px;	
	}
`
const LightText = styled.div`
	display: block;
	width: 486px;
	color: #ffffff;
	font-size: 18px;
	font-weight: 300;
	line-height: 28px;
	margin-top: 54px;
`
const CallBtn = styled.button`
	width: 245px;
	height: 64px;
	margin-top: 32px;
	background-color: #ffa14b;
	color: #ffffff;
	border: none;
	border-radius: 30px;
	font-size: 18px;
	font-weight: bold;
	line-height: 24px;
`

class Main extends React.Component {
	render() {
		return (
			<Row>
				<Col lg={5}>
					<Repair>
						Качественный ремонт
						<span>iphone за 35 минут и гарантия 1 год</span>
					</Repair>
					<LightText>
						Оставьте заявку на бесплатную диагностику без очереди,
						и получите защитное стекло, стоимостью 1000 рублей,
						с установкой в подарок!
					</LightText>
					<CallBtn>
						Отправить заявку!
					</CallBtn>
				</Col>
				<Col lg={6} lgOffset={1}>
					<Slider>
						
					</Slider>
				</Col>
			</Row>
		)
	}
}

export default Main