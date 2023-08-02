import React from 'react';
import Post from "../post/Post";
import { useSelector } from 'react-redux';
import { PostType } from '@/types/types';

const Content: React.FC = () => {
  const dataState = useSelector((state: any) => state.data.dataState);

  if (!Array.isArray(dataState) || dataState.length === 0) {
    return <div className="flex items-center flex-col m-12">Posts not found</div>;
  }

  return (
    <div className="flex items-center flex-col m-12">
      {dataState.map((post: PostType, index: number) => {
        return <Post post={post} key={index} />;
      })}
    </div>
  );
};

export default Content;