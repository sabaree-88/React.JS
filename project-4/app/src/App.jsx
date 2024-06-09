import { useEffect, useState } from 'react';
import styled from 'styled-components';
import FoodResults from './components/FoodResults';

export const BASE_URL = "http://localhost:9000";
const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFiltereData] = useState(null);
  const [filterBtn, setFilterBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const res = await fetch(BASE_URL);
        const json = await res.json();
        setData(json);
        setFiltereData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };

    fetchFoodData();
  }, [])

  if (error) return <div>{error}</div>
  if (loading) return <div>Loading....</div>


  const searchFood = (e) => {
    const searchValue = e.target.value;
    if (searchValue === "") {
      setFiltereData(null);
    }
    const filter = data?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()))
    setFiltereData(filter);
  }

  const searchType = (type) =>{
    if(type === "all"){
      setFiltereData(data);
      setFilterBtn("all");
      return;
    }
    const filter = data?.filter((food) => food.type.toLowerCase().includes(type.toLowerCase()))
    setFiltereData(filter);
    setFilterBtn(type);
  }

  const filterBtns = [
    {
      name : "All",
      type: 'all',
    },
    {
      name : "Breakfast",
      type: 'breakfast',
    },
    {
      name : "Lunch",
      type: 'lunch',
    },
    {
      name : "Dinner",
      type: 'dinner',
    },
  ]
  return <Container>
    <TopContainer>
      <div className='logo-container'>
        <img src="/logo.svg" alt="logo" />
      </div>
      <div className="search">
        <input type="search" placeholder='Search Food....'
          onChange={searchFood}
        />
      </div>
    </TopContainer>

    <FilterContainer>
      {filterBtns.map((item)=> <Button onClick={() => searchType(item.type)}>{item.name}</Button>)}
    </FilterContainer>

    <FoodResults data={filteredData} />
  </Container>;
};

export default App;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const TopContainer = styled.section`
max-width: 1200px;
margin: 0 auto;
    min-height: 140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    input{
      all: unset;
      width: 280px;
      height: 20px;
      padding: 10px;
      border: 1px solid #FF0909;
      border-radius: 6px;
      font-weight: normal;
      font-size: 16px;
      color: #FFFFFF;
    }
    input::placeholder{
        color: #FFFFFF;
      }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 30px;
`;
const Button = styled.button`
all: unset;
  background-color: #FF4343;
  color: #FFFFFF;
  padding: 6px 12px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;

  &:hover{
    background-color: #f32222;
  }
`;