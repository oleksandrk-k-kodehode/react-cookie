import { useState } from "react";

export default function Cookie() {
    const [click, setClick] = useState(0);

    return (
        <>
            <h1>Count: {click}</h1>
            <div
                style={{
                    width: "200px",
                    height: "200px",
                }}
                onClick={() => setClick(click + 1)}
            >
                <img
                    style={{
                        width: "inherit",
                        height: "inherit",
                    }}
                    src="public/cookie.png"
                    alt="cookie"
                />
            </div>
            <br />
            <button className="counter" onClick={() => setClick(0)}>
                Reset
            </button>
        </>
    );
}
