import {useEffect, useState} from 'react'
import styles from './takky.module.css'
import {History} from "@/components/takky/History";
import {Board} from "@/components/takky/Board";

const funnyCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
]

function checkWinner(array: (string | number)[]) {
    try {
        funnyCombinations.forEach((sol) => {
            if (array[sol[0]] == array[sol[1]] && array[sol[1]] == array[sol[2]]) {
                throw array[sol[0]]
            }
        })
    }
    catch (player) {
        // @ts-ignore
        if (typeof player === "string") {
            return player
        }
    }

    return null
}

function Index() {
    let [array, setArray] = useState<(string | number)[]>(Array(9).fill(NaN))
    let [active, setActive] = useState<string>("X")
    let [status, setStatus] = useState<string>("Gaming")
    let [history, setHistory] = useState<[string, (string | number)[], string][]>([])

    useEffect(() => setHistory([...history]), [history])

    function handleBoardClick(index: number) {
        if (typeof array[index] === "string")
            return

        if (checkWinner(array) !== null)
            return;

        array[index] = active

        if (active == "X")
            active = "O"
        else if (active == "O")
            active = "X"

        history.push([active + " at " + index % 3 + ", " + Math.floor(index / 3), [...array], active])

        setArray([...array])
        setActive(active)

        let check = checkWinner(array)
        if (check !== null) {
            console.log("sus")
            setStatus(check + " won")
        }
    }

    function handleHistoryClick(index: number) {
        array = history[index][1]
        setArray([...array])
        active = history[index][2]
        setActive(active)

        history = history.slice(0, index + 1)
    }

    return (
        <div className={styles.app}>
            <div>
                <h1>Piskvoneco</h1>
                <Board
                    array={array}
                    onClick={handleBoardClick}
                    activePlayer={active}
                    status={status}
                />
            </div>
            <div>
                <History
                    elements={history.map(e => e[0])}
                    onClick={handleHistoryClick}
                />
            </div>
        </div>
    )
}

export default Index
