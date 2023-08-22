import Button from "./Button";

export default function FlashcardActions({
  flashcards,
  curCard,
  onDelete,
  onEdit,
}) {
  return (
    <div>
      <Button>Edit</Button>
      <Button onClick={() => onDelete(flashcards[curCard].id)}>Delete</Button>
      {flashcards[curCard].id}
    </div>
  );
}
