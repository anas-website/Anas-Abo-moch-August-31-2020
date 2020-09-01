import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { ContextStore } from './Store'
import Day from './Day'

let iserror=true
let isEN=false
let validReq=false
export default function Home() {
  
  const val = useContext(ContextStore)
  
  const[CountryName,setcountryName]=useState(val.chosenCountry)
  const [flag, setflag] = useState(false)
  const [temperature, settemperature] = useState('4')
  const [dateforecast, setdateforecast] = useState('')

  const [btnName, setbtnName] = useState('Delete from favorites')
  const [WeatherText, setWeatherText] = useState('')
 
  useEffect(() => {

      let key; 
      axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=A3jUpB5lGWjGhptoO83kzg92ZiY1slgr&q=${CountryName}`)
  .then((res) => {

    key=res.data[0].Key
    console.log(key);

const requestOne =  axios.get('http://dataservice.accuweather.com/currentconditions/v1/'+key+'?apikey=A3jUpB5lGWjGhptoO83kzg92ZiY1slgr');
const requestTwo =  axios.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/'+key+'?apikey=A3jUpB5lGWjGhptoO83kzg92ZiY1slgr');

 return axios.all([requestOne, requestTwo]);

  })

  .then(axios.spread((...res) => {
    const responseOne = res[0]
    const responseTwo = res[1]
    validReq=true
      console.log(responseOne.data);
   
      settemperature(responseOne.data[0].Temperature.Metric.Value)
      setWeatherText(responseOne.data[0].WeatherText)
      setdateforecast(responseTwo.data.DailyForecasts)
         console.log(responseTwo.data.DailyForecasts[0])
 
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
          let re = /^[A-Za-z ]+$/
            if((re.test(val))){
                isEN=true
                 setcountryName(val)
            }else
            {isEN=false} 
}



    return (
        <div className='container'>
            <br/>
               <input onChange={(e)=>{ValidateCountry(e.target.value)}} className='form-control' type='text' name='inp' placeholder='country Name'defaultValue={val.chosenCountry} ></input>
               <br/>
               <div className='row' style={{border:'1px solid black',borderRadius:'3px'}}>
        <div className='col-6' >
              <div style={{textAlign:'center'}}>
    <h3>{CountryName}</h3>
              <h3>{temperature}°C</h3>
              <h2>{WeatherText}</h2>
              </div>
        </div> 
        <div className='col-6' style={{}}>  
               <button className='btn btn-primary'style={{float:'right',margin:'10px' }}  onClick={() => { 
               
                 isEN ? setflag(!flag):alert('Name of country is invalid !') }}>Get Wether</button>
               <button type='submit' className='btn btn-primary'style={{float:'right',margin:'10px' }}  
               onClick={() => {
                if(iserror&&isEN&&validReq&&btnName=='Add To favorites'){
                   val.setfavorits([...val.favorits,{countryName:CountryName}])
                   setbtnName('Delete from favorites')
                    }
                   else if(btnName=='Delete from favorites'){
                    DeleteCountry()   
                   }
                   else{alert('Name of country is invalid !')
            }}}>{btnName} </button>
        </div>          
        </div>
        <br/><br/>
      <Day dateforecast={dateforecast} />
        </div>
    )
}
