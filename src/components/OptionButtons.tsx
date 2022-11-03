import { SetPlayerProp } from '../interfaces'

function OptionButtons({
    setPlayer
}: SetPlayerProp): JSX.Element {
    const handleOptionX = (): void => {
        setPlayer(1)
    }
    
    const handleOptionO = (): void => {
        setPlayer(-1)
    }

    return (
        <div>
            <button onClick={handleOptionX}>
                Play X
            </button>
            
            <button onClick={handleOptionO}>
                Play O
            </button>
        </div>
    )
}

export default OptionButtons
