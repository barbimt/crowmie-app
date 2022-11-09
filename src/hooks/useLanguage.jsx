import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";

export const useLanguage = () => {
    
    return useContext(LanguageContext)
}