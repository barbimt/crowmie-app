import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

export const useData = () => {
    
    return useContext(DataContext)
}