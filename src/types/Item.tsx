export interface Item {
  data: {
    title: string;
    author: string;
    is_video: boolean;
    selftext: string;
    num_comments: number;
    ups: number;
    media: {
      reddit_video: {
        bitrate_kbps: number;
        fallback_url: string;
        height: number;
        width: number;
        scrubber_media_url: string;
        dash_url: string;
        duration: number;
        hls_url: string;
        is_gif: boolean;
        transcoding_status: string;
      };
    };
  };
}
