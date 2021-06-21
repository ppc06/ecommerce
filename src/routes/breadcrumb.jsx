import React from 'react';
import { ChevronRight } from '@material-ui/icons';

export default ({ breadcrumb }) => (
  <div className={'breadcrumb'}>
      { breadcrumb.map((r) => {
          if(r.url){
            return (<>
              <a href={r.url}><span>{r.title}</span></a>
              <ChevronRight />
            </>);
          } else {
              return (<span>{r.title}</span>);
          }
      })
      }
  </div>
);