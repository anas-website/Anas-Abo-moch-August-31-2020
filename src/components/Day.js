import React from 'react'

export default function Day({dateforecast}) {

    const convertDate=(date)=>{
        var d2 = new Date(date);
        var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
       
        return days[d2.getDay()]
        } 
        const convertFToC=(num)=>{
            let sum= (num-32)*5/9
            let result =Math.round(sum)
           return result
           } 
    const  returnday=()=>{
        try {
           return( dateforecast.map((item,i)=>{
                  return (<td key={i} style={{textAlign:'center' }} > <h6>{convertDate(item.Date)}</h6>
                 <p style={{fontSize:'15px',fontWeight: 'bold'}}> { convertFToC(item.Temperature.Maximum.Value)}°C</p> 
                 <p style={{fontSize:'13px'}}>  { convertFToC(item.Temperature.Minimum.Value)}°C</p> 
                 </td>)
                }))  
        } catch (error) {

        }
    }
    return (

        <div>                
<table className='table table-bordered table-secondary'>
<tbody>
  <tr >
      {/* <td>dfdsf</td> */}
  {returnday()}
  </tr>

</tbody>
</table>
                                         
                 </div> 
    
    )
}


