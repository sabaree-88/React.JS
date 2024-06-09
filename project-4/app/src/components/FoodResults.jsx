import styled from "styled-components";
import { BASE_URL } from "../App";

const FoodResults = ({ data }) => {

    return <FoodCardsContainer>
        <FoodCards>
            {data?.map(({name, image, text, price}) => (
                <FoodCard
                    key={name}
                >
                    <div className="food_img">
                        <img src={BASE_URL +image} alt="food image" />
                    </div>
                    <div className="details">
                        <div className="info">
                            <h2 className="foodName">
                                {name}
                            </h2>
                            <p className="desc">
                                {text}
                            </p>
                        </div>
                        <Button>
                            ${price.toFixed(2)}
                        </Button>

                    </div>

                </FoodCard>
            ))}
        </FoodCards>
    </FoodCardsContainer>
}

export default FoodResults;

const FoodCardsContainer = styled.section`
  min-height: calc(100vh - 210px);
  background: url("/bg.png") no-repeat center / cover;
`;
const FoodCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding-top: 30px;
`;

const FoodCard = styled.div`
    padding:10px;
    width: 347px;
    height: 160px;
    background-color: #ffffff34;
    backdrop-filter: blur(50);
    border-radius: 20px;
    display: flex;
    gap: 10px;

    .details{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        align-items: end;
    }
    .info{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    h2{
        font-size: 16px;
        font-weight: 600;
    }
    p{
        font-size: 14px;
        font-weight: 400;
    }
`;

const Button = styled.button`
    all: unset;
    border-radius: 5px;
    width:60px;
    height: 25px;
    text-align: center;
    padding: 4px 6px;
    background: #FF4343;
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
`;