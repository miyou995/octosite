import React from 'react';

import Skeleton from '@material-ui/lab/Skeleton';


export default function BlogListLoading() {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
    <div>
        <div className="thumbnail">
            <Skeleton variant="rect" height={300}/>
        </div>
        <div className="content">
            <Skeleton variant="text"/>
            <Skeleton variant="text"/>
            <Skeleton variant="text"/>
        </div>
    </div>
</div>

  );
}