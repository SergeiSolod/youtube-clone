import React from 'react';
import {Grid} from '@material-ui/core'
import SearchBar from "./components/SearchBar/SearchBar";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import VideoList from "./components/VideoList/VideoList";

function App() {
  return (
   <Grid justify='center' container spacing={16}>
       <Grid item sx={12}>
           <Grid container spacing={10}>
                <Grid item xs={12}>
                    <SearchBar/>
                </Grid>
               <Grid item xs={8}>
                   <VideoDetail/>
               </Grid>
               <Grid item xs={4}>
                   <VideoList/>
               </Grid>
           </Grid>
       </Grid>
   </Grid>
  );
}

export default App;
