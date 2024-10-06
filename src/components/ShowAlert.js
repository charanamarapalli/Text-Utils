import React from 'react'

export default function ShowAlert(props) {
  
  const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase()+ lower.slice(1);
  }
  return (
   <div style={{height:'60px'}}>
    <div>
        {props.alert && (<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong> {capitalize(props.alert.type)} </strong> : {props.alert.message}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>)}
    </div>
    </div>
  )
}
