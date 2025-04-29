const STORAGE_KEY = "my_notes";

export function getNotes() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function saveNote(note) {
  const current = getNotes();
  const updated = [...current, note];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}
