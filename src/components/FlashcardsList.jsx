import Button from "./Button";
import Flashcard from "./Flashcard";

export default function FlashcardsList({flashcards, curCard}) {
  const displayedFlashcard = flashcards.filter(
    flashcard => flashcards.indexOf(flashcard) === curCard
  )[0];

  return (
    <div className="container flashcard-container">
      <Flashcard flashcard={displayedFlashcard} key={displayedFlashcard.id} />
    </div>
  );
}
