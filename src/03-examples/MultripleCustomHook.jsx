
import { useCounter, useFetch } from '../hooks/hooks.js'
import { LoadingQuote } from './LoadingQuote.jsx';
import { Quote } from './Quote.jsx';
export const MultripleCustomHook = () => {


    const { counter, increment } = useCounter(1);
    const { data, isloading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
    const { author, quote } = !!data && data[0];


    return (
        <>
            <h1>Breaking bad Quest</h1>
            <hr></hr>
            {
                isloading
                    ? <LoadingQuote></LoadingQuote>
                    : <Quote author={author} quote={quote}></Quote>
            }

            <button className='btn btn-primary ' onClick={increment}>
                Next Quote
            </button>



        </>
    )
}
