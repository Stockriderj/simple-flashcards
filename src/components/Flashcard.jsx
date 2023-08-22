import {useState} from "react";

export default function Flashcard({flashcard}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flashcard" onClick={() => setIsFlipped(!isFlipped)}>
      {isFlipped ? <p>{flashcard.answer}</p> : <p>{flashcard.question}</p>}
    </div>
  );
}
