import { ReactElement } from 'react'
import { BoardProps } from '../interfaces'
import Cell from './Cell'

function Board({
    points,
    updateCurrentStates,
    player,
    turn
}: BoardProps): JSX.Element {
    const cells: ReactElement[] = points.map((
        _: number, 
        index: number
    ): ReactElement => {
        const id: string = 'square-' + index

        return <Cell id={id} updateCurrentStates={updateCurrentStates} turn={turn} player={player} />
    })

    return (
        <section>
            {cells}
        </section>
    )
}

export default Board
