import React, {useEffect} from 'react'
import "./Privacy.css"

const Privacy = () => {
  useEffect(() => {
    window.scroll(0,0)
},[])
  return (
    <div>
      <div className="container mx-auto privacy-parent mt-5">
          <h1 >Privacy <span className='color'>Policy</span></h1>
          <p>Our privacy policy is designed to collect, secure, and safeguard client information for individuals utilizing our services. At <span className='fw-bold color'>UstazPortal </span>, our goal is to provide top-notch Quran tuition services. Reviewing the details of our privacy policy will help you build confidence in the services we offer. Please take a moment to examine the facts of our privacy policy, addressing any concerns and clarifying how we use and protect your personal information.</p>
          <div className="privacy-headings">
               <ol>
                    <li>User <span className="color">Information</span></li>
                    <p>We collect your personal information to enhance your overall service experience. If you encounter any issues while utilizing our online services, feel free to reach out to us; we're just an email away! Below are the steps for reporting problems:</p>
                   
                    <ol>
                         <li>Name</li>
                         <li>Email address</li>
                         <li>Mobile / phone number</li>
                    </ol>
                    <p className='color fw-bold mt-5 h6'>* Your privacy is our priority. Trust us as you delve into the divine teachings of the Quran with confidence!</p>
                    <li>How is <span className='color'>User Information </span> Managed?</li>
                    <p>We value user feedback to enhance our services. By utilizing subscriber information, we continuously improve and adapt our offerings to set high standards in a competitive environment. We customize the user experience by addressing concerns and implementing suggestions received through our 'Contact Us' feature.</p>
                    <li><span className='color'>Analytical</span> Data Processing </li>
                    <p>We utilize third-party analytics to examine usage patterns on the Quran Reading site, generating reports and insights without disclosing individual guest names or compromising privacy.</p>
                    <li><span className='color'>Contact</span> Us</li>
                    <p>For any inquiries about our privacy policies or technical details, reach out to us at +1 (929) 553-9388 or email <span className="fw-bold color">Info@UstazPortal.com</span>.   We're here to assist you promptly with any questions you may have.</p>

                    <p className='color fw-bold mt-5 h6'>* Your Privacy, Our Pledge - Embracing a Cookie-Free Horizon.</p>
               </ol>
          </div>
      </div>
    </div>
  )
}

export default Privacy
