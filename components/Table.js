import IconProp from "./props/IconProp";
import FilterListIcon from '@mui/icons-material/FilterList';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { openBox } from "../reducers/DotOptionSlice/dotOptionSlice";
import { useDispatch } from "react-redux";




const Table = ({posts}) => {

     
    

    const dispatch = useDispatch();

    return (
       
         <div className='pl-4 pr-1 pb-4 bg-white shadow-lg 
              absolute h-[20rem] mt-[3rem] overflow-y-hidden
               flex justify-around overflow-y-scroll lg:w-[90%] 
               lg:h-[20rem] xl:w-full xl:h-[27rem]'>
            <table className='table-auto overflow-auto border-separate xl:w-[90%]'>
               <thead className='sticky top-0'>
                 <tr className='
                    text-xs bg-white'>
                   <th className='pt-4'><span className="flex gap-2">ORGANIZATION
                   <IconProp icon={<FilterListIcon/>}/></span></th> 

                   <th className='pt-4'><span className="flex gap-2">USERNAME
                      <IconProp icon={<FilterListIcon/>}/></span></th>

                   <th className='pt-4 hidden md:table-cell'><span className="flex gap-2">EMAIL
                     <IconProp icon={<FilterListIcon/>}/></span></th>

                   <th className='pt-4 hidden lg:pl-[7vw] lg:table-cell
                     xl:pl-[0rem]'><span className="flex gap-2">PHONE NUMBER
                     <IconProp icon={<FilterListIcon/>}/></span></th>

                   <th className='pt-4 hidden xl:table-cell'><span className="flex gap-2">DATE JOINED
                     <IconProp icon={<FilterListIcon/>}/></span></th>

                   <th className='pt-4 bg-white hidden xl:table-cell xl:ml-[5rem]'><span className="flex gap-2">STATUS
                     <IconProp icon={<FilterListIcon/>}/></span></th>
                 </tr>
               </thead> 
               
               
               {posts.map((post)=>(
               <tbody key={post.id} 
                className="text-sm bg-white border-b">
                  <tr className="">
                    <td className='py-5 pr-3'>{post.orgName}</td>
                    <td>{post.userName}</td>
                    <td className="hidden md:table-cell">{post.email}</td>
                    <td className="hidden lg:pl-[7vw] lg:table-cell
                    xl:pl-[0rem]">{post.phoneNumber}</td>
                    <td className="hidden xl:table-cell">{post.createdAt.substr(0,10)}</td>
                    <td className="hidden xl:table-cell">{post.education.employmentStatus}</td>
                    <td><MoreVertIcon className="hover:bg-green-300 cursor-pointer
                     rounded-md"
                        onClick={()=>dispatch(openBox(true))}/></td> 
                  </tr> 
                 
               </tbody>
               ))}
            </table>   
            </div>  
    );
}

export default Table;