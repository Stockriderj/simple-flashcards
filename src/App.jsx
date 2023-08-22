import { useState } from "react";
import "./App.css";

import FlashcardsList from "./components/FlashcardsList";
import FlashcardsNavigation from "./components/FlashcardsNavigation";
import AddFlashcardForm from "./components/AddFlashcardForm";
import FlashcardActions from "./components/FlashcardActions";

export default function App() {
  const [flashcards, setFlashcards] = useState([
    { id: 1, question: "are you gay?", answer: "yes" },
    { id: 2, question: "are you okay?", answer: "nah prolly not" },
  ]);
  const [curCard, setCurCard] = useState(0);

  const removeCard = id => {
    if (flashcards.length === 1) {
      alert("You can't delete the only card in the deck.");
      return;
    }

    if (curCard + 1 === flashcards.length) setCurCard(curCard - 1);

    setFlashcards(flashcards.filter(flashcard => flashcard.id !== id));
  };

  const addCard = card => {
    if (!card.question || !card.answer) return;
    const addedCard = card;
    addedCard.id = Math.round(Math.random() * 100000);
    setFlashcards([...flashcards, addedCard]);
  };

  const switchCard = i => {
    const nextCard = curCard + i;

    if (nextCard > flashcards.length - 1 || nextCard < 0) {
      return;
    }
    setCurCard(curCard + i);
  };

  return (
    <main>
      <div>
        <FlashcardsNavigation curCard={curCard} onSwitch={switchCard} />
        <FlashcardsList flashcards={flashcards} curCard={curCard} />
        <FlashcardActions
          onEdit={() => alert("editing is still in the works")}
          onDelete={removeCard}
          flashcards={flashcards}
          curCard={curCard}
        />
        <AddFlashcardForm onAdd={addCard} />
      </div>
    </main>
  );
}
