# Song Voting Queue

This is a **Song Voting Queue** web application built with **Next.js**. Users can submit YouTube links to add videos to a collaborative queue, vote on them, and view the most popular videos in the playlist. The app allows for seamless video queue management and voting in a fun, interactive way.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Features

- **YouTube Link Submission**: Users can paste YouTube video links to add them to the playlist.
- **Video Voting**: Each video in the queue has upvote and downvote buttons that affect the video’s rank in the queue.
- **Now Playing**: Shows the currently playing video at the top of the app, automatically advancing to the next video when finished.
- **Real-time Queue Updates**: The app updates the queue dynamically as votes are cast and videos are played.
- **Shareable Links**: Users can copy the page URL to invite others and contribute to the voting process.

## Technologies Used

- **Next.js**: The React framework used for building the application.
- **Tailwind CSS**: For styling the app with utility-first CSS.
- **Axios**: To handle API requests for fetching and posting video data.
- **Lucide Icons**: For icons such as thumbs up, thumbs down, and play.
- **React Toastify**: For toast notifications on user actions.
- **YouTube API**: (assumed) for video management and retrieving YouTube video data.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive tutorial to get started with Next.js.

