import React from 'react';
import styles from './assets/stylesheets/main.css';
import ReactVideo from 'react.video';

export default class Hello extends React.Component{
	render(){
		return (
				<div className={styles.singbox}>
				<ReactVideo
        	ref={'VideoComp'}
        	cls={'custom-video'} 
        	muted={true}
        	autoPlay={true}
        	loop={true}
        	controls={false}
        	src={'http://etaheri.github.io/output.webm'} >
      	</ReactVideo>
			  </div>
		)
	}
}


// 'use strict';

// module.exports = function () {
// 	var element = document.createElement('h1');

// 	element.innerHTML = 'Hello World';

// 	return element;
// }
					// <video loop="" autoPlay="" muted="" id="intro-video">
		   //      <source src="http://etaheri.github.io/output.webm" type="video/webm" />
			  //   </video>