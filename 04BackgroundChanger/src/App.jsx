import { useState } from 'react';

function App() {
  const [color, changeBg] = useState('black');

  const setColor = (color) => {
    changeBg(color); 
  };

  return (
    <div
      style={{ backgroundColor: color, height: '100vh', transition: 'background-color 0.3s ease' }}
      className="flex items-center justify-center"
    >
      <div className="flex flex-wrap justify-center space-x-4 space-y-2">
        <button
          onClick={() => setColor('blue')}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Button 1
        </button>
        <button
          onClick={() => setColor('green')}
          className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700"
        >
          Button 2
        </button>
        <button
          onClick={() => setColor('red')}
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
        >
          Button 3
        </button>
        <button
          onClick={() => setColor('yellow')}
          className="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-700"
        >
          Button 4
        </button>
        <button
          onClick={() => setColor('purple')}
          className="px-4 py-2 text-white bg-purple-500 rounded hover:bg-purple-700"
        >
          Button 5
        </button>
        <button
          onClick={() => setColor('pink')}
          className="px-4 py-2 text-white bg-pink-500 rounded hover:bg-pink-700"
        >
          Button 6
        </button>
        <button
          onClick={() => setColor('teal')}
          className="px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-700"
        >
          Button 7
        </button>
      </div>
    </div>
  );
}

export default App;
