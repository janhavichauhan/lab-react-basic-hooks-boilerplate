import React, { useState, useEffect } from "react";

function UsingState(props) {
    const [state, setState] = useState(" ");
    const [like, setLike] = useState(0);

    const handleChangeinState = () => {
        setState((state) => (state === " " ? props.data : " "));
    };

    const handleLike = () => {
        setLike((like) => like + 1);
    };

    useEffect(() => {
        alert("Button has been clicked by the user");
    }, [state]);

    return (
        <>
            <div>
                <h3>{state}</h3>
                <button onClick={handleChangeinState}>Click to get content</button>
                <h1>{like}</h1>
                <button onClick={handleLike}>Like</button>
            </div>
        </>
    );
}

export default UsingState;
