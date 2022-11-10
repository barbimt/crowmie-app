import React, {createContext, useState} from 'react'

export const LanguageContext = createContext();

export const LanguageProvider= ({ children }) => {
    const [language, setLanguage] = useState('es');
    
    const onLanguageSelected = (langSelected) => {
      if (langSelected.toLowerCase() !== language) {
        setLanguage(language === "es" ? "en" : "es");
      }
    };
  
    return (
      <LanguageContext.Provider value={{ language, setLanguage, onLanguageSelected }}>
        {children}
      </LanguageContext.Provider>
    );
  };

