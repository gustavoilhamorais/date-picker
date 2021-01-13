import React, {useState} from 'react';
import "react-datepicker/dist/react-datepicker.css";
import BeatifulDatePicker from "./components/BeatifulDatePicker";

function App() {
  const [date, setDate] = useState(null);
  return (
    <BeatifulDatePicker date={date} setDate={setDate}/>
  );
}

export default App;
