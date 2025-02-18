// Created by Mya Von Behren, Feb 12th, 2025
import React, { useState } from 'react';
import "./styles/notes-page.css"
import Sidebar from './components/sidebar';
import NoteListView from './components/note-list-view';
import AddNoteView from './components/add-note-view';

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
      {isAddingNote ? (<AddNoteView onCancel={handleCancel} />) : (<NoteListView onAddClick={handleAddClick} />)}
    </div>
  );
}



export default NotesPage;
