
import ImageProp from "./props/ImageProp";
import InputProp from "./props/InputProp";


const LogIn = () => {
    return (
     <div className="flex justify-center mr-[11vw]"> 
      <div>
        <div className="flex items-center absolute pt-[5.5rem]
       mt-[-3rem] left-[4vw] xl:pt-[8rem] xl:pl-[4vw]">
        <ImageProp
          isrc={`https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/drg9bxadhql5l1e1zth0`}
          iwd={510}
          iht={510}
          iclassN={"h-[2.5rem] w-[2.5rem] object-contain"}
          alt={"logo_image"}
        />
        <h1 className="text-4xl font-bold pl-1">lendsqr</h1>
        </div>
      <div className="flex h-screen flex 
      justify-center items-center">
        
        <div className="hidden xl:flex">
          <ImageProp
             iclassN={`h-[45rem] w-[45rem] object-contain`}
             isrc={`https://chidera-ezenwekwe-lendsqr-fe-test.vercel.app/assets/login_illustration.7cabdfee.png`}
             iht={5000}
             iwd={5000}
             alt={"login_image"}
          />
        </div>
        <div className="ml-[11vw] pb-11 text-center
           xl:text-left">
          <h1 className="font-bold text-5xl py-4
            ">Welcome!</h1>
          <span className="text-xl">Enter details to login.</span>
          <InputProp
            placehold={`Email`}
            inclassN={`border-2 rounded-md py-2 
             px-3 mt-14 mb-6 w-[22rem]
             md:w-[25rem] xl:w-[26vw]`}
          />
          <div className="flex items-center relative">
          <InputProp
            placehold={`Password`}
            inclassN={`border-2 rounded-md py-2 px-3 w-[22rem]
             md:w-[25rem] xl:w-[26vw]`}
          /> 
          <span className="text-cyan-400 absolute 
            w-full text-end pr-4 text-sm font-bold">
            SHOW
          </span>
          </div>
          <h3 className="text-cyan-400 text-sm 
          font-bold pt-5 pb-8 cursor-pointer hover:underline">
            FORGOT PASSWORD?
          </h3> 
          <button className="rounded-md bg-cyan-400 w-full text-white
             font-bold py-3">
              LOG IN
          </button>
        </div>
      </div>
      </div>  
    </div>  
    );
}

export default LogIn;