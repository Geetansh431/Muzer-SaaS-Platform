"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThumbsUpIcon, ThumbsDownIcon, Play, Share } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Video {
    id: string;
    title: string;
    upvotes: number;
    downvotes: number;
}

export default function Component() {
    const [inputLink, setInputLink] = useState("");
    const [queue, setQueue] = useState<Video[]>([
        { id: "1", title: "Awesome Song 1", upvotes: 5, downvotes: 1 },
        { id: "2", title: "Cool Music Video", upvotes: 3, downvotes: 0 },
        { id: "3", title: "Top Hit 2023", upvotes: 2, downvotes: 1 },
    ]);
    const [currentVideo, setCurrentVideo] = useState<Video | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newVideo: Video = {
            id: String(queue.length + 1),
            title: `New Song ${queue.length + 1}`,
            upvotes: 0,
            downvotes: 0,
        };
        setQueue([...queue, newVideo]);
        setInputLink("");
    };

    const handleVote = (id: string, isUpvote: boolean) => {
        setQueue((queue) =>
            queue.map((video) =>
                video.id === id
                    ? {
                        ...video,
                        upvotes: isUpvote ? video.upvotes + 1 : video.upvotes,
                        downvotes: isUpvote ? video.downvotes : video.downvotes + 1,
                    }
                    : video
            )
        );
    };

    const playNext = () => {
        if (queue.length > 0) {
            setCurrentVideo(queue[0]);
            setQueue(queue.slice(1));
        }
    };

    const handleShare = () => {
        const shareableLink = window.location.href;
        navigator.clipboard
            .writeText(shareableLink)
            .then(() => {
                toast.success("Link copied to clipboard!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch((err) => {
                console.error("Could not copy text:", err);
                toast.error("Failed to copy link. Please try again.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };

    return (
        <div className="flex flex-col min-h-screen bg-[rgb(10,10,10)] text-gray-200">
            <div className="max-w-4xl mx-auto p-4 space-y-6 w-full">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-white">Song Voting Queue</h1>
                    <Button
                        onClick={handleShare}
                        className="bg-purple-700 hover:bg-purple-800 text-white"
                    >
                        <Share className="mr-2 h-4 w-4" /> Share
                    </Button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-2">
                    <input
                        type="text"
                        placeholder="Paste YouTube Link here"
                        value={inputLink}
                        onChange={(e) => setInputLink(e.target.value)}
                        className="bg-gray-900 text-white border-gray-700 placeholder-gray-500 w-full p-2 rounded"
                    />
                    <button
                        type="submit"
                        className="w-full bg-purple-700 hover:bg-purple-800 text-white p-2 rounded"
                    >
                        Add to Queue
                    </button>
                </form>

                {inputLink && (
                    <Card className="bg-gray-900 border-gray-800 mt-4">
                        <CardContent className="p-4">
                            <img
                                src="/placeholder.svg?height=200&width=320"
                                alt="Video preview"
                                className="w-full h-48 object-cover rounded"
                            />
                            <p className="mt-2 text-center text-gray-400">Video Preview</p>
                        </CardContent>
                    </Card>
                )}
                <div className="space-y-4 mt-6">
                    <h2 className="text-2xl font-bold text-white">Now Playing</h2>
                    <Card className="bg-gray-900 border-gray-800">
                        <CardContent className="p-4">
                            {currentVideo ? (
                                <>
                                    <img
                                        src="/placeholder.svg?height=360&width=640"
                                        alt="Current video"
                                        className="w-full h-72 object-cover rounded"
                                    />
                                    <p className="mt-2 text-center font-semibold text-white">
                                        {currentVideo.title}
                                    </p>
                                </>
                            ) : (
                                <p className="text-center py-8 text-gray-400">No video playing</p>
                            )}
                        </CardContent>
                    </Card>
                    <Button
                        onClick={playNext}
                        className="w-full bg-purple-700 hover:bg-purple-800 text-white p-2 rounded"
                    >
                        <Play className="mr-2 h-4 w-4" /> Play Next
                    </Button>
                </div>
                <div className="space-y-4 mt-6">
                    <h2 className="text-2xl font-bold text-white">Upcoming Songs</h2>

                    {queue.map((video) => (
                        <Card key={video.id} className="bg-gray-900 border-gray-800">
                            <CardContent className="p-4 flex items-center space-x-4">
                                <img
                                    src={`/placeholder.svg?height=90&width=120&text=Thumbnail_${video.id}`}
                                    alt={`Thumbnail for ${video.title}`}
                                    className="w-30 h-20 object-cover rounded"
                                />
                                <div className="flex-grow">
                                    <h3 className="font-semibold text-white">{video.title}</h3>
                                    <div className="flex items-center space-x-2 mt-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleVote(video.id, true)}
                                            className="flex items-center space-x-1 bg-gray-800 text-white border-gray-700 hover:bg-gray-700"
                                        >
                                            <ThumbsUpIcon className="w-4 h-4" />
                                            <span>{video.upvotes}</span>
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleVote(video.id, false)}
                                            className="flex items-center space-x-1 bg-gray-800 text-white border-gray-700 hover:bg-gray-700"
                                        >
                                            <ThumbsDownIcon className="w-4 h-4" />
                                            <span>{video.downvotes}</span>
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
}
