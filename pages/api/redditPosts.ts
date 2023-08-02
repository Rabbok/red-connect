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
      `https://oauth.reddit.com/r/${subreddit}/hot.json?limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (response.status !== 200) {
      console.error(`Failed to fetch posts. Status code: ${response.status}`);
      return []; // Return an empty array when there's an error
    }

    const responseData = response.data;

    const posts: PostType[] = responseData.data.children.map((post: any) => {
      const contentData = post.data;

      // Get the post's publication date (created_utc) and convert it to a string
      const publicationDate = new Date(contentData.created_utc * 1000).toISOString();

      // Construct the post object with the link property
      const postObject: PostType = {
        title: contentData.title,
        score: contentData.score,
        author: contentData.author,
        commentsCount: contentData.num_comments,
        publicationDate: publicationDate.slice(0, 10),
        link: `https://www.reddit.com${contentData.permalink}`,
      };

      return postObject;
    });

    return posts;
  } catch (error: any) {
    console.error('Error while fetching or processing data:', error);
    return []; 
  }
};

export default getPosts;