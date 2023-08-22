import Button from "./Button";

export default function FlashcardsNavigation({onSwitch, curCard}) {
  return (
    <div>
      <Button onClick={() => onSwitch(-1)}>&larr;</Button>
      <Button onClick={() => onSwitch(1)}>&rarr;</Button>
      <p>Card No. {curCard + 1}</p>
    </div>
  );
}
