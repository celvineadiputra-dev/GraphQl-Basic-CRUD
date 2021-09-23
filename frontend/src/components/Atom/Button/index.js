import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
    return (
        <Link 
        to={props.url} 
        className="bg-blue-500 text-white px-2 rounded py-2 w-full text-center">
            {props.text}
        </Link>
    )
}

export default Button