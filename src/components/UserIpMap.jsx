import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Typography from '@mui/material/Typography'

const UserIpMap = ({ currentIpInfo }) => {

  const [markerState, setMarkerState] = useState({
    longitude: 0,
    latitude: 0,
  });
  const [viewState, setViewState] = useState({
    longitude: 0,
    latitude: 0,
    zoom: 14
  });
  useEffect(() => {
    if (currentIpInfo !== null) {
      setViewState({
        longitude: currentIpInfo.longitude,
        latitude: currentIpInfo.latitude,
        zoom: 14
      })
      setMarkerState({
        longitude: currentIpInfo.longitude,
        latitude: currentIpInfo.latitude,
      })
    }
  }, [currentIpInfo])
  
  if (!currentIpInfo) return <div className="userIpMapPlaceholder"> <Typography variant="h5" fontWeight="fontWeightMedium"></Typography></div>;
  return (<>{ currentIpInfo !== null ?(<ReactMapGL
    {...viewState}
    onMove={evt => setViewState(evt.viewState)}
      mapboxAccessToken="pk.eyJ1IjoicHNwNzg5NDU2IiwiYSI6ImNrdGlscW51ZjEzODgyenFuODgwYTZyODMifQ.P5TmlZ3OkJ_H9RFVwQWOug"
      mapStyle="mapbox://styles/mapbox/streets-v11"
        style={{width: 'fit', height: '100%'}}
    >
      <Marker longitude={markerState.longitude} latitude={markerState.latitude} anchor="bottom" color="red" >
    </Marker>
  </ReactMapGL>) : (<div className="userIpMapError"> <Typography variant="h5" fontWeight="fontWeightMedium">Api Error</Typography></div>)
}</>) 
}

export default UserIpMap;
