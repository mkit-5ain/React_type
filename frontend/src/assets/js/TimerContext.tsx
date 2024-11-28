import React, { createContext, useState, useEffect, ReactNode } from "react";

interface TimerContextType {
  isDisplay: boolean;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);
// any 어떠한 속성이든 넣을수 있게 선언
// null 인수값을 넣어야하는데 초기 값 null 선언

export const TimerProvider = ({ children }: { children: ReactNode }) => {
  const [isDisplay, setIsDisplay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDisplay(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <TimerContext.Provider value={{ isDisplay }}>
      {children}
    </TimerContext.Provider>
  );
};

export default TimerContext;
