import { React, useState } from "react";
import { v4 as uuid } from "uuid";
import CreateNote from "./CreateNote";
import Note from "./Note";
import style from "./style.module.css";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const saveHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText,
      },
    ]);
    //clear the textarea
    setInputText("");
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  return (
    <div>
      <div className={style.notes}>
        {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            deleteNote={deleteNote}
          />
        ))}
        <CreateNote
          textHandler={textHandler}
          saveHandler={saveHandler}
          inputText={inputText}
        />
      </div>
    </div>
  );
}

export default Notes;
