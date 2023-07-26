import React from 'react';
import Post from "../post/Post";
import { ContentProps } from '@/types/types';

const Content: React.FC<ContentProps> = ({ posts }) => {
  return (
    <div className="flex items-center flex-col m-12">
      {posts.map((post, index) => {
        return <Post post={post} key={index} />
      })}
    </div>
  );
};

export default Content;