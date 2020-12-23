import React from 'react';
import { gsap } from 'gsap/all';
import { Plus } from 'react-feather';

class AboutButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
    };

    this.tooltipRef = null;
    this.textRef = null;
    this.timeline = gsap.timeline({ paused: true });
  }

  componentDidMount = () => {
    this.toolTipAnimation();
	}

  onMouseEnterHandler = () => {
    this.setState({isShown: true});
    this.timeline.play();
  }

  onMouseLeaveHandler = () => {
    this.setState({isShown: false});
    this.timeline.reverse();
  }

  toolTipAnimation = () => {
    gsap.set(this.tooltipRef, { width: 0, autoAlpha: 0, });
    gsap.set(this.textRef, { opacity: 0, });

    this.timeline
      .to(this.tooltipRef, { 
        width: 'auto', 
        autoAlpha: 1, 
        duration: 0.5, 
      })
      .to(this.textRef, { 
        opacity: 1, 
        duration: 0.250, 
      });
  }

  /**
   * @desc Callback to pass data (selected interest) to parent
   */
  setInterest = () => {
    // On click stop tooltip animation
    // this.timeline.kill();
    // this.timeline.pause(); 
    this.props.handleClick(this.props.interest);
    // this.props.handleClick(this.props.index);
  }

  render() {
    return (
      <button 
        className="interest-btn open  pulse" 
        data-target={'#' + this.props.interest} 
        type="button" 
        onClick={this.setInterest}
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}>
        <div className="tooltip" ref={div => this.tooltipRef = div}>
          <span className="text" ref={span => this.textRef = span}>{this.props.interest}</span>
        </div>
        <Plus />
      </button>
    );
  }

}

export default AboutButton;