import React, { useEffect, useState, useContext } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Typography from '@mui/material/Typography'
import { ContextAPI } from '../App';

const UserSearchMap = ({ searchIpInfo }) => {
  const { searchInit } = useContext(ContextAPI);
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
    if (searchIpInfo !== null) {
      setViewState({
        longitude: searchIpInfo.longitude,
        latitude: searchIpInfo.latitude,
        zoom: 14
      })
      setMarkerState({
        longitude: searchIpInfo.longitude,
        latitude: searchIpInfo.latitude,
      })
    }
  }, [searchIpInfo])
  

  return (<>{searchInit !== false && searchIpInfo !== null ?(<ReactMapGL
    {...viewState}
    onMove={evt => setViewState(evt.viewState)}
      mapboxAccessToken="pk.eyJ1IjoicHNwNzg5NDU2IiwiYSI6ImNrdGlscW51ZjEzODgyenFuODgwYTZyODMifQ.P5TmlZ3OkJ_H9RFVwQWOug"
      mapStyle="mapbox://styles/mapbox/streets-v11"
        style={{width: 'fit', height: '100%'}}
    >
      <Marker longitude={markerState.longitude} latitude={markerState.latitude} anchor="bottom" >
    </Marker>
  </ReactMapGL>) : (<div className="userSearchMapPlaceholder"> <Typography variant="h5" fontWeight="fontWeightMedium">Use Search First</Typography></div>)
}</>) 
}

export default UserSearchMap;
