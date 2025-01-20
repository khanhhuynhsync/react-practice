import './App.css'
import {Footer} from "./components/Footer.jsx";
import {Header} from "./components/Header.jsx";
import {PageRoutes} from "./routes/PageRoutes.jsx";

export function App() {
    return (
        <div>
            <Header/>
            <PageRoutes/>
            <Footer/>
        </div>
    )
}
