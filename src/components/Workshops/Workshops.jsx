import Header from './Header.jsx';
import Carousel from './Carousel.jsx';
import './Workshops.css'

export default function Workshops({data}) {

  return (
    <section style={{marginTop: '2.2rem'}}>
      <Header />
      <Carousel data={data}/>
    </section>
  )
}