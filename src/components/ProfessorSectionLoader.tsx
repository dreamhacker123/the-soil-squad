import React from "react";
import SkeletonBar from "./SkeletonBar";

export const ProfessorSectionLoader=():JSX.Element=>{
    return (
        <div className="flex w-full mx-9 items-center jsutify-center">
            <SkeletonBar className="w-1/2" height={300} />
        </div>
    )
}