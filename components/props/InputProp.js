



const InputProp = ({placehold,inclassN,inref,intype,inmin,inmax}) => {
    return (
      <div>
        <input
          min={inmin}
          max={inmax}       
          type={intype}
          ref={inref}
          placeholder={placehold}
          className={inclassN}
        />
      </div>  
    );
}

export default InputProp;