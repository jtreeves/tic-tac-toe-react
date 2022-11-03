import { useState } from 'react'
import { CellProps } from '../interfaces'
import extractIndexFromId from '../utilities/extractIndexFromId'

function Cell({
    id,
    updateCurrentStates,
    turn,
    player
}: CellProps): JSX.Element {
    const [text, setText] = useState<string>('')

    const handleClick = (): void => {
        if (text === '' && player === turn) {
            const index: number = extractIndexFromId(id)
            const newText: string = turn === 1 ? 'X' : 'O'
            setText(newText)
            updateCurrentStates(index, turn)
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
