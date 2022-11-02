import { ReactElement } from 'react'
import { PointsProp } from '../interfaces'
import Cell from './Cell'

function Board({
    points
}: PointsProp): JSX.Element {
    const cells: ReactElement[] = points.map((
        _: number, 
        index: number
    ): ReactElement => {
        const id: string = 'square-' + index

        return <Cell id={id} />
    })

    return (
        <section>
            {cells}
        </section>
    )
}

export default Board
