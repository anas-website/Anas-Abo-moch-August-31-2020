import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { ContextStore } from './Store'
import Day from './Day'

let iserror=true
let isEN=true
let validReq=false
let key; 
export default function Home() {
  
  const val = useContext(ContextStore)
  
let[CountryName,setcountryName]=useState(val.chosenCountry)
const [Country, setCountry] = useState('')
  const [flag, setflag] = useState(false)
  const [temperature, settemperature] = useState('')
  const [dateforecast, setdateforecast] = useState('')
  const [errorMessage, seterrorMessage] = useState('')

  const [btnName, setbtnName] = useState('Delete from favorites')
  const [WeatherText, setWeatherText] = useState('')
 
  useEffect(() => {

      axios.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=8NbF18PGTxwaMWhAH4OOKiU9etqQs2Yd&q=${CountryName}`)
  .then((res) => {

    key=res.data[0].Key
//  console.log(res.data[0]);
 setCountry(res.data[0].Country.LocalizedName)

const requestOne =  axios.get('https://dataservice.accuweather.com/currentconditions/v1/'+key+'?apikey=8NbF18PGTxwaMWhAH4OOKiU9etqQs2Yd');
const requestTwo =  axios.get('https://dataservice.accuweather.com/forecasts/v1/daily/5day/'+key+'?apikey=8NbF18PGTxwaMWhAH4OOKiU9etqQs2Yd');

 return axios.all([requestOne, requestTwo]);

  })

  .then(axios.spread((...res) => {
    const responseOne = res[0]
    const responseTwo = res[1]
    validReq=true
    
    // Country: {ID: "IL", LocalizedName: "Israel"}
      settemperature(responseOne.data[0].Temperature.Metric.Value)
      setWeatherText(responseOne.data[0].WeatherText)
      setdateforecast(responseTwo.data.DailyForecasts)
   
 
  })).catch(errors => {

    validReq=false
    alert('Request Error!.\nThe possibility that it is due to the invalid country name!')
    console.log(errors);
  })
     },[flag,val.favorits])

const DeleteCountry=()=>{
  console.log('deleted');
 val.setchosenCountry('Tel Aviv')
  if(!(CountryName=='Tel Aviv')){
    setbtnName('Add To favorites') 
      let i = val.favorits.findIndex(({countryName}) =>  countryName == CountryName);

let temp=val.favorits.filter((element,index)=>(index!=i))

val.setfavorits(temp)
}else{
alert('you can not remove default value !')}
}


const isCountryExist=(name)=>{
    let ObjWithNameContry= val.favorits.find( ({ countryName }) => countryName == name)
         
                if(ObjWithNameContry)
                { setbtnName('Delete from favorites')}       
                else
                {setbtnName('Add To favorites')
    
}}

const ValidateCountry=(val)=>{
 isCountryExist(val)
    isEN=false
    seterrorMessage('Input must be with English!')
          let re = /^[A-Za-z ]+$/
            if((re.test(val))){
                isEN=true
                seterrorMessage('')
                CountryName=val
            }else
            {isEN=false
              // seterrorMessage('Input must be with English!')
             } 
}



    return (
        <div className='container'>
            <br/>
               <input onChange={(e)=>{ValidateCountry(e.target.value)}} className='form-control' type='text' name='inp' placeholder='country Name'defaultValue={val.chosenCountry} ></input>
              
    <h5 style={{color:'red' ,marginTop:'5px'}}>{errorMessage}</h5>  
    <br/>
               <div  className='row' style={{border:'1px solid black',borderRadius:'3px',margin:'5px'}}>
        <div className='col-6' >
              <div style={{textAlign:'center'}}>
    <h3>{CountryName}</h3>
    <h6>{Country}</h6> 
              <h3>{temperature}°C</h3>

              <h2>{WeatherText}</h2>
              </div>
        </div> 
        <div className='col-6' style={{}}>  
               <button  className='btn btn-secondary' style={{float:'right',margin:'10px' }}  onClick={() => { 
                 setcountryName(CountryName)
                 isEN ? setflag(!flag):alert('Name of country is invalid !')
                  }}>Get Wether</button>
               <button  className='btn btn-secondary'style={{float:'right',margin:'10px' }}  
               onClick={() => {
                 setcountryName(CountryName)
                 if(iserror&&isEN&&validReq&&btnName=='Add To favorites'){
                  setflag(!flag)
setTimeout(() => {
  

                   val.setfavorits([...val.favorits,{countryName:CountryName,id:key}])
                   setbtnName('Delete from favorites')
                   }, 500)
                    }
                   else if(btnName=='Delete from favorites'){
                    DeleteCountry()   
                   }
                   else{alert('Name of country is invalid !')}

            
            }}>{btnName} </button>
        </div>          
        </div>
        <br/><br/>
      <Day dateforecast={dateforecast} />
        </div>
    )
}
