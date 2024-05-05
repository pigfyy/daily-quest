import {
  formatDate,
  getDay,
  getMonth,
  getYear,
  lastDayOfMonth,
} from "date-fns";

type DateInfo = {
  month: number;
  year: number;
  weekday: number;
  weekdayOfFirstDay: number;
  lastDayOfMonth: number;
};

const Row = ({ dateInfo, row }: { dateInfo: DateInfo; row: number }) => {
  const initialDay = row * 7 - dateInfo.weekdayOfFirstDay + 1;

  const days: number[] = [];
  for (let i: number = 0; i < 7; i++) {
    if (initialDay + i < 1) days.push(-1);
    else days.push(initialDay + i);
  }

  return (
    <div className="grid grid-cols-7">
      {days.map((day) => (
        <div
          key={crypto.randomUUID()}
          className={`aspect-square border-t border-r border-neutral-500 first:border-l ${
            row == 4 ? "border-b" : null
          } ${
            day == -1 || day > dateInfo.lastDayOfMonth
              ? "bg-[#EFF5F6]"
              : "bg-neutral-50"
          }`}
        >
          {day == -1 || day > dateInfo.lastDayOfMonth ? null : day}
        </div>
      ))}
    </div>
  );
};

export default function Calendar() {
  const currentDate: Date = new Date();

  const dateInfo: DateInfo = {
    month: currentDate.getMonth() + 1,
    year: currentDate.getFullYear(),
    weekday: currentDate.getDay(),
    weekdayOfFirstDay: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay(),
    lastDayOfMonth: lastDayOfMonth(currentDate).getDate(),
  };

  return (
    <div className="grid grid-rows-4">
      {[0, 1, 2, 3, 4].map((i) => (
        <Row dateInfo={dateInfo} row={i} key={i} />
      ))}
    </div>
  );
}
