import React  , {useEffect}from 'react'
import Choose from './Choose'
import Cards from './Cards'
import Courses from './Courses'
import Teachers from './Teachers'

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <>
      <Choose/>
      {/* <Cards/> */}
      <Courses/>
      <Teachers/>
      {/* <Crousal/> */}
    </>
  )
}

export default Home
