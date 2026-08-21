import { useState } from "react";
import { mockData } from "../data/mockData";

export default function UserData() {
    const [data, setData] = useState(mockData);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    console.log(data);

    const handleUsername = (e) => {
        setUsername(String(e.target.value));
    };

    const handleEmail = (e) => {
        setEmail(String(e.target.value));
    };

    function handleSubmit(e) {
        try {
            e.preventDefault();
            setData([...data, { username: `${username}`, email: `${email}` }]);
            setUsername("");
            setEmail("");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <ul>
                {data.map((item) => (
                    <li key={crypto.randomUUID()}>
                        <p>Username: {item.username}</p>
                        <p>Email: {item.email}</p>
                        <br />
                    </li>
                ))}
            </ul>
            <label>Username</label>
            <input
                type="text"
                value={username}
                onChange={handleUsername}
                required
            />
            <br />
            <label>Email</label>
            <input type="email" value={email} onChange={handleEmail} required />
            <br />
            <button type="submit" onClick={handleSubmit}>
                Add
            </button>
            <br />
        </>
    );
}
