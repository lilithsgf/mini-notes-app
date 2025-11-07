import { useEffect, useState } from "react";
interface Note {
 id: number;
 title: string;
 body: string;
}
function App() {
 const [notes, setNotes] = useState<Note[]>([]);
const [title, setTitle] = useState("");
const [body, setBody] = useState("");
const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 const newNote: Note = {
 id: notes.length + 1,
 title,
 body,
 };
 setNotes([newNote, ...notes]);
 setTitle("");
 setBody("");
}
 // useEffect se ejecuta cuando carga la app
 useEffect(() => {
 fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
 .then((res) => res.json())
 .then((data) => setNotes(data));
 }, []);
 return (
 <div style={{ padding: "20px" }}>
    <h1>Mini Notes App SENATI</h1>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Añadir Nueva nota</label> <br />
            <input type="text" 
            placeholder="Titulo"
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ marginTop: "1rem" }}/> <br />

            <input type="text" 
            placeholder="Contenido" 
            value={body} 
            onChange={(e) => setBody(e.target.value)}
            style={{ marginTop: "1rem" }}/>
        </div>
        <button type="submit" style={{ marginTop: "1rem" }}>Enviar</button>
    </form>
    <ul>
    {notes.map((note) => (
    <li key={note.id}>
    <strong>{note.title}</strong>
    <p>{note.body}</p>
    </li>
    ))}
    </ul>
 </div>
 );
}
export default App;
