"use client"

import React from 'react';

type ArticleProps = {
    article: any
}

const NewsCard = ({ article }: ArticleProps) => {
    const imageUrl = article.urlToImage ? article.urlToImage : 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=600';

    return (
        <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={imageUrl} alt={article.title} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{article.title}</div>
                    <p className="text-gray-700 text-base">{article.description}</p>
                </div>
                <div className="px-6 py-4">
                    <a href={article.url} className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">Read more</a>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;