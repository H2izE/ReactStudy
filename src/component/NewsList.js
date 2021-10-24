import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItems from "./NewsItems";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const query = category === 'all' ? '' : `&category=${category}`;
                const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=cecec5a2918645be8f6bddfc01c8f07d`);

                setArticles(res.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        }
        fetchData();
    }, [category]);

    if (loading) {
        return <NewsListBlock>로딩중...</NewsListBlock>
    }
    if (!articles) {
        return null;
    }
    return (
        <NewsListBlock>
            {articles.map(article => <NewsItems key={article.url} article={article} />)}
        </NewsListBlock>
    );
};

export default NewsList;

