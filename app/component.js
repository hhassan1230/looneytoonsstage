import React from 'react';
import styles from './assets/stylesheets/main.css';
import ReactVideo from 'react.video';

export default class Sing extends React.Component{

	constructor (props) {
    super(props);
    this.state = {
    	isPlaying: false,
      muted: false,
      instruction: 'idie',
      autoPlay: true,
      loop: true,
      controls: false,
      grandfinally: false,
      position: {x: 0, y: 0},
      videoUrl: 'http://hhassan1230.github.io/CodePenImgs/imagesLesson1/TIEADJUSTMENTNERVOUS.m4v'
    };
  }


  play = (event) => {
  	let { clientX, clientY } = event;
    this.setState({ 
      isPlaying: true,
      position: {x: clientX, y: clientY}, 
      videoUrl: 'http://hhassan1230.github.io/CodePenImgs/imagesLesson1/normalsing.m4v'
    });
  }
  finally = () =>{
  	this.setState({
  		videoUrl: 'http://hhassan1230.github.io/CodePenImgs/imagesLesson1/finally.m4v',
  		loop: false,
  		grandfinally: true
  	})
  }
  stop = () => {
    this.setState({ 
      isPlaying: false,
      position: {x: 0, y: 0},
      grandfinally: false,
      loop: true,
      videoUrl: 'http://hhassan1230.github.io/CodePenImgs/imagesLesson1/TIEADJUSTMENTNERVOUS.m4v'
    });
  }

  changeTone = (event) => {
  	let { clientX, clientY } = event;
    let { top, right, bottom, left } = event.target.getBoundingClientRect();
    if (this.state.position.y > (clientY + 150)) {
    	// low
    	if (!this.state.grandfinally) {
		    this.setState({
		  		videoUrl: 'http://hhassan1230.github.io/CodePenImgs/imagesLesson1/normalsing2.m4v'
		  	})
    	}
    } else if (this.state.position.y < (clientY - 150)) {
    	// high
    	if (!this.state.grandfinally) {
	    	this.setState({
		  		videoUrl: 'http://hhassan1230.github.io/CodePenImgs/imagesLesson1/normalsing3.m4v'
		  	})
    	}
    }

    
  }

  handlePlaying = () => {
    return this.state.videoUrl;
  }

	render(){
		return (
			<div>
        <pre>{JSON.stringify(this.state.position)}</pre>
  			<div className={styles.videoContainer} 
  			 onMouseEnter={this.play}         
  			 onMouseLeave={this.stop}
  			 onMouseUp={this.finally}
          onMouseMove={this.changeTone} >

  				   <ReactVideo
                className={styles.video}
                ref={'VideoComp'}
                cls={'custom-video'} 
                muted={false}
                autoPlay={true}
                loop={this.state.loop}
                controls={false}
                src={this.handlePlaying()} >
        	 </ReactVideo>
  			 </div>
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