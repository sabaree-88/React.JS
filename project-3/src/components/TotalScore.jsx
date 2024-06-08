import styled from "styled-components"

const TotalScore = ({score}) =>{
    return <TotalScoreCont>
        <h1>{score}</h1>
        <p>Total Score</p>
    </TotalScoreCont>
}

export default TotalScore

const TotalScoreCont = styled.div`
width: 200px;
text-align: center;

    h1{
        font-size: 100px;
        font-weight: 600;
        color: #000000;
        line-height:100px;
    }
    p{
        font-size: 14;
        font-weight: 500;
        color: #000000;
    }
`;