import { useState } from 'react';

import SearchInput from "./search-input";

const SearchForm = (props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmitSearchQuery(input);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <SearchInput input={input} setInput={setInput} />
      <input type="submit" value="submit" />
    </form>
  )
}

export default SearchForm;
