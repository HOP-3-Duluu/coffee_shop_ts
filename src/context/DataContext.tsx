import React, {createContext, Dispatch, SetStateAction, useState} from 'react';

export type ContextType = {
  options: {size: string; milk: string};
  setOptions: Dispatch<SetStateAction<{size: string; milk: string}>>;
};

interface Props {
  children: any;
}

export const DataContext = createContext<ContextType | any>({} as ContextType);

export const DataContextProvider = ({children}: Props) => {
  const [options, setOptions] = useState({
    size: 1,
    milk: 'Standart',
  });

  return (
    <DataContext.Provider
      value={{options, setOptions}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
