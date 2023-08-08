import React from 'react'
import Dashboard from './Dashboard'
import './S10.css'
import S10Left from './S10Left'
import B4Middle1 from './B4Middle1'
import S10Middle from './S10Middle'
import B4Right from './B4Right'


  const B4 = () => {

  return (
    <>
    <Dashboard  />
    {/* <h1 style={{textAlign:"center"}}>This is B4 Section </h1> */}

<div className="content">


{/* left part */}
<div style={{width:"25%"}}>
   <S10Left />
</div>


{/* middle 1 part */}
<div style={{width:"30%"}}>
   <B4Middle1 />
</div>


    {/* middle part */}
    <div style={{width:"28%"}}>
   <S10Middle />
</div>

<div style={{width:"13%"}}>
   <B4Right />
</div>
  </div>
    </>
  )
}

export default B4