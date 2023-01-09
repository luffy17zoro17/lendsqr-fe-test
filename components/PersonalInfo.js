



const PersonalInfo = ({firstN,lastN,email,bvn,gender,prPhNo}) => {
    return (
      
        <div>
             <h1 className="font-medium text-[1rem] tracking-wide">
                    Personal Information
             </h1>
             <div className="w-full space-y-3">
                <div className="flex w-full justify-evenly flex-wrap my-9">
                  <div className="my-9 xl:mr-6">
                    <h1 className="mb-1 text-xs tracking-wider">FULL NAME</h1>
                    <span>{firstN}&nbsp;{lastN} </span>
                  </div>
                  <div className="my-9 mx-3">
                     <h1 className="mb-1 text-xs tracking-wider">PHONE NUMBER</h1>
                     <span>{prPhNo}</span>
                  </div>
                  <div className="my-9 mx-3">
                    <h1 className="mb-1 text-xs tracking-wider">EMAIL ADDRESS</h1>
                    <span>{email}</span>
                  </div>
                  <div className="my-9 mx-3">
                    <h1 className="mb-1 text-xs tracking-wider">BVN</h1>
                    <span>{bvn}</span>
                  </div>
                  <div className="my-9 mx-3">
                    <h1 className="mb-1 text-xs tracking-wider">GENDER</h1>
                    <span>{gender}</span>
                  </div>
                </div>
                <div className="flex pl-[4.1vw]">
                  <div className="mr-[3.3vw] my-9 mx-3">
                    <h1 className="mb-1 text-xs tracking-wider">MARITAL STATUS</h1>
                    <span>Single</span>
                  </div>
                  <div className="mr-[9.1vw] my-9 mx-3">
                    <h1 className="mb-1 text-xs tracking-wider">CHILDREN</h1>
                    <span>None</span> 
                  </div>
                  <div className="my-9 mx-3">
                    <h1 className="mb-1 text-xs tracking-wider">TYPE OF RESIDENCE</h1>
                    <span>Parent&apos;s Apartment</span>
                  </div>
                </div>
                
             </div> 
      </div>  
    );
}

export default PersonalInfo;