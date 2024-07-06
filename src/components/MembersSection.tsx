import React from "react";
import { MembersData } from "../custom-hooks/useMembers";

import { MembersSectionLoader } from "./MembersSectionLoader";

import { ImageBoxLayout } from "./ImageBoxLayout";


export const MembersSection = ({isLoading, membersData}:{isLoading:boolean, membersData?:MembersData[]}):JSX.Element=>{

    return(
        <div className="flex w-full">
            <div className="flex flex-col my-5 w-full items-center text-center">
                <div className="text-4xl md:text-6xl mb-2 w-full opacity-90">
                    Our Team
                </div>
                <div className="text-5xl md:text-7xl -mt-3 mb-12 team-name w-full">
                    The Soil Squad
                </div>
                {isLoading?<MembersSectionLoader />:<ImageBoxLayout membersData={membersData || []} />}
            </div>
        </div>
    )
}