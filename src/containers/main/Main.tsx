import React from "react";
import LeftColumn from "./columns/left/LeftColumn";
import RightColumn from "./columns/right/RightColumn";
import { Switch, Route } from "react-router";

interface MainProps {}

interface MainState {}

const Home: any = React.lazy(() => import("../home/Home"));
const NotFound: React.LazyExoticComponent<React.FunctionComponent> = React.lazy(() =>
    import("../../components/NotFound/NotFound")
);

export default class Main extends React.Component<MainProps, MainState> {
    constructor(props: MainProps) {
        super(props);
    }

    render() {
        return (
            <React.Suspense fallback={<div/>}>
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="*" component={() => <NotFound />} />
                </Switch>
            </React.Suspense>
        );
    }
}

{
    /* <header className="jumbotron">
        <div className="portfolio-image">
            <img
                src={ProfileImage}
                alt="Yousif's Profile Image"
                itemType="image/png"
                title="Profile Image"
            />
        </div>
        <div className="name-and-occupation">
            <h1 className="name">Yousif Alraheem</h1>
            <h2 className="occupation">Software Engineer</h2>
        </div>
    </header>
    <div className="columns-container">
        <LeftColumn />
        <RightColumn />
    </div> */
}
