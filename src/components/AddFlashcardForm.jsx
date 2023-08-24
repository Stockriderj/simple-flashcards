import { useState } from "react";
import Button from "./Button";
import useFlashcards from '../hooks/use-flashcards';

export default function AddFlashcardForm() {
  const {addCard} = useFlashcards();
  
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAdd = e => {
    e.preventDefault();

    addCard({ question, answer });

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
