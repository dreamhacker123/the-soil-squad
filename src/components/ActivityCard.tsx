import React from "react";
import { Activity } from "../custom-hooks/useMembers";
import { getImageId } from "../utils";
import { useNavigate } from "react-router";

const pptlogo = require("../public/pptlogo.webp");

export const ActivityCard = ({
  activity,
}: {
  activity: Activity;
}): JSX.Element => {
  getImageId(activity.coverImage);

  const navigate = useNavigate();

  return (
    <div
      className="activity-card basis-1/6 flex justify-center cursor-pointer shadow-md"
      onClick={(e) => {
       navigate(`activities/${activity.id}`);
        e.stopPropagation();
      }}
    >
      <div className="flex flex-col cover-image">
        <img
          className="activity-image"
          height={168}
          width={300}
          alt={`Activity-${activity.id}`}
          src={getImageId(activity.coverImage)}
        />
        <div className="flex flex-col justify-center items-center">
          <h1 className="activity-card-title">{activity.title}</h1>
          <h1
            className="activity-card-description"
            title={activity.description}
          >
            {activity.about}
          </h1>
          <h1 className="activity-card-date" title={activity.date}>
            {new Date(activity.date).toDateString()}
          </h1>
          <h1 className="activity-card-pptlink">
            <button
              disabled={!activity.pptLink}
              className="mt-2"
              onClick={() => {
                window.open(activity.pptLink);
              }}
            >
              <span className="viewPptButton flex items-center">
                <img width={40} alt="pptLink" src={pptlogo} />
              </span>
            </button>
          </h1>
        </div>
      </div>
    </div>
  );
};
