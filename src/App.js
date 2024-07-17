import logo from './logo.svg';
import video from './Zeakur Design Header(8).mp4';
import video2 from './Hero2 element.mp4';
import body1 from './9.svg';
import body2 from './10.svg';
import body3 from './11.svg';
import body4 from './12.svg';
import logo2 from './Logo2.png';
import logo6 from './Compvideo.mp4';
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
  const [hasPlayedWrapper5, setHasPlayedWrapper5] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    const videoElement2 = videoRef2.current;
    const videoElement3 = videoRef3.current;

    const mm = ScrollTrigger.matchMedia({
      "(min-width: 933px)": function() {
        const tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: ".wrapper",
            start: "60% center",
            end: "155% top",
            markers: false,
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

        tl1.fromTo(".wrapper", { scale: 1 }, { scale: 1.2, duration: 2 });

        videoElement.onended = () => {
          setHasPlayed(true);
        };

        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".wrapper2",
            start: "70% center",
            end: "125% top",
            markers: false,
            pinnedContainer: ".wrapper2",
            pin: true,
            pinSpacing: true,
            scrub: true,
          },
        });

        tl2.fromTo(".wrapper2", { opacity: 0 }, { opacity: 1, duration: 1 });

        const tl3 = gsap.timeline({
          scrollTrigger: {
            trigger: ".wrapper5",
            start: "50% center",
            end: "180% top",
            markers: true,
            pin: true,
            pinnedContainer: ".wrapper5",
            pinSpacing: true,
            scrub: true,
            onEnter: () => {
              if (!hasPlayedWrapper5) {
                videoElement3.play();
                
              }
            },
            onLeave: () => {
              if (!hasPlayedWrapper5) {
                videoElement3.pause();
              }
            },
          },
        });

        tl3.fromTo(".wrapper5", { opacity: 1 }, { opacity: 1, duration: 1 });
      },
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [hasPlayed, hasPlayedWrapper5]);

  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);

  const handleMouseEnter = (setDropdown) => {
    setDropdown(true);
  };

  const handleMouseLeave = (setDropdown) => {
    setDropdown(false);
  };

  return (
    <div className="App">
      <header className='header'>
        <a href="https://www.linkedin.com/in/stephen-santiago-09a192317/" target="_blank">
          <img className="Logo-header" src='https://cdn.shopify.com/s/files/1/0674/2779/5200/files/AV_dan_edit.png?v=1720951752' alt="LinkedIn Profile"></img>
        </a>
        <div className='menu'>
          <button
            className='button'
            id='button-1'
            onClick={() => setDropdown1(!dropdown1)}
          >
            Dropdown menu 1
          </button>
          {dropdown1 && (
            <div
              className='dropdown'
              onMouseEnter={() => handleMouseEnter(setDropdown1)}
              onMouseLeave={() => handleMouseLeave(setDropdown1)}
            >
              <a href='#'>Option 1</a>
              <a href='#'>Option 2</a>
              <a href='#'>Option 3</a>
            </div>
          )}
        </div>
        <div className='menu'>
          <button
            className='button'
            id='button-2'
            onClick={() => setDropdown2(!dropdown2)}
          >
            Dropdown menu 2
          </button>
          {dropdown2 && (
            <div className='dropdown' 
              onMouseEnter={() => handleMouseEnter(setDropdown2)}
              onMouseLeave={() => handleMouseLeave(setDropdown2)}
            >
              <a href='#'>Option 1</a>
              <a href='#'>Option 2</a>
              <a href='#'>Option 3</a>
            </div>
          )}
        </div>
        <div className='menu'>
          <button
            className='button'
            id='button-3'
            onClick={() => setDropdown3(!dropdown3)}
          >
            Dropdown menu 3
          </button>
          {dropdown3 && (
            <div className='dropdown'
              onMouseEnter={() => handleMouseEnter(setDropdown3)}
              onMouseLeave={() => handleMouseLeave(setDropdown3)}
            >
              <a href='#'>Option 1</a>
              <a href='#'>Option 2</a>
              <a href='#'>Option 3</a>
            </div>
          )}
        </div>
      </header>

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
    
      <div className='wrapper5'>
        <video className='comptia-video' src={logo6} ref={videoRef3}></video>
      </div>
      
      <footer className='footer' >
        <div className='footer-3rd'>
          <p>Footer section
          </p>
        </div>
</footer>
    </div>



  
  );
}

export default App;
