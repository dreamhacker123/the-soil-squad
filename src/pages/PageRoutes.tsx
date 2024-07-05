import React from 'react';

import {Routes,Route} from "react-router-dom";

import { HomePage } from './HomePage';
import { NotFoundPage } from './NotFoundPage';
import { ActivityPage } from './ActivityPage';


export const PageRoutes = ():JSX.Element=>{
    return (
        <Routes>
            <Route path='' element={<HomePage />}/>
            <Route path='/activities/:activityId' element={<ActivityPage />}/>
            <Route path='/*' element ={<NotFoundPage />} />
        </Routes>
    )
}