import { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('#fff');

  const onChangeColor = value => {
    setColor(value);
  };

  return (
    <ColorContext.Provider value={{ color, setColor, onChangeColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;

export const useColor = () => useContext(ColorContext);
