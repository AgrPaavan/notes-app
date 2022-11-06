import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import React from "react";
import style from "./style.module.css";

function Note({ id, text, deleteNote }) {
  return (
    <div>
      <div className={style.note}>
        <div>{text}</div>
        <div
          className={style.note__footer}
          style={{ justifyContent: "flex-end" }}
        >
          <DeleteForeverOutlinedIcon
            className={style.note__delete}
            onClick={() => deleteNote(id)}
            aria-hidden="true"
          ></DeleteForeverOutlinedIcon>
        </div>
      </div>
    </div>
  );
}

export default Note;
