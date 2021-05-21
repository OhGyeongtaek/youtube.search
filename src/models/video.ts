interface VideoSnippet {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: string;
    title: string;
}

interface VideoId {
    kind: string;
    videoId: string
}

export default interface Video {
    etag: string;
    kind: string;
    id: VideoId;
    snippet: VideoSnippet;
}
