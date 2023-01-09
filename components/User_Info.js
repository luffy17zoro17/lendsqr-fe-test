import IconProp from "./props/IconProp";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import ImageProp from "./props/ImageProp";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

import PersonalInfo from "./PersonalInfo";
import EducationAndEmp from "./EducationAndEmp";
import Socials from "./Socials";
import Guarantor from "./Guarantor";

import Link from "next/link"


const User_Info = ({firstN, lastN, accN,avatr,currency,accBal,orgN,orgPh,prPhNo,
                        email,bvn,gender,edu,empStatus,empSect,empDur,
                       officeEmail,loanRepay,monthInc,socials,
                        guarantor}) =>{


    return (

        <div className="flex flex-col items-center justify-center mt-[9rem]">
            <div className="flex justify-between w-[50%] items-end">

            <div className="sm:ml-[-7rem] xl:ml-[2rem]">
            <Link href="/Dashboard"><span className="flex w-[11rem] ml-[-5rem] hover:text-green-400 sm:ml-0
               pb-5 lg:ml-0 lg:pb-0">
              <IconProp icon={<KeyboardBackspaceIcon className="mr-1"/>}/>
            Back to Users</span></Link>
            <h1 className="text-2xl
             font-medium pt-5 w-[9rem]
              my-5 pt-11">
              User Details</h1>
            </div>

            <div className="flex font-semibold text-sm tracking-widest gap-4 pb-[3.6rem]
              absolute mb-[1rem]  sm:right-[3rem] lg:pb-0 lg:right-[6rem] xl:right-[6.5vw]">
            <div className="px-3 rounded-lg py-2 border border-red-600 text-red-600">BLACKLIST USER</div>
            <div className="px-3 rounded-lg py-2 border border-cyan-400 text-cyan-400">ACTIVATE USER</div>
            </div>
            </div>

            <div className="bg-white shadow-lg px-6 pt-6 lg:w-[70%] xl:ml-[20rem]">

              <div className="flex flex-col lg:flex-row items-center space-x-4"> 
               <ImageProp
                  isrc={avatr}
                  iht={70}
                  iwd={70}
                  iclassN={`rounded-full bg-gray-300 w-[7rem] h-[7rem]
                      flex justify-center object-contain items-center border-4`}
                  alt={"Profile_image"}    
                />
                <div className="pr-5">
                <h1 className="font-medium text-xl">
                     {firstN}&nbsp;{lastN} 
                </h1>
                <span>{accN}</span>
                </div>
                <hr className="h-[6rem] border-l hidden lg:flex"/>

                <div className="text-sm px-5 py-7 lg:py-0">
                <h1 className="">User&apos;s Tier</h1>
                <div className="text-yellow-500 flex">
                 <IconProp icon={<StarIcon fontSize="small"/>}/>
                 <IconProp icon={<StarBorderIcon fontSize="small"/>}/>
                 <IconProp icon={<StarBorderIcon fontSize="small"/>}/></div>
                </div>

                <hr className="h-[6rem] border-l hidden lg:flex"/>
                <div className="pl-5">
                <span className="font-medium text-xl">{currency}&nbsp;{accBal}</span>
                <h3 className="text-xs">{orgPh}/{orgN}</h3>
                </div>
              </div>  

              <div className="space-x-[6rem] px-6 pt-11 flex xl:space-x-[4vw]">
                <span className="text-green-500 text-center space-y-2"><h1>General Details</h1>
                <hr className="border-green-500 border-[0.1rem] bg-green-500 
                w-[11rem]"/></span><span className="hidden lg:flex">Documents</span>
                <span className="">Bank Details</span>
                <span className="hidden sm:flex">Loans</span>
                <span className="hidden md:flex">Savings</span>
                <span className="hidden xl:flex">App and System</span>
              </div>

            </div>

            <div className="shadow-lg mt-[2rem] p-6 
            w-full lg:w-[70%] xl:ml-[20rem]">
              <PersonalInfo
                firstN={firstN}
                lastN={lastN}
                bvn={bvn}
                prPhNo={prPhNo}
                email={email}
                gender={gender}
              />
              <hr className="my-7"/>
              <EducationAndEmp
                edu={edu}
                empStatus={empStatus}
                empSect={empSect}
                empDur={empDur}
                officeEmail={officeEmail}
                loanRepay={loanRepay}
                monthInc={monthInc}
                currency={currency}
              />
              <hr className="my-7"/>
              <Socials
                socials={socials}
              />
              <hr className="my-7"/>
              Guarantor
              <Guarantor
                guarantor = {guarantor}
              />
              <hr className="my-7"/>
              <Guarantor
                guarantor={guarantor}
              />
             
               
           </div>
            
         </div>
        
        

    );
}

export default User_Info;