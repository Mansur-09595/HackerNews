import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React from "react";

dayjs.locale("ru");
dayjs.extend(relativeTime);

interface TimeProps {
  time: number | string | object;
}

const Time: React.FC<TimeProps> = ({ time }) => {
  return (
    <>
    {`${dayjs.unix(Number(time)).format("DD/MM/YYYY")} | 
      ${dayjs.unix(Number(time)).fromNow()}`}
    </>
  );
};

export default Time;
