
import NewsFounder from '@/components/resources/news/news-founder'
import NewsGrid from '@/components/resources/news/news-grid'
import NewsHero from '@/components/resources/news/news-hero'
import React from 'react'

function NewsPage() {
  return (
    <div>
        <NewsHero />
        <NewsFounder />
        <NewsGrid />
    </div>
  )
}

export default NewsPage