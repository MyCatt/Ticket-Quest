import React from 'react';
import MovieListItem from './components/MovieListItem/MovieListItem'
import './App.css';
import Logo from '../src/LogoTicket.svg';
import ComboSelector from '../src/components/ComboSelector';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movieList: [],
      searchResponse: [],
      searchActorResponse: [],
      index: 0,
      sortMethod: "revenue.desc"
    }
    this.fetchAPI = this.fetchAPI.bind(this);
    this.throwURL = this.throwURL.bind(this);
    this.updateSortMethod = this.updateSortMethod.bind(this);
    this.quickSearch = this.quickSearch.bind(this);
    this.searchActor = this.searchActor.bind(this);
  }

  componentDidMount() {
    this.throwURL(0);
  }

  updateSortMethod(val) {
    this.setState({
      sortMethod: val
    }, () => this.throwURL());
  }

  throwURL() {
    this.fetchAPI(`https://api.themoviedb.org/3/discover/movie`, 1, 2, this.state.sortMethod, res => {
      this.setState({
        movieList: res
      });
    });
  }

  fetchAPI = (url, page_start, page_end, sort_method, _callback) => {
    let response = [];
    while(page_start <= page_end) {
    const Http = new XMLHttpRequest();
    url = url + "?api_key=793404c73efcad0fa53d5f53f793021f";
    url = url + "&page=" + page_start;
    url = url + "&sort_by=" + sort_method;
    //Ensure that the request doesnt get stuck loading
    Http.timeout = 5000;
    Http.ontimeout = () => {
      console.log('This request is taking too long!');
    }
    //Open request
    Http.open("GET", url, true);
    Http.send();
    //Request recieved, process:
    Http.onreadystatechange = e => {
      if(Http.responseText) {
      response = response.concat(JSON.parse(Http.responseText).results);
      this.setState({movieList: response})
      }
    }
    page_start++;
  }
  };

  quickSearch(e) {
    let response = [];
    let query = e.target.value;
    const Http = new XMLHttpRequest();
    let url = "https://api.themoviedb.org/3/search/movie";
    url = url + "?api_key=793404c73efcad0fa53d5f53f793021f";
    url = url + "&query=" + query;
    //Ensure that the request doesnt get stuck loading
    Http.timeout = 5000;
    Http.ontimeout = () => {
      console.log('This request is taking too long!');
    }
    //Open request
    Http.open("GET", url, true);
    Http.send();
    //Request recieved, process:
    Http.onreadystatechange = e => {
      if(Http.responseText) {
        //console.log(Http.responseText);
      response = JSON.parse(Http.responseText).results;
      if(response != undefined) {
        let formattedResponse = response.slice(0, 5).map((val, index) => {
            return <dd key={"movie" + index}>{val.title}</dd>;
        });
        this.setState({searchResponse: formattedResponse});
        this.searchActor(query);
      }else{
        this.setState({searchResponse: []});
      }
    }
  }
  }

  searchActor(name) {
    const Http = new XMLHttpRequest();
    let url = "https://api.themoviedb.org/3/search/person";
    url = url + "?api_key=793404c73efcad0fa53d5f53f793021f";
    url = url + "&query=" + name;
    //Ensure that the request doesnt get stuck loading
    Http.timeout = 5000;
    Http.ontimeout = () => {
      console.log('This request is taking too long!');
    }
    //Open request
    Http.open("GET", url, true);
    Http.send();
    //Request recieved, process:
    Http.onreadystatechange = e => {
      if(Http.responseText) {
      let actorResponse = JSON.parse(Http.responseText).results;
      if(actorResponse != undefined) {
        let formattedResponse = actorResponse.slice(0, 5).map((val, index) => {
            if(val.known_for_department == "Acting" && val.gender != 0)
            return <dd key={"Actor" + index}>{val.name}</dd>;
        });
        this.setState({searchActorResponse: formattedResponse});
      }else{
        this.setState({searchActorResponse: []});
      }
    }
  }
  }

  render() {
    return (
      <div>
        <nav id="movieResults-nav">
          <img src={Logo} id="logo"/>
          <div id="search-bar-section">
            <input id="search-bar" type="text" placeholder="Find something..." onChange={(e) => this.quickSearch(e)} onFocus={() => this.setState({showResults: true})} onBlur={() => this.setState({showResults: false})}/>
            <div id="search-bar-results" style={{display: this.state.showResults ? 'block': 'none'}}>
            <dl>
              <dt style={{display: this.state.searchResponse.length > 0 ? 'block' : 'none'}}>Movies</dt>
              {
                this.state.searchResponse
              }
              <dt style={{display: this.state.searchActorResponse.length > 0 ? 'block' : 'none'}}>Actors</dt>
              {
                this.state.searchActorResponse
              }
            </dl>
            </div>
          </div>
        </nav>
        <nav id="movieResults-sort">
          <ComboSelector throw={this.updateSortMethod} menuList={[{tidy:"Popularity", messy: "popularity.desc"}, {tidy:"Release Date", messy: "release_date.desc"}, {tidy:"Revenue", messy: "revenue.desc"}, {tidy:"Votes", messy: "vote_count.desc"}, {tidy:"Vote Average", messy: "vote_average.desc"}]} />
        </nav>
        <main className="movieResults">
          {this.state.movieList.map((item, i) => {
            return <MovieListItem key={"MovieList" + i} movieName={item.title + " (" + item.release_date.substring(0, 4) + ")"} movieDesc={item.overview} movieActive={i == 0} moviePoster={`https://image.tmdb.org/t/p/w400${item.poster_path}`}/>
          })}
        </main>
      </div>
    );
  }
}

