import React from 'react';
import SidePanelContent from "./SidePanelContent";

const SidePanel = () => {
    return (
        <div className=" hidden lg:block min-w-fit sticky mr-4 top-0 h-full bg-gray-100 w-64 overflow-y-auto dark:bg-gray-800">
            <SidePanelContent/>
        </div>
    );
};

export default SidePanel;
