import {useContext} from 'react';
import FlashcardsContext from '../context/flashcards';

export default function useFlashcards() {
  return useContext(FlashcardsContext);
}