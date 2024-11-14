import React, { useEffect } from 'react'
import { useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import LoadingBar from 'react-top-loading-bar'


//35 completed 

const  News =(props)=> {

    const [articles,setArticles]=useState([])
    const [loading,setLoading]=useState(true)
    const [page,setPage]=useState(1)
    const [totalResults,setTotalResults]=useState(0)
    

   const  captializefirstletter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const updateNews=async()=>{

        props.setProgress(10);
     
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=06b22047a2f24ffabee40a4fc5c2124f&page=${props.page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(50);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);

    }

    useEffect(()=>{
        document.title = ` ${props.category} - NewsMonkey `;
        updateNews();
    },[]);


    // async componentDidMount() {
    //     // console.log("cdm");
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=06b22047a2f24ffabee40a4fc5c2124f&page=1&pageSize=${props.pageSize}`;
    //     // this.setState({ loading: true });
    //     // let data = await fetch(url);
    //     // let parsedData = await data.json();

    //     // this.setState({
    //     //     articles: parsedData.articles,
    //     //     totalArticles: parsedData.totalResults,
    //     //     loading: false
    //     // })
    //     setPage(page+1);
    //     updateNews();
    // }

    const handlePrevClick = async () => {
        // console.log("Previous");
        // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=06b22047a2f24ffabee40a4fc5c2124f&page=${this.state.page - 1}&pageSize=${props.pageSize}`;

        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles,
        //     loading: false
        // })
        setPage(page-1);
        updateNews();
    }

    const handleNextClick = async () => {
        console.log("Next");
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))) {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=06b22047a2f24ffabee40a4fc5c2124f&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
        //     this.setState({ loading: true });
        //     let data = await fetch(url);
        //     let parsedData = await data.json();
        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: parsedData.articles,
        //         loading: false
        //     })
        // }
        setPage(page-1);
        this.updateNews();

    }

    const fetchMoreData = async () => {
        setPage(page+1);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=06b22047a2f24ffabee40a4fc5c2124f&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    }

        console.log('render');
        return (
            <div className='container my-3'>
                <h1 className='text-center' style={{ margin: '40px 0px' }}  >  NewsMonkey - Top  {captializefirstletter(props.category)} Headlines </h1>
                {/*  {this.state.loading && <Spinner />} */}

                <InfiniteScroll
                    dataLength={articles.length} //This is important field to render the next data
                    next={fetchMoreData}
                    hasMore={articles.length!==totalResults}
                    loader={<Spinner />}
                >

                    <div className='container'>

                        <div className='row'>
                            {!loading && articles.map((element) => {
                                return element.description != null && <div className='col-md-4' key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : ""} newsUrl={element.url ? element.url : ""} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}

                        </div>

                    </div>
                

                </InfiniteScroll >
            </div >

        )

}

News.defaultProps = {
    country: 'us',
    pageSize: 5,
    category: 'sports'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
