import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'
// import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './Loading';
export default function Results() {
    const {results, isLoading, getResults, searchTerm} = useResultContext();
    const location = useLocation();

    useEffect(()=>{
        getResults('google-search?gl=us&q=Javascript&num=40&hl=en')
    },[]);
    
    if(isLoading) return <Loading />

    switch (location.pathname) {
        case '/search':
            return(
                <div className="flex flex-wrap justify-betweeen space-y-6 sm:px-56">
                    Search
                    {results?.results?.map(({ organic }, index) =>(
                        <div key={index} className="md:w-2/5 w-full">
                            <a href={organic.url} target="_blank" rel="noreferrer">
                                <p className="text-sm">
                                    {organic.url}
                                </p>
                                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                                    {organic.title}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            )
        case '/images':
                return 'Images';
        case '/news':
                return 'News';
        case '/videos':
                return 'Videos';
        default:
            return 'ERROR!';
    }
}
