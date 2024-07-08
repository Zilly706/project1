import React from 'react'



function Header(props:any) {
  return (
    < >
<div className='header'>

<h2 onClick={() => props.handleShow(false)}>Shopping Cart</h2>
<div onClick={() => props.handleShow(true)}>Cart 
     <sup>{props.count}</sup> </div>
</div>


    </>
  )
}

export default Header