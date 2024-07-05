import React, { useEffect, useState } from "react";
import { ProfesorData } from "../custom-hooks/useMembers";
import { ProfessorSectionLoader } from "./ProfessorSectionLoader";
import { getImageId } from "../utils";

const userDummy = require("../public/userDummy.jpg");
const linkedInLogo = require("../public/linkedIn.png")

export const ProfessorSection = ({
  professorData,
  isLoading,
}: {
  professorData?: ProfesorData[];
  isLoading: Boolean;
}): JSX.Element => {
  const [imageId, setImageId] = useState<string|undefined>(userDummy);
  const [profName, setProfName]=useState<string>("Prof...");
  const [subject, setSubject]=useState<string>("Funda...");
  const [linkedIn, setLinkedIn] = useState<string|undefined>();

  useEffect(() => {
    if (professorData && professorData[0]) {
      setImageId(
        
          getImageId(professorData[0].image)
      );
      setProfName(professorData[0].name);
      setSubject(professorData[0].subject);
      setLinkedIn(professorData[0].linkedIn);
    } else {
      setImageId(userDummy);
    }
  }, [professorData]);

  return (
    <div className="flex w-full justify-center my-8">
      <div className="grid grid-cols-4  my-5 shadow-md w-2/3 text-center">
        {isLoading ? (
          <ProfessorSectionLoader />
        ) : (
          <>
            <div className="col-span-2">
              <img width={275} src={imageId} />
            </div>
            <div className="col-span-2 py-8 text-center">
            <h1 className="opacity-70 text-3xl mb-2">Our Professor</h1>
            <h1 className="profName text-5xl">{profName}</h1>
            <h1 className="subject text-3xl opacity-70 capitalize">{subject}</h1>
            <a className="linkedIn flex justify-center mt-6" href={linkedIn}><img width={20} src={linkedInLogo} /></a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
