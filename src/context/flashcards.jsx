import {createContext, useState} from "react";

const FlashcardsContext = createContext();

export function FlashcardsProvider({children}) {
  const [flashcards, setFlashcards] = useState([
    {
      id: 1,
      question: "Instructions (click to flip)",
      answer:
        "Use the arrows at the top to navigate. The actions are listed below.",
    },
    {
      id: 2,
      question: "Try making some cards!",
      answer: "Go ahead, use the form at the bottom.",
    },
  ]);
  console.log(flashcards);
  const [curCard, setCurCard] = useState(0);

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

  const removeCard = id => {
    if (flashcards.length === 1) {
      alert("You can't delete the only card in the deck.");
      return;
    }

    if (curCard + 1 === flashcards.length) setCurCard(curCard - 1);

    setFlashcards(flashcards.filter(flashcard => flashcard.id !== id));
  };

  return (
    <FlashcardsContext.Provider
      value={{flashcards, curCard, addCard, switchCard, removeCard}}
    >
      {children}
    </FlashcardsContext.Provider>
  );
}

export default FlashcardsContext;