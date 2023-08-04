import { createContext, useState} from 'react';

const Ctx = createContext();

const Provider = ({ children }) => {
    const [globalState, setGlobalState] = useState({
        pageNo: 1,
        theme: "light"
    });

  return <Ctx.Provider value={{ globalState, setGlobalState }}>{children}</Ctx.Provider>;
};

export { Provider, Ctx };
