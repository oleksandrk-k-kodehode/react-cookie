import { useEffect, useState } from "react";

export default function CatFacts() {
    const [data, setData] = useState(null);
    try {
        useEffect(() => {
            fetch("https://catfact.ninja/facts")
                .then((response) => response.json())
                .then((fetched_data) => setData(fetched_data));
        }, []);
        console.log("Data fetched!");
        console.log(data);
    } catch (error) {
        console.error(error);
    }
    return (
        <>
            {data ? (
                <ul>
                    {data.data.map((item) => (
                        <>
                            <li key={crypto.randomUUID()}>{item.fact}</li>
                            <br />
                        </>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}
