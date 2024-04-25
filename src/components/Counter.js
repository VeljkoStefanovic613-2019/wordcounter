import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

export const Counter = () => {
    const [charLength, setCharLength] = useState(0);
    const [wordLength, setWordLength] = useState(0);

    const textRef = useRef();

    const handleCount = () =>{
        const value = textRef.current.value;
        setCharLength(value.length);
        value.length ? setWordLength(value.trim().split(" ").length) : setWordLength(0);
    }

    const handleButton = () => {
        textRef.current.value = "";
        handleCount();
      }

  return (
    <section className="counter">
        <textarea onChange={handleCount} ref={textRef}  data-testid="textArea" placeholder="Type or paste your text"></textarea>
        <button onClick={handleButton} data-testid="clearBtn" disabled={charLength ? "" : "disabled"}>Clear</button>
        <p className="result">
        <span data-testid="charLength">Character: {charLength}</span>
        <span data-testid="charLength">Word: {wordLength}</span>
        </p>
        <div>
            <Link to="joke" className="link">Wanna read a joke?</Link>
        </div>
    </section>
  )
}
