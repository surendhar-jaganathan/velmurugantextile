import React, { Suspense } from 'react';
import { memo } from 'react';
const ViewLoader = ({componentName})=>{   
    const WinComponent = React.lazy(() => import(`./pages/${componentName}`));   
    return <Suspense fallback={<div className="fall-back-ex">Loading...</div>}>               
               <WinComponent />
           </Suspense>
}
export default memo(ViewLoader);