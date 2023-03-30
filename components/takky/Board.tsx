import {ReactElement} from "react";
import styles from "./Board.module.css"

interface BoardPropsIterface {
    activePlayer: string
    status: string
    array: Array<any>
    onClick: (index: number) => void
}

export function Board(props: BoardPropsIterface): ReactElement {
    return (
        <div>
            <h2>Board</h2>
            <h3>Status: {props.status}</h3>
            <h3>Moaner: {props.activePlayer}</h3>
            <div className={styles.board}>
                {
                    props.array.map((v, i) => {
                        return (<button onClick={() => props.onClick(i)}>{v.toString() != "NaN" ? v : ""}</button>)
                    })
                }
            </div>
        </div>
    )
}