import { use } from "react";
import { useEffect, useState } from "react";

const CounterF = ({step = 1}) => {
    console.log("CounterF : render");
    const [count,setCount] = useState(0);
    const [loading,setLoading] = useState(true);
 
    useEffect(() => {
        console.log("CounterF : useEffect");
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    const handleClick = () => setCount(count + 1);
    const handleclick = () => setCount(count - 1);

    return (
        <> { loading ? <div> Loading...</div> :
        <div>
            <p> {count}</p>
            <button onClick={handleClick}>Incrementer</button>
            <button onClick={handleclick}>Decrementer</button>
        </div>
}
        </>
    )
};
export default CounterF;