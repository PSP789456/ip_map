import React, { useContext } from 'react'
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { ContextAPI } from '../App';

const SearchBox = ({ searchFunc }) => {
  const { loading, setLoading, setSearchInit, searchValue, setSearchValue } = useContext(ContextAPI);
  function handleClick(event) {
    event.preventDefault();
    setLoading(true);
    searchFunc();
    setSearchInit(true);
  }
  return (
    <div className="searchBoxWrapper">
      <TextField  onInput={ e=>setSearchValue(e.target.value)}  fullWidth value={searchValue} label="Search for IP or domain..." variant="outlined" type="search" size="small" style={{marginRight:'1rem'}} />
      <LoadingButton disabled={searchValue === ""} variant="contained" onClick={handleClick} loading={loading} loadingIndicator="Wait…"  size="small">Search</LoadingButton>
    </div>
  )
}

export default SearchBox