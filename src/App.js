import { useEffect, useState } from 'react/cjs/react.development';
import { useRef } from 'react';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState();
  const [quote, setQuote] = useState({
    quote:'',
    author: ''
  })
  
  const random = () => Math.floor((Math.random() * quotes.length));
  
  const handleNextQuote = () => {
    const citat = quotes[random()]
    setQuote(citat);
  }
  
  const prevQuoteRef = useRef();
  const prevQuote = prevQuoteRef.current

  const handlePreviousQuote = () => setQuote(prevQuote);
  
  useEffect(() => {
    prevQuoteRef.current = quote;
  })
  
  useEffect(() => {
    const getQuote = () => {
      if(quotes) {
        const citat = quotes[random()]
        setQuote(citat);
      }
    }
    getQuote();
  },[quotes])

  
  const url = 'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json'
  useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(data => setQuotes(data))
      .catch(err => {
          if(err) alert(err)
      })
  },[url])
  
  return (
    <main className="App">
      <h1>quotations</h1>
      <section>
        <h2 className="quote">Quote: "{quote.quote}"</h2>
        <h3 className="author">Author: {quote.author}</h3>
        {prevQuote && prevQuote.author !== '' && <button className="button" onClick={handlePreviousQuote}>Previous</button>}
        <button className="button" onClick={handleNextQuote}>Next</button>
      </section>
    </main>
  );
}

export default App;
