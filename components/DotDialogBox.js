import IconProp from "./props/IconProp";
import VisibilityIcon from '@mui/icons-material/Visibility';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PersonRemoveAlt1Icon from '@mui/icons-material/PersonRemoveAlt1';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from "react-redux";
import { openBox } from "../reducers/DotOptionSlice/dotOptionSlice";
import InputProp from "./props/InputProp";


import { useRef } from "react";

import {useRouter} from "next/router"


const DotDialogBox = () => {

    const id=useRef();
    const router = useRouter();


    const handleClick = () =>{
        console.log(id?.current?.value,"valuee of id");
        localStorage.setItem("id value:",id?.current?.value);

        console.log(localStorage.getItem("id value:","id:"));

        router.push("/UserDetails");

    }


    

    const dispatch= useDispatch();
    return (
      <div className="border
          shadow-xl rounded-sm text-sm text-gray-800 font-medium py-6 px-9 space-y-3
          bg-white fixed right-8 bottom-[17rem]">
         <div className="flex justify-end mr-[-1rem]
           "><IconProp 
          icon={<CloseIcon className="hover:bg-green-300
           rounded-md cursor-pointer"
          onClick={()=>dispatch(openBox(false))}/>}/></div>   
         <div className="flex gap-2 items-start"><IconProp icon={<VisibilityIcon className="text-[1.1rem]"/>}/>
         View Details of Id:<br/>[1-100] 
        
         <InputProp 
          intype={'number'} 
          inmin={'1'}
          inmax={'100'}
          inref={id} 
          inclassN={`pl-1 border border-green-400 w-[3rem]`}/>
         <button 
           className="z-30 shadow shadow-black p-1
          rounded-md bg-green-200 hover:bg-green-300" 
          onClick={handleClick}>Go!</button>
         
         </div>

         <div className="flex gap-2"><IconProp icon={<PersonRemoveAlt1Icon className="text-[1.1rem]"/>}/>Blacklist User</div>
         <div className="flex gap-2"><IconProp icon={<HowToRegIcon className="text-[1.1rem]"/>}/>Activate User</div>
      </div>  
    );
}

export default DotDialogBox;