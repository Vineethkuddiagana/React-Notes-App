import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
function getNotes(noteItems){
  return(
    <Note 
        title={noteItems.title}
        content={noteItems.content}
       />
  )
}
function App() {
  return (
    <div>
      <Header />
      {notes.map(getNotes)}
      <Footer />
    </div>
  );
}

export default App;
