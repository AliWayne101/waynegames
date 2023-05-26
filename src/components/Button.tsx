import React from 'react'

const Button = ({text}: {text: string}) => {
  return (
    <div className="p-4 bg-secondary inline-block rounded cursor-pointer ease-in-out duration-300 hover:bg-theme">
        {text}
    </div>
  )
}

export default Button