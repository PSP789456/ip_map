import React from 'react'
import Chip from '@mui/material/Chip';
import '../index.css';
import Avatar from '@mui/material/Avatar';
import Tooltip from "@mui/material/Tooltip";
import Typography from '@mui/material/Typography';

const SearchHistory = () => {
  return (
    <div style={{padding:'0.5rem', textAlign:'center'}}>
      <div className="SearchHistoryItem"><Typography variant="h5" fontWeight="fontWeightMedium" style={{ marginBottom: '1.25rem' }}>Search History</Typography></div>
      <div style={{ display: 'flex', flexDirection:'column-reverse'}}>
    {!sessionStorage.getItem('History') ? <Typography variant="body1">History empty</Typography> : JSON.parse(sessionStorage.getItem('History')).map(function(element){
      return <Tooltip key={Math.random()} title={element.country_name}><Chip className="SearchHistoryItem" label={element.ip} avatar={<Avatar src={element.flag} style={{ width:'18px', height:'18px'}} />} /></Tooltip>;
  })}</div>
    </div>
  )
}

export default SearchHistory