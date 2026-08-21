import "./App.css";
import Cookie from "./components/Cookie.jsx";
import CatFacts from "./components/CatFacts.jsx";
import UserData from "./components/UserData.jsx";

function App() {
    return (
        <>
            <Cookie />
            <br />
            <p>
                -----------------------------------------------------------------------------
            </p>
            <br />
            <CatFacts />
            <br />
            <p>
                -----------------------------------------------------------------------------
            </p>
            <br />
            <UserData />
        </>
    );
}

export default App;
