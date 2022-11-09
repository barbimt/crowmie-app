import React, { createContext, useState } from "react";
import data from "./../data/data.json";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [projectData, setprojectData] = useState(data.project);
  const [promoterData, setpromoterData] = useState(data.promoter);
  const [statusData, setstatusData] = useState(data.status_history);
  const [financialData, setfinancialData] = useState(data.financials);
  const [graphData, setgraphData] = useState(data.graph);


  return (
    <DataContext.Provider
      value={{
        projectData,
        promoterData,
        statusData,
        financialData,
        graphData,
    
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
