import React from "react";
import { Activity } from "../custom-hooks/useMembers";
import { getImageId } from "../utils";
import { useNavigate } from "react-router";

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
      <div className="flex text-2xl md:text-4xl about-activity justify-start opacity-60">
        <i>
          <u>{title}</u>
        </i>
      </div>
      <div
        className="flex w-full my-4 text-xs md:text-base font-sans opacity-85"
        style={{ textAlign: "justify" }}
      >
        <p>
          <i>{description}</i>
        </p>
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
      <div className="flex text-2xl md:text-4xl about-activity justify-start opacity-60">
        <i>
          <u>{title}</u>
        </i>
      </div>
      <div
        className="flex w-full flex-col items-center md:flex-row flex-wrap my-4 text-base gap-4 justify-center font-sans opacity-85"
        style={{ textAlign: "justify" }}
      >
        {images[0].length ? (
          images.map((eachLink) => (
            <div className="basis-1/4">
              <img className="h-full" alt="event-images" src={getImageId(eachLink)} />
            </div>
          ))
        ) : (
          <>No Images Uploaded</>
        )}
      </div>
    </div>
  );
};

export const ActivityBlog = ({
  activity,
}: {
  activity: Activity[];
}): JSX.Element => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full items-center justify-center">
      {activity.length ? (
        <div className="flex flex-col w-full">
          <svg
                  className="h-8 w-8 text-white absolute top-3 right-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  onClick={()=>navigate("/")}
                >
                  {" "}
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />{" "}
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
          <div className="flex flex-row w-full cover-photo-bg">
            <div className="mr-3 justify-center">
              <img
                className="cover-photo w-3/4 shadow-md"
                alt="project-cover"
                src={getImageId(activity[0].coverImage)}
              />
            </div>

            <div className="flex justify-between text-center items-center justify-items-center align-middle">
              <div className="text-4xl md:text-6xl bg-white px-3">
                {activity[0].title}
              </div>
            </div>
          </div>

          <div className="flex justify-start items-center flex-col col-span-12 w-full">
            <div className="flex justify-center">
              <button
                disabled={!activity[0].pptLink}
                className=""
                onClick={() => {
                  return activity[0].pptLink.length
                    ? window.open(activity[0].pptLink)
                    : undefined;
                }}
              >
                <span
                  className={`viewPptButton ${
                    activity[0].pptLink.length ? "" : "grayscale"
                  } shadow-md w-fit flex items-center text-2xl justify-around hover:animate-pulse`}
                >
                  {activity[0].pptLink.length ? "View Ppt" : "Ppt unavailable"}
                  <img className="h-10" alt="pptLink" src={pptlogo} />
                </span>
              </button>
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
        <div className="text-6xl mt-4 flex w-full justify-center opacity-70">
          <p>404: No Activity Found</p>
        </div>
      )}
    </div>
  );
};
