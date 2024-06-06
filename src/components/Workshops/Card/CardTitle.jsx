// import { useState } from "react"

export default function CardTitle(props) {

  // * Set state here first then refactor for save button
  // const [title, setTitle] = useState(props.workshopName);
  const { title, setTitle } = props.titleState;

  return (
    <>
      {
        props.isEditable ?
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
          :
          <h4>{title} {props.id + 1}</h4>
      }
    </>
  )
}