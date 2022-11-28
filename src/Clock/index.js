import { Header } from "./styled";
import { useCurrentDate } from "./useCurrentDate"

const formatDate = (theDate) =>

  theDate.toLocaleString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long",
  });

const Clock = () => {
const theDate = useCurrentDate();

  return (
    <Header>
      Dzisiaj jest
      {" "}
      {formatDate(theDate)}
    </Header>
  );
};

export default Clock;
