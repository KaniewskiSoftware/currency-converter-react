import { Header } from "./styled";
import { useCurrentDate } from "./useCurrentDate"

const formatDate = (date: Date) =>

  date.toLocaleString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long",
  });

const Clock = () => {
const date = useCurrentDate();

  return (
    <Header>
      Dzisiaj jest
      {" "}
      {formatDate(date)}
    </Header>
  );
};

export default Clock;
