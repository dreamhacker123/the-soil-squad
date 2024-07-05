import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Activity, useMembers } from '../custom-hooks/useMembers';
import { LoadingPage } from '../components/LoadingPage';
import { ActivityBlog } from '../components/ActivityBlog';
import { Footer } from '../components/Footer';


const filterData = (rawData:Activity[],searchId:number):{filteredData:Activity[]}=>{
    return {filteredData: rawData.length?rawData.filter((each)=>each.id==searchId):[]}
}


export const ActivityPage = ():JSX.Element=>{
    console.log("Coming to this page")
    const {activityId} = useParams();

    const [activityData, setActivityData] = useState<Activity[]>([]);

    const {data:membersData, isLoading } = useMembers();

    useEffect(()=>{
        console.log(activityId);
        if(!isNaN(Number(activityId))){
            setActivityData(filterData(membersData?.data.activities||[], Number(activityId)).filteredData)
        }else{
            setActivityData([]);
        }
    },[isLoading, activityId])




    
    return(
        <div className="flex w-full items-center justify-center">
            {
                isLoading?<LoadingPage />:<div className='flex flex-col w-full'><ActivityBlog activity={activityData} /><Footer /></div>
            }
        </div>
    )
}