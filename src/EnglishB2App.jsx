import { useState } from "react";

export default function EnglishB2App() {
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState([]);

  async function analyzeResponse(text) {
    return ["(Aquí aparecerá el feedback una vez actives la API key en producción)"];
  }

  const handleSend = async () => {
    if (!userInput.trim()) return;
    const result = await analyzeResponse(userInput);
    setFeedback(result);
    setUserInput("");
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>App Inglés B2</h1>
      <p>Escribe una frase en inglés (nivel B2):</p>
      <input
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Your sentence..."
      />
      <button onClick={handleSend}>Enviar</button>
      {feedback.length > 0 && (
        <div style={{ backgroundColor: '#eef', padding: 10, marginTop: 20 }}>
          <h3>Feedback:</h3>
          <ul>{feedback.map((f, i) => <li key={i}>{f}</li>)}</ul>
        </div>
      )}
    </div>
  );
}