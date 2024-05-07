"use client"

import  {Header}  from "./components/Header";
import { Footer } from "./components/Footer";
import {useEffect, useState} from 'react'

import { fetchQuotes } from './utils/api'
import { RandomQuote } from "./components/RandomQuote";
import {AuthorsQuotes} from './components/AuthorQuotes';
import {LoaderSpinner} from './components/LoaderSpinner'


interface QuoteData{
  _id: string,
  quoteText: string,
  quoteAuthor: string,
  quoteGenre: string,
}

export default function Home() {
  const [randomQuote, setRandomQuote] = useState<QuoteData>()
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthorSelected, setIsAuthorSelected] = useState(false)

  useEffect(() => {
    getRandomQuote()
  }, [])

  async function getRandomQuote(){
    try{
      setIsLoading(true)
      setIsAuthorSelected(false)
      const data = await fetchQuotes('random')

      setRandomQuote(data[0])
    } catch (error){
      console.error(error)
    } finally{
      setIsLoading(false)
    }
  }



  return (
    <div className="m-auto flex min-h-screen max-w-[1440px] flex-col p-8">
      <Header handleFetchRandomQuote={getRandomQuote} />

      <main className='m-auto mt-20 flex max-w-[620px] flex-1'>
        {!randomQuote || isLoading ? (
          <LoaderSpinner />
        ) : (
          !isAuthorSelected && (
            <RandomQuote 
            setIsAuthorSelected={setIsAuthorSelected}
            {...randomQuote}
            />
          )
        )}
       {randomQuote && isAuthorSelected && (
        <AuthorsQuotes author={randomQuote?.quoteAuthor}  />
       )}
       
      </main>

      <Footer />
    </div>
  );
}
