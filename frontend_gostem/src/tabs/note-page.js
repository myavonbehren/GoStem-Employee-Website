// Created by Mya Von Behren, Feb 12th, 2025
import React, { useState } from 'react';
import "./styles/notes-page.css"
import Sidebar from './components/sidebar';
import FileUploadZone from "./components/drag-drop-files";


const NoteList = ({ onAddClick }) => {
  const [noteType, setNoteType] = useState('all-notes');
  const [program, setProgram] = useState('all-programs');

  return (
    <div className="notes-body">
    <div className="notes-wrapper">
      <div className="notes-header">
        <h1>Notes</h1>
      </div>
        <div className="notes-header-btn-filter">
          <div className="notes-filters">
          <select 
                value={program} 
                onChange={(e) => setProgram(e.target.value)}
                className="notes-select"
              >
                <option value="all-programs">All Programs</option>
                <option value="program-1">Program 1</option>
                <option value="program-2">Program 2</option>
            </select>

            <select 
                value={noteType} 
                onChange={(e) => setNoteType(e.target.value)}
                className="notes-select"
              >
                <option value="all-notes">All Notes</option>
                <option value="shared-notes">Shared Notes</option>
                <option value="personal-notes">Personal Notes</option>
              </select>
          </div>
          <button className="add-btn" onClick={onAddClick}>Add</button>
        </div>
        <div className="notes-list-container">
        <div className="notes-grid">
          <div className="note-item">
            <h3 className="note-final-title">Note Title</h3>
            <p>Note Description</p>
            <p>File(s)</p>
            <div className="notes-footer">
              <button>Modify</button>
              <button>Delete</button>
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}

const AddNote = ({ onCancel }) => {

  // functions to call api's
  //fetch notes
  //create a note
  //load notes

  // collect files
  // prepare for file upload
  // send files to backedn
  // display upload progress
  // show stored file list


  //do you store the date?
  //share button?
  //what should edit do?

  return (
    <div className="notes-body">
      <div className="notes-wrapper">
        <div className="notes-header">
          <h1>Notes</h1>
        </div>
        <div className="notes-editor-container">
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
            <div>
              <FileUploadZone />
            </div>
            <div className="modify-notes-btns">
            <button className="cancel-note-btn" onClick={onCancel}>Cancel</button>
            <button className="add-note-btn">Add Note</button>
            </div>
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

const NotesPage = () => {
  const [isAddingNote, setIsAddingNote] = useState(false);

  const handleAddClick = () => {
    setIsAddingNote(true);
  };

  const handleCancel = () => {
    setIsAddingNote(false);
  };

  return (
    <div className="notes-page-container">
      <Sidebar />
      {isAddingNote ? (<AddNote onCancel={handleCancel} />) : (<NoteList onAddClick={handleAddClick} />)}
    </div>
  );
}



export default NotesPage;
