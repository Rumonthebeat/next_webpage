import React from 'react';

const TabBotton = ({ selectTab, active, children }) => {
  return (
    <button
      onClick={selectTab}
      className={`mr-3 font-semibold border-b ${active ? 'text-white border-white' : 'text-[#ADB7BE] border-transparent'} hover:text-white`}
    >
      {children}
    </button>
    
  );
};

export default TabBotton;
