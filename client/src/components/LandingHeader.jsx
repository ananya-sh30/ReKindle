import React from 'react';
import '../styles/LandingHeader.css';
import { Icons } from './Icons';


const LandingHeader = () => {
  return (
    <div className="landing-body">
      <header className="landing-header">
        <div className="circuit-row">
          <div className="crooked-lines left">
            <svg width="400" height="200">
          
             <path d="M 400 15 L 360 15 L 310 0 L 220 0 L 0 0" className="circuit-path" />
            <path d="M 380 15 L 360 15 L 310 0 L 260 0" className="circuit-highlight" />

            {/* Middle line */}
            <path d="M 400 45 L 350 45 L 290 20 L 200 20 L 0 20" className="circuit-path" />
            <path d="M 370 45 L 350 45 L 290 20 L 240 20" className="circuit-highlight" />

            {/* Bottom line (inverted peak) */}
            <path d="M 400 85 L 360 85 L 310 110 L 240 110 L 210 85 L 130 85 L 0 85" className="circuit-path" />
            <path d="M 380 85 L 360 85 L 310 110 L 240 110 L 210 85 L 170 85" className="circuit-highlight" />
            </svg>

            {[<Icons.Bulb/>, <Icons.Analyse/>].map((icon, i) => (
                <div key={i} className={`circuit-box left-box box-${i}`}>
                  {icon}
                </div>
              ))}
          </div>

          <div className="heading-text">
            <div className='first-line'>Reconstruct  &nbsp;<Icons.Sparkle /> &nbsp;<span className="highlight"> Possibilities &nbsp;</span> from <br/></div> 
            <div className='second-line'>Unfinished Projects</div>
            
          </div>

          <div className="crooked-lines right">
            <svg width="400" height="120">
               <path d="M 0 15 L 40 15 L 85 0 L 180 0 L 400 0" className="circuit-path" />
            <path d="M 30 15 L 40 15 L 85 0 L 140 0" className="circuit-highlight" />

            {/* Middle line (mirrored) */}
            <path d="M 0 45 L 60 45 L 110 30 L 200 30 L 400 30" className="circuit-path" />
            <path d="M 50 45 L 60 45 L 110 30 L 160 30" className="circuit-highlight" />

            {/* Bottom line (inverted peak, mirrored) */}
            <path d="M 0 85 L 40 85 L 90 105 L 160 105 L 190 85 L 270 85 L 400 85" className="circuit-path" />
            <path d="M 25 85 L 40 85 L 90 105 L 160 105 L 190 85 L 230 85" className="circuit-highlight" />
            </svg>
            {[<Icons.AI />, <Icons.Merge />].map((icon, i) => (
              <div key={i} className={`circuit-box right-box box-${i}`}>
                {icon}
              </div>
            ))}
          </div>
        </div>

        <p className="subtitle">
          with <span className="highlight">Intelligent</span> Tools and <span className="highlight">Collaborative</span> Innovation
        </p>
      </header>
    </div>
  );
};

export default LandingHeader;
