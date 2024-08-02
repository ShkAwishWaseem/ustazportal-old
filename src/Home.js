import React , {useEffect}from 'react'
import Choose from "./Choose"
import Courses from "./Courses"
import Faqs from "./Faqs"
import Teachers from "./Teachers"


const Home = () => {
    useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Choose/>
      <Courses/>
      {/* <Teachers/> */}
      <Faqs/>
    </div>
  )
}

export default Home

