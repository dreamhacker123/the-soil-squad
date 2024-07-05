import { useQuery, UseQueryResult } from "react-query";
import { apiClient } from "../api-client/api-client";
import { MEMBERS_API } from "../constants/endpoints";
import { QUERY_KEYS } from "../constants/query-keys";


export interface Activity{
    id:number;
    date:string;
    title: string;
    about:string;
    coverImage:string;
    description: string;
    images:string[];
    pptLink:string;
}
export interface ProfesorData{
    name: string;
    subject: string;
    linkedIn:string;
    image?:string;
}
export interface MembersData{
    name: string;
    position?: string;
    email?: string;
    phone?: string;
    image?:string;
}
export interface MemberDataResponse{
    data:{
        members: MembersData[];
        professor:ProfesorData[];
        activities:Activity[];
    }
}


const fetchMembers = async():Promise<MemberDataResponse>=>{
    return apiClient<MemberDataResponse>({
        urlEndpoint: MEMBERS_API
    })
}

export const useMembers = (

): UseQueryResult<MemberDataResponse, Error> => {
    return useQuery<MemberDataResponse, Error>(
        [QUERY_KEYS.membersData],
        () => fetchMembers(),
        { retry: false, enabled : true}
    );
};