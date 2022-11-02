import { useState } from 'react'
import Title from './components/Title'
import PlayerReminder from './components/PlayerReminder'
import Message from './components/Message'
import Board from './components/Board'
import StartButton from './components/StartButton'
import OptionButtons from './components/OptionButtons'
import ResetButton from './components/ResetButton'
import checkIfTie from './utilities/checkIfTie'
import checkIfWinner from './utilities/checkIfWinner'
import determineMessageContent from './utilities/determineMessageContent'

function App() {
    const [points, setPoints] = useState<number[]>(Array(9).fill(0))
    const [player, setPlayer] = useState<number>(0)
    const [turn, setTurn] = useState<number>(0)
    const [tie, setTie] = useState<boolean>(false)
    const [winner, setWinner] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('Would you like to play a game?')

    const updateCurrentStates = (
        index: number, 
        point: number
    ): void => {
        const updatedPoints: number[] = [...points]
        updatedPoints[index] = point
        const updatedTie: boolean = checkIfTie(updatedPoints)
        const updatedWinner: boolean = checkIfWinner(updatedPoints)
        const updatedTurn: number = !updatedWinner && !updatedTie ? turn * -1 : turn
        const updatedMessage: string = determineMessageContent(updatedWinner, updatedTie, updatedTurn, player)

        setPoints(updatedPoints)
        setTie(updatedTie)
        setWinner(updatedWinner)
        setTurn(updatedTurn)
        setMessage(updatedMessage)
    }

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
