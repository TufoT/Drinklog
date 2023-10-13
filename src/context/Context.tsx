import React, { useState, useEffect, createContext } from 'react';

export const DataContext = createContext<{
  waterGoal: number;
  setWaterGoal: (value: number) => void;
  waterDrank: number;
  setWaterDrank: (value: number) => void;
  caloriesGoal: number;
  setCaloriesGoal: (value: number) => void;
  caloriesConsumed: number;
  setCaloriesConsumed: (value: number) => void;
}>({
  waterGoal: 0,
  setWaterGoal: () => {},
  waterDrank: 0,
  setWaterDrank: () => {},
  caloriesGoal: 0,
  setCaloriesGoal: () => {},
  caloriesConsumed: 0,
  setCaloriesConsumed: () => {},
});

const DataContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [waterGoal, setWaterGoal] = useState(() => {
    const storedValue = localStorage.getItem('waterGoal');
    return storedValue ? parseFloat(storedValue) : 0;
  });
  const [waterDrank, setWaterDrank] = useState(() => {
    const storedValue = localStorage.getItem('waterDrank');
    return storedValue ? parseFloat(storedValue) : 0;
  });
  const [caloriesGoal, setCaloriesGoal] = useState(() => {
    const storedValue = localStorage.getItem('caloriesGoal');
    return storedValue ? parseFloat(storedValue) : 0;
  });
  const [caloriesConsumed, setCaloriesConsumed] = useState(() => {
    const storedValue = localStorage.getItem('caloriesConsumed');
    return storedValue ? parseFloat(storedValue) : 0;
  });

  useEffect(() => {
    localStorage.setItem('waterGoal', waterGoal.toString());
  }, [waterGoal]);

  useEffect(() => {
    localStorage.setItem('waterDrank', waterDrank.toString());
  }, [waterDrank]);

  useEffect(() => {
    localStorage.setItem('caloriesGoal', caloriesGoal.toString());
  }, [caloriesGoal]);

  useEffect(() => {
    localStorage.setItem('caloriesConsumed', caloriesConsumed.toString());
  }, [caloriesConsumed]);

  return (
    <DataContext.Provider
      value={{
        waterGoal,
        setWaterGoal,
        waterDrank,
        setWaterDrank,
        caloriesGoal,
        setCaloriesGoal,
        caloriesConsumed,
        setCaloriesConsumed,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
