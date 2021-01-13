import React from 'react';
import styled from 'styled-components';
import {rgba} from 'polished';

const Card = styled.div`
  padding: 0.5rem;
  border-radius: 3rem;
  background: #471a8a;
  width: 250px;

  & .react-datepicker {
    border: 0;
    font-family: "Helvetica Neue";
    background: transparent;
    color: ${rgba('white', 0.85)};
  }

  & .react-datepicker__navigation {
    top: 0.875rem;
    opacity: 0.5;
  }

  & .react-datepicker__header {
    padding: 0;
    border: 0;
    background: transparent;
  }

  & .react-datepicker__current-month {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    color: ${rgba("white", 0.85)};
  }

  & .react-datepicker__day {
    outline: none;
    border-radius: 50%;
    color: ${rgba("white", 0.5)};
  }

  & .react-datepicker__day-name {
    color: ${rgba("white", 0.25)};
  }

  & .react-datepicker__day--selected,
  & .react-datepicker__day--keyboard-select,
  & .react-datepicker__day:hover {
    background: #311758;
    color: white;
  }
`;

export default Card;