import { ReactElement } from 'react'
import { SetAllStateProps } from '../interfaces'

function ButtonArea({
    setPlayer,
    setTurn,
    setTie,
    setPoints,
    setWinner,
    turn,
    player
}: SetAllStateProps): JSX.Element {
    const handleStart = (): void => {
        setTurn(1)
    }

    const handleOptionX = (): void => {
        setPlayer(1)
    }
    
    const handleOptionO = (): void => {
        setPlayer(-1)
    }

    const handleReset = (): void => {
        setPoints(Array(9).fill(0))
        setPlayer(0)
        setTurn(0)
        setTie(false)
        setWinner(false)
    }

    const startButton: ReactElement = <button 
        onClick={handleStart}
    >
        Start
    </button>

    const optionXButton: ReactElement = <button onClick=
        {handleOptionX}
    >
        Play X
    </button>

    const optionOButton: ReactElement = <button 
        onClick={handleOptionO}
    >
        Play O
    </button>

    const resetButton: ReactElement = <button 
        onClick={handleReset}
    >
        Reset
    </button>

    const optionButtons: ReactElement = <div>
        {optionXButton}
        {optionOButton}
    </div>

    return (
        <>
            {!turn && !player && startButton}
            {turn && !player && optionButtons}
            {turn && player && resetButton}
        </>
    )
}

export default ButtonArea
