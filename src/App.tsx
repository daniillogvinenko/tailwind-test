import { Blog } from "./components/Blog/Blog";
import { DiscussYourProject } from "./components/DiscussYourProject/DiscussYourProject";
import { HappyClients } from "./components/HappyClients/HappyClients";
import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { WhatIDo } from "./components/WhatIDo/WhatIDo";
import { WhoAmI } from "./components/WhoAmI/WhoAmI";
import { WorkProcess } from "./components/WorkProcess/WorkProcess";
import "./styles/index.scss";

function App() {
    return (
        <>
            <Header />
            <HeroSection />
            <WhoAmI />
            <WorkProcess />
            <Portfolio />
            <DiscussYourProject />
            <Blog />
            <WhatIDo />
            <HappyClients />
        </>
    );
}

export default App;
