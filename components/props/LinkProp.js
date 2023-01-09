import Link from "next/link";


const LinkProp=({title,lhref, lclassN})=>{
    return(
      <div>
        <Link href={lhref} className={lclassN}>
          {title}
        </Link>
      </div>  
    );
}

export default LinkProp;