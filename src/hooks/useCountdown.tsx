// import { DateTime } from "luxon";
import { useEffect, useState } from "react";

const useCountdown = (targetDate: any): { days: number, hours: number, minutes: number, seconds: string, miliseconds: string } => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 100); // Decrease to increment the speed of miliseconds

    return () => { clearInterval(interval); };
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number): { days: number, hours: number, minutes: number, seconds: string, miliseconds: string } => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = ("0" + Math.floor((countDown % (1000 * 60)) / 1000).toString()).slice(-2);
  const miliseconds = ("0" + Math.floor(countDown % 1000).toString()).slice(-3);

  return { days, hours, minutes, seconds, miliseconds };
};

export { useCountdown };
