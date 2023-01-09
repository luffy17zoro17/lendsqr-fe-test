


const Socials = ({socials}) => {
    return (
      <div>
           <h1 className="font-medium text-[1rem] tracking-wide">
                    Socials
             </h1>
             <div className="w-full space-y-3  my-9 mx-3">
                <div className="flex w-full justify-evenly">
                  <div>
                    <h1 className="mb-1 text-xs tracking-wider">TWITTER</h1>
                    <span>{socials.twitter}</span>
                  </div>
                  <div>
                     <h1 className="mb-1 text-xs tracking-wider">FACEBOOK</h1>
                     <span>{socials.facebook}</span>
                  </div>
                  <div>
                    <h1 className="mb-1 text-xs tracking-wider">INSTAGRAM</h1>
                    <span>{socials.instagram}</span>
                  </div>
                  <div>
              </div>    
              </div>
             </div> 
      </div>  
    );
}

export default Socials;