import React , {useState , useEffect} from "react";
const TypeWriter = () => {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(-1);

    const text = "Hello , My name is Ahmed Naabbaa. Welcome to my Page , Enjoy"
    useEffect(() => {
        const timer = setTimeout(() => {
        setDisplayText((prevText) => prevText + text.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
    }, 200); 

return () => clearTimeout(timer);
    }, [index, text]);

    return <p>{displayText}</p>;
};
export default TypeWriter;
