import React, { useState } from "react";

function Movie({ movie, onDeleteMovie, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(movie.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(movie.id, editedTitle);
    setIsEditing(false);
  };

  return (
    <li className=" bg-white w-full p-3 rounded-md shadow-md  p-5 gap-8 
    mb-5">
      {isEditing ? (
        <div>
          <div className="flex flex-row gap-3 mt-3 ">
            <img
              className="w-30 h-40 mt-[-25px]"
              src={movie.poster}
              alt={movie.title}
            />
            <span>⭐⭐⭐⭐</span>
          </div>
          <input
            className="bg-gray-100  shadow-xl border rounded-md mt-1"
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <button className="mx-4" onClick={handleSave}>✅</button>
        </div>
      ) : (
        <div>
          <div className="flex flex-row gap-3 mt-3 ">
            <img
              className="w-30 h-40 mt-[-20px]"
              src={movie.poster}
              alt={movie.title}
            />
            <div className="flex flex-col gap-3 mt-3 ">
            <h3 className="text-lg font-semibold">{movie.title}</h3>

            <span>⭐⭐⭐⭐</span>
            <span
              className="text-white py-1 px-5 rounded text-center"
              style={{ backgroundColor: "#9a948d" }}
            >
              Watched
            </span>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-3 ">
           
            <button onClick={handleEdit}>✏️</button>
            <button onClick={() => onDeleteMovie(movie.id)}>🗑️</button>
          </div>
        </div>
      )}
    </li>
  );
}

export default Movie;
