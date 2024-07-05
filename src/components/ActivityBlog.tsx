import React from "react";
import { Activity } from "../custom-hooks/useMembers";
import { getImageId } from "../utils";

const pptlogo = require("../public/pptlogo.webp");

const ContentCards = ({
  title,
  description,
}: {
  title: string;
  description: string;
}): JSX.Element => {
  return (
    <div className="flex flex-col w-[80%] my-12">
      <div className="flex text-4xl about-activity justify-start opacity-60">
        <i><u>{title}</u></i>
      </div>
      <div className="flex w-full my-4 text-base font-sans opacity-85" style={{textAlign:"justify"}}>
        <p><i>{description}</i></p>
      </div>
    </div>
  );
};

const ImagesCard = ({
    title,
    images,
  }: {
    title: string;
    images: string[];
  }): JSX.Element => {
    return (
      <div className="flex flex-col w-[80%] my-12">
        <div className="flex text-4xl about-activity justify-start opacity-60">
          <i><u>{title}</u></i>
        </div>
        <div className="flex w-full flex-row flex-wrap my-4 text-base gap-4 justify-center font-sans opacity-85" style={{textAlign:"justify"}}>
          {
            images[0].length?
            images.map((eachLink)=><div className="basis-1/4">
                    <img width={300} alt="event-images" src={getImageId(eachLink)} />
                </div>):<>No Images Uploaded</>
          }
        </div>
      </div>
    );
  }

export const ActivityBlog = ({
  activity,
}: {
  activity: Activity[];
}): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      {activity.length ? (
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-4 w-full cover-photo-bg">
            <div className="col-span-1">
              <img
                className="cover-photo"
                width={300}
                alt="project-cover"
                src={getImageId(activity[0].coverImage)}
              />
            </div>

            <div className="flex col-span-2 justify-between text-center items-center justify-items-center align-middle">
              <div className="text-6xl bg-white px-3">{activity[0].title}</div>
            </div>
          </div>

          <div className="flex justify-start items-center flex-col col-span-12 w-full">
            <div className="flex justify-center">
            <button disabled={!activity[0].pptLink
              } className="" onClick={()=>{window.open(activity[0].pptLink)}}><span className="viewPptButton flex items-center">View PPT <img width={80} alt="pptLink" src={pptlogo} /></span></button>
            </div>
          <ContentCards title="About" description={activity[0].about} />
          <ContentCards
            title="Description"
            description={activity[0].description}
          />
  
                <ImagesCard title="Activity Photos" images={activity[0].images} />

          </div>
          
        </div>
      ) : (
        <div className="text-6xl mt-4 flex w-full"><p>404: No Activity Found</p></div>
      )}
    </div>
  );
};
