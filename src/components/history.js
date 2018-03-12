import React from 'react';
import './history.css';

export default function History(props){
	const mapHistory = props.history.map((item,index)=>
		<li key={index}>
			{item}
		</li>
	);

	return <ul>{mapHistory}</ul>;
}