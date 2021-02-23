import { useState } from 'react';

const Playground = () => {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    setText2(text);
  };

  const addName = name => {
    setText2(name);
  };

  return (
    <div className="p-6">
      <h1>Playground</h1>
      <p>{text2}</p>

      <form onSubmit={onSubmit}>
        <input
          className="px-4 py-2 bg-blue-50 border-2 rounded-md"
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </form>

      <button onClick={() => addName('Hello')}>Click to add</button>
    </div>
  );
};

export default Playground;
