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
    <h4 className="mt-5 text=sm-center">Personajele basmului</h4>
    <Center>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} direction="row"
                  justifyContent="center" alignItems="center">
                <Grid item xs={'auto'} >
                    <Item>
                        Craiul
                        <img src="../assets/harap-alb.png" alt="lmao"/>
                    </Item>
                </Grid>
                <Grid item xs={2} >
                    <Item>xs=6 md=4</Item>
                </Grid>
            </Grid>
        </Box>
    </Center>
    </div>
    );
}

export default App;
