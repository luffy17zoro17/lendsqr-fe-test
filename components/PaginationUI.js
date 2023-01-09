import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import IconProp from './props/IconProp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const numbers = [
    {id:1},
    {id:2},
    {id:3},
    {id:'...'},
    {id:15},
    {id:16},
    
]


const PaginationUI = () => {
    return (
        <div className='flex fixed top-[58.5rem]
        justify-center pl-[22.5rem] hidden xl:flex'>
        <div className='
        flex justify-between w-[95rem]'>
        <div className='flex text-sm font-light
         items-center tracking-wide'>
            <span>Showing</span>
            <div className='bg-gray-300 rounded-sm flex
             items-center px-3 py-[0.1rem] mx-3 font-medium'>100
             <IconProp icon={<KeyboardArrowDownIcon className="ml-4"/>}/>
            </div> 
            out of 100
        </div>
        <div className='
         flex items-center text-gray-400 gap-6'>
         <IconProp 
           icoclassN={`bg-gray-300 rounded-sm`}
           icon={<KeyboardArrowLeftIcon className="text-gray-500"/>} />   
        {numbers.map((numb)=>(
            <span key={numb.id} className={`${numb.id===1 && `text-gray-900`}`}>{numb.id}</span>
            
        ))}
        <IconProp 
          icoclassN={`bg-gray-300 rounded-sm`}
          icon={<KeyboardArrowRightIcon className="text-gray-900"/>}/>
         
       </div> 
       </div>
      </div> 
    );
}

export default PaginationUI;