import React from "react";

interface MainProps {}

interface MainState {}

const ProfileImage: string = require("../../assets/profile.png");

export default class Main extends React.Component<MainProps, MainState> {
    constructor(props: MainProps) {
        super(props);
    }

    render() {
        return (
            <main className="main-container">
                <section className="jumbotron">
                    <div className="portfolio-image">
                        <img
                            src={ProfileImage}
                            alt="My Profile Image"
                            itemType="image/png"
                            title="Profile Image"
                        />
                    </div>
                    <div className="name-and-occupation">
                        <h1 className="name">
                            Yousif
                            <br />
                            Al-Raheem
                        </h1>
                        <h2 className="occupation">Software Engineer</h2>
                    </div>
                </section>
            </main>
        );
    }
}
