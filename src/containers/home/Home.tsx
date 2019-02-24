import React, { CSSProperties } from "react";
import Loading from "../../components/Loading/Loading";
const ProfileImage: string = require("../../assets/profile.png");

interface HomeProps {}

interface HomeState {
    profileBubbleStyles: CSSProperties;
    summaryStyles: CSSProperties;
}

class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);

        this.state = {
            profileBubbleStyles: {},
            summaryStyles: {}
        };

        this.applyRolloverEffect = this.applyRolloverEffect.bind(this);
        this.removeRolloverEffect = this.removeRolloverEffect.bind(this);
        this.applyPressEffect = this.applyPressEffect.bind(this);
        this.removePressEffect = this.removePressEffect.bind(this);
    }

    applyRolloverEffect(event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>): void {
        const target: HTMLDivElement = event.target as HTMLDivElement;
        const halfW: number = target.clientWidth / 2;
        const halfH: number = target.clientHeight / 2;

        const coorX: number = halfW - ((event as React.MouseEvent<HTMLDivElement>).pageX - target.offsetLeft);
        const coorY: number = halfH - ((event as React.MouseEvent<HTMLDivElement>).pageY - target.offsetTop);

        const degX: string = (coorY / halfH) * 10 + "deg";
        const degY: string = (coorX / halfW) * -10 + "deg";

        const profileBubbleStyles: CSSProperties = {
            transform: `perspective(600px) translate3d(0, -2px, 0) scale(1.1) rotateX(${degX}) rotateY(${degY})`
        };
        const summaryStyles: CSSProperties = {
            transform: `perspective(600px) translate3d(0, 0, 0) rotateX(${degX}) rotateY(${degY})`
        };
        this.setState({ profileBubbleStyles, summaryStyles });
    }

    removeRolloverEffect(): void {
        this.setState({ profileBubbleStyles: {}, summaryStyles: {} });
    }

    applyPressEffect(): void {
        this.setState({ profileBubbleStyles: { transform: String(this.state.profileBubbleStyles.transform).replace("scale(1.1)", "scale(1)") } });
    }
    removePressEffect(): void {
        this.setState({ profileBubbleStyles: { transform: String(this.state.profileBubbleStyles.transform).replace("scale(1)", "scale(1.1)") } });
    }

    render() {
        return (
            <div className="home-container">
                <div className="profile-bubble-container">
                    <div
                        className="profile-bubble"
                        style={this.state.profileBubbleStyles}
                        onMouseMove={this.applyRolloverEffect}
                        onMouseLeave={this.removeRolloverEffect}
                        onTouchMove={this.applyRolloverEffect}
                        onTouchEnd={this.removeRolloverEffect}
                        onMouseDown={this.applyPressEffect}
                        onMouseUp={this.removePressEffect}
                    >
                        <figure className="profile-bubble__thumb">
                            <img src={ProfileImage} height="300" width="300" alt="" />
                        </figure>
                        <div className="profile-bubble__layer cover" />
                        <div className="profile-bubble__summary cover" style={this.state.summaryStyles}>
                            <h2 className="profile-bubble__title">Yousif Al-Raheem</h2>
                            <address className="profile-bubble__meta designer">Software Developer</address>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
