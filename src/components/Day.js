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
                  return (<td key={i} > <h5>{convertDate(item.Date)}</h5>
                 <h5> { convertFToC(item.Temperature.Maximum.Value)}°C</h5> 
                 <p> { convertFToC(item.Temperature.Minimum.Value)}°C</p> 
                 </td>)
                }))  
        } catch (error) {

        }
    }
    return (

        <div>                
<table className='table table-bordered'>
<tbody>
  <tr style={{backgroundColor:'gray',textAlign:'center'}}>
  {returnday()}
  </tr>

</tbody>
</table>
                                         
                 </div> 
    
    )
}


