import styled from "styled-components"

const Rules = () => {
    return <>
        <RulesContainer>
            <h2>How to play dice game</h2>
            <div className="textContent">
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
                <p>if you get wrong guess then  2 point will be dedcuted </p>
            </div>
        </RulesContainer>
    </>
}

export default Rules

const RulesContainer = styled.div`
    max-width: 750px;
    background: #FBF1F1;
    margin: 0 auto;
    margin-top: 20px;
    padding: 20px;
    border-radius:10px; 

    h2{
        font-size: 24px;
    }
    p{
        font-size: 16px;
        font-weight: 500;
    }
`;