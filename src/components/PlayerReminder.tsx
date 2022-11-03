import { PlayerProp } from '../interfaces'

function PlayerReminder({
    player
}: PlayerProp): JSX.Element {
    const text: string = player === 1 ? 'X' : 'O'
    const reminder: string = `You are playing ${text}`

    return (
        <>
            {player && <h2>
                {reminder}
            </h2>}
        </>
    )
}

export default PlayerReminder
