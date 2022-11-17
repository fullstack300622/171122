import Item from './components/Item';
//import Hand from './components/hand';
import Wrapper from './components/UI/Wrapper';


function App() {
  return (
    <Wrapper>
      <div className="App">
        <div >header </div>
        <Item
          title="Television"
          amount="300"
          date="17/11/2022"
          time="18:23"
        />
        <Item
          title="Macdonalds"
          amount="20"
          date="15/11/2022"
          time="20:13"
        />
        <Item
          title="Shoes"
          amount="200"
          date="14/11/2022"
          time="15:00"
        />

      </div>
    </Wrapper>
  );
}

export default App;
