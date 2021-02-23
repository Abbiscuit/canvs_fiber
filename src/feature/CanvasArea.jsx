import { useRef } from 'react';
import { exportComponentAsPNG } from 'react-component-export-image';

const CanvasArea = ({ addRect, addTextBox, addImage, canvas }) => {
  const componentRef = useRef();

  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex items-center mb-4">
        <button
          className="px-4 py-2 bg-indigo-600 mx-2 rounded-md text-white focus:bg-indigo-800"
          onClick={() => addRect(canvas)}
        >
          Add Box
        </button>
        <button
          className="px-4 py-2 bg-indigo-600 mx-2 rounded-md text-white focus:bg-indigo-800"
          onClick={() => addTextBox(canvas)}
        >
          Add TextBox
        </button>
      </div>

      <>
        <canvas
          id="canvas"
          className="shadow-sm rounded-md border border-gray-50"
          ref={componentRef}
        />
      </>
      {/* <button onClick={() => exportComponentAsPNG(componentRef)}>
        Download
      </button> */}
    </main>
  );
};

export default CanvasArea;
