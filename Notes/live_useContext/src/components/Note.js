// * Context Step 3A
// Import the useContext() hook
// So the grandchild Note.js can use ("consume") the data provided by the parent App.js
import React, { useContext } from "react";
// * Context 3B
// Also import the context we created in App.js
import { NotesContext } from "../App";

// The grandchild of App.js
const Note = props => {
    // * Context 3C
    // Create a variable to contain the data passed by App.js via "NotesContext"
    const notes = useContext(NotesContext);

    const deleteItem = () => {
        // * Context 3D
        // Use the "delete" function passed directly from App.js via context
        notes.delete(props.id);

        // props.delete2(props.id);
    }

    return (
        <div className="note">
            {/* {props.content} */}
            { notes.testProperty }
            <span className="delete" onClick={deleteItem}>X</span>
        </div>
    );
}

export default Note;