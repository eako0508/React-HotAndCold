import React from 'react';
import './count.css';

export default function Count(props){
	const count = <span>{props.counter}</span>;
	return <p id='count'>guess #{count}!</p>;
}