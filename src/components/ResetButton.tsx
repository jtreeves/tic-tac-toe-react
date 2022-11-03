import { SetAllStateProps } from '../interfaces'

function ResetButton({
    setMessage,
    setPlayer,
    setTurn,
    setTie,
    setPoints,
    setWinner
}: SetAllStateProps): JSX.Element {
    const handleClick = (): void => {
        setPoints(Array(9).fill(0))
        setPlayer(0)
        setTurn(0)
        setTie(false)
        setWinner(false)
        setMessage('Would you like to play a game?')
    }

    return (
        <button onClick={handleClick}>
            Reset
        </button>
    )
}

export default ResetButton
