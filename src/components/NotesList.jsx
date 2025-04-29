import { useEffect, useState } from "react";
import { getNotes } from "../utils/storage";

function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  return (
    <div className="space-y-4">
      {notes.length === 0 ? (
        <p>No notes available.</p>
      ) : (
        notes.map((note, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h3 className="font-bold">{note.title}</h3>
            <p className="text-red-600">{note.content.slice(0, 100)}...</p>
          </div>
        ))
      )}
      {/* // Why useEffect to sync storage → state: ensures up-to-date data on view load */}
    </div>
  );
}

export default NotesList;
