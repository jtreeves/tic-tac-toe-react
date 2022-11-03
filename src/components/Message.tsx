import { useEffect, useState } from 'react'
import { MessageProps } from '../interfaces'
import yourTurnMessage from '../data/yourTurnMessage'
import waitTurnMessage from '../data/waitTurnMessage'

function Message({
    winner,
    tie,
    turn,
    player
}: MessageProps): JSX.Element {
    const [text, setText] = useState<string>('')

    useEffect(() => {
        const turnIsPlayer: boolean = turn === player

        if (!turn) {
            setText('Would you like to play a game?')
        } else if (!player) {
            setText('Which option do you want to play?')
        } else {
            if (winner) {
                setText(`You ${turnIsPlayer ? 'win' : 'lose'}!`)
            } else if (tie) {
                setText('Tie game!')
            } else {
                if (turnIsPlayer) {
                    setText(yourTurnMessage)
                } else {
                    setText(waitTurnMessage)
                }
            }
        }
    }, [winner, tie, turn, player])

    return (
        <p>
            {text}
        </p>
    )
}

export default Message
