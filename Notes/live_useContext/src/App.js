import React, { useState, createContext } from "react";
import Button from "./components/Button";
import NoteList from "./components/NoteList";
import "./App.css";

// * Context Step 1
// Create context so data can be passed down to descendent components
// Think of "context" as a "space" you can put some data in
// This should be created outside of your functional component
// Don't forget to export your context!
export const NotesContext = createContext();

const App = () => {
    // State variables
    // Current ID
    const [currentId, setCurrentId] = useState(0);
    // A list of already created notes
    const [notes, setNotes] = useState([]);
    // The note the user is currently creating in the input
    const [currentNote, setCurrentNote] = useState({ id: currentId, text: "" });

    // A function to update the current note the user is making
    const updateCurrentNote = event => {
        setCurrentNote({ id: currentId, text: event.target.value })
    }

    // A function to add a note to the list of notes:
    // 1. Add the currentNote to the notes array
    // 2. Update currentId by 1
    // 3. Reset the currentNote, ready for the user to create a new note
    const createNote = () => {
        // 1.
        setNotes([...notes, currentNote]);
        // 2
        setCurrentId(currentId + 1);
        // 3
        setCurrentNote({ id: currentId, text: "" });
    }

    // A function to delete a note when its "X" span is clicked
    const deleteNote = deletedId => {
        // Take the "notes" array
        // Update its value to include all note objects EXCEPT the one we clicked on
        setNotes(notes.filter(obj => obj.id !== deletedId));
    }

    return (
        <>
            <h1>My Notes</h1>
            <input onChange={updateCurrentNote} value={currentNote.text} />

            <Button update={createNote} />

            {/*
            // * Context Step 2
            You should wrap all affected components in the <[ContextName].Provider> tags
            This means all descendents of the wrapped component will also have access to this context
            The "value" of the context will be a "context object", with key-value pairs
            Each key will refer to one part of the data you want to "provide" to the descendent components
            */}
            <NotesContext.Provider value={{
                delete: deleteNote,
                testProperty: "Hello world!"
            }}>
                <NoteList data={notes} />
            </NotesContext.Provider>
        </>
    );
}

export default App;