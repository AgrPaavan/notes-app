import React from "react";
import style from "./style.module.css";

function CreateNote({ textHandler, saveHandler, inputText }) {
  return (
    <div>
      <div
        className={style.note}
        style={{ background: "rgba(255, 255, 255, 0)" }}
      >
        <textarea
          cols="10"
          rows="5"
          value={inputText}
          placeholder="Type...."
          onChange={textHandler}
          maxLength="100"
          className={style.note__textarea}
        ></textarea>
        <div className={style.note__footer}>
          <span className="label"></span>
          <button className={style.note__save} onClick={saveHandler}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateNote;
