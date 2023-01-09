
import { useSelector } from 'react-redux';
import useSWR from 'swr';
import { selectFourRect } from '../reducers/fourRectSlice/fourRectSlice';
import FourRectProp from './props/FourRectProp';

import { selectDot } from '../reducers/DotOptionSlice/dotOptionSlice';
import DotDialogBox from './DotDialogBox';
import PaginationUI from './PaginationUI';
import Table from './Table';



const fetcher = (...args)=>fetch(...args).then((res)=>res.json());





const AllUserTable = () => {

   


    const dotValue = useSelector(selectDot);

    

    const boxes = useSelector(selectFourRect);

    const {data:posts, error} = useSWR('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users',fetcher)
  
    if(error) return <div>Failed to Load</div>
    if(!posts) return <div>Loading...</div>
    console.log(posts);
    return (

        <div className='mt-[10rem] relative xl:ml-[22rem]'>

            <h1 className='text-2xl font-medium 
             w-full flex justify-center
              pb-4 xl:justify-start xl:pl-[3vw]'>
                Users</h1> 

            <div className='z-0'>
            <div className='flex
              flex flex-wrap justify-center gap-6
              xl:gap-11'>
               
            {boxes.map((box)=>(
               <span key={box.id} className="mb-8 bg-white"> 
                <FourRectProp
                   icon={box.icon}
                   title={box.title}
                   icoclassN={`rounded-full
                   w-[3rem] h-[3rem] flex flex-col items-center 
                   justify-center 
                   ${box.id===1 && "bg-red-200 text-red-700"}
                   ${box.id===2 && "bg-violet-200 text-violet-800"}
                   ${(box.id===3 || box.id===4) && `bg-orange-100 text-orange-500`}`}
                   numbers={box.count}
                />     
               </span> 
            ))}
            
            </div>
            <div className='flex justify-center'>
            <Table
              posts={posts}
            />
            </div>
            
            </div>
            

            
            {(dotValue === true) && <DotDialogBox/>}   
            
        </div>    

    );
}




export default AllUserTable;


