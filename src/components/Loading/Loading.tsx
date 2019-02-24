import React from "react";
import "./loading.scss";

interface LoadingProps {
    fullscreen?: boolean;
}

const loaderSize: number = 200;
const loaderThickness: number = 10;

const Loading: React.FunctionComponent<LoadingProps> = (props: LoadingProps) => {
    return (
        <div className="loading-container">
            <svg xmlns="http://www.w3.org/2000/svg" width={loaderSize} height={loaderSize}>
                <defs>
                    <filter id="blur">
                        <feGaussianBlur stdDeviation="5" />
                    </filter>
                    <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ad00ad" />
                        <stop offset="100%" stopColor="#65b4f5" />
                    </linearGradient>
                </defs>
                <circle
                    cx="50%"
                    cy="50%"
                    r="40%"
                    stroke="url(#linear)"
                    strokeWidth={loaderThickness}
                    fill="transparent"
                    filter="url(#blur)"
                />
                <circle
                    cx="50%"
                    cy="50%"
                    r="40%"
                    stroke="url(#linear)"
                    strokeWidth={loaderThickness}
                    fill="transparent"
                />
            </svg>
        </div>
    );
};

export default Loading;
