import React, { useState, useEffect } from 'react';

const posts = [
    {
        'name': 'post1',
        'post': 'this is my message that should display on th screen! These are my thoughts and stuff...'
    },
    {
        'name': 'post2',
        'post': 'this is my message that should display on th screen! These are my thoughts and stuff...'
    },
    {
        'name': 'post3',
        'post': 'this is my message that should display on th screen! These are my thoughts and stuff...'
    },
    {
        'name': 'post4',
        'post': 'this is my message that should display on th screen! These are my thoughts and stuff...'
    },
    {
        'name': 'post5',
        'post': 'this is my message that should display on th screen! These are my thoughts and stuff...'
    },

]
export default function Blog() {

    const [theP, settheP] = useState(posts);

    useEffect(() => {
        settheP(posts);

    }, [])
    // need to set this up to view a user or admin so that it allows Chiara to post a new or remove or edit a blog.
    console.log(theP);
    return (
        <div>
            {theP.map((each) => (
                <BlogEach key={each.name} each={each} />
            ))}
        </div>
    );
}

export function BlogEach({ each }) {
    const { name, post } = each;

    return (
        <>
            <h2>{name}</h2>
            <p>{post}</p>
        </>
    )
}