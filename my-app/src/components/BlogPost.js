import React from 'react';
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid';

const BlogPost = ({ title, content, photoSrc, photoAlt, noteText, id}) => {
    return (
        <article className="bg-white px-6 py-4 lg:py-8 rounded-lg shadow- my-4 divide-y divide-dashed dark:bg-gray-800" id={id}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
            {photoSrc && (
                <img className="mt-4 rounded-lg" src={photoSrc} alt={photoAlt} />
            )}
            <p className="mt-4 pt-4 text-lg text-gray-700 dark:text-yellow-50">{content}</p>
<p className="italic mt-4 pt-4 text-lg text-gray-700 dark:text-yellow-50">{noteText}</p>
        </article>
    );
};

export default BlogPost;
