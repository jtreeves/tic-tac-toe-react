import { SetTurnProp } from '../interfaces'

function StartButton({
    setTurn
}: SetTurnProp): JSX.Element {
    const handleClick = (): void => {
        setTurn(1)
    }

    return (
        <button onClick={handleClick}>
            Start
        </button>
    )
}

export default StartButton
