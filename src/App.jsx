import { useState } from "react";
import "./App.css";

import FlashcardsList from "./components/FlashcardsList";
import FlashcardsNavigation from "./components/FlashcardsNavigation";
import AddFlashcardForm from "./components/AddFlashcardForm";
import FlashcardActions from "./components/FlashcardActions";

export default function App() {

  return (
    <main>
      <div>
        <FlashcardsNavigation/>
        <FlashcardsList/>
        <FlashcardActions/>
        <AddFlashcardForm/>
      </div>
    </main>
  );
}
