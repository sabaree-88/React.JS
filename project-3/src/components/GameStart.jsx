import TotalScore from './TotalScore'
import SelectNumber from './SelectNumber'
import RoleDice from './RoleDice'
import styled from 'styled-components'
import { useState } from 'react'
import Rules from './Rules'
const GameStart = () => {
    const [score, setScore] = useState(0);
    const [selectedNum, setSelectedNum] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState();
    const [showRules, setShowRules] = useState(false);

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const resetScore = () => {
        setScore(0);
    }
    const roleDice = () => {
        if (!selectedNum) {
            setError("You have not selected any number")
            return;
        }
        setError("")
        const randomNum = randomNumber(1, 7);
        setCurrentDice((prev) => randomNum);

        if (selectedNum === randomNum) {
            setScore((prev) => prev + randomNum)
        } else {
            setScore((prev) => prev - 2)
        }

        setSelectedNum(undefined);
    }
    return <ManinContainer>
        <div className="top_section">
            <TotalScore score={score} />
            <SelectNumber selectedNum={selectedNum} setSelectedNum={setSelectedNum} error={error} setError={setError} />
        </div>
        <RoleDice currentDice={currentDice} roleDice={roleDice} />
        <div className="btns">
            <OutlineButton onClick={resetScore}>Reset</OutlineButton>
            <Button
                onClick={() => setShowRules((prev) => !prev)}
            >{showRules ? "Hide" : "Show"} Rules</Button>
        </div>

        {showRules && <Rules />}
    </ManinContainer>
}

export default GameStart

const ManinContainer = styled.main`
padding-top:30px;
   .top_section{
    display: flex;
    justify-content: space-between;
    align-items: end;
   }
   .btns{
    margin-top: 20px;
    display:flex;
    flex-direction: column;
    gap:20px;
    align-items: center;
   }
`;
const OutlineButton = styled.button`
    font-size:16px;
        font-weight: 600;
        color:#000000;
        width: 220px;
        height: 44px;
        background-color: #FFFFFF;
        outline: none;
        border: 1px solid #000000;
        border-radius: 5px;
        cursor: pointer;

        &:hover{
            background-color: #000000;
            border: 1px solid transparent;
            color: #FFFFFF;
            transition: 0.5s;
        }
`;

const Button = styled.button`
    font-size:16px;
        font-weight: 600;
        color:#FFFFFF;
        width: 220px;
        height: 44px;
        background-color: #000000;
        outline: none;
        border: 1px solid transparent;
        border-radius: 5px;
        cursor: pointer;

        &:hover{
            background-color: #FFFFFF;
            border: 1px solid #000000;
            color: #000000;
            transition: 0.5s;
        }
`;