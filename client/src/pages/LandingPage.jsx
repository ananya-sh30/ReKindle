import React, { useState, useEffect } from 'react';
import '../styles/LandingPage.css';
import LandingNavbar from '../components/LandingNavbar';
import LandingHeader from '../components/LandingHeader';
import { Icons } from '../components/Icons';
import { useNavigate } from 'react-router-dom';
const cards = [
  { title: 'Rediscover', sub:'Unearth your forgotten gems', description: 'Drop in old code, sketches, or docs — we will map their potential instantly', icon: <Icons.Discover />},
  { title: 'Reignite', sub:'Let AI spark the next move', description: 'Get smart nudges, pivot paths, and a second opinion that thinks in code', icon: <Icons.Ignite /> },
  { title: 'Remix', sub:'Build with brains, not just hands', description: 'Find collaborators, reuse logic, remix ideas like modular components', icon: <Icons.Mix /> },
  { title: 'Rebuild', sub:'Prototype. Polish. Push.', description: 'From messy drafts to MVPs — in your dev flow, with your stack', icon: <Icons.Build/>},
  { title: 'Resurface', sub:'Show up where it matters', description: 'Feature your revival, attract allies, and give your idea the spotlight it missed', icon: <Icons.Launch/>},
];

const CARD_WIDTH = 1200;


export default function LandingPage() {
  const [active, setActive] = useState(0);

  const navigate = useNavigate();
  const handleSignClick = () => {
    navigate('/signup');
  };
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => setIsMobile(window.innerWidth <= 768);
  checkMobile();
  window.addEventListener('resize', checkMobile);
  return () => window.removeEventListener('resize', checkMobile);
}, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Indices for the 3 cards visible in carousel
  const leftIndex = (active - 1 + cards.length) % cards.length;
  const rightIndex = (active + 1) % cards.length;

  // Positions for dots to align with cards below (approx)
  // We'll space them evenly over 300px width (same as carousel)
  const dotPositions = ['0%', '50%', '100%'];

  return (
    <div>
      <LandingNavbar/>
    <div className="rekindle-home" style={{ padding: '20px', textAlign: 'center' }}>
      <LandingHeader/>

      <div className="land-button">
      <button className="btn-get-started" onClick = {handleSignClick}>
        Get Started
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="#fff" fill-rule="evenodd" d="M13.483 4.47a.75.75 0 0 1 1.06 0l6.988 7a.75.75 0 0 1 0 1.06l-6.988 7a.75.75 0 0 1-1.061-1.06l5.709-5.719L3 12.762a.75.75 0 0 1-.002-1.5l16.194-.01l-5.711-5.722a.75.75 0 0 1 0-1.06" clip-rule="evenodd" />
      </svg>
      </button>

  <button className="btn-learn-more">Learn More</button>
</div>
      <div
        className="timeline-container"
        style={{
          width: '20%',
          margin: '60px auto 40px auto',
          position: 'relative',
          height: '70px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          userSelect: 'none',
        }}
      >
        {/* Horizontal line */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            left: 0,
            right: 0,
            height: '4px',
            background: 'radial-gradient(ellipse at center, grey 0%, transparent 70%)',
            borderRadius: '2px',
            zIndex: 1,
          }}
        ></div>


        {/* Dots and numbers */}
        {[leftIndex, active, rightIndex].map((index, i) => {
          const isActive = i === 1; // middle dot is active
          return (
            <div
              key={index}
              onClick={() => setActive(index)}
              style={{
                position: 'relative',
                zIndex: 2,
                cursor: 'pointer',
                color: isActive ? '#e76f51' : '#999',
                opacity: isActive ? 1 : 0.4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontWeight: isActive ? '700' : '400',
                fontSize: isActive ? '1.5rem' : '1rem',
                transition: 'all 0.4s ease',
                width: '30px',
              }}
            >
              <div
                style={{
                  width: isActive ? '23px' : '12px',
                  height: isActive ? '23px' : '12px',
                  backgroundColor: isActive ? '#2B79D8' : '#999',
                  borderRadius: '50%',
                  boxShadow: isActive ? '0 0 10px rgba(81, 129, 231, 0.7)' : 'none',
                  transition: 'all 0.4s ease',
                }}
              ></div>
             
              <div
                style={{
                  marginTop: '10px',
                  fontSize: isActive ? '1.4rem' : '0.9rem',
                  color: isActive ? '#2B79D8' : '#bbb',
                  fontWeight: '800',
                }}
              >
                0{index + 1}
              </div>
              {/* Dot */}
              
            </div>
          );
        })}
      </div>

      {/* Carousel */}
      <div
        className="carousel-container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: isMobile ? '0px' : '40px',
          marginTop: '0',
          width: isMobile ? '100%' : 'clamp(1150px, 30vw, 360px)',
          marginLeft: 'auto',
          marginRight: 'auto',
          flexDirection: isMobile ? 'column' : 'row', // vertical on small screens
          padding: '0 10px', // prevents touching the screen edge
          boxSizing: 'border-box',
          
        }}
      >
        {[leftIndex, active, rightIndex].map((index, i) => {
          if (isMobile && i !== 1) return null; // Show only active on small screens
          const card = cards[index];
          const isActive = i === 1;
          return (
            <div
              key={index}
              className={`card ${isActive ? 'active' : 'side'}`}
              style={{
                width: isMobile ? '100%' : 'clamp(250px, 30vw, 360px)',
                padding: '20px',
                borderRadius: '12px',
                backgroundColor: isActive ? '#fff' : 'rgba(242, 242, 242, 0.61)',
                opacity: isActive ? 1 : 0.5,
                transform: isActive ? 'translateY(-20px)' : 'translateY(20px)',
                transition: 'all 0.6s ease',
                textAlign: 'center',
                cursor: 'pointer',
                margin: isMobile ? '10px auto' : '20px auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection:'column',
              }}
              onClick={() => setActive(index)}
            >
              <div style={{ marginTop:'10px' }}>{card.icon}</div>
              <h3>{card.title}</h3>
              <p style={{ margin:'0px' }}>{card.sub}</p>
              <p style={{ margin:'0px 0px 16px 0px', color:'rgb(101, 101, 101)', fontWeight:'500', fontSize:'14px'}}>{card.description}</p>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}
