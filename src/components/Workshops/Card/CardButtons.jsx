import { Save, Delete, Pencil } from '../../Icons.jsx';

export default function CardButtons(props) {

  const { isEditable, setIsEditable } = props.isEditableState
  const { id, text, title } = props.buttonData;

  return (
    <>
      {
        isEditable ?
          <button className='App-Icons' onClick={() => {
            // * Add Edit card on refactor
            // * Highlight that we are selecting the keys we want to update and the values we want it to have (Postgres setup)
            props.editCard(props.data.index, { workshopShortDescription: text, workshopName: title })
            setIsEditable(false)
          }}>
            <Save width='1.5rem' />
          </button>
          :
          <button onClick={() => setIsEditable(true)} className='App-Icons'>
            <Pencil width='1.5rem' />
          </button>
      }
      <button className='App-Icons' onClick={() => props.deleteCard(id)}>
        <Delete width='1.5rem' />
      </button>
    </>
  )
}