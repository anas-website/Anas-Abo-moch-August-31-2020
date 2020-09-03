import React, { useContext, useEffect, useState } from 'react'
import { ContextStore } from './Store'
import {Link} from 'react-router-dom';
import axios from 'axios'

export default function Favorites() {
    const val = useContext(ContextStore)
    const [temp, settemp] = useState([])
    const[flag,setflag]=useState(false)
    
        const getdata=()=>{
           let arr=[]
            val.favorits.map((item,i)=>{ 
        axios.get('https://dataservice.accuweather.com/currentconditions/v1/'+item.id+'?apikey=8NbF18PGTxwaMWhAH4OOKiU9etqQs2Yd')
        .then((res)=>{
            arr.push(res.data[0].Temperature.Metric.Value)
           
        }).catch((err)=>{
            console.log(err);
        })     
    })
    settemp(arr)
  }
  useEffect(() => {
    getdata()
   
},[])

setTimeout(() => {
    setflag(true)
},500);


    return (
        <div className='container'>
               <div className='row' style={{padding:'10px',border:'1px solid black',borderRadius:'3px'}}> 
           {val.favorits.map((item,i)=>{
                  return <Link style={{backgroundColor:'#6c757d', border:'1px solid black',borderRadius:'3px',maxWidth:'150px',minWidth:'150px',margin:'auto',marginTop:'10px',height:'130px',textAlign:'center'}} className='col-6' key={i} to='/'onClick={()=>{{val.setchosenCountry(item.countryName)}}} ><div   >     <div  ><h4 style={{color:'white',paddingTop:'25px'}} >{item.countryName}</h4>
                  <h4 style={{color:'white'}} >{temp[i]}°C</h4>
                  </div></div></Link>
                })}

</div>
</div>
    )
}
