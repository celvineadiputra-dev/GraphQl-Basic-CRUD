import React from 'react'
import { Link } from 'react-router-dom'

function List(props) {
    return (
        <div className="flex">
            <diV>
                <h1 className="text-5xl">LIST BOOK</h1>
            </diV>
            <diV>
                <Link to="/book/new" className="bg-blue-500 text-white p-5 text-justify align-center rounded">Add new Book</Link>
            </diV>
        </div>
    )
}

export default List
