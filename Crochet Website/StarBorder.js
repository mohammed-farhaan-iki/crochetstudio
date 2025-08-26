/**
 * StarBorder Component
 * A reusable component that adds a glowing animated border to any element
 */

function StarBorder(props) {
  const {
    as = 'div',
    children,
    className = '',
    color = 'pink',
    speed = '3s',
    ...rest
  } = props;

  // Define color mapping
  const colorMap = {
    pink: '#ff9ff3',
    cyan: '#00cec9',
    purple: '#a29bfe',
    yellow: '#ffeaa7',
    green: '#55efc4'
  };

  // Get the actual color value
  const borderColor = colorMap[color] || colorMap.pink;
  
  // Create the component based on the 'as' prop
  const Component = as;
  
  // Set animation duration based on speed prop
  const animationDuration = speed;
  
  return (
    <div className={`star-border-container ${className}`}>
      <div 
        className="border-gradient-top" 
        style={{
          background: `radial-gradient(ellipse at center, ${borderColor} 0%, rgba(255,255,255,0) 70%)`,
          animationDuration
        }}
      ></div>
      <div 
        className="border-gradient-bottom" 
        style={{
          background: `radial-gradient(ellipse at center, ${borderColor} 0%, rgba(255,255,255,0) 70%)`,
          animationDuration
        }}
      ></div>
      <Component className="inner-content" {...rest}>
        {children}
      </Component>
    </div>
  );
}

export default StarBorder;