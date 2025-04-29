import { useState } from "react";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";

function App() {
  const [view, setView] = useState("add");
  const [refreshFlag, setRefreshFlag] = useState(false);
  const handleNoteAdded = () => setRefreshFlag(!refreshFlag);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x bg-size-200 bg-pos-0 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full mt-10 p-6 bg-white/30 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
        <img
          src="https://kbwtnhujnskomqwryfhy.supabase.co/storage/v1/object/public/demo-audios/Group%201.png"
          alt="Placeholder"
          className="mx-auto mb-6 rounded shadow-md"
        />

        <div className="flex gap-4 mb-6 justify-center">
          <button
            onClick={() => setView("add")}
            className={`px-4 py-2 rounded font-medium transition-all duration-300 transform hover:scale-105 ${
              view === "add"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 hover:text-white"
            }`}
          >
            Add Note
          </button>
          <button
            onClick={() => setView("view")}
            className={`px-4 py-2 rounded font-medium transition-all duration-300 transform hover:scale-105 ${
              view === "view"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 hover:text-white"
            }`}
          >
            View Notes
          </button>
        </div>

        {view === "add" ? (
          <AddNote onNoteAdded={handleNoteAdded} />
        ) : (
          <NotesList key={refreshFlag} />
        )}
      </div>
    </div>
  );
}

export default App;
