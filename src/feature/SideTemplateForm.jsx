import { useState } from 'react';
import { useColor } from '../context/ColorProvider';

const SideTemplateForm = ({ onChangeColor }) => {
  const { color } = useColor();

  return (
    <div className="max-w-lg p-4">
      <div className="mt-8">
        {color}
        <div className="grid grid-cols-2 gap-3">
          <input
            value={color}
            onChange={e => onChangeColor(e.target.value)}
            readOnly
            type="color"
            className="w-24 h-24 bg-white"
          ></input>
          <div className="w-24 h-24 bg-white"></div>
          <div className="w-24 h-24 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default SideTemplateForm;
