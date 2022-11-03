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

interface SetWinnerProp {
    setWinner: Dispatch<SetStateAction<boolean>>
}

interface SetTieProp {
    setTie: Dispatch<SetStateAction<boolean>>
}

interface SetPointsProp {
    setPoints: Dispatch<SetStateAction<number[]>>
}

interface SetAllStateProps extends SetPointsProp, SetPlayerProp, SetTurnProp, SetTieProp, SetWinnerProp, TurnProp, PlayerProp {}

interface UpdateCurrentStatesFunction {
    (index: number, point: number): void
}

interface UpdateCurrentStatesProp {
    updateCurrentStates: UpdateCurrentStatesFunction
}

interface WinnerProp {
    winner: boolean
}

interface TieProp {
    tie: boolean
}

interface BoardProps extends PointsProp, UpdateCurrentStatesProp, TurnProp, PlayerProp, WinnerProp, TieProp {}

interface CellProps extends IdentityProp, UpdateCurrentStatesProp, TurnProp, PlayerProp, WinnerProp, PointsProp, TieProp {}

interface MessageProps extends WinnerProp, TieProp, TurnProp, PlayerProp {}

export type {
    PointsProp,
    IdentityProp,
    PlayerProp,
    MessageProp,
    SetPlayerProp,
    SetTurnProp,
    SetAllStateProps,
    BoardProps,
    CellProps,
    MessageProps
}