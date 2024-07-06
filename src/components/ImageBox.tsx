import React, { useEffect, useState } from "react";

import { MembersData } from "../custom-hooks/useMembers";
import { getImageId } from "../utils";

const userDummy = require("../public/userDummy.jpg")

export const ImageBox = ({data}:{data:MembersData}):JSX.Element=>{

    const [imageId, setImageId] = useState<string|undefined>(userDummy);
    useEffect(()=>{
        if(data.image){
            setImageId(getImageId(data.image));
        }else{
            setImageId(userDummy)
        }
        
    },[data]);

    return (
        
        <div className="flex flex-col justify-center image-box items-center w-2/3">
            <img className="rounded-full h-[150px]" alt="member-image" src={imageId} />
            <div className="details">
                <p className="member-name" title={data.name}>{data.name}</p>
                <p className="member-position" title={data.position}>{data.position}</p>
                <a className="member-email" href={`mailto:${data.email}`}><p>{data.email}</p></a>
                <a className="member-phone">{data.phone}</a>
            </div>
        </div>
    )
}