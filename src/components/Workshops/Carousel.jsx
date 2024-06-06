// Dependencies
import { useRef, useState } from 'react';
import Glider from 'react-glider';
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
    const newData = { ...cardData };
    newData.categoryData.push({
      id: generateId(newData.categoryData),
      workshopName: 'new lorem',
      workshopDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis!',
      workshopShortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis!',
      workshopImage: "https://picsum.photos/id/237/300/200?grayscale",
    });
    setCardData(newData);
  };

  const deleteCard = (id) => {
    const newData = { ...cardData };

    const index = newData.categoryData.findIndex((card) => card.id === id);

    newData.categoryData.splice(index, 1);

    setCardData(newData);
  };

  const editCard = (index, newText) => {
    const newData = { ...cardData };

    const originalCardData = newData.categoryData[index];

    // param1: og obj
    // param2: obj of what to modify
    const newCardData = Object.assign(
      originalCardData,
      newText
    );

    newData.categoryData[index] = newCardData;
    setCardData(newData);
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