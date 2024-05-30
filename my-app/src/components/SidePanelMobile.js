import React from 'react';
import SidePanelContent from "./SidePanelContent";

const SidePanelMobile = () => {
    return (
        <div className=" lg:hidden min-w-fit h-full w-64 mx-6 mt-4">
            <SidePanelContent/>
        </div>
    );
};

export default SidePanelMobile;
