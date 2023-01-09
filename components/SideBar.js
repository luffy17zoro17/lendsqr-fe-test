import { useSelector } from "react-redux";
import { selectSideIcons } from "../reducers/sideIconsSlice/sideIconsSlice";
import IconProp from "./props/IconProp";
import SidebarProp from "./props/SidebarProp";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const SideBar =({udicon,udtitle,udclassN})=>{
    const content=useSelector(selectSideIcons);
    return (
      <div className="z-10 w-[20rem] bottom-0 fixed
       shadow-xl top-[5rem] bg-white text-gray-500 pt-5
        hidden xl:flex"> 
        <div className="h-full
          w-full hover:overflow-y-scroll">
        {content.map((item)=>(
           <div key={item.id} className={`${(item.id!==4 && item.id!==13 && item.id!==23
              && item.id!==26)
              && `flex pt-3 hover:bg-green-50 hover:border-l-4
              hover:border-green-500 hover:text-blue-900`}`}>
              <SidebarProp 
                 id={item.id} 
                 icon={item.icon}
                 title={item.title}
                 sclassN={`flex items-center mb-4 pl-9 gap-4
                 ${(item.id===4 || item.id===13 || item.id===23) && 
                  `font-bold text-xs pt-5`}`}
                 tclassN={`${(item.id===4 || item.id===13 || item.id===23)
                   && `ml-[-1rem] text-gray-700`}`}  
                 udicon={udicon}
                 udtitle={udtitle} 
                 udclassN={udclassN}   
                 
              />
              {item.id===1 && <IconProp icoclassN={`flex
                ml-1`} icon={<KeyboardArrowDownIcon/>}/>}  
           </div> 
            
        ))}
       </div> 
      </div>  
    );
}

export default SideBar