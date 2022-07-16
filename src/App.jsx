import { useState } from 'react';
import SearchForm from './components/search-form';
import SearchResults from './components/search-results';

const App = () => {
  // Let's create a piece of state called searchQuery
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <SearchForm onSubmitSearchQuery={setSearchQuery} />
      <SearchResults searchQuery={searchQuery} />
    </div>
  )
}

export default App;
