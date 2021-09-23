import React from 'react'
import Button from "../Atom/Button/index"

function List(props) {
    return (
        <>
            <div className="grid grid-cols-6 gap-4 mb-10">
                <diV className="col-span-4">
                    <h1 className="text-5xl">List Book</h1>
                </diV>
                <diV className="flex items-center">
                    <Button text={'Add new book'} url="/book/new" />
                </diV>
            </div>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12">
                    <table className="table-auto">
                        <thead>
                            <th className="border w-auto p-2">No</th>
                            <th className="border w-auto p-2">Title</th>
                            <th className="border w-auto p-2">Author</th>
                            <th className="border w-auto p-2">Release Year</th>
                        </thead>
                    </table>
                </div>
            </div>
        </>
    )
}

export default List
