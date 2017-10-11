/**
 * Created by horaciolopez on 03/07/2017.
 */
import React, {Component} from 'react'; //to write components
import ReactDom from 'react-dom'; // to write to dom
import SearchBar from './components/search_bar';
import YTsearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY = 'AIzaSyBVhdpQw3SiR-pShCmyk4CCCkrx1cX0eDw';

// create new component - produce some html, display this on page

class App extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            selectedVideo:null,
            videos:[]}
            ;

        this.videoSearch('surfboards');
    }

    videoSearch(term)
    {
        YTsearch({key:API_KEY, term:term}, (videos) =>
        {
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            }); // this.setState({videos:videos)} - same variable name shortcut
        });
    }


    render()
    {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);
        return(
            <div>
                <SearchBar onSearchTermChange = { videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} />
            </div>
        );
    }

}


ReactDom.render(<App/>, document.querySelector('.container'));