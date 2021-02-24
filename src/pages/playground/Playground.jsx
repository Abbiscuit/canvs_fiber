import { fabric } from 'fabric';
import { useEffect, useState } from 'react';
import data from '../../../src/sample.svg';
import Header from '../../components/Header';

const Playground = () => {
  const [fabCanvas, setFabCanvas] = useState('');
  var deleteIcon =
    "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

  var img = document.createElement('img');
  img.src = deleteIcon;

  function deleteObject(eventData, transform) {
    var target = transform.target;
    var canvas = target.canvas;
    canvas.remove(target);
    canvas.requestRenderAll();
  }

  function renderIcon(ctx, left, top, fabricObject) {
    var size = this.cornerSize;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(img, -size / 2, -size / 2, size, size);
    ctx.restore();
  }

  fabric.Object.prototype.controls.deleteControl = new fabric.Control({
    x: 0.5,
    y: -0.5,
    offsetY: 16,
    cursorStyle: 'pointer',
    mouseUpHandler: deleteObject,
    render: renderIcon,
    cornerSize: 24,
  });

  const initCanvas = () => {
    // Create a wrapper around native canvas element
    return new fabric.Canvas('c', {
      width: 375,
      height: 500,
    });
  };

  useEffect(() => {
    setFabCanvas(initCanvas()); // Create canvas
  }, []);

  const addRect = angle => {
    // Create a rectangle object

    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'tomato',
      width: 120,
      height: 120,
      angle: angle ? angle : 0,
    });

    fabCanvas.add(rect);
    fabCanvas.setActiveObject(rect);
    fabCanvas.renderAll();
  };

  const addTextBox = () => {
    // Create a textbox object

    const textbox = new fabric.Textbox('Hello World', {
      left: 100,
      top: 100,
      width: 120,
      height: 120,
      fill: 'white',
      fontFamily: 'inter',
      fontSize: 48,
    });

    fabCanvas.add(textbox);
  };

  return (
    <div className="bg-gray-800 min-h-screen">
      <Header />

      <button
        className="px-4 py-2 bg-gray-900 text-white mr-4"
        type="button"
        onClick={() => addRect()}
      >
        Add
      </button>
      <button
        className="px-4 py-2 bg-gray-900 text-white mr-4"
        type="button"
        onClick={addTextBox}
      >
        Text Box
      </button>

      <canvas id="c" style={{ width: '100%', height: 500 }}></canvas>
    </div>
  );
};

export default Playground;
