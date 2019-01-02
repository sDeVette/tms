import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Show extends Component {
  constructor(props){
    super(props)
    this.state = {
      details: {
        name: "",
        summary: "",
        image: {
          medium: "",
        }
      },
      episodes: [],
    }
  }

  componentDidMount(){
    console.log(this.props);
    let id = this.props.match.params.show_id;
    this.getShow(id);
    this.getEpisodes(id);
  }

  getShow = (id) => {
    fetch('http://api.tvmaze.com/shows/' + id)
      .then((response) => {
        if(response.status !== 200){
          console.log("Error occured: " + response.status);
          return
        }

        response.json().then((data) => {
          console.log(data);
          this.setState({details: data});
        })
      })
  }

  getEpisodes = (id) => {
    fetch('http://api.tvmaze.com/shows/' + id + "/episodes")
      .then((response) => {
        if(response.status !== 200){
          console.log("Error occured: " + response.status);
          return
        }

        response.json().then((data) => {
          console.log(data);
          this.setState({episodes: data});
        })
      })
  }
  
  render() {
    const { location } = this.props;
    const { details, episodes } = this.state;
    return (
      <div className="App">
        <h1>{details.name}</h1>
        <img src={details.image.medium}/>
        <div dangerouslySetInnerHTML={{__html: details.summary}}></div>
        <ul>
          {episodes.map((episode, index) => (
            <li key={index}><Link to={location.pathname + "/" + episode.season + "x" + episode.number}>{episode.name}</Link></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Show;
