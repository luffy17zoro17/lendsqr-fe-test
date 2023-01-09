


const ButtonProp = ({title,bclassN}) =>{
    return (
      <div>
        <button className={bclassN}>
            {title}
        </button>
      </div>
    );
}

export default ButtonProp;