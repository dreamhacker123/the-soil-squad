import React from "react";
import SkeletonBar from "./SkeletonBar";

export const ProfessorSectionLoader=():JSX.Element=>{
    return (
        <div className="flex w-full mx-9">
            <SkeletonBar width={800} height={300} />
        </div>
    )
}