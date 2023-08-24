import Button from "./Button";
import Flashcard from "./Flashcard";
import useFlashcards from '../hooks/use-flashcards';

export default function FlashcardsList() {
  const {flashcards, curCard} = useFlashcards();
  
  const displayedFlashcard = flashcards.filter(
    flashcard => flashcards.indexOf(flashcard) === curCard
  )[0];

  return (
    <div className="container flashcard-container">
      <Flashcard flashcard={displayedFlashcard} key={displayedFlashcard.id} />
    </div>
  );
}
