import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import './index.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import Paper from '@mui/material/Paper';
import { SearchBox, SearchHistory, UserIpMap, UserIpInfo, UserSearchMap, UserSearchInfo } from './components';
import SnackbarError from './utils/SnackbarError';
export const ContextAPI = createContext(null);

const App = () => {
  const [currentIpData, setCurrentIpData] = useState(null);
  const [searchIpData, setSearchIpData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchInit, setSearchInit] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [apiErrorText, setApiErrorText] = useState("");
  const [searchValue, setSearchValue] = useState("")
    useEffect(() => {
      axios.get(`http://api.ipstack.com/check?access_key=${process.env.REACT_APP_IPSTACK_SECRET}`).then((response) => {
        if (response.data?.error?.code) {
          setLoading(false)
          setApiError(true);
          setApiErrorText(response.data.error.info)
        }
        else {
          setCurrentIpData(response.data);
        }
      }).catch(function (error) {
        setApiError(true);
        setApiErrorText(error.message)
      })
    }, [])
    //if (!currentIpData) return null;
  function searchForIp() {
    axios.get(`http://api.ipstack.com/${searchValue}?access_key=${process.env.REACT_APP_IPSTACK_SECRET}`).then((response) => {
    if (response.data?.error?.code) {
        setLoading(false)
        setApiError(true);
        setApiErrorText(response.data.error.info)
    }
      else {
        setSearchIpData(response.data);
        setLoading(false)
        let historyObj = {
          ip: response.data.ip,
          flag: response.data.location.country_flag,
          country_name: response.data.country_name
        };
        let historyArr = [];
        if (!sessionStorage.getItem('History')) {
          historyArr.push(historyObj);
          sessionStorage.setItem('History', JSON.stringify(historyArr));
        } else {
          historyArr = JSON.parse(sessionStorage.getItem('History'));
          historyArr.push(historyObj);
          sessionStorage.setItem('History', JSON.stringify(historyArr));
        }
      }
    }).catch(function (error) {
      setLoading(false);
      setApiError(true);
      setApiErrorText(error.message)
    })
  }
  
  return (<>
    <ContextAPI.Provider value={{ apiError, setApiError }}>
      <SnackbarError apiErrorText={ apiErrorText } />
      </ContextAPI.Provider>
    <div>
    <Paper style={{display:"flex", height:'100vh'}}>
      <div className="leftBlock">
      <SearchHistory />
      </div>
      <div className="mainBlock">
        <div className="Column1"></div>

        </div>
        <div className="Column2">
          <UserIpMap currentIpInfo={ currentIpData } />
          <ContextAPI.Provider value={{ loading, setLoading, setSearchInit, searchValue, setSearchValue }}>
            <SearchBox searchFunc={() => searchForIp()} />
            <UserSearchMap searchIpInfo={ searchIpData } />
            </ContextAPI.Provider>
        </div>
        <div className="Column3">
          <UserIpInfo currentIpInfo={ currentIpData } />
          <ContextAPI.Provider value={ searchInit }>
            <UserSearchInfo currentIpInfo={ searchIpData } />
            </ContextAPI.Provider>
        </div>
        </Paper>
    </div>
    </>
  )
}

export default App