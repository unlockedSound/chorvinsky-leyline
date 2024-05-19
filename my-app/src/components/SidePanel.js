import React from 'react';

const SidePanel = () => {
    return (
        <div className=" hidden lg:block min-w-fit sticky top-0 h-full bg-gray-100 w-64 overflow-y-auto">
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
                </ul>
            </div>
        </div>
    );
};

export default SidePanel;
