// Dependencies
import { useRef, useState } from 'react';
import Glider from 'react-glider';
import axios from 'axios'
// Utils
import generateId from '../../utils/generateId.js';
// Components
import Card from './Card/Card.jsx';
import { Add } from '../Icons.jsx';
// Data
// import dummyData from '../data/workshops.js'

export default function Carousel(props) {

  const [cardData, setCardData] = useState(props.data);

  const addCard = () => {
    axios.post('/workshops').then(() => {
      props.getWorkshops()
    })
  };

  const deleteCard = (id) => {
    // const newData = { ...cardData };

    // const index = newData.categoryData.findIndex((card) => card.id === id);

    // newData.categoryData.splice(index, 1);

    // setCardData(newData);
    axios.delete(`/workshops/${id}`).then(res => {
      props.getWorkshops()
    })
  };

  const editCard = (index, newText) => {
    axios.put(`/workshops/${index}`, { name: newText.workshopName, shortDescription: newText.workshopShortDescription }).then(() => {
      props.getWorkshops()
    })
  };

  const gliderRef = useRef(null);
  return (
    <section className='Workshops-Glide-Container'>
      <header>
        <h3>{cardData.categoryName}</h3>
        <button onClick={addCard}><Add width='1.5rem' /></button>
      </header>
      <Glider
        ref={gliderRef}
        // draggable
        hasArrows
        hasDots
        slidesToShow={3}
        slidesToScroll={2}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 5
            }
          }
        ]}
      >
        {cardData.categoryData.map((workshop, index) => {
          return (
            <Card
              key={workshop.id}
              // data={workshop}
              // * Change this when doing the edit refactor
              data={{...workshop, index}}
              editCard={editCard}
              deleteCard={deleteCard}
              glider={gliderRef}
            />

          )
        })}


      </Glider>
    </section>
  )
}