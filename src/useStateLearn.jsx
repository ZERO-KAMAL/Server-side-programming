import { useState } from "react"

const Button = ({ onClickBtn, text }) => (
    <button onClick={onClickBtn}>{text}</button>
)


const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad

    if (all === 0) {
        return <p>No feedback given</p>
    }

    const avg = (good - bad) / all

    return (
        <div>
             <StatisticsLine text={'good'} value={good} />
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>All: {all}</p>
            <p>Average: {avg.toFixed(2)}</p>
        </div>
    )
}

const UseStateLearnComponent = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => {
        setGood(good + 1)
    }

    const handleNeutral = () => {
        setNeutral(neutral + 1)
    }

    const handleBad = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <h2>Give feedback</h2>

            <Button onClickBtn={handleGood} text="Good" />
            <Button onClickBtn={handleNeutral} text="Neutral" />
            <Button onClickBtn={handleBad} text="Bad" />

            <h2>Statistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad} />
            
        </div>
    )
}

export default UseStateLearnComponent
