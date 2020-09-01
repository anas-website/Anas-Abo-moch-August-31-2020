import React, { useContext } from 'react'
import { ContextStore } from './Store'
import {Link} from 'react-router-dom';


export default function Favorites() {
    const val = useContext(ContextStore)
    return (
        <div className='container'>
               <div className='row' style={{padding:'10px',border:'1px solid black',borderRadius:'3px'}}> 
           {val.favorits.map((item,i)=>{
                  return <Link style={{backgroundColor:'gray',border:'1px solid black',borderRadius:'3px',maxWidth:'150px',minWidth:'150px',margin:'auto',marginTop:'10px',height:'100px',textAlign:'center'}} className='col-6' key={i} to='/'onClick={()=>{{val.setchosenCountry(item.countryName)}}} ><div   >     <div  ><h4 style={{color:'black',paddingTop:'25px'}} >{item.countryName}</h4></div></div></Link>
                })}
</div>
</div>
    )
}
