import React from 'react'

const Spacer = ({ size = "md" }) => {
  const sizeClasses = {
    sm: "h-4",  
    md: "h-8", 
    lg: "h-16", 
    xl: "h-24",
  };

  const computedSize = typeof size === "number" ? `h-[${size}px]` : sizeClasses[size] || "h-8";

  return <div className={`w-full ${computedSize}`} />;
}

export default Spacer;
