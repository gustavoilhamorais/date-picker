import React, {useState} from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [date, setDate] = useState(null);
  return (
    <Card>
      <Wrapper>
        <DatePicker
          inline
          selected={date}
          onChange={selectedDate => setDate(selectedDate)}
        />
      </Wrapper>
    </Card>
  );
}

export default App;
