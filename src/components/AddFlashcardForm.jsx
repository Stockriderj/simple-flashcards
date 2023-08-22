import { useState } from "react";
import Button from "./Button";

export default function AddFlashcardForm({ onAdd }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAdd = e => {
    e.preventDefault();

    onAdd({ question, answer });

    setQuestion("");
    setAnswer("");
  };

  return (
    <form onSubmit={handleAdd}>
      <input
        placeholder="Question"
        value={question}
        onChange={e => setQuestion(e.target.value)}
      />
      <input
        placeholder="Answer"
        value={answer}
        onChange={e => setAnswer(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
