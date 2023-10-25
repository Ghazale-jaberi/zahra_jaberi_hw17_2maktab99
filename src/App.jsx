import { useState } from "react";
import Movie from "./components/Movie";

const MoveData = [
  {
    id: 1,
    title: "Barbie",
    poster:
      "https://www.posterhub.com.sg/images/detailed/138/111950_Barbie_Final_B_8j8n-ks.jpg",
  },
  {
    id: 2,
    title: "LalaLand",
    poster:
      "https://letsoverthinkthat.com/2019/03/08/unpopular-opinion-i-hate-la-la-land/la-la-land-poster-ii/",
  },

  {
    id: 3,
    title: "BreakfastTiffany",
    poster: "https://i.redd.it/qcewpor3g2e31.jpg",
  },

  {
    id: 4,
    title: "Salte",
    poster:
      "https://m.media-amazon.com/images/I/61TcLNNxvcL._AC_UF894,1000_QL80_.jpg",
  },
];

let id = 1;
function App() {
  const [movieList, setMovieList] = useState([]);
  const [title, settitle] = useState("");
  const [poster, setposter] = useState("");

  function handelMovieList(movie) {
    setMovieList([...movieList, movie]);
  }
  
// function handelEtitle(movie){
//   setMovieList([...movieList,title]);

// }
  function handelAddMovie(e) {
    e.preventDefault();
    const movie = {
      id: id,
      title: title,
      poster: poster,
    };

    handelMovieList(movie);
    settitle("");
    setposter("");
    id++;
  }

  function handelDeletMovie(id){
setMovieList(movieList.filter((movie)=> movie.id !==id)
);

  }

  // function handelEdithMovie(id, title) {
  //   const movie = {
  //     id: id,
  //     title: title,
  //     poster: poster,
  //   };
  //   handelEtitle(movie);
  //   const updatedMovies = movieList.map((movie) =>
  //     movie.id === id ? { ...movie, title: title } : movie
  //   );
  //   setMovieList(updatedMovies);
  // }
  //
  // function startEditing(id) {
  //   setIsEditing(true);
  //   setEditId(id);
  // }
  // const [isEditing, setIsEditing] = useState(false);
  // const [editId, setEditId] = useState(null);
  // function handelEdithMovie(id, title) {
  //   const updatedMovies = movieList.map((movie) =>
  //     movie.id === id ? { ...movie, title: title } : movie
  //   );
  //   setMovieList(updatedMovies);
  // }
  function startEditing(id) {
    setIsEditing(true);
    setEditId(id);
  }
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  function handelEdithMovie(id, title) {
    const updatedMovies = movieList.map((movie) =>
      movie.id === id ? { ...movie, title: title } : movie
    );
    setMovieList(updatedMovies);
    setIsEditing(false); 
  }
  console.log(movieList);

  
  return (
    <div
      style={{ backgroundColor: "#faf7f2" }}
      className="App flex flex-col items-center gap-5 p-10 h-[100 vh] reletive"
    >
      <header className="flex flex-col items-center gap-5 w-full">
        <h3 className="text-2xl font-bold">Movie List</h3>
        <form
          className=" w-full flex flex-col items-center gap-5 "
          onSubmit={handelAddMovie}

        >
          <input
            className="bg-gray-100 w-2/3 h-10 shadow-xl border rounded-md px-5"
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            placeholder="Move title"
          />

          <input
            className="bg-gray-100 w-2/3 h-10 shadow-xl border rounded-md px-5"
            type="text"
            value={poster}
            onChange={(e) => setposter(e.target.value)}
            placeholder="Move poster"
          />
          <div className="fixed  top-80 right-10 ">
            <button
              className="w-10 h-10 bg-red-500
        rounded-full text-white text-2xl 
        "
            >
              +
            </button>
          </div>
        </form>
      </header>
      {movieList.length < 1 ? (
        <main className="flex flex-col items-center w-2/3 px-5 gap-5 text-center justify-center h-[40vh] font-semibold">
          <p>Your movie List is empty lets try to fill it up ...</p>
          <p>
            Write your favorite movie name then click add button and magic will
            happen...😉
          </p>
        </main>
      ) : (
        <main
          className=" w-2/3 px-5 mt-5 h-[50vh]
overflow-y-auto
"
        >
          <ul className="flex flex-col gap-3 w-full  ">
            {movieList.map((movie) => (
              <Movie movie={movie}
              
              onDeleteMovie={handelDeletMovie}
              onEdit={handelEdithMovie}
              key={movieList.id} />
            ))}
          </ul>
        </main>
        
      )}

  
    </div>
  );
}


export default App;
