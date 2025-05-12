import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({ theme: 'light', toggle: () => {} });

export const ThemeProvider = ({ children }: { children: React.ReactNode}) => {
  const [theme, setTheme] = useState<'light'|'dark'>('light');
  const toggle = () => setTheme((t) => t === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggle}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);