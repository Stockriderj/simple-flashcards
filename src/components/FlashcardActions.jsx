import Button from "./Button";
import useFlashcards from '../hooks/use-flashcards';

export default function FlashcardActions() {
  const {flashcards, curCard, removeCard} = useFlashcards();
  
  return (
    <div>
      <Button className="mx-2" >Edit</Button>
      <Button className="mx-2" onClick={() => removeCard(flashcards[curCard].id)}>Delete</Button>
    </div>
  );
}
