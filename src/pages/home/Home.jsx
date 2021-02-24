import { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import CanvasArea from '../../feature/CanvasArea';
import SideTemplateArea from '../../feature/SideTemplateArea';
import SideTemplateForm from '../../feature/SideTemplateForm';
import { Link } from 'react-router-dom';
import { useColor } from '../../context/ColorProvider';
import Header from '../../components/Header';

const Home = () => {
  const [canvas, setCanvas] = useState('');
  const { color, onChangeColor } = useColor();

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  const initCanvas = () =>
    new fabric.Canvas('canvas', {
      width: 800,
      height: 800,
      backgroundColor: `${color}`,
    });

  const addRect = canvi => {
    const rect = new fabric.Rect({
      height: 280,
      width: 200,
      fill: 'tomato',
    });

    canvi.add(rect);
    canvi.renderAll();
  };

  const addTextBox = canvi => {
    const textBox = new fabric.Textbox('Hello world', {
      width: 100,
      height: 100,
    });

    canvi.add(textBox);
    canvi.renderAll();
  };

  const addImage = (canvi, imageId) => {
    const imgElement = document.getElementById(imageId);
    const img = new fabric.Image(imgElement, {
      left: 100,
      top: 100,
    });
    canvi.add(img);
    canvi.renderAll();
  };

  return (
    <div className="flex flex-col items-start min-h-screen bg-blue-100">
      <Header />

      <div className="flex flex-row items-start">
        <SideTemplateArea addImage={addImage} canvas={canvas} />
        <CanvasArea
          canvas={canvas}
          addRect={addRect}
          addTextBox={addTextBox}
          addImage={addImage}
        />
        <SideTemplateForm addImage={addImage} onChangeColor={onChangeColor} />
      </div>
    </div>
  );
};

export default Home;
