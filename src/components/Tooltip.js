import React, { useState } from 'react';
import './tooltip.css'; // add your own styling here

const Tooltip = ({ position, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const getTooltipPosition = () => {
    switch (position) {
      case 'top':
        return { bottom: '100%', left: '50%', transform: 'translateX(-50%)' };
      case 'bottom':
        return { top: '100%', left: '50%', transform: 'translateX(-50%)' };
      case 'left':
        return { top: '50%', right: '100%', transform: 'translateY(-50%)' };
      case 'right':
        return { top: '50%', left: '100%', transform: 'translateY(-50%)' };
      default:
        return { top: 0, left: 0 };
    }
  };

  return (
    <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {showTooltip && (
        <div className={`tooltip ${position}`} style={getTooltipPosition()}>
          Thanks for Hovering! I'm tooltip
        </div>
      )}
    </div>
  );
};

export default Tooltip;
