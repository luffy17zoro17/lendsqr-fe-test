import {createSlice} from "@reduxjs/toolkit";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SavingsIcon from '@mui/icons-material/Savings';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PersonOffIcon from '@mui/icons-material/PersonOff';



import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TollIcon from '@mui/icons-material/Toll';
import PaymentsIcon from '@mui/icons-material/Payments';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AssessmentIcon from '@mui/icons-material/Assessment';

import TuneIcon from '@mui/icons-material/Tune';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ListAltIcon from '@mui/icons-material/ListAlt';




const initialState = {
    sideIcons: [
        {id:1,icon:<BusinessCenterIcon/>,title:"Switch Organisation"},
        {id:2,icon:<HomeIcon/>,title:"Dashboard"},
        {id:3,icon:<PeopleIcon/>,title:"Users"},
        {id:4,icon:'',title:"CUSTOMERS"},
        {id:5,icon:<GroupsIcon/>,title:"Guarantors"},
        {id:6,icon:<CurrencyRupeeIcon/>,title:"Loans"},
        {id:7,icon:<HandshakeIcon/>,title:"Decision Models"},
        {id:8,icon:<SavingsIcon/>,title:"Savings"},
        {id:9,icon:<RequestPageIcon/>,title:"Loan Requests"},
        {id:10,icon:<HowToRegIcon/>,title:"Whitelist"},
        {id:11,icon:<PersonOffIcon/>,title:"Karma"},
        {id:12,icon:<BusinessCenterIcon/>,title:"Organization"},
        {id:13,icon:'',title:"BUSINESSES"},
        {id:14,icon:<RequestPageIcon/>,title:"Loan Products"},
        {id:15,icon:<AccountBalanceIcon/>,title:"Savings Products"},
        {id:16,icon:<TollIcon/>,title:"Fees and Charges"},
        {id:17,icon:<PaymentsIcon/>,title:"Transactions"},
        {id:18,icon:<MiscellaneousServicesIcon/>,title:"Services"},
        {id:19,icon:<ManageAccountsIcon/>,title:"Service Account"},
        {id:20,icon:<ReceiptLongIcon/>,title:"Settlements"},
        {id:21,icon:<AssessmentIcon/>,title:"Reports"},
        {id:22,icon:<TuneIcon/>,title:"Preferences"},
        {id:23,icon:'',title:"SETTINGS"},
        {id:24,icon:<PointOfSaleIcon/>,title:"Fees and Pricing"},
        {id:25,icon:<ListAltIcon/>,title:"Audit Logs"},
        {id:26,icon:'',title:""},
        

    ]
}


const sideIconSlice = createSlice({
       name:"sideSlice",
       initialState,
       reducers:{},

});

export const selectSideIcons = state =>state?.sideSlice?.sideIcons;



export default sideIconSlice.reducer;
