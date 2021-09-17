import React, { useState } from 'react';

export default () => {
  const [text, setText] = useState("");
  const onChange = event => {
    setText(event.target.value);
  }
  const onSubmit = event => {
    event.preventDefault();
    setText("");
  }
  return (
    <>
      <h1>To Dos</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
};