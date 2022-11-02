import { useState } from 'react'
import Title from './components/Title'
import PlayerReminder from './components/PlayerReminder'
import Message from './components/Message'
import Board from './components/Board'
import StartButton from './components/StartButton'
import OptionButtons from './components/OptionButtons'
import ResetButton from './components/ResetButton'

function App() {
    const [points, setPoints] = useState<number[]>(Array(9).fill(0))
    const [player, setPlayer] = useState<number>(0)
    const [turn, setTurn] = useState<number>(0)
    const [tie, setTie] = useState<boolean>(false)
    const [winner, setWinner] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('Would you like to play a game?')

    return (
        <>
            <Title />
            {player && <PlayerReminder player={player} />}
            <Message message={message} />
            {player && <Board points={points} />}
            {!turn && !player && <StartButton />}
            {turn && !player && <OptionButtons />}
            {turn && player && <ResetButton />}
        </>
    )
}

export default App
