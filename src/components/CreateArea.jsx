import React, { useState } from "react";

function CreateArea(props) {
  const [textInput, setTextInput] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setTextInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function onSubmit(event) {
    props.onAdd(textInput);
    event.preventDefault();
    setTextInput({ title: "", content: "" });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={textInput.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={textInput.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={onSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
