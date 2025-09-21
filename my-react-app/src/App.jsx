import './App.css';
import CounterApp from './components/Counter';
import CustomBtn from './components/CustomButton';
import Greeting from './components/Greeting';
import InputTxt from './components/InputTxt';
import ToDoList from './components/ToDo';
import WeatherApp from './components/WeatherApp';

function App() {
  // Using the Greeting component with different destructured props
  // to display greetings for multiple users
  // Each user has a name, age, and location
  // return (
  //   <div>
  //     <Greeting name="Debjani" age={29} location="Bangalore" />
  //     <Greeting name="Rahul" age={32} location="Mumbai" />
  //     <Greeting name="Sita" age={25} location="Delhi" />
  //     <Greeting name="Ravi" age={28} location="Chennai" />
  //     <Greeting name="Anita" age={30} location="Kolkata" />
  //   </div>
  // )

  /** Passing event handler as props */
  const handleBtnClick = () => {
    alert('Button clicked!');
  };

  const handleInputChange = (event) => {
    console.log('Input changed:', event.target.value);
  };

  // Using the CustomBtn component with a label and an onClick handler
  // return (
  //   <div>
  //     <CustomBtn label="Click me" onClick={handleBtnClick} />
  //   </div>
  // )

  // Using the InputTxt component with an onChange handler
  // to log input changes to the console
  // This component renders an input field that triggers the handleInputChange function
  // whenever the input value changes
  // This allows for dynamic interaction with the input field
  // and can be used to capture user input in real-time.
  return (
    <div>
      {/* <InputTxt onChange={handleInputChange} /> */}
      {/* <CounterApp/> */}
      {/* <ToDoList/> */}
      <WeatherApp />
    </div>
  );
}

export default App;
