import { useState } from "react";
import { saveNote } from "../utils/storage";

function AddNote({ onNoteAdded }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    setIsSaving(true);
    try {
      saveNote({ title, content });
      setTitle("");
      setContent("");
      onNoteAdded();
    } catch (err) {
      setError("Failed to save note.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-4">
      <input
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-3 border border-gray-300 rounded h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Note Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {isSaving ? "Saving..." : "Save Note"}
      </button>
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded">{error}</div>
      )}
    </div>
  );
}

export default AddNote;
