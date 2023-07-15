import axios from 'axios';

interface Post {
  title: string;
  score: number;
  author: string;
  commentsCount: number;
  content: string;
}

const getPosts = async (subreddit: string, limit: number): Promise<Post[]> => {
  try {
    const response = await axios.get(`https://www.reddit.com/r/${subreddit}/hot.json?limit=${limit}`);

    const posts: Post[] = response.data.data.children.map((post: any) => ({
      title: post.data.title,
      score: post.data.score,
      author: post.data.author,
      commentsCount: post.data.num_comments,
      content: post.data.selftext,
    }));

    return posts;
  } catch (error) {
    console.error(error);
    throw new Error('Something went wrong.');
  }
};

export default getPosts;