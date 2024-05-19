import React from 'react';

const SidePanelMobile = () => {
    return (
        <div className=" lg:hidden min-w-fit h-full w-64 mx-auto mt-4">
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-4">Posts</h2>
                <ul className="space-y-2">
                    <li>
                        <a href="#AlcernsLighthouse" className="text-blue-600 hover:underline">The Mists of Alcern's
                            Lighthouse</a>
                    </li>
                    <li>
                        <a href="#FlowerSorcerer" className="text-blue-600 hover:underline">Legend of the Flower
                            Sorcerer</a>
                    </li>
                    <li>
                        <a href="#OrthiAndTheOni" className="text-blue-600 hover:underline">Orthi and the Oni</a>
                    </li>
                    <li>
                        <a href="#TheTwoStorytellers" className="text-blue-600 hover:underline">The Two Storytellers</a>
                    </li>
                    <li>
                        <a href="#EnilsCoin" className="text-blue-600 hover:underline">Enil's Coin</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SidePanelMobile;
