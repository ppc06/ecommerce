import React from 'react';
import { ChevronRight } from '@material-ui/icons';

export default ({ breadcrumb, pageTitle }) => (
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
    {
      pageTitle && <span>{pageTitle}</span>
    }
  </div>
);