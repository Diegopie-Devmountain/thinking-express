// import { useState } from "react"

export default function CardText(props) {

  // * Set state here first then refactor for save button
  // const [text, setText] = useState(props.workshopShortDescription);
  const { text, setText } = props.textState;

  return (
    <>
      {props.isEditable ?
        <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        :
        <p>
          {text}
        </p>
      }
    </>
  )
}