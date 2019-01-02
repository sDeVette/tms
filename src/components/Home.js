import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ListItem from "./ListItem"

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      shows: []
    };
  }

  componentDidMount(){
    console.log();
    this.getShows();
  }

  getShows = () => {
    fetch('http://api.tvmaze.com/shows?page=0')
      .then((response) => {
        if(response.status !== 200){
          console.log("Error occured: " + response.status);
          return
        }

        response.json().then((data) => {
          console.log(data);
          this.setState({shows: data});
        })
      })
  }

  render() {
    const { shows } = this.state;
    return (
      <div className="App">
        <h1>Home</h1>
        <h2>Shows</h2>
        <div>
          {shows.map((show, index) => (
            <ListItem text={show.name} to={"/show/"+show.id+"/"+show.name.toLowerCase().replace(/ /g, "-")}/>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
