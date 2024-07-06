import React from "react";

import { Activity } from "../custom-hooks/useMembers";
import { ActivityCard } from "./ActivityCard";
import { ActivitySectionLoader } from "./ActivitySectionLoader";



export const ActivitySection = ({isLoading,activities}:{isLoading:boolean;activities:Activity[]}):JSX.Element=>{

    return (
            <div className="flex flex-col my-10 items-center overflow-x-hidden justify-center text-center">
                <div className="flex text-5xl md:text-6xl lg:text-8xl w-full mb-5 opacity-70 justify-center capitalize"> 
                    Our activities
                </div>
                <div className="flex flex-row flex-wrap my-4 justify-center gap-x-6 gap-y-8 w-3/4">
                        {
                            !isLoading?(
                                (activities:Activity[])=>
                                {
                                    if(activities.length){
                                        return activities.map((eachActivity)=>{
                                            return(
                                                <ActivityCard activity={eachActivity} />
                                            )
                                        })
                                    }else{
                                        return(
                                            <div className="my-8 opacity-50 text-xl">No Activity Found</div>
                                        )
                                    }
                                }
                                )(activities)
                            :<ActivitySectionLoader />
                        }
                </div>
            </div>
    )
}