import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ImageProp from "./props/ImageProp";
import IconProp from './props/IconProp';
import InputProp from './props/InputProp';
import SearchIcon from '@mui/icons-material/Search';


const Navbar = () =>{
    return (
     <div className='fixed top-0 w-full bg-white shadow-md 
      h-[6rem] z-10'>
       <div className='flex mt-6'>
        <div className="flex text-xl items-center pl-6 z-10">
         <ImageProp
            isrc={`https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/drg9bxadhql5l1e1zth0`}
            iclassN={`h-[2rem] w-[2rem] object-contain`}
            iht={500}
            iwd={500}
            alt={"logo"}
         />
         <h1 className="font-bold text-3xl pl-1">lendsqr</h1>
        </div> 
        <div className='flex items-center
         absolute right-12 z-10'>
           <span className="underline pr-9 hidden xl:flex">Docs</span> 
           <IconProp
             icon={<NotificationsNoneIcon/>}
             icoclassN={"px-8 hidden sm:flex"}
           />
           <ImageProp
             isrc={`https://w0.peakpx.com/wallpaper/279/139/HD-wallpaper-monkey-d-luffy-anime-evening-field-one-piece.jpg`}
             iht={50}
             iwd={50}
             iclassN={`rounded-full mr-4 h-[3rem] w-[3rem] object-cover`}
             alt={"profile_image"}
           />
           Thomas Mathew
           <IconProp
             icon={<ArrowDropDownIcon/>}
           />
        </div>
       </div> 
       <div className='absolute top-7
        justify-center w-full hidden
         lg:flex lg:pr-12'>  
         <InputProp
           placehold={`Search for Anything`}
           inclassN={`border py-2 px-4 relative
             text-sm w-[22rem] outline-none rounded-l-md
             `}
         />     
         <IconProp
           icon={<SearchIcon className="text-[1.3rem] text-white"/>}
           icoclassN={`bg-cyan-400 px-4 rounded-r-md pt-1`}
         />
       </div>
     </div>
    );
}

export default Navbar;