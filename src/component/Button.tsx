import React, { type ReactNode } from 'react';
import defaultBg from "../assets/images/buttonbg.png"; // default background image

interface ButtonProps {
  title: string;                      
  className?: string;       
  onClick?: () => void;     
}

const Button: React.FC<ButtonProps> = ({ title, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center justify-center gap-2 rounded-[16px]   font-semibold text-white overflow-hidden ${className || ""}`}
      style={{
        backgroundImage: `url(${defaultBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <div className={`relative flex items-center gap-2 w-full justify-center`}>
        <span className='font-inter font-medium'>{title}</span>
      </div>
    </button>
  );
};

export default Button;