import React,{useEffect, useState} from "react";

function App() {
  const[movies,setMovies]=useState([])
    useEffect((){
        fetch("https://imdb-api.com/en/API/InTheaters/k_dq2qn42g")
        .then(r=>r.json())
        .then(data=> setMovies(data))
    },[])
    return (
      <div className="App">
        <Home />
        <About/>
      </div>
    );
  }
  
  export default App;