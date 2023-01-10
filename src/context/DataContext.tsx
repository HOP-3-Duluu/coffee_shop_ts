import React, {createContext, Dispatch, SetStateAction, useState} from 'react';

export type ContextType = {
  options: Object[];
  setOptions: Dispatch<SetStateAction<Object[]>>;
  click: boolean;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
  idBag: Number[];
  setIdBag: React.Dispatch<React.SetStateAction<Number[]>>;
};

interface Props {
  children: any;
}

export const DataContext = createContext<ContextType | null>({} as ContextType);

export const DataContextProvider = ({children}: Props) => {
  const [options, setOptions] = useState<Array<>>([])
  const [click, setClick] = useState<boolean>(false);
  const [idBag, setIdBag] = useState<Number[]>([]);
  
  return (
    <DataContext.Provider
      value={{options, setOptions, click, setClick, idBag, setIdBag}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
