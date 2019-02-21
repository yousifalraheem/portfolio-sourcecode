import React from "react";
import LeftColumn from "./columns/left/LeftColumn";
import RightColumn from "./columns/right/RightColumn";

interface MainProps {}

interface MainState {}

const ProfileImage: string = require("../../assets/profile.png");

export default class Main extends React.Component<MainProps, MainState> {
    constructor(props: MainProps) {
        super(props);
    }

    render() {
        return (
            <main>
                <div className="main-container">
                    <header className="jumbotron">
                        <div className="portfolio-image">
                            <img src={ProfileImage} alt="Yousif's Profile Image" itemType="image/png" title="Profile Image" />
                        </div>
                        <div className="name-and-occupation">
                            <h1 className="name">
                                Yousif Alraheem
                            </h1>
                            <h2 className="occupation">Software Engineer</h2>
                        </div>
                    </header>
                    <div className="columns-container">
                        <LeftColumn />
                        <RightColumn />
                    </div>
                </div>
            </main>
        );
    }
}
