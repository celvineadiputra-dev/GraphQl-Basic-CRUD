import React from "react";
import Button from "../Atom/Button/index";
import { useHistory } from "react-router-dom";

function Form(props) {
  const history = useHistory();
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="grid grid-cols-6 gap-4 mb-10">
        <diV className="col-span-4">
          <h1 className="text-5xl">Add New Book</h1>
        </diV>
        <diV className="flex items-center">
          <Button text={"List Book"} url="/books" />
        </diV>
      </div>
      <div className="w-1/2">
        <form id="form-book" onSubmit={onSubmit}>
          <div className="flex flex-col">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="border-2 p-2 rounded-md"
              id="title"
              autoComplete="off"
              placeholder="Title Book"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              className="border-2 p-2 rounded-md"
              id="author"
              autoComplete="off"
              placeholder="Author Book"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              className="border-2 p-2 rounded-md"
              id="description"
              rows="5"
              autoComplete="off"
              placeholder="Description Book"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="release_year">Release Year</label>
            <input
              type="number"
              className="border-2 p-2 rounded-md"
              id="release_year"
              autoComplete="off"
              placeholder="Release year Book"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="genre">Genre</label>
            <input
              type="number"
              className="border-2 p-2 rounded-md"
              id="genre"
              autoComplete="off"
              placeholder="Genre Book"
            />
          </div>
          <div className="flex flex-row">
            <button
              type="button"
              onClick={() => history.push("/books")}
              className="bg-green-500 text-white mt-3 px-6 py-2 rounded mr-2"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white mt-3 px-6 py-2 rounded mx-2"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
