import React from 'react'
import Post from './Post'
import SortSettings from './SortSettings'

export default function PostList() {


    const posts = [
        {
            id: 1,
            image: "https://www.talkchelsea.net/wp-content/uploads/2022/10/ruben-loftus-cheek-chelsea-400x240.jpg",
            tag: "OPINIONS",
            title: "Chelsea will surely have to sell some homegrown players",
            text: "Chelsea could still face Financial Fair Play issues this summer if they fail to qualify for...",
            author: "Simon Philips",
            date: "17 FEB, 2023"
        },
        {
            id: 2,
            image: "https://www.talkchelsea.net/wp-content/uploads/2018/06/Borussia-Dortmund-400x240.jpg",
            tag: "OPINIONS",
            title: "Looking ahead to Dortmund",
            text: "Chelsea face Borussia Dortmund in the last 16 of the Champions League this evening in leg...",
            author: "Simon Philips",
            date: "15 FEB, 2023"
        },
        {
            id: 3,
            image: "https://www.talkchelsea.net/wp-content/uploads/2022/12/stamford-bridge-chelsea-stadium-400x240.jpg",
            tag: "NEWS",
            title: "Chelsea further from Champions League race than ever",
            text: "January is over, the transfer window is closed, and Chelsea will now have to start working...",
            author: "Barry Bridges",
            date: "14 FEB, 2023"
        },
        {
            id: 4,
            image: "https://www.talkchelsea.net/wp-content/uploads/2023/02/raheem-sterling-vs-west-ham-united-400x240.jpg",
            tag: "OPINIONS",
            title: "West Ham game a must win if Chelsea want UCL",
            text: "I think most Chelsea fans have accepted that we will not be finishing in the top...",
            author: "Simon Philips",
            date: "9 FEB, 2023"
        },
        {
            id: 5,
            image: "https://www.talkchelsea.net/wp-content/uploads/2022/10/aubameyang-chelsea-400x240.jpg",
            tag: "OPINIONS",
            title: "Chelsea could have answer for lack of goals",
            text: "Chelsea have lacked goals and goal scorers recently, that has been clear to see. And some...",
            author: "Simon Philips",
            date: "8 FEB, 2023"
        },
    ]



    return (
        <div className='md:col-span-2 flex flex-col gap-2'>
            <SortSettings />
            <div className='flex flex-col'>
                {posts.map((post) => (
                    <Post post={post} />
                ))}
            </div>

        </div>
    )
}
