(this.webpackJsonpimdb=this.webpackJsonpimdb||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/LogoTicket.505863ed.svg"},function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),o=n.n(s),a=n(8),i=n.n(a),r=(n(15),n(2)),c=n(3),u=n(5),l=n(4),h=n(1),m=n(6),d=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(l.a)(t).call(this))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"truncate",value:function(e){return e.substring(0,256)+"..."}},{key:"render",value:function(){return o.a.createElement("div",{className:"movieItem"},o.a.createElement("img",{className:"moviePoster",src:this.props.moviePoster}),o.a.createElement("div",{className:"movieDescription"},o.a.createElement("h3",null,this.props.movieName),o.a.createElement("p",null,this.truncate(this.props.movieDesc))))}}]),t}(o.a.Component),p=(n(16),n(9)),v=n.n(p),f=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).state={activeSort:"Popularity",showMenu:!1},e.toggleMenu=e.toggleMenu.bind(Object(h.a)(e)),e.changeSort=e.changeSort.bind(Object(h.a)(e)),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"toggleMenu",value:function(){this.setState({showMenu:!this.state.showMenu})}},{key:"changeSort",value:function(e,t){this.props.throw(e),this.setState({activeSort:t})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"comboSelector",onClick:this.toggleMenu},"Sort by: ",this.state.activeSort,o.a.createElement("div",{className:"comboSelector-menu",style:{display:this.state.showMenu?"block":"none"}},this.props.menuList.map((function(t,n){return o.a.createElement("div",{key:"combo"+n,className:"comboSelector-menu-item",onClick:function(){return e.changeSort(t.messy,t.tidy)}},t.tidy)}))))}}]),t}(o.a.Component),b=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).fetchAPI=function(t,n,s,o,a){for(var i=[],r=function(){var s=new XMLHttpRequest;t=(t=(t+="?api_key=793404c73efcad0fa53d5f53f793021f")+"&page="+n)+"&sort_by="+o,s.timeout=5e3,s.ontimeout=function(){console.log("This request is taking too long!")},s.open("GET",t,!0),s.send(),s.onreadystatechange=function(t){s.responseText&&(i=i.concat(JSON.parse(s.responseText).results),e.setState({movieList:i}))},n++};n<=s;)r()},e.state={movieList:[],searchResponse:[],searchActorResponse:[],index:0,sortMethod:"revenue.desc"},e.fetchAPI=e.fetchAPI.bind(Object(h.a)(e)),e.throwURL=e.throwURL.bind(Object(h.a)(e)),e.updateSortMethod=e.updateSortMethod.bind(Object(h.a)(e)),e.quickSearch=e.quickSearch.bind(Object(h.a)(e)),e.searchActor=e.searchActor.bind(Object(h.a)(e)),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.throwURL(0)}},{key:"updateSortMethod",value:function(e){var t=this;this.setState({sortMethod:e},(function(){return t.throwURL()}))}},{key:"throwURL",value:function(){var e=this;this.fetchAPI("https://api.themoviedb.org/3/discover/movie",1,2,this.state.sortMethod,(function(t){e.setState({movieList:t})}))}},{key:"quickSearch",value:function(e){var t=this,n=[],s=e.target.value,a=new XMLHttpRequest,i="https://api.themoviedb.org/3/search/movie";i=(i+="?api_key=793404c73efcad0fa53d5f53f793021f")+"&query="+s,a.timeout=5e3,a.ontimeout=function(){console.log("This request is taking too long!")},a.open("GET",i,!0),a.send(),a.onreadystatechange=function(e){if(a.responseText)if(void 0!=(n=JSON.parse(a.responseText).results)){var i=n.slice(0,5).map((function(e,t){return o.a.createElement("dd",{key:"movie"+t},e.title)}));t.setState({searchResponse:i}),t.searchActor(s)}else t.setState({searchResponse:[]})}}},{key:"searchActor",value:function(e){var t=this,n=new XMLHttpRequest,s="https://api.themoviedb.org/3/search/person";s=(s+="?api_key=793404c73efcad0fa53d5f53f793021f")+"&query="+e,n.timeout=5e3,n.ontimeout=function(){console.log("This request is taking too long!")},n.open("GET",s,!0),n.send(),n.onreadystatechange=function(e){if(n.responseText){var s=JSON.parse(n.responseText).results;if(void 0!=s){var a=s.slice(0,5).map((function(e,t){if("Acting"==e.known_for_department&&0!=e.gender)return o.a.createElement("dd",{key:"Actor"+t},e.name)}));t.setState({searchActorResponse:a})}else t.setState({searchActorResponse:[]})}}}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("nav",{id:"movieResults-nav"},o.a.createElement("img",{src:v.a,id:"logo"}),o.a.createElement("div",{id:"search-bar-section"},o.a.createElement("input",{id:"search-bar",type:"text",placeholder:"Find something...",onChange:function(t){return e.quickSearch(t)},onFocus:function(){return e.setState({showResults:!0})},onBlur:function(){return e.setState({showResults:!1})}}),o.a.createElement("div",{id:"search-bar-results",style:{display:this.state.showResults?"block":"none"}},o.a.createElement("dl",null,o.a.createElement("dt",{style:{display:this.state.searchResponse.length>0?"block":"none"}},"Movies"),this.state.searchResponse,o.a.createElement("dt",{style:{display:this.state.searchActorResponse.length>0?"block":"none"}},"Actors"),this.state.searchActorResponse)))),o.a.createElement("nav",{id:"movieResults-sort"},o.a.createElement(f,{throw:this.updateSortMethod,menuList:[{tidy:"Popularity",messy:"popularity.desc"},{tidy:"Release Date",messy:"release_date.desc"},{tidy:"Revenue",messy:"revenue.desc"},{tidy:"Votes",messy:"vote_count.desc"},{tidy:"Vote Average",messy:"vote_average.desc"}]})),o.a.createElement("main",{className:"movieResults"},this.state.movieList.map((function(e,t){return o.a.createElement(d,{key:"MovieList"+t,movieName:e.title+" ("+e.release_date.substring(0,4)+")",movieDesc:e.overview,movieActive:0==t,moviePoster:"https://image.tmdb.org/t/p/w400".concat(e.poster_path)})}))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.02f3bd21.chunk.js.map