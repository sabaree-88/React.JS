import styled from 'styled-components';

const DiceHome = ({toggle}) => {

    return <>
        <DiceHomeContainer>
            <div className="img">
                <img src="./img/dices-1.png" alt="dice image" />
            </div>
            <div className='content'>
                <h1>DICE GAME</h1>
                <button onClick={toggle}>
                    Play Now
                </button>
            </div>
        </DiceHomeContainer>
    </>
}

const DiceHomeContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height:100vh;

    .img{
        width: 650px;
    }
    .img img{
        max-width: 600px;
    }

    .content{
        display: flex;
        flex-direction: column;
        align-items: end;
    }
    h1{
        color: #000000;
        font-size: 96px;
        word-wrap: normal;
        font-weight: bold;
    }
    button{
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
    }
`;

export default DiceHome