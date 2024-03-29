import { ReactElement } from 'react'
import { BoardProps } from '../interfaces'
import Cell from './Cell'

function Board({
    points,
    updateCurrentStates,
    player,
    turn,
    winner,
    tie
}: BoardProps): JSX.Element {
    const cells: ReactElement[] = points.map((
        _: number, 
        index: number
    ): ReactElement => {
        const id: string = 'square-' + index

        return <Cell 
            id={id} 
            updateCurrentStates={updateCurrentStates} 
            turn={turn} 
            player={player} 
            winner={winner}
            points={points}
            tie={tie}
        />
    })

    return (
        <>
            {player && <section>
                {cells}
            </section>}
        </>
    )
}

export default Board
