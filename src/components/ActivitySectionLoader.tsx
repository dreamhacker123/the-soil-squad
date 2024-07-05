import React from "react";
import SkeletonBar from "./SkeletonBar";

export const ActivitySectionLoader = ():JSX.Element=>{
    return(
        <SkeletonBar width={1000} height={300} />
    )
}