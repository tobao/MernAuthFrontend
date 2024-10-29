import React from 'react'

const Verify = () => {
  const verifyAccount = () => {
    
  }
  return (
    <section>
      <div className="--center-all">
        <h2>Account Verification</h2>
        <p>To verify your account, click the button below..</p>
        <br />
        <button onClick={verifyAccount} className='--btn --btn-primary'>Verify Account</button>
      </div>
    </section>
  )
}

export default Verify