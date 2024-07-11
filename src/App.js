import logo from './logo.svg';
import video from './Zeakur Design Header(8).mp4';
import video2 from './Hero2 element.mp4';
import body1 from './9.svg';
import body2 from './10.svg';
import body3 from './11.svg';
import body4 from './12.svg';
import './App.css';
import gsap from 'gsap';
import React, { useRef, useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const videoRef = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const imageRefs = useRef([]);

  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    const videoElement2 = videoRef2.current;

    // GSAP animation with ScrollTrigger and matchMedia
    const mm = ScrollTrigger.matchMedia({
      // Minimum width of 933px
      "(min-width: 933px)": function() {
        // First ScrollTrigger instance for .wrapper
        const tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: ".wrapper",
            start: "60% center",
            end: "125% top",
            markers: true,
            pin: true,
            pinnedContainer: ".wrapper",
            pinSpacing: true,
            scrub: true,
            onEnter: () => {
              if (!hasPlayed) {
                videoElement.play();
              }
            },
          },
        });

        tl1.fromTo(".wrapper", { rotation: 0 }, { rotation: 0, duration: 1 });

        videoElement.onended = () => {
          setHasPlayed(true); // Set hasPlayed to true once the video ends
        };

        // Second ScrollTrigger instance for .wrapper2
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".wrapper2",
            start: "70% center",
            end: "125% top",
            markers: true,
            pinnedContainer: ".wrapper2",
            pin: true,
            pinSpacing: true,
            scrub: true,
          },
        });

        tl2.fromTo(".wrapper2", { opacity: 0 }, { opacity: 1, duration: 1 });
      },
    });

 

    // Cleanup function to kill ScrollTrigger instances
    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []); // Ensure the useEffect runs only once and depends on hasPlayed state

  return (
    <div className="App">
      <header className='header'><p>This is the header i think</p></header>
      <div className='wrapper'>
        <video 
          src={video} 
          className='App-logo' 
          alt="logo" 
          ref={videoRef} 
          muted 
        ></video>
      </div>
      <div id="id" className='wrapper2'>
        <video 
          src={video2} 
          className='App-logo2' 
          alt="logo2" 
          ref={videoRef2} 
          autoPlay
          muted 
          loop
        ></video>
      </div>
      <h1>Define Your Brand</h1>
      <div id="otherID" className='wrapper3'>
        <img 
          className='Image-Cara' 
          src={body1} 
          id='cara1' 
          loading="lazy"  
          ref={(el) => imageRefs.current[0] = el} 
        ></img>
        <h4>Shopify & Email Campaigns</h4>
        <img 
          className='Image-Cara' 
          src={body2} 
          id='cara2' 
          loading="lazy"  
          ref={(el) => imageRefs.current[1] = el} 
        ></img>
        <h5>Social media management</h5>
        <img 
          className='Image-Cara' 
          src={body3} 
          id='cara3' 
          loading="lazy"  
          ref={(el) => imageRefs.current[2] = el} 
        ></img>
        <h6>Video/Audio Editing & OnSite Production </h6>
        <img 
          className='Image-Cara' 
          src={body4} 
          id='cara4' 
          loading="lazy"  
          ref={(el) => imageRefs.current[3] = el} 
        ></img>
        <h2> Web Development </h2>
      </div>
    </div>
  );
}

export default App;
