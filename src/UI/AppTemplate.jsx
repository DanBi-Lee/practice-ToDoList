import React from 'react';
import style from './AppTemplate.module.css';
import "../App.css";

function AppTemplate ({children}) {
  return (
      <div className={style.app}>
          {children}
      </div>
  );
}

export default AppTemplate;