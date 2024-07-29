import React from 'react'
import './App.css'

function App() {
  const free= {
    type:"FREE",
    price:0,
    buy:false
   }
  const plus={
    type:"PLUS",
    price:9,
    buy:false
  }
  const pro={
    type:"PRO",
    price:49,
    buy:true
  }
   return (<>
    <ProCard model={free}/>
    <ProCard model={plus}/>
    <ProCard model={pro}/>
 </>
 )
 }

function ProCard({model}){
  return (
    <div className="card">
      <p className="type">{model.type}</p>
      <h1>${model.price}/month</h1>
      <div className="line"></div>
      <div className="features">
        {model.type =='FREE' && <div className="feature"><i className="fa-solid fa-check"></i>Single User</div>}
        {model.type =='PLUS' && <div className="feature"><i className="fa-solid fa-check"></i>5 Users</div>}
        {model.type =='PRO' && <div className="feature"><i className="fa-solid fa-check"></i>Unlimited Users</div>}
        <div className="feature"><i className="fa-solid fa-check"></i>50GB Storage</div>
        <div className="feature"><i className="fa-solid fa-check"></i>Unlimted Public Projects</div>
        <div className="feature"><i className="fa-solid fa-check"></i>Cummunity Access</div>
        <div className="feature" style={{opacity: model.type =='FREE' && '0.5' }}><i className={ model.type !='FREE' ? `fa-solid fa-check` : `fa-solid fa-xmark`}></i>Unlimted Private Projects</div>
        <div className="feature" style={{opacity: model.type =='FREE' && '0.5' }}><i className={ model.type !='FREE' ? `fa-solid fa-check` : `fa-solid fa-xmark`}></i>Dedicated Phone Support</div>
        <div className="feature" style={{opacity: model.type =='FREE' && '0.5' }}><i className={ model.type !='FREE' ? `fa-solid fa-check` : `fa-solid fa-xmark`}></i>Free Subdomain</div>
        <div className="feature" style={{opacity: model.type !='PRO' && '0.5' }}><i className={ model.type=='PRO' ? `fa-solid fa-check` : `fa-solid fa-xmark`}></i>Montly Status Reports</div>
    </div>
      <button style={{opacity: !model.buy && '0.5' }}>Buy</button>
    </div>
  )
}
export default App




   
