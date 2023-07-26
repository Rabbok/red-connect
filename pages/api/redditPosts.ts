import { PostType } from '@/types/types';
import axios, { AxiosResponse } from 'axios';
import { MediaData } from '@/types/types';

const clientId = 'rmvPmeRsnI8jF0hwCC_I0Q';
const clientSecret = 'rEWO2eYfjvp7Lvhu1kCSID_5fPMtBg';
const basicAuth = btoa(`${clientId}:${clientSecret}`);
const apiUrl = 'https://www.reddit.com/api/v1/';

async function getAccessToken(): Promise<string> {
  try {
    const response = await fetch('https://www.reddit.com/api/v1/access_token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basicAuth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Error while fetching access token:', error);
    throw new Error('Failed to get access token.');
  }
}

const getPosts = async (subreddit: string, limit: number): Promise<PostType[]> => {
  try {
    const accessToken = await getAccessToken();
    const response: AxiosResponse<any> = await axios.get(
      ` https://oauth.reddit.com/r/${subreddit}/hot.json?limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (response.status !== 200) {
      throw new Error(`Failed to fetch posts. Status code: ${response.status}`);
    }

    const responseData = response.data;

    const posts: PostType[] = responseData.data.children.map((post: any) => {
      const contentData = post.data;
      let mediaData: MediaData | null = null; // Initialize mediaData to null

      // Check if the post contains media (image or video)
      if (contentData.media && contentData.media.reddit_video) {
        // Handle Reddit hosted videos
        mediaData = {
          type: 'video',
          url: contentData.media.reddit_video.fallback_url,
        };
      } else if (contentData.preview && contentData.preview.images[0].source.url) {
        // Handle images
        mediaData = {
          type: 'image',
          url: contentData.preview.images[0].source.url,
        };
      }

      return {
        title: contentData.title,
        score: contentData.score,
        author: contentData.author,
        commentsCount: contentData.num_comments,
        media: mediaData, // Pass the media data object
      };
    });

    return posts;
  } catch (error: any) {
    console.error('Error while fetching data:', error);
    throw new Error(`Something went wrong: ${error.message}`);
  }
};

export default getPosts;