import React, { useEffect, useState } from "react";
import { ProfesorData } from "../custom-hooks/useMembers";
import { ProfessorSectionLoader } from "./ProfessorSectionLoader";
import { getImageId } from "../utils";

const userDummy = require("../public/userDummy.jpg");
const linkedInLogo = require("../public/linkedIn.png");

export const ProfessorSection = ({
  professorData,
  isLoading,
}: {
  professorData?: ProfesorData[];
  isLoading: Boolean;
}): JSX.Element => {
  const [imageId, setImageId] = useState<string | undefined>(userDummy);
  const [profName, setProfName] = useState<string>("Prof...");
  const [subject, setSubject] = useState<string>("Funda...");
  const [linkedIn, setLinkedIn] = useState<string | undefined>();

  useEffect(() => {
    if (professorData && professorData[0]) {
      setImageId(getImageId(professorData[0].image));
      setProfName(professorData[0].name);
      setSubject(professorData[0].subject);
      setLinkedIn(professorData[0].linkedIn);
    } else {
      setImageId(userDummy);
    }
  }, [professorData]);

  return (
    <div className="flex w-full justify-center my-8">
      <div className="flex flex-col lg:flex-row md:items-center my-5 shadow-md w-2/3 text-center">
        {isLoading ? (
          <ProfessorSectionLoader />
        ) : (
          <>
            <div className="basis-1/2">
              <img alt="professor-photo" className="w-full h-full lg:w-3/4 aspect-square" src={imageId} />
            </div>
            <div className="basis-1/2 py-8 text-center">
              <h1 className="opacity-70 text-3xl md:text-5xl mb-2">Our Professor</h1>
              <h1 className="profName text-4xl md:text-5xl">{profName}</h1>
              <h1 className="subject text-xl md:text-3xl opacity-70 capitalize">
                {subject}
              </h1>
              <a className="linkedIn flex justify-center mt-6" href={linkedIn}>
                <img className="h-5" src={linkedInLogo} />
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
