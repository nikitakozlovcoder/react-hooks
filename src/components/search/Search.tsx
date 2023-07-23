import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import {useEffect, useState} from "react";
import {useDebounce} from "../../utils/hooks/UseDebounce";

interface SearchProps {
  searchString: string,
  onSearchChange: (x: string) => void;
}

export const Search = ({searchString, onSearchChange} : SearchProps) => {
  const [searchInput, setInput] = useState('');
  const callSearchChange = useDebounce(() => {
    onSearchChange(searchInput);
  }, 250, [searchInput]);
  
  useEffect(() => {
    setInput(searchString)
  }, [searchString]);
  
  const onInput = (e: string) => {
    setInput(e);
    callSearchChange();
  };
  
  return <div>
    <form onSubmit={() => onSearchChange(searchInput)}>
      <input type='text' value={searchInput} onChange={(e) => onInput(e.target.value)}/>
    </form>
  </div>
}