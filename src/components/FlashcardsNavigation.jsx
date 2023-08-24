import Button from "./Button";
import useFlashcards from '../hooks/use-flashcards';

export default function FlashcardsNavigation() {
  const {switchCard, curCard} = useFlashcards();
  
  return (
    <div>
      <Button onClick={() => switchCard(-1)} className="mx-2">&larr;</Button>
      <Button onClick={() => switchCard(1)} className="mx-2">&rarr;</Button>
      <p>Card No. {curCard + 1}</p>
    </div>
  );
}
