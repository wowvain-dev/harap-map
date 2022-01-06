import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainMap from './mapping/MainMap'
import { styled as styledd} from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import styled from 'styled-components'
import ReactModal from "react-modal";
import Grid from "@mui/material/Grid";

const Center = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100vh;  
`

const Item = styledd(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function App() {
    return (
    <div className="App">
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand flex-fill" >
                    <p className="text-center mt-3">Harta lumii din "Povestea lui Harap-Alb"</p>
                </a>
            </div>
        </nav>
    <MainMap />
    <h4 className="mt-5 mb-5 text=sm-center">Personajele basmului</h4>
    <Center>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} direction="row"
                  justifyContent="center" alignItems="center">
                <Grid item xs={8} md={1}>
                    <Item>
                        Craiul <br/>
                        <img style={{
                            width: "100%",
                        }} src="https://github.com/wowvain-dev/harap-map/blob/master/assets/craiul.png?raw=true" alt="lmao"/>
                    </Item>
                </Grid>
                <Grid item xs={8} md={1} >
                    <Item>
                        Harap-Alb <br/>
                        <img style={{
                            width: '56%',
                        }} src="https://github.com/wowvain-dev/harap-map/blob/master/assets/harap-alb.png?raw=true"/>
                    </Item>
                </Grid>
                <Grid item xs={8} md={1}>
                    <Item>
                        Fratele Mijlociu <br/>
                        <img style={{
                            width: '56%',
                        }} src="" />
                    </Item>
                </Grid>
            </Grid>
        </Box>
    </Center>
    </div>
    );
}

export default App;
