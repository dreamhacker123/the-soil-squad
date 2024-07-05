import React from 'react';
import { MembersSection } from '../components/MembersSection';
import { Footer } from '../components/Footer';
import { useMembers } from '../custom-hooks/useMembers';
import { ProfessorSection } from '../components/ProfessorSection';
import { ActivitySection } from '../components/ActivitySection';

const videoBg = require("../public/video_bg_2.mp4");
const videoBg2 = require("../public/video_bg_3.mp4");


export const HomePage = ():JSX.Element=>{

    const {data:membersData, isLoading } = useMembers();
    

    return (

        <div className="flex flex-col">
                <div className="flex">
                <video className="video-bg mb-8" loop autoPlay muted playsInline><source src={videoBg} type="video/mp4" /></video>
                </div>
                <ActivitySection isLoading={isLoading} activities={membersData?.data.activities||[]}/>
                <div className="flex mt-8">
                <video className="video-bg-2" loop autoPlay muted playsInline><source src={videoBg2} type="video/mp4" /></video>
                </div>
                <ProfessorSection isLoading={isLoading} professorData={membersData?.data.professor} />

                <MembersSection isLoading={isLoading} membersData={membersData?.data.members} />
                <Footer />

        </div>
        
    )
}