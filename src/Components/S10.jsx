import React from 'react'
import Dashboard from './Dashboard'
import './S10.css'
import S10Left from './S10Left'
// import B4Middle1 from './B4Middle1'
import S10Middle from './S10Middle'
import S10Right from './S10Right'


  const S10 = () => {

  return (
    <>
    <Dashboard  />
    {/* <h1 style={{textAlign:"center"}}>This is B4 Section </h1> */}

<div className="content">


{/* left part */}
<div style={{width:"28%"}}>
   <S10Left />
</div>


    {/* middle part */}
    <div style={{width:"30%"}}>
   <S10Middle />
</div>

<div style={{width:"43%"}}>
   <S10Right />
</div>
  </div>
    </>
  )
}

export default S10