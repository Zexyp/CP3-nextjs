import {ReactElement} from "react";
import styles from "./History.module.css"

interface HistoryPropsInteface {
    elements: string[]
    onClick: (index: number) => void
}

export function History(props: HistoryPropsInteface): ReactElement {
    return (
        <div>
            <h2>History</h2>
            <ul className={styles.history}>
                {
                    props.elements.map((e, i) => {
                        return (
                            <li onClick={() => props.onClick(i)}>{e}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}