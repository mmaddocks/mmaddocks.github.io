import React from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap/all';
import { Home } from 'react-feather';

// Components
import AboutButton from './AboutButton';
import AboutInterest from './AboutInterest';

// Images
import HeroImage from '../../assets/mountain-bg.jpg';
import HeroImageClipping from '../../assets/mountain-bg-clipping.png';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      interests: [
        {
          name: 'climbing',
          svgTitle: <svg xmlns="http://www.w3.org/2000/svg" width="944.355" height="228.787" viewBox="0 0 944.355 228.787" fill="currentColor"><path id="Path_6" data-name="Path 6" d="M165.926-107.6H124.733a35.7,35.7,0,0,0-3.378-11.452,27.846,27.846,0,0,0-6.756-8.733,29.447,29.447,0,0,0-9.928-5.561,39.288,39.288,0,0,0-12.646-1.936q-12.276,0-21.132,6.014T57.3-111.881q-4.737,11.369-4.737,27.517,0,16.807,4.82,28.135T70.976-39.175q8.774,5.726,20.8,5.726a41.331,41.331,0,0,0,12.317-1.73,30.2,30.2,0,0,0,9.8-5.067,27.891,27.891,0,0,0,7-8.156,33.413,33.413,0,0,0,3.831-10.916l41.193.247a62.876,62.876,0,0,1-6.467,22.08A70.623,70.623,0,0,1,144.67-17.178,69.4,69.4,0,0,1,121.808-2.966q-13.47,5.273-30.854,5.273-22.9,0-40.987-10.092T21.42-37.239Q10.957-56.6,10.957-84.364q0-27.847,10.628-47.207t28.753-29.412q18.125-10.051,40.616-10.051a90.981,90.981,0,0,1,28.341,4.243,69.781,69.781,0,0,1,22.9,12.358,63.673,63.673,0,0,1,16.065,19.9A72.685,72.685,0,0,1,165.926-107.6Zm54.24-61.131V0H179.879V-168.727ZM236.426,0V-126.545h40.287V0Zm20.267-141.293a20.826,20.826,0,0,1-14.665-5.643,17.91,17.91,0,0,1-6.1-13.635,17.823,17.823,0,0,1,6.1-13.553,20.722,20.722,0,0,1,14.582-5.643,20.681,20.681,0,0,1,14.624,5.643,17.877,17.877,0,0,1,6.055,13.553,17.965,17.965,0,0,1-6.055,13.635A20.577,20.577,0,0,1,256.693-141.293ZM292.973,0V-126.545h38.31v23.233h1.4a36,36,0,0,1,13.347-18.207q9.392-6.673,22.409-6.673,13.182,0,22.574,6.756a29.6,29.6,0,0,1,11.946,18.125h1.318A33.045,33.045,0,0,1,418.117-121.4q10.3-6.8,24.3-6.8,17.96,0,29.165,11.493t11.2,31.513V0H442.5V-75.96q0-9.474-4.861-14.459A16.827,16.827,0,0,0,425.038-95.4q-8.321,0-13.058,5.4t-4.737,14.459V0H368.521V-76.372q0-8.815-4.778-13.923T351.137-95.4a17.249,17.249,0,0,0-9.31,2.513,16.979,16.979,0,0,0-6.3,7.126,24.414,24.414,0,0,0-2.266,10.875V0ZM498.556,0V-168.727h40.287v63.849h.824A43.647,43.647,0,0,1,546.711-116a35.056,35.056,0,0,1,11.7-8.774,39.215,39.215,0,0,1,17.1-3.419,47.011,47.011,0,0,1,24.675,6.92q11.493,6.92,18.578,21.338t7.085,36.744q0,21.5-6.8,36t-18.29,21.75a46.82,46.82,0,0,1-25.5,7.25A40.312,40.312,0,0,1,558.7-1.318a35.567,35.567,0,0,1-11.74-8.239,39.127,39.127,0,0,1-7.291-10.957h-1.236V0Zm39.463-63.273a51.986,51.986,0,0,0,2.76,17.8,25.854,25.854,0,0,0,7.991,11.74,19.562,19.562,0,0,0,12.564,4.161,19.519,19.519,0,0,0,12.605-4.161,25.46,25.46,0,0,0,7.868-11.74,53.447,53.447,0,0,0,2.678-17.8,52.715,52.715,0,0,0-2.678-17.713A25.347,25.347,0,0,0,573.981-92.6a19.6,19.6,0,0,0-12.646-4.119,19.911,19.911,0,0,0-12.605,4.037,25.178,25.178,0,0,0-7.95,11.534A51.82,51.82,0,0,0,538.019-63.273ZM637.736,0V-126.545h40.287V0ZM658-141.293a20.826,20.826,0,0,1-14.665-5.643,17.91,17.91,0,0,1-6.1-13.635,17.823,17.823,0,0,1,6.1-13.553,20.723,20.723,0,0,1,14.582-5.643,20.681,20.681,0,0,1,14.624,5.643,17.877,17.877,0,0,1,6.055,13.553,17.965,17.965,0,0,1-6.055,13.635A20.577,20.577,0,0,1,658-141.293ZM734.57-72.17V0H694.283V-126.545h38.31v23.233h1.4a35.738,35.738,0,0,1,14.335-18.249q10.134-6.632,24.139-6.632,13.347,0,23.192,5.973a40.821,40.821,0,0,1,15.324,16.642q5.479,10.669,5.4,24.922V0H776.093V-72.747q.082-10.545-5.314-16.477t-14.953-5.932a22.067,22.067,0,0,0-11.163,2.76,18.5,18.5,0,0,0-7.415,7.868A27.74,27.74,0,0,0,734.57-72.17ZM891.134,49.02q-18.043,0-30.895-4.943t-20.185-13.47a36.616,36.616,0,0,1-8.815-19.072l38.145-2.142a13.572,13.572,0,0,0,4,6.014,20.785,20.785,0,0,0,7.662,4.161A36.572,36.572,0,0,0,892.2,21.091q10.134,0,16.766-4.778T915.6.165V-22.08h-1.4a29.954,29.954,0,0,1-7.25,10.463,34.453,34.453,0,0,1-12.07,7.25A47.927,47.927,0,0,1,878.364-1.73,50.768,50.768,0,0,1,853.03-8.2q-11.493-6.467-18.372-20.1t-6.879-35.138q0-22.162,7.085-36.538t18.578-21.3a47.155,47.155,0,0,1,24.757-6.92,39.215,39.215,0,0,1,17.1,3.419A35.509,35.509,0,0,1,907.034-116a41.315,41.315,0,0,1,7,11.122h1.153v-21.668h40.122V.494q0,15.571-8.074,26.4T924.665,43.376Q910.165,49.02,891.134,49.02Zm1.236-80.08a20.349,20.349,0,0,0,12.523-3.872,24.41,24.41,0,0,0,7.992-11.122,48.262,48.262,0,0,0,2.8-17.384,51.192,51.192,0,0,0-2.76-17.754,25.048,25.048,0,0,0-7.991-11.493,19.955,19.955,0,0,0-12.564-4.037A19.772,19.772,0,0,0,879.682-92.6a25.211,25.211,0,0,0-7.868,11.575,52.073,52.073,0,0,0-2.678,17.589,49.587,49.587,0,0,0,2.719,17.384,24.021,24.021,0,0,0,7.868,11.122A20.439,20.439,0,0,0,892.37-31.06Z" transform="translate(-10.957 179.767)"/></svg>,
        },
        {
          name: 'skiing',
          svgTitle: <svg xmlns="http://www.w3.org/2000/svg" width="651.495" height="228.787" viewBox="0 0 651.495 228.787" fill="currentColor"><path id="Path_7" data-name="Path 7" d="M103.972-118.142q-.824-9.062-7.291-14.129t-18.413-5.067a36.488,36.488,0,0,0-13.182,2.06,17.306,17.306,0,0,0-7.909,5.643,13.912,13.912,0,0,0-2.719,8.2,11.9,11.9,0,0,0,1.524,6.673,15.741,15.741,0,0,0,4.943,5.067,35.588,35.588,0,0,0,7.868,3.831,82.162,82.162,0,0,0,10.381,2.884l14.5,3.3a102.992,102.992,0,0,1,22.121,7.25,60.511,60.511,0,0,1,16.148,10.793,42.013,42.013,0,0,1,9.928,14.418,48.44,48.44,0,0,1,3.46,18.29q-.082,15.983-8.074,27.435T114.311-3.955q-14.953,6.1-36.044,6.1-21.173,0-36.909-6.344T16.889-23.48Q8.156-36.415,7.909-56.187H46.96a25.617,25.617,0,0,0,4.366,13.594A23.919,23.919,0,0,0,62-34.355a41.175,41.175,0,0,0,15.777,2.8A39.362,39.362,0,0,0,91.82-33.778a20.351,20.351,0,0,0,8.939-6.179,14.594,14.594,0,0,0,3.213-9.062,12.654,12.654,0,0,0-2.966-8.2,23.08,23.08,0,0,0-8.857-5.932,95.954,95.954,0,0,0-15.2-4.655L59.318-71.923Q37.4-76.949,24.8-88.195T12.276-118.636q-.082-15.653,8.4-27.435t23.48-18.372q14.994-6.591,34.19-6.591,19.608,0,34.067,6.632t22.45,18.578q7.991,11.946,8.156,27.682ZM193.061-33.2l.165-48.031h5.6l35.591-45.313h45.642l-52.892,64.92H216.541ZM156.729,0V-168.727h40.287V0Zm78.6,0L202.206-52.562l26.528-28.588L281.873,0Zm49.956,0V-126.545h40.287V0Zm20.267-141.293a20.826,20.826,0,0,1-14.665-5.643,17.91,17.91,0,0,1-6.1-13.635,17.823,17.823,0,0,1,6.1-13.553,20.722,20.722,0,0,1,14.582-5.643,20.681,20.681,0,0,1,14.624,5.643,17.877,17.877,0,0,1,6.055,13.553,17.965,17.965,0,0,1-6.055,13.635A20.577,20.577,0,0,1,305.548-141.293ZM341.828,0V-126.545h40.287V0Zm20.267-141.293a20.826,20.826,0,0,1-14.665-5.643,17.91,17.91,0,0,1-6.1-13.635,17.823,17.823,0,0,1,6.1-13.553,20.722,20.722,0,0,1,14.582-5.643,20.681,20.681,0,0,1,14.624,5.643,17.877,17.877,0,0,1,6.055,13.553,17.965,17.965,0,0,1-6.055,13.635A20.577,20.577,0,0,1,362.095-141.293ZM438.661-72.17V0H398.374V-126.545h38.31v23.233h1.4a35.738,35.738,0,0,1,14.335-18.249q10.134-6.632,24.139-6.632,13.347,0,23.192,5.973a40.82,40.82,0,0,1,15.324,16.642q5.479,10.669,5.4,24.922V0H480.184V-72.747q.082-10.545-5.314-16.477t-14.953-5.932a22.068,22.068,0,0,0-11.163,2.76,18.5,18.5,0,0,0-7.415,7.868A27.74,27.74,0,0,0,438.661-72.17ZM595.225,49.02q-18.043,0-30.895-4.943t-20.185-13.47a36.616,36.616,0,0,1-8.815-19.072l38.145-2.142a13.572,13.572,0,0,0,4,6.014,20.785,20.785,0,0,0,7.662,4.161A36.571,36.571,0,0,0,596.3,21.091q10.134,0,16.766-4.778T619.694.165V-22.08h-1.4a29.954,29.954,0,0,1-7.25,10.463,34.453,34.453,0,0,1-12.07,7.25A47.927,47.927,0,0,1,582.455-1.73,50.768,50.768,0,0,1,557.121-8.2q-11.493-6.467-18.372-20.1T531.87-63.437q0-22.162,7.085-36.538t18.578-21.3a47.155,47.155,0,0,1,24.757-6.92,39.215,39.215,0,0,1,17.1,3.419A35.509,35.509,0,0,1,611.126-116a41.315,41.315,0,0,1,7,11.122h1.153v-21.668H659.4V.494q0,15.571-8.074,26.4T628.756,43.376Q614.256,49.02,595.225,49.02Zm1.236-80.08a20.349,20.349,0,0,0,12.523-3.872,24.41,24.41,0,0,0,7.992-11.122,48.264,48.264,0,0,0,2.8-17.384,51.2,51.2,0,0,0-2.76-17.754,25.049,25.049,0,0,0-7.992-11.493,19.955,19.955,0,0,0-12.564-4.037A19.772,19.772,0,0,0,583.773-92.6a25.211,25.211,0,0,0-7.868,11.575,52.073,52.073,0,0,0-2.678,17.589,49.587,49.587,0,0,0,2.719,17.384,24.021,24.021,0,0,0,7.868,11.122A20.439,20.439,0,0,0,596.461-31.06Z" transform="translate(-7.909 179.767)"/></svg>,
        },
        {
          name: 'surfing',
          svgTitle: <svg xmlns="http://www.w3.org/2000/svg" width="780.871" height="228.787" viewBox="0 0 780.871 228.787" fill="currentColor"><path id="Path_8" data-name="Path 8" d="M103.972-118.142q-.824-9.062-7.291-14.129t-18.413-5.067a36.488,36.488,0,0,0-13.182,2.06,17.306,17.306,0,0,0-7.909,5.643,13.912,13.912,0,0,0-2.719,8.2,11.9,11.9,0,0,0,1.524,6.673,15.741,15.741,0,0,0,4.943,5.067,35.588,35.588,0,0,0,7.868,3.831,82.162,82.162,0,0,0,10.381,2.884l14.5,3.3a102.992,102.992,0,0,1,22.121,7.25,60.511,60.511,0,0,1,16.148,10.793,42.013,42.013,0,0,1,9.928,14.418,48.44,48.44,0,0,1,3.46,18.29q-.082,15.983-8.074,27.435T114.311-3.955q-14.953,6.1-36.044,6.1-21.173,0-36.909-6.344T16.889-23.48Q8.156-36.415,7.909-56.187H46.96a25.617,25.617,0,0,0,4.366,13.594A23.919,23.919,0,0,0,62-34.355a41.175,41.175,0,0,0,15.777,2.8A39.362,39.362,0,0,0,91.82-33.778a20.351,20.351,0,0,0,8.939-6.179,14.594,14.594,0,0,0,3.213-9.062,12.654,12.654,0,0,0-2.966-8.2,23.08,23.08,0,0,0-8.857-5.932,95.954,95.954,0,0,0-15.2-4.655L59.318-71.923Q37.4-76.949,24.8-88.195T12.276-118.636q-.082-15.653,8.4-27.435t23.48-18.372q14.994-6.591,34.19-6.591,19.608,0,34.067,6.632t22.45,18.578q7.991,11.946,8.156,27.682Zm134.4,63.52v-71.923h40.2V0H240.186V-23.562h-1.318A36.658,36.658,0,0,1,224.574-5.149q-10.092,6.8-24.345,6.8A43.057,43.057,0,0,1,177.49-4.284a40.351,40.351,0,0,1-15.241-16.6q-5.437-10.669-5.52-25v-80.656h40.287V-53.8q.082,10.3,5.438,16.23t14.582,5.932a21.926,21.926,0,0,0,10.834-2.678,19.478,19.478,0,0,0,7.662-7.827A25.486,25.486,0,0,0,238.373-54.622ZM294.92,0V-126.545h39.134v23.068h1.318q3.46-12.523,11.287-18.661a28.658,28.658,0,0,1,18.207-6.138,46.492,46.492,0,0,1,5.767.371,35.665,35.665,0,0,1,5.52,1.112v35.014a38.472,38.472,0,0,0-7.538-1.565,68.156,68.156,0,0,0-8.28-.577,26.155,26.155,0,0,0-12.893,3.172,23.09,23.09,0,0,0-8.98,8.815,26.007,26.007,0,0,0-3.254,13.223V0ZM461.041-126.545v29.659h-81.4v-29.659ZM396.615,0V-132.972q0-14.665,5.52-24.345a35.176,35.176,0,0,1,15.324-14.5,50.738,50.738,0,0,1,22.656-4.82,93.938,93.938,0,0,1,15.859,1.277q7.456,1.277,11.081,2.266L460.629-143.6a33.72,33.72,0,0,0-5.4-1.236,38.884,38.884,0,0,0-5.973-.494q-7.085,0-9.722,3.131t-2.636,8.568V0ZM471.2,0V-126.545h40.287V0Zm20.267-141.293a20.826,20.826,0,0,1-14.665-5.643,17.91,17.91,0,0,1-6.1-13.635,17.823,17.823,0,0,1,6.1-13.553,20.722,20.722,0,0,1,14.582-5.643,20.681,20.681,0,0,1,14.624,5.643,17.877,17.877,0,0,1,6.055,13.553,17.965,17.965,0,0,1-6.055,13.635A20.577,20.577,0,0,1,491.471-141.293ZM568.038-72.17V0H527.751V-126.545h38.31v23.233h1.4A35.738,35.738,0,0,1,581.8-121.561q10.134-6.632,24.139-6.632,13.347,0,23.192,5.973a40.821,40.821,0,0,1,15.324,16.642q5.479,10.669,5.4,24.922V0H609.56V-72.747q.082-10.545-5.314-16.477t-14.953-5.932A22.067,22.067,0,0,0,578.13-92.4a18.5,18.5,0,0,0-7.415,7.868A27.74,27.74,0,0,0,568.038-72.17ZM724.6,49.02q-18.043,0-30.895-4.943t-20.185-13.47a36.616,36.616,0,0,1-8.815-19.072l38.145-2.142a13.572,13.572,0,0,0,4,6.014,20.785,20.785,0,0,0,7.662,4.161,36.571,36.571,0,0,0,11.163,1.524q10.134,0,16.766-4.778T749.07.165V-22.08h-1.4a29.954,29.954,0,0,1-7.25,10.463,34.453,34.453,0,0,1-12.07,7.25A47.927,47.927,0,0,1,711.831-1.73,50.768,50.768,0,0,1,686.5-8.2Q675-14.665,668.125-28.3t-6.879-35.138q0-22.162,7.085-36.538t18.578-21.3a47.155,47.155,0,0,1,24.757-6.92,39.215,39.215,0,0,1,17.1,3.419A35.509,35.509,0,0,1,740.5-116a41.315,41.315,0,0,1,7,11.122h1.153v-21.668H788.78V.494q0,15.571-8.074,26.4T758.133,43.376Q743.632,49.02,724.6,49.02Zm1.236-80.08a20.349,20.349,0,0,0,12.523-3.872,24.41,24.41,0,0,0,7.992-11.122,48.264,48.264,0,0,0,2.8-17.384,51.2,51.2,0,0,0-2.76-17.754A25.049,25.049,0,0,0,738.4-92.685a19.955,19.955,0,0,0-12.564-4.037A19.772,19.772,0,0,0,713.15-92.6a25.211,25.211,0,0,0-7.868,11.575A52.073,52.073,0,0,0,702.6-63.437a49.587,49.587,0,0,0,2.719,17.384,24.021,24.021,0,0,0,7.868,11.122A20.439,20.439,0,0,0,725.837-31.06Z" transform="translate(-7.909 179.767)"/></svg>,
        }
      ],
      showInterest: false,
      selectedInterest: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.stageAboutPage();
  };

  stageAboutPage = () => {
    // Set elements position
    gsap.set('.hero .title-container', { opacity: 0, translateY: 100, });
    gsap.set('.hero button', { opacity: 0 });

    // Init timeline
    this.AboutPageTimeline();
  };

  AboutPageTimeline = () => {
    // Timeline
    const timeline = gsap.timeline();
    
    // Title
    timeline.to('.hero .title-container', {translateY: 0, opacity: 1, duration: 0.5, delay: 0.5 });

    // Buttons
    timeline.fromTo('.hero button', { opacity: 0 }, { opacity: 1, duration: 0.5, stagger: 0.4 });

    return timeline;

  }
  
  /**
   * @desc handle click on interest button
   * @param {*} interest 
   */
  handleClick = (interest) => {
    this.setState({
      showInterest: true,
      // selectedInterest: interest,
    });
    this.setActiveInterest(interest);
  }

  /**
   * @desc set the active interest
   * @param {*} interest 
   */
  setActiveInterest = (interest) => {
    // setState is asynchronous
    // console.log will execute before state is updated
    this.setState({ selectedInterest: interest, }, () => { 
      // console.log('(About.js) selectedInterest:', this.state.selectedInterest);
    });
  }

  /**
   * Handle unmount of AboutInterest component
   */
  handleInterestUnmount = () => {
    this.setState({
      showInterest: false,
    });
  }

  render() {
    return (
      <div className="about  page">

        <section className="hero">
          <div className="hero__content">
    
            <div className="background-image">
              <img
                src={HeroImage} 
                alt="mountain" 
                onLoad={() => this.setState({isLoaded: true})}
              />
              <img 
                className="mountain-clipping" 
                src={HeroImageClipping} 
                alt="mountain"
              />
            </div>
        
            <div className="title-container">
              {/* <h1 className="title--about  title">about</h1>
              <h1 className="title--me  title">me</h1> */}

              <svg xmlns="http://www.w3.org/2000/svg" width="638.861" height="341.199" viewBox="0 0 638.861 341.199">
                <defs>
                  <linearGradient id="linear-gradient" x1="0.5" y1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                    <stop className="colour-stop-1" offset="0" stopColor="currentColor"/>
                    <stop className="colour-stop-2" offset="1" stopColor="currentColor"/>
                  </linearGradient>
                </defs>
                <g id="Group_1" data-name="Group 1" transform="translate(-602.074 -386.273)">
                  <path id="Path_4" data-name="Path 4" d="M50.091,2.389A52.3,52.3,0,0,1,28.506-1.854,34.118,34.118,0,0,1,13.553-14.459Q8.074-22.821,8.074-35.344q0-10.545,3.872-17.713A31.352,31.352,0,0,1,22.491-64.591a51.086,51.086,0,0,1,15.2-6.591,114.453,114.453,0,0,1,17.919-3.131q11.04-1.153,17.8-2.183t9.8-3.089a6.88,6.88,0,0,0,3.048-6.1v-.494q0-7.827-4.9-12.111t-13.882-4.284q-9.474,0-15.077,4.161a19.528,19.528,0,0,0-7.415,10.422l-32.46-2.636A44.394,44.394,0,0,1,22.244-110.6a47.154,47.154,0,0,1,18.743-13.017q11.493-4.572,26.652-4.572a81.452,81.452,0,0,1,20.226,2.472,53.331,53.331,0,0,1,17.219,7.662,37.484,37.484,0,0,1,11.9,13.305q4.366,8.115,4.366,19.4V0H88.071V-17.548h-.989A35.194,35.194,0,0,1,78.926-7.126a36.786,36.786,0,0,1-12.276,7A49.982,49.982,0,0,1,50.091,2.389ZM60.142-21.832a29.184,29.184,0,0,0,13.676-3.089,23.916,23.916,0,0,0,9.31-8.362A21.667,21.667,0,0,0,86.506-45.23V-58.659a17.944,17.944,0,0,1-4.49,1.936q-2.842.865-6.385,1.565t-7.085,1.236q-3.543.536-6.426.947a43.417,43.417,0,0,0-10.793,2.884,17.42,17.42,0,0,0-7.168,5.314,13.222,13.222,0,0,0-2.554,8.28q0,7.168,5.232,10.916T60.142-21.832ZM147.892,0V-168.727h35.1v63.438h1.071a46.527,46.527,0,0,1,6.714-10.422,35.342,35.342,0,0,1,11.534-8.9q7.126-3.584,17.754-3.584a47.767,47.767,0,0,1,25.54,7.209q11.7,7.209,18.7,21.668t7,36.209q0,21.173-6.8,35.714t-18.455,22A47.376,47.376,0,0,1,219.98,2.06q-10.216,0-17.342-3.378A35.542,35.542,0,0,1,190.98-9.845a42.389,42.389,0,0,1-6.92-10.422h-1.565V0Zm34.355-63.273a56.323,56.323,0,0,0,3.131,19.69,28.956,28.956,0,0,0,9.063,13.058,22.639,22.639,0,0,0,14.418,4.655,22.5,22.5,0,0,0,14.5-4.737,29.234,29.234,0,0,0,9.021-13.182,56.555,56.555,0,0,0,3.09-19.484,55.916,55.916,0,0,0-3.048-19.278,28.718,28.718,0,0,0-8.98-13.017,22.761,22.761,0,0,0-14.582-4.7A23.008,23.008,0,0,0,194.4-95.733a28.282,28.282,0,0,0-9.021,12.852A55.628,55.628,0,0,0,182.247-63.273ZM350.406,2.472q-19.2,0-33.161-8.2a55.4,55.4,0,0,1-21.544-22.9q-7.58-14.706-7.58-34.149,0-19.608,7.58-34.314A55.4,55.4,0,0,1,317.246-120q13.964-8.2,33.161-8.2t33.16,8.2a55.4,55.4,0,0,1,21.544,22.9q7.58,14.706,7.58,34.314,0,19.443-7.58,34.149a55.4,55.4,0,0,1-21.544,22.9Q369.6,2.472,350.406,2.472Zm.165-27.188A21.7,21.7,0,0,0,365.154-29.7a30.656,30.656,0,0,0,8.857-13.635,59.8,59.8,0,0,0,3.007-19.69,59.8,59.8,0,0,0-3.007-19.69,30.953,30.953,0,0,0-8.857-13.676,21.589,21.589,0,0,0-14.582-5.026,22.187,22.187,0,0,0-14.788,5.026,30.455,30.455,0,0,0-8.98,13.676,59.8,59.8,0,0,0-3.007,19.69,59.8,59.8,0,0,0,3.007,19.69,30.167,30.167,0,0,0,8.98,13.635A22.3,22.3,0,0,0,350.571-24.716ZM515.352-53.881v-72.665h35.1V0h-33.7V-22.986h-1.318A37.444,37.444,0,0,1,501.223-5.108q-9.928,6.756-24.18,6.756a42.645,42.645,0,0,1-22.327-5.767,39.378,39.378,0,0,1-15.036-16.395q-5.4-10.628-5.479-25.457v-80.574h35.1v74.313q.082,11.2,6.014,17.713t15.9,6.509a24.96,24.96,0,0,0,11.864-2.925,22.622,22.622,0,0,0,8.939-8.692Q515.435-45.395,515.352-53.881Zm129.026-72.665v26.364H568.171v-26.364Zm-58.906-30.318h35.1V-38.886a15.74,15.74,0,0,0,1.483,7.538,8.114,8.114,0,0,0,4.161,3.749,16.672,16.672,0,0,0,6.22,1.071,27.36,27.36,0,0,0,4.943-.453q2.472-.453,3.79-.7l5.52,26.116q-2.636.824-7.415,1.936A61.967,61.967,0,0,1,627.654,1.73q-12.687.494-22.2-3.378a31.021,31.021,0,0,1-14.788-12.028q-5.273-8.156-5.19-20.6Z" transform="translate(594 555)" fill="url(#linear-gradient)"/>
                  <path className="text-me" id="Path_5" data-name="Path 5" d="M14.006,0V-126.545H47.455v22.327h1.483a35.1,35.1,0,0,1,13.182-17.548q9.227-6.426,22.08-6.426,13.017,0,22.162,6.467a30.833,30.833,0,0,1,12.193,17.507h1.318a33.812,33.812,0,0,1,14.047-17.425q10.175-6.55,24.1-6.55,17.713,0,28.794,11.246t11.081,31.842V0H162.878V-78.185q0-10.545-5.6-15.818a19.639,19.639,0,0,0-14.006-5.273q-9.557,0-14.912,6.055T123-77.278V0H88.977V-78.926q0-9.31-5.314-14.83T69.7-99.276a19.331,19.331,0,0,0-10.5,2.925,20.629,20.629,0,0,0-7.374,8.156A26.177,26.177,0,0,0,49.1-75.96V0ZM281.852,2.472q-19.526,0-33.572-7.95a53.777,53.777,0,0,1-21.626-22.574q-7.58-14.624-7.58-34.643,0-19.526,7.58-34.273a55.943,55.943,0,0,1,21.379-22.986q13.8-8.239,32.419-8.239a66.975,66.975,0,0,1,23.357,4,52.645,52.645,0,0,1,18.949,11.987A54.6,54.6,0,0,1,335.4-92.149q4.531,12.07,4.531,28.217v9.639H233.08v-21.75H306.9a26.886,26.886,0,0,0-3.3-13.429,23.979,23.979,0,0,0-9.1-9.186,26.562,26.562,0,0,0-13.47-3.337A27.019,27.019,0,0,0,266.9-98.328a26.3,26.3,0,0,0-9.6,9.8,27.923,27.923,0,0,0-3.543,13.635V-54.21a35.2,35.2,0,0,0,3.5,16.23,25.063,25.063,0,0,0,9.928,10.545,29.983,29.983,0,0,0,15.241,3.707,33.191,33.191,0,0,0,10.71-1.648,22.229,22.229,0,0,0,8.321-4.943,21.493,21.493,0,0,0,5.273-8.074l32.46,2.142A44.248,44.248,0,0,1,329.1-15.859,50.7,50.7,0,0,1,309.493-2.348Q297.506,2.472,281.852,2.472Z" transform="translate(901 725)" fill="url(#linear-gradient)"/>
                </g>
              </svg>

            </div>

            {this.state.interests.map((interest, index) => {
              return (
                <AboutButton 
                  key={index} 
                  index={index} 
                  interest={interest} 
                  handleClick={this.handleClick}
                />
              );
            })}
    
            <Link className="home-btn" to="/"><Home /></Link>
        
          </div>
        </section>

        {this.state.showInterest &&
          <AboutInterest 
            interest={this.state.selectedInterest}
            showInterest={this.state.showInterest}
            unmountComponent={this.handleInterestUnmount}
          />
        }

      </div>
    );
  }

}

export default About;
