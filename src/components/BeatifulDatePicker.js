import React, {useCallback} from 'react';
import Card from "./Card";
import Wrapper from "./Wrapper";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function BeatifulDatePicker(props) {
  const callback = useCallback((selectedDate) => {
    if (props.setDate) {
      props.setDate(selectedDate);
    } else {
      console.error('Error: component depends on custom state controllers');
      console.log('Props: ', props);
    }
  }, [props]);
  return (
    <Card>
      <Wrapper>
        <DatePicker
          inline
          selected={props?.date || null}
          onChange={selectedDate => callback(selectedDate)}
        />
      </Wrapper>
    </Card>
  );
}

export default BeatifulDatePicker;