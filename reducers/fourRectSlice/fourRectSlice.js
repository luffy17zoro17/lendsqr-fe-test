import {createSlice} from "@reduxjs/toolkit";

import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import SavingsIcon from '@mui/icons-material/Savings';

const initialState ={
    values:[
        {
            id:1,
            icon:<SupervisedUserCircleIcon/>,
            title:"USERS",
            count:"2,453",
        },
        {
            id:2,
            icon:<Diversity1Icon/>,
            title:"ACTIVE USERS",
            count:"2,453",
        },
        {
            id:3,
            icon:<RequestQuoteIcon/>,
            title:"USERS WITH LOANS",
            count:"12,453",
        },
        {
            id:4,
            icon:<SavingsIcon/>,
            title:"USERS WITH SAVINGS",
            count:"102,453",
        }
    ]
}


const fourRectSlice = createSlice({
      name:"fourRect",
      initialState,
      reducers:{},
});

export const selectFourRect = state => state.fourRect.values;

export default fourRectSlice.reducer;