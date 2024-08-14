import React from 'react'

interface buttonProps {
  text: string
  onClick?: () => void;
  aria: string
}
const Button = ({ text, onClick, aria }: buttonProps) => {
  return (
    <button
      className='bg-primary py-1 px-4 rounded-lg hover:bg-primary/80 
    duration-500 inline-block text-white
    
    '

      aria-label={aria}
      onClick={onClick}
    >
      {text} </button>
  )
}

export default Button