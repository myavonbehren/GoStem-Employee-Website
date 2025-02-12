import React from "react";
import "./styles/notes-page.css"
import React, { useState } from 'react';


const NotePage = () => {
  const [notes, setNotes] = useState([]);

  // functions to call api's
  //fetch notes
  //create a note
  //load notes

  //do you store the date?
  //share button?
  //what should edit do?

  return (
    <div className="notes-container">
      <div className="notes-contols">
        <div className="title">
          <input
          type="text"
          placeholder="Title"
          />
        </div>
        <div className="author-name"><h3>Author Name</h3></div>
        <div className="date"><h4>Date</h4></div>
        <div className="notes-description">
            <input 
              type="text"
              placeholder="Enter your description"
            />
        </div>
        <div className="drop-box"><button>Upload Files</button></div>
        {/*
        file type validation - what type of files can be uploaded?
        file size check
        file progress indicator?
        file selection        
        */}
        
        <div className="notes-controls-right">
          <select className="Program">
            <option value="Program Name 1">Program Name 1</option>
            <option value="Program Name 2">Program Name 2</option>
          </select>
          <button className="edit-btn">Edit</button>
          <button className="trash-btn">Trash</button>
        </div>
      </div>
    </div>
  );
};

export default NotePage;
