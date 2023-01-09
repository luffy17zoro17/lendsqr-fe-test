



const Guarantor = ({guarantor}) => {
    return (
       <div>
             
             <div className="w-full space-y-3">
                <div className="flex w-full justify-evenly flex-wrap my-9">
                  <div className="my-9 mx-3">
                    <h1 className="mb-1 text-xs tracking-wider">FULL NAME</h1>
                    <span>{guarantor?.firstName}&nbsp;{guarantor?.lastName} </span>
                  </div>
                  <div className="my-9 mx-3">
                     <h1 className="mb-1 text-xs tracking-wider">PHONE NUMBER</h1>
                     <span>{guarantor?.phoneNumber}</span>
                  </div>
                  <div className="my-9 mx-3">
                    <h1 className="mb-1 text-xs tracking-wider">EMAIL ADDRESS</h1>
                    <span className="lowercase">{guarantor?.firstName}@gmail.com</span>
                  </div>
                  <div className="my-9 mx-3">
                    <h1 className="mb-1 text-xs tracking-wider">RELATIONSHIP</h1>
                    <span>Sister</span>
                  </div>
                </div>
                        
             </div> 
            
       </div> 
    );
}


export default Guarantor;