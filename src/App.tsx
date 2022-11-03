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
import './styles.css'

function App() {
    const [points, setPoints] = useState<number[]>(Array(9).fill(0))
    const [player, setPlayer] = useState<number>(0)
    const [turn, setTurn] = useState<number>(0)
    const [tie, setTie] = useState<boolean>(false)
    const [winner, setWinner] = useState<boolean>(false)

    const updateCurrentStates = (
        index: number,
        point: number
    ): void => {
        const updatedPoints: number[] = [...points]
        updatedPoints[index] = point
        const updatedTie: boolean = checkIfTie(updatedPoints)
        const updatedWinner: boolean = checkIfWinner(updatedPoints)
        const updatedTurn: number = !updatedWinner && !updatedTie ? turn * -1 : turn

        setPoints(updatedPoints)
        setTie(updatedTie)
        setWinner(updatedWinner)
        setTurn(updatedTurn)
    }

    return (
        <>
            <Title />
            {player && <PlayerReminder player={player} />}
            <Message
                player={player}
                turn={turn}
                winner={winner}
                tie={tie}
            />
            {player && <Board points={points} updateCurrentStates={updateCurrentStates} turn={turn} player={player} />}
            {!turn && !player && <StartButton setTurn={setTurn} />}
            {turn && !player && <OptionButtons setPlayer={setPlayer} />}
            {turn && player && <ResetButton 
                setPoints={setPoints}
                setWinner={setWinner}
                setTie={setTie}
                setTurn={setTurn}
                setPlayer={setPlayer}
            />}
        </>
    )
}

export default App
