import React from 'react';

import SkeletonBar from './SkeletonBar';

export const MembersSectionLoader = ():JSX.Element=>{

    return(
        <div className="grid grid-cols-4 gap-4 w-3/4">

<SkeletonBar width={150} height={200} />
<SkeletonBar width={150} height={200} />
<SkeletonBar width={150} height={200} />
<SkeletonBar width={150} height={200} />
       </div>
    )
}