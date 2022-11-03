import {
    Dispatch,
    SetStateAction
} from 'react'

interface PointsProp {
    points: number[]
}

interface IdentityProp {
    id: string
}

interface PlayerProp {
    player: number
}

interface TurnProp {
    turn: number
}

interface MessageProp {
    message: string
}

interface SetPlayerProp {
    setPlayer: Dispatch<SetStateAction<number>>
}

interface SetTurnProp {
    setTurn: Dispatch<SetStateAction<number>>
}

interface SetMessageProp {
    setMessage: Dispatch<SetStateAction<string>>
}

interface SetWinnerProp {
    setWinner: Dispatch<SetStateAction<boolean>>
}

interface SetTieProp {
    setTie: Dispatch<SetStateAction<boolean>>
}

interface SetPointsProp {
    setPoints: Dispatch<SetStateAction<number[]>>
}

interface SetAllStateProps extends SetPointsProp, SetPlayerProp, SetTurnProp, SetMessageProp, SetTieProp, SetWinnerProp {}

interface UpdateCurrentStatesFunction {
    (index: number, point: number): void
}

interface UpdateCurrentStatesProp {
    updateCurrentStates: UpdateCurrentStatesFunction
}

interface BoardProps extends PointsProp, UpdateCurrentStatesProp, TurnProp, PlayerProp {}

interface CellProps extends IdentityProp, UpdateCurrentStatesProp, TurnProp, PlayerProp {}

export type {
    PointsProp,
    IdentityProp,
    PlayerProp,
    MessageProp,
    SetPlayerProp,
    SetTurnProp,
    SetAllStateProps,
    BoardProps,
    CellProps
}