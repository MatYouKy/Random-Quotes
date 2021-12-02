import { useEffect, useState } from 'react';
import { useRef } from 'react';
import './App.css';

export const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({
    quote:'',
    author: ''
  })
  
  const handleNextQuote = () => {
    const random =  Math.floor((Math.random() * quotes.length));
    const citat = quotes[random]
    setQuote(citat);
  }
  
  const prevQuoteRef = useRef();
  const prevQuote = prevQuoteRef.current

  const handlePreviousQuote = () => setQuote(prevQuote);
  
  useEffect(() => {
    prevQuoteRef.current = quote;
  })
  
  useEffect(() => {
    if(quotes) {
      const random =  Math.floor((Math.random() * quotes.length));
      setQuote(quotes[random])
    }
  },[quotes])

  useEffect(() => {
      fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(res => res.json())
      .then(data => setQuotes(data))
      .catch(err => console.log('Error', err))
  },[])
  
  return (
    <main className="App">
      <h1>quotations</h1>
      <section>
        {quote && <h2 className="quote">Quote: "{quote.quote}"</h2>}
        {quote && <h3 className="author">Author: {quote.author}</h3>}
        {prevQuote && prevQuote.author !== '' && <button className="button" onClick={handlePreviousQuote}>Previous</button>}
        <button className="button" onClick={handleNextQuote}>Next</button>
      </section>
    </main>
  );
}

