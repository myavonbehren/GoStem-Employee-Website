// Created by Mya Von Behren, Feb 12th, 2025

import React from "react";
import "./styles/notes-page.css"


const NotePage = () => {

  // functions to call api's
  //fetch notes
  //create a note
  //load notes

  //do you store the date?
  //share button?
  //what should edit do?

  return (
    <div className="notes-body">
      <div className="notes-wrapper">
        <div className="notes-header">
          <h1>Notes</h1>
        </div>
        <div className="notes-container">
          <div>
            <form className="create-note">
              <input
              name="title"
              type="text"
              placeholder="Title"
              />
              <textarea
                name="description"
                type="text"
                placeholder="Description"
                rows={3}
              />
            </form>
          </div>   
        </div>
      </div>

        {/*}
        <div className="author-name"><h3>Author Name</h3></div>
        <div className="date"><h4>Date</h4></div>
        
        <div className="drop-box"><button>Upload Files</button></div>
        {/*
        file type validation - what type of files can be uploaded?
        file size check
        file progress indicator?
        file selection        
        
        
        <div className="notes-controls-right">
          <select className="Program">
            <option value="Program Name 1">Program Name 1</option>
            <option value="Program Name 2">Program Name 2</option>
          </select>
          <button className="edit-btn">Edit</button>
          <button className="trash-btn">Trash</button>
        </div>
        */}
    </div>
  );
};

export default NotePage;
