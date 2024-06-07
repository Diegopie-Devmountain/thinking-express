import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './Header.jsx';
import Carousel from './Carousel.jsx';
import './Workshops.css'

export default function Workshops() {
  const [workshopsData, setWorkshopsData] = useState({})

  const getWorkshops = () => {
    axios.get('/workshops').then(res => {
      setWorkshopsData({ ...res.data })
    })
  }

  useEffect(() => {
    getWorkshops()
  }, [])

  return (
    <section style={{marginTop: '2.2rem'}}>
      <Header />
      {workshopsData.categoryData && <Carousel data={workshopsData} getWorkshops={getWorkshops} />}
    </section>
  )
}