import React from "react";
import Note from "./Note";

const NoteList = props => {
    console.log("!", props.data);
    
    return (
        <div>
            {/* 
                Take the array of objects (the notes we already made) received from App.js via a prop...
                ... and map it, so each object becomes a <Note /> component, and we create a new array of these components...
                ... and render this list of <Note /> components 
            */}
            {
                props.data.map(note => {
                    return <Note content={note.text} key={note.id} id={note.id} />
                })
            }
        </div>
    );
}

export default NoteList;