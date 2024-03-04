"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from '@/components/shared/NewsCard';
import { motion } from 'framer-motion'; 
import { fadeIn, footerVariants, navVariants } from '@/utils/motion';

// const API_KEY = '1b3d1018d2aa4319bb2b15389e482a79';

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=d58dc1f4942a428e9d6d30a49743748e`
                );
                setNews(response.data.articles);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    return (
        <motion.div variants={footerVariants} initial='hidden' whileInView='show' className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8">Latest News</h1>
            <div className="flex flex-wrap -mx-2">
                {news.slice(0, 102).map((article, index) => (
                    <NewsCard key={index} article={article} />
                ))}
            </div>
        </motion.div>
    );
};

export default News;

//d58dc1f4942a428e9d6d30a49743748e