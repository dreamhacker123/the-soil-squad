import React, { FC } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


interface SkeletonBarProps {
    width?: string | number;
    height?: string | number;
    className?: string;
    count?: number;
    duration?: number;
}

export const SkeletonBar: FC<SkeletonBarProps> = ({
    width,
    height,
    count,
    duration = 1,
    className=""
}) => {
    return (
        <Skeleton
            duration={duration}
            width={width}
            height={height}
            count={count}
            className={`${className} opacity-20`}
        />
    );
};

export default SkeletonBar;
