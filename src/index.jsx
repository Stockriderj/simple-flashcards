import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

import App from './App'
import {FlashcardsProvider} from './context/flashcards';

ReactDOM.createRoot(document.getElementById('root')).render(
	<FlashcardsProvider>
		<App />
	</FlashcardsProvider>
)