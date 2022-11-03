import { useState } from 'react'
import { CellProps } from '../interfaces'
import extractIndexFromId from '../utilities/extractIndexFromId'
import playOpponent from '../utilities/playOpponent'

function Cell({
    id,
    updateCurrentStates,
    turn,
    player,
    winner,
    points,
    tie
}: CellProps): JSX.Element {
    const [text, setText] = useState<string>('')

    const handleClick = (): void => {
        if (text === '' && player === turn && !winner) {
            const index: number = extractIndexFromId(id)
            const newText: string = turn === 1 ? 'X' : 'O'

            setText(newText)
            updateCurrentStates(index, turn)
            setTimeout(() => {
                playOpponent(player, points, winner, tie, updateCurrentStates)
            }, 1000)
        } else {
            return
        }
    }

    return (
        <article id={id} onClick={handleClick}>
            {text}
        </article>
    )
}

export default Cell
