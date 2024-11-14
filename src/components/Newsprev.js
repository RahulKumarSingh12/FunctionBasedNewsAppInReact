import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

//33 completed 34 theory left

export class News extends Component {

    static defaultProps={
        country:'us',
        pageSize:5,
        category:'sports'
    }

    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    }

    captializefirstletter=(string)=>{
        return string.charAt(0).toUpperCase()+string.slice(1);
    }

    constructor(props) {
        super(props);
        console.log(" Hello I am a Constructor from newscomponent  ");
        this.state = {
            "status": "ok",
            "totalResults": 38,
            articles: [],
            loading: false,
            page: 1
        }

        document.title=` ${this.props.category} - NewsMonkey `;

    }

    async updateNews(){

        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=06b22047a2f24ffabee40a4fc5c2124f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            articles: parsedData.articles,
            totalArticles: parsedData.totalResults,
            loading: false
        })



    }

    async componentDidMount() {
        // console.log("cdm");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=06b22047a2f24ffabee40a4fc5c2124f&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedData = await data.json();

        // this.setState({
        //     articles: parsedData.articles,
        //     totalArticles: parsedData.totalResults,
        //     loading: false
        // })
        this.updateNews();
    }

    handlePrevClick = async () => {
        // console.log("Previous");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=06b22047a2f24ffabee40a4fc5c2124f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;

        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles,
        //     loading: false
        // })
        this.setState({page:this.state.page - 1});
        this.updateNews();

    }

    handleNextClick = async () => {
        console.log("Next");
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=06b22047a2f24ffabee40a4fc5c2124f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //     this.setState({ loading: true });
        //     let data = await fetch(url);
        //     let parsedData = await data.json();
        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: parsedData.articles,
        //         loading: false
        //     })
        // }
        this.setState({page:this.state.page + 1 });
        this.updateNews();

    }


    render() {
        console.log('render');
        return (
            <div className='container my-3'>
                <h1 className='text-center' style={{margin:'40px 0px;'}}  >  NewsMonkey - Top  {this.captializefirstletter(this.props.category)} Headlines </h1>
                {this.state.loading && <Spinner />}

                <div className='row'>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return element.description != null && <div className='col-md-4' key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : ""} newsUrl={element.url ? element.url : ""} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}

                </div>

                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr;  Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
                </div>


            </div>

        )
    }
}

export default News
