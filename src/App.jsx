import { useState } from "react";
import "./App.css";

import FlashcardsList from "./components/FlashcardsList";
import FlashcardsNavigation from "./components/FlashcardsNavigation";
import AddFlashcardForm from "./components/AddFlashcardForm";
import FlashcardActions from "./components/FlashcardActions";

export default function App() {
  const [flashcards, setFlashcards] = useState([
    { id: 1, question: "Instructions (click to flip)", answer: "Use the arrows at the top to navigate. The actions are listed below." },
    { id: 2, question: "Try making some cards!", answer: "Go ahead, use the form at the bottom." },
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

  // HANDLERS
  const addCard = card => {
    if (!card.question || !card.answer) return;
    const addedCard = card;
    const newCurCard = flashcards.length;

    addedCard.id = Math.round(Math.random() * 100000);
    setFlashcards([...flashcards, addedCard]);
    setCurCard(newCurCard);
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
