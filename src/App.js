import React, { Component } from 'react';
import './App.css'
import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';


import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme=>({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  // title: {
  //   fontSize: 20,
  //   color:'red',
    
  
  // },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    color:'red',
    width:200,
    height:150,
    fontSize: 20,

   
    borderColor: "yellow !important",
    marginBottom: 40,
    borderRadius: 10, borderColor: "#000", padding: 50 
  
  },
});



class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      datas: [],
    };
  }
 
  componentDidMount() {
    axios.get('http://join.navgurukul.org/api/partners')
      .then(res => {
       
        this.setState({ datas:[res.data.data] });
      })
  }



  
  render() {
    const { classes } = this.props;

    return (
      <div className="App">
        <ul>
      
          <div className="_inlist">
            <Card className={classes.title}  spacing={3} variant="outlined">        
              <CardContent>
              <Grid container spacing={0}>
                { this.state.datas.length > 0 && this.state.datas[0].map(element =>{ 
                  return <Grid item xs={6} md={3} xl={2}>
                              <Paper
                                className={classes.paper}
                                variant="outlined"
                                square={true}
                                elevation={3}
                                spacing={2}
                              >
                                <li>{element.name}
                                  <br/>{element.id}
                                </li>
                              </Paper>
                            </Grid>
                })}
              </Grid>
              </CardContent>
            </Card>
          </div>
        </ul>
      </div>
    )
  }
}

export default withStyles(styles)(App);











// render() {
//   const { classes } = this.props;

//   return (
//     <div className="App">
//     <ul>
    
//       <div className="_inlist">
//       <Card className={classes.title} variant="outlined">
      
//     <CardContent>
//   { this.state.datas.length > 0 && this.state.datas[0].map(element =>{ 
//   // return  <Typography className={classes.title} color="textSecondary" gutterBottom>
//   <li>{element.name}
//  <br/>{element.id}</li>
//  </Typography>
{/* <CardContent>
 </CardContent>
  </Card>})} */}























// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
