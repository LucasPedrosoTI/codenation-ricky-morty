import { Result } from "../../../interfaces/interfaces";

const handleEvent = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  filter: string,
  filterFunction: Function,
  rawData: Result[],
  setStateFunction: Function
) => {
  e.preventDefault();
  const filteredChars = filterFunction(rawData, filter);

  return filter ? setStateFunction(filteredChars) : setStateFunction(rawData);
};

export { handleEvent };
