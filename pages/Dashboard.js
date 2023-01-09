import AllUserTable from "../components/AllUserTable";
import Navbar from "../components/Navbar";
import PaginationUI from "../components/PaginationUI";
import SideBar from "../components/SideBar";



const Dashboard = ()=>{

    return (
    <div className="border-4 border-red-50 h-screen bg-red-50 overflow-y-scroll">
        <Navbar/>
      <div>
        <SideBar/>
      </div>
      <div className="">
        <AllUserTable/>
      </div>  
      <PaginationUI/> 
    </div>

    );
}

export default Dashboard;