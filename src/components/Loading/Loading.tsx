import React from "react";
import "./loading.scss";

interface LoadingProps {
    fullscreen?: boolean;
    size?: number;
}

const loaderSize: number = 200;
const loaderThickness: number = 10;

const containerStyles: React.CSSProperties = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    backgroundColor: "#eee",
    zIndex: 99999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

function calculateStrokeSize(loaderSize: number): number {
    return Math.ceil((loaderSize - (40 / 100) * loaderSize) / 10);
}

const Loading: React.FunctionComponent<LoadingProps> = (props: LoadingProps) => {
    if (props.fullscreen !== undefined) {
        if (!props.fullscreen) {
            containerStyles.position = "absolute";
        } else {
            containerStyles.position = "fixed";
        }
    }
    return (
        <div
            className="loading-container"
            style={{
                ...containerStyles,
                position: props.fullscreen !== undefined ? (!props.fullscreen ? "absolute" : "fixed") : "fixed"
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width={props.size || loaderSize} height={props.size || loaderSize}>
                <defs>
                    <filter id="blur" colorInterpolationFilters="sRGB" x="-1" y="-1" width="500%" height="500%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                    </filter>
                    <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ad00ad" />
                        <stop offset="100%" stopColor="#65b4f5" />
                    </linearGradient>
                </defs>
                <circle
                    x="50%"
                    y="50%"
                    r="40%"
                    stroke="url(#linear)"
                    strokeWidth={calculateStrokeSize(props.size || loaderSize)}
                    fill="transparent"
                    filter="url(#blur)"
                />
                <circle
                    x="50%"
                    y="50%"
                    r="40%"
                    stroke="url(#linear)"
                    strokeWidth={calculateStrokeSize(props.size || loaderSize)}
                    fill="transparent"
                />
            </svg>
        </div>
    );
};

export default Loading;
