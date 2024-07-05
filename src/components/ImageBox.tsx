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
        
        <div className="image-box items-center basis-1/7">
            <img className="member-image" height={200} width={200} alt="member-image" src={imageId} />
            <div className="details">
                <p className="member-name" title={data.name}>{data.name}</p>
                <p className="member-position" title={data.position}>{data.position}</p>
                <a className="member-email" href={`mailto:${data.email}`}><p>{data.email}</p></a>
                <a className="member-phone">{data.phone}</a>
            </div>
        </div>
    )
}