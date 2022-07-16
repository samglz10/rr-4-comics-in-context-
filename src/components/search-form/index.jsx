import { useState } from 'react';

import SearchInput from "./search-input";

const SearchForm = () => {
  const [input, setInput] = useState("foo");
  
  return (
    <form>
      <SearchInput input={input} setInput={setInput} />
      <input type="submit" value="submit" />
    </form>
  )
}

export default SearchForm;
