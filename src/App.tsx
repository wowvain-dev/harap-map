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
    <h4 className="mt-5 mb-5 text=sm-center">Personajele basmului (prezente în ilustrația de mai sus)</h4>
    <Center>
        <Box>
            <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  direction="row" justifyContent="center" alignItems="center"
                  columns={7} style={{width: '75%', marginLeft: '12.5%'}}>
                <Grid item xs={8} md={1}>
                    <Item>
                        Craiul <br/>
                        <img style={{
                            width: "100%",
                        }} src="https://github.com/wowvain-dev/harap-map/blob/master/assets/craiul.png?raw=true" alt="f"/>
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
                        Fiul mijlociu <br/>
                        <img style={{
                            width: '46%',
                        }} src="https://github.com/wowvain-dev/harap-map/blob/master/assets/fiu-mijlociu.png?raw=true" />
                    </Item>
                </Grid>
                <Grid item xs={8} md={1}>
                    <Item>
                        Fiul cel mare <br/>
                        <img style={{
                            width: '45%',
                        }} src="https://github.com/wowvain-dev/harap-map/blob/master/assets/fiul-mare.png?raw=true"/>
                    </Item>
                </Grid>
                <Grid item xs={8} md={1}>
                    <Item>
                        Sfânta Duminică <br/>
                        <img style={{
                            width: '62%',
                        }} src="https://github.com/wowvain-dev/harap-map/blob/master/assets/sfanta-duminica.png?raw=true" />
                    </Item>
                </Grid>
                <Grid item xs={8} md={1}>
                    <Item>
                        Spânul <br/>
                        <img style={{
                            width: '63%',
                        }} src="https://github.com/wowvain-dev/harap-map/blob/master/assets/spanul.png?raw=true" />

                    </Item>
                </Grid>
                <Grid item xs={8} md={1}>
                    <Item>
                        Fomilă <br/>
                        <img style={{
                            width: '78%',
                        }} src="https://github.com/wowvain-dev/harap-map/blob/master/assets/fomila.png?raw=true" />
                    </Item>
                </Grid>
                <Grid item xs={8} md={1}>
                    <Item>
                        Ochilă <br/>
                        <img style={{
                            width: '45%',
                        }} src="https://github.com/wowvain-dev/harap-map/blob/master/assets/ochila.png?raw=true" />
                    </Item>
                </Grid>
                <Grid item xs={8} md={1}>
                    <Item>
                        Setilă <br/>
                        <img style={{
                            width: '60%',
                        }} src="https://github.com/wowvain-dev/harap-map/blob/master/assets/setila.png?raw=true" />

                    </Item>
                </Grid>
                <Grid item xs={8} md={1}>
                    <Item>
                        Păsări - Lăți - Lungilă<br/>
                        <img style={{
                            width: '63%',
                        }} src="https://github.com/wowvain-dev/harap-map/blob/master/assets/pasari-lati-lungila.png?raw=true" />

                    </Item>
                </Grid>
                <Grid item xs={8} md={1}>
                    <Item>
                        Gerilă <br/>
                        <img style={{
                            width: '52%',
                        }} src="https://github.com/wowvain-dev/harap-map/blob/master/assets/gerila.png?raw=true" />

                    </Item>
                </Grid>
            </Grid>
        </Box>
    </Center>
    </div>
    );
}

export default App;
