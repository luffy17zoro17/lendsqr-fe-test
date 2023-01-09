



const EducationAndEmp = ({edu,empStatus,empSect,empDur,officeEmail,
   loanRepay,monthInc,currency}) => {
    return (
      <div>
        <h1 className="font-medium text-[1rem] tracking-wide">
               Education And Employment
        </h1>
        <div className="w-full space-y-3">
           <div className="flex w-full justify-evenly flex-wrap my-9">
             <div className="my-9 mr-3 xl:mx-9">
               <h1 className="mb-1 text-xs tracking-wider">LEVEL OF EDUCATION</h1>
               <span>{edu}</span>
             </div>
             <div className="my-9 mx-3">
                <h1 className="mb-1 text-xs tracking-wider">EMPLOYMENT STATUS</h1>
                <span>{empStatus}</span>
             </div>
             <div className="mx-3 my-9">
               <h1 className="mb-1 text-xs tracking-wider
                 md:my-0">SECTOR OF EMPLOYMENT</h1>
               <span>{empSect}</span>
             </div>
             <div className="mx-3 my-9">
               <h1 className="mb-1 text-xs tracking-wider">DURATION OF EMPLOYMENT</h1>
               <span>{empDur}</span>
             </div>
             <div className="my-9 mx-3">
               <h1 className="mb-1 text-xs tracking-wider">OFFICE EMAIL</h1>
               <span>{officeEmail}</span>
             </div>
           </div>
           <div className="flex pl-[4.1vw]">
             <div className="mr-[3.3vw] my-9 mx-3">
               <h1 className="mb-1 text-xs tracking-wider">MONTHLY INCOME</h1>
               <span>{currency}&nbsp;{monthInc[0]}- {currency}&nbsp;{monthInc[1]}</span>
             </div>
             <div className="mr-[9.1vw] my-9 mx-3">
               <h1 className="mb-1 text-xs tracking-wider">LOAN REPAYMENT</h1>
               <span>{loanRepay}</span> 
             </div>
           </div>
           
        </div> 
   </div>  
    );
}


export default EducationAndEmp;