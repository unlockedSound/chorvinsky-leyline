import './App.css';
import './index.css';
import Header from './components/Header';
import SidePanel from "./components/SidePanel";
import SidePanelMobile from "./components/SidePanelMobile";
import FlowerSorcerer from "./components/posts/FlowerSorcerer";
import AlcernsLighthouse from "./components/posts/AlcernsLighthouse";
import OrthiAndOni from "./components/posts/OrthiAndOni";
import TwoStorytellers from "./components/posts/TwoStorytellers";
import EnilsCoin from "./components/posts/EnilsCoin";
import QueenAndScholar from "./components/posts/QueenAndScholar";
function App() {
    return (
        <div className="dark:bg-gray-900">
            <Header/>
            <div className="" id="top">
                <SidePanelMobile/>
                <div className="flex mx-auto py-0 lg:py-8 px-4 justify-start">
                    <SidePanel/>
                    <div className="mx-auto max-w-screen-md dark:bg-gray-900">
                        <AlcernsLighthouse/>
                        <FlowerSorcerer/>
                        <OrthiAndOni/>
                        <TwoStorytellers/>
                        <EnilsCoin/>
                        <QueenAndScholar/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
