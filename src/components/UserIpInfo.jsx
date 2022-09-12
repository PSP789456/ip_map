import React from 'react';
import Typography from '@mui/material/Typography';
import Tooltip from "@mui/material/Tooltip";

const UserIpInfo = ({ currentIpInfo }) => {
  if (!currentIpInfo) return <div className="userIpInfoPlaceholder"><Typography variant="h5" fontWeight="fontWeightMedium"></Typography></div>
  return (
    (currentIpInfo !== null ? <div className="userIpInfo"><Typography variant="h5" fontWeight="fontWeightMedium" style={{ marginTop: '1rem', marginBottom: '2rem' }}>Your IP Adress Info</Typography>
      <Tooltip title={currentIpInfo.country_name}><img src={currentIpInfo.location.country_flag} style={{ height: '25px', width: '35px', borderRadius: '5px' }} alt={currentIpInfo.country_name} /></Tooltip> <br />
      <Typography variant="subtitle1" display="inline" fontWeight="fontWeightMedium">IP: </Typography><Typography variant="body1" display="inline">{currentIpInfo.ip}</Typography><br />
      <Typography variant="subtitle1" display="inline" fontWeight="fontWeightMedium">zip: </Typography><Typography variant="body1" display="inline">{currentIpInfo.zip}</Typography><br />
      <Typography variant="subtitle1" display="inline" fontWeight="fontWeightMedium">City: </Typography><Typography variant="body1" display="inline">{currentIpInfo.city}</Typography><br />
      <Typography variant="subtitle1" display="inline" fontWeight="fontWeightMedium">Type: </Typography><Typography variant="body1" display="inline">{currentIpInfo.type}</Typography><br />
      <Typography variant="subtitle1" display="inline" fontWeight="fontWeightMedium">Latitude: </Typography><Typography variant="body1" display="inline">{currentIpInfo.latitude}</Typography><br />
      <Typography variant="subtitle1" display="inline" fontWeight="fontWeightMedium">Longitude: </Typography><Typography variant="body1" display="inline">{currentIpInfo.longitude}</Typography><br />
      <Typography variant="subtitle1" display="inline" fontWeight="fontWeightMedium">Region: </Typography><Typography variant="body1" display="inline">{currentIpInfo.region_name}</Typography><br />
      <Typography variant="subtitle1" display="inline" fontWeight="fontWeightMedium">Country: </Typography><Typography variant="body1" display="inline">{currentIpInfo.country_name}</Typography><br />
      <Typography variant="subtitle1" display="inline" fontWeight="fontWeightMedium">Continent: </Typography><Typography variant="body1" display="inline">{currentIpInfo.continent_name}</Typography><br />
      <Typography variant="subtitle1" display="inline" fontWeight="fontWeightMedium">Region code: </Typography><Typography variant="body1" display="inline">{currentIpInfo.region_code}</Typography>
    </div> : <div className="userApiInfoError"><Typography variant="h5" fontWeight="fontWeightMedium">Api Error</Typography></div>
    )
  )
}

export default UserIpInfo