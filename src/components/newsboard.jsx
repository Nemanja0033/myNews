import React, { useEffect, useState } from "react";
import Newsitem from "./newsitem";

const Newsboard = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                // Prikazujemo ispravan URL
                let url = ` https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a291e8f2a163469bb050ffec4a00ac13`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setArticles(data.articles || []);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        fetchArticles();
    }, [category]);

    return (
        <div className="">
            <br />
            {articles.map((news) => (
                <Newsitem
                    key={news.url}
                    title={news.title}
                    description={news.description}
                    src={news.urlToImage}
                    url={news.url}
                />
            ))}
        </div>
    );
}

export default Newsboard;
