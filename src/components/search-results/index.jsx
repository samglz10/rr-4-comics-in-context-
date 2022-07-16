import {useEffect, useState} from "react";

const SearchResults = (props) => {
  const [data, setData] = useState({})
  const [amount, setAmount] = useState({});
  
  useEffect(() => {
    if (props.searchQuery.length > 0) {
      const dataURL = `https://itunes.apple.com/search?term=${encodeURIComponent(props.searchQuery)}`; 
      fetch(dataURL)
        .then(response => response.json())
        .then(rawData => rawData.results)
        .then(result => setData(result)); 
    }
  }, [props.searchQuery])

  return (
    <main>
      <pre>
        {JSON.stringify(data, undefined, 2)}
      </pre>
      <select>
        <option value={25} />
        <option value={50} />
      </select>
    </main>
  )
}

export default SearchResults;
