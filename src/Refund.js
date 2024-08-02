import React, {useEffect} from 'react'
import "./Refund.css"

const Refund = () => {
     useEffect(() => {
               window.scroll(0,0)
     }, [])
  return (
    <div className='container mx-auto mt-5 refund-parent'>
               <h1 className='fw-bold'>Refund <span className='color'>Policy</span></h1>
               <p>At <span className="color">UstazPortal</span>, your expectations are our foremost priority, and we are dedicated to accommodating your needs. Moreover, we consider it our noble responsibility to keep you informed about any adjustments we make, be it regarding fee refunds or other terms and conditions.</p>
               <ol>
                    <li> Initial lessons are absolutely free, offering you a taste of what awaits. Following this enlightening trial, your learning adventure continues with affordable monthly charges. Unleash the potential within you at UstazPortal</li>
                    <li>If you choose to proceed with classes at UstazPortal, kindly submit the corresponding fees to our management in advance. Monthly payments should be settled during the last week of each month for the upcoming month. Failure to meet the payment deadline may result in the suspension (pause) of classes.</li>
                    <li>If there is an issue on UstazPortal's end that hinders the classes from occurring, we will reimburse the fee to the student.</li>
                    <li>If your kid or adult attends the classes for almost 15 days and after that, you’ll claim to repay the fee, it is strictly forbidden from our side to refund the fee.  </li>
                    <li>We have the right to cease student classes if payment exceeds seven days late. Therefore, parents are advised to consider it obligatory so that the students do not break the rhythm while learning.</li>
                    <li>If a student doesn’t take the classes for more than two weeks without notifying us, we have the right to discontinue the class, and no refund will be given per our refund policy.</li>
               </ol>
    </div>
  )
}

export default Refund
