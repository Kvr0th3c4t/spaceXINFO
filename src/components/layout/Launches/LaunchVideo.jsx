import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export const LaunchVideo = ({ vidURLs }) => {
    const getYouTubeVideoId = (url) => {
        const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    const firstVideo = vidURLs?.[0];
    const videoId = (firstVideo && getYouTubeVideoId(firstVideo.url)) || "921VbEMAwwY";
    const videoTitle = firstVideo?.title || "Video del Lanzamiento";

    return (
        <div className="w-6xl aspect-video rounded-2xl overflow-hidden">
            <LiteYouTubeEmbed
                id={videoId}
                title={videoTitle}
                params="controls=1&modestbranding=1&rel=0"
            />
        </div>
    );
};