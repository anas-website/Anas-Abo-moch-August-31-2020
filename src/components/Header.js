import React from 'react'
import {Link} from 'react-router-dom';


export default function Header() {
    return (
        <div >
 <div className='' style={{backgroundColor:"gray",height:"100px"}}>
        <Link to='/f' className='btn btn-primary'style={{float:'right',margin:'10px' }} onClick={() => {}}>Favorites</Link>
        <Link to='/' className='btn btn-primary' style={{float:'right',margin:'10px' }} onClick={() => {}}>Home</Link>
        </div>
        </div>
    )
}
