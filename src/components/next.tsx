import React, {useState} from 'react';
import { Button } from 'antd'; 
import { useMenus} from 'docz';
import { getPreviousAndNextUrls } from '../utils';



const nextButtons = () => {
  const menus = useMenus();
  const [prevUrl, nextUrl] = getPreviousAndNextUrls(menus);
  console.log([prevUrl, nextUrl]);
  return(
    <> 
      {prevUrl && 
        <a href={prevUrl} className="ant-btn">
           Prev
        </a>
      }
      {
        nextUrl &&
        <a href={nextUrl} className="ant-btn">
          Next
        </a>
      }
    </>
  )
}

export default nextButtons;

