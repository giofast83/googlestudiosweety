import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "py-3 px-8 transition-all duration-300 text-sm tracking-widest uppercase font-semibold font-sans";
  const hasHoverTextOverride = /(^|\s)!?hover:text-[^\s]+(\s|$)/.test(className);
  
  const variants = {
    primary: "bg-brand-dark text-white hover:bg-gray-700 border border-transparent",
    secondary: "bg-brand-powder text-brand-dark hover:bg-rose-200 border border-transparent",
    outline: `bg-transparent text-brand-dark border border-brand-dark hover:bg-brand-dark${hasHoverTextOverride ? '' : ' hover:text-white'}`,
    white: "bg-white text-brand-dark border border-white hover:bg-brand-cream hover:border-brand-cream"
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};