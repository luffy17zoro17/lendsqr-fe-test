import { useEffect, useState } from "react"
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import User_Info from "../components/User_Info";
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import IconProp from "../components/props/IconProp";

import InputIcon from '@mui/icons-material/Input';


const User_Details =()=>{

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {

    const id= localStorage.getItem("id value:","id:");
    setLoading(true)
    fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
  
  console.log(data,"this is user details id data!");
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>



    return (
     <div>
      <Navbar/>
      <div>
      <SideBar
        udicon={<SettingsSuggestIcon/>}
        udtitle={`Systems Messages`}      
        udclassN={`pb-[5rem]
         hover:bg-green-50 hover:border-l-4 py-3.5
          hover:border-green-400 hover:text-blue-900`}   
      /> 
      <div className="bottom-0 h-[5.5rem] bg-white
        fixed w-[19rem] z-30 flex">
      <IconProp
        icoclassN={``}
        icon={<InputIcon className="ml-[2.3rem] mr-2 mt-4"/>}
      /><span className="z-10 pt-4">Logout</span>
      <span className="bottom-2 fixed text-xs left-[2.3rem]">v1.2.0</span>
      </div>
      
      </div>
      <User_Info
        avatr={data.profile.avatar}
        firstN={data.profile.firstName}
        lastN={data.profile.lastName}
        accN={data.accountNumber}
        currency={data.profile.currency}
        accBal={data.accountBalance}
        orgN={data.orgName}
        orgPh={data.phoneNumber}
        prPhNo={data.profile.phoneNumber}
        email={data.email}
        bvn={data.profile.bvn}
        gender={data.profile.gender}
        edu={data.education.level}
        empStatus={data.education.employmentStatus}
        empSect={data.education.sector}
        empDur={data.education.duration}
        officeEmail={data.education.officeEmail}
        loanRepay={data.education.loanRepayment}
        monthInc={data.education.monthlyIncome}
        socials={data.socials}
        guarantor={data.guarantor}

      />
     </div>   
    );
}

export default User_Details;