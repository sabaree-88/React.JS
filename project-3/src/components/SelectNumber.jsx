import { useState } from "react";
import styled from "styled-components"

const SelectNumber = ({selectedNum, setSelectedNum, error, setError}) => {
    const num = [1, 2, 3, 4, 5, 6];
    const handlError = (value) =>{
        setSelectedNum(value);
        setError("")
    }
    return <NumberSelectorCont>
        <p className="error">{error}</p>
        <div className="flex">
            {num.map((value, i) =>
                <Box
                    isSelected={value === selectedNum}
                    key={i}
                    onClick={() => handlError(value)}
                >{value}</Box>
            )}
        </div>
        <h2>Select Number</h2>
    </NumberSelectorCont>
}

export default SelectNumber

const NumberSelectorCont = styled.div`
   display: flex;
   align-items: end;
   flex-direction: column;
   margin-right: 20px;
   /* margin-top:20px; */

    .error{
        font-size: 24px;
        font-weight: 400;
        line-height: 36px;
        color: #FF0C0C;

    }
    .flex{
        display:flex;
        gap: 24px;
    }

    h2{
        font-size: 24px;
        color: #000000;
        font-weight: 700;
    }
`;
const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid #000000;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
    cursor: pointer;
`;