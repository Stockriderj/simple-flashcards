import Button from "./Button";

export default function FlashcardActions({
  flashcards,
  curCard,
  onDelete,
  onEdit,
}) {
  return (
    <div>
      <Button className="mx-2" >Edit</Button>
      <Button className="mx-2" onClick={() => onDelete(flashcards[curCard].id)}>Delete</Button>
    </div>
  );
}
