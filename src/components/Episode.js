import React, { Component } from 'react';

class Episode extends Component {
  constructor(props){
    super(props)
    this.state = {
      details: {
        name: "",
        summary: "",
        image: {
          medium: "",
        }
      }
    }
  }

  componentDidMount(){
    console.log();
    let id = this.props.match.params.show_id;
    let episodeCode = this.props.match.params.episode_id.split("x");
    let season = episodeCode[0];
    let number = episodeCode[1];
    this.getEpisode(id, season, number)
  }

  getEpisode = (id, season, number) => {
    fetch('http://api.tvmaze.com/shows/' + id + "/episodebynumber?season=" + season + "&number=" + number)
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

  render() {
    const { details } = this.state;
    return (
      <div>
        <h1 className="detail-name">{details.name}</h1>
        <div className="flex">
          <img className="detail-image" src={details.image.medium} alt="Episode cover"/>
          <div className="summary" dangerouslySetInnerHTML={{__html: details.summary}}></div>
        </div>
      </div>
    );
  }
}

export default Episode;
