// import { DateTime } from "luxon";
import { useEffect, useState } from "react";

const useCountdown = (targetDate: any): [number, number, number, number, number] => {
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

const getReturnValues = (countDown: number): [number, number, number, number, number] => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  const miliseconds = Math.floor(countDown % 1000);

  return [days, hours, minutes, seconds, miliseconds];
};

export { useCountdown };
