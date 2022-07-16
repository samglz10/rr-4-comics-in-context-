const SearchInput = (props) => {

  const handleChange = (e) => {
    const { value } =  e.target; // e.target is the input element. 
    // const value = e.target.value;
    props.setInput(value);
  }
  
  return (
    <label>
      <span style={{ display: 'block' }}>
        You wrote {props.input}
      </span>
      <input 
        type="search"
        placeholder="Search" 
        value={props.input} 
        onChange={handleChange}
      />
    </label>
  )
}

export default SearchInput;
