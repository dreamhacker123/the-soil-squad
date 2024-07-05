import React from "react";

import { MembersData } from "../custom-hooks/useMembers";
import { ImageBox } from "./ImageBox";


export const ImageBoxLayout = ({membersData}:{membersData:MembersData[]}):JSX.Element=>{
  return(
    <div className="flex flex-row flex-wrap justify-center gap-x-6 gap-y-8 w-3/4">
        {
            membersData.map((each)=>{
                return <ImageBox data={each} />
            })
        }
    </div>
  )
}