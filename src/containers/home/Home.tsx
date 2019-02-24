import React, { CSSProperties } from "react";
import Loading from "../../components/Loading/Loading";
const ProfileImage: string = require("../../assets/profile.png");

interface HomeProps {}

interface HomeState {
    itemStyles: CSSProperties;
    summaryStyles: CSSProperties;
}

class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);

        this.state = {
            itemStyles: {},
            summaryStyles: {}
        };

        this.applyRolloverEffect = this.applyRolloverEffect.bind(this);
        this.removeRolloverEffect = this.removeRolloverEffect.bind(this);
    }

    applyRolloverEffect(event: any): void {
        const target: HTMLDivElement = event.target as HTMLDivElement;
        const halfW: number = target.clientWidth / 2;
        const halfH: number = target.clientHeight / 2;

        const coorX: number = halfW - (event.pageX - target.offsetLeft);
        const coorY: number = halfH - (event.pageY - target.offsetTop);

        const degX: string = (coorY / halfH) * 10 + "deg"; // max. degree = 10
        const degY: string = (coorX / halfW) * -10 + "deg"; // max. degree = 10
        const itemStyles: CSSProperties = {
            transform: `perspective(600px) translate3d(0, -2px, 0) scale(1.1) rotateX(${degX}) rotateY(${degY})`
        };
        const summaryStyles: CSSProperties = {
            transform: `perspective(600px) translate3d(0, 0, 0) rotateX(${degX}) rotateY(${degY})`
        };
        this.setState({ itemStyles, summaryStyles });
    }

    removeRolloverEffect(): void {
        this.setState({ itemStyles: {}, summaryStyles: {} });
    }

    render() {
        return (
            <div className="home-container">
                <div
                    className="ItemCard"
                    style={this.state.itemStyles}
                    onMouseMove={this.applyRolloverEffect}
                    onMouseLeave={this.removeRolloverEffect}
                    onTouchMove={this.applyRolloverEffect}
                    onTouchEnd={this.removeRolloverEffect}
                >
                    <figure className="ItemCard__thumb">
                        <img src={ProfileImage} height="300" width="300" alt="" />
                    </figure>
                    <div className="ItemCard__layer cover" />
                    <div className="ItemCard__summary cover" style={this.state.summaryStyles}>
                        <h2 className="ItemCard__title">Yousif Al-Raheem</h2>
                        <address className="ItemCard__meta designer">Software Developer</address>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
