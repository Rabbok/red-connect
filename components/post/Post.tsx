import Image from "next/image";
import { useDispatch } from "react-redux";
import { getPostsAction } from "../store/featue/posts";
import { PostType } from "@/types/types";
import NextLink from 'next/link';

const Post = (props: { post: PostType }) => {
  const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    console.log(props.post);
  };

  return (
    <div className="rounded-lg border border-black w-3/4 bg-white m-2" onClick={handleClick}>
      <div className="flex items-center border-b border-black">
        <p className="text-xs py-2 px-4 w-1/4 h-full text-center text-gray-400 font-bold border-r border-black">Posted by <NextLink href={`https://www.reddit.com/user/${props.post.author}/`} className="text-red" target="_blank" passHref>{props.post.author}</NextLink></p>
        <p className="text-xs py-2 px-4 w-3/4 h-full text-center">{props.post.title}</p>
      </div>

      {props.post.media ? (
        <div className="w-full border-t border-black">
          <Image className="mx-auto my-2 w-auto" priority={true} src={props.post.media} alt="Image description" height={800} width={800} />
        </div>
      ) : null}

      <div className="flex justify-between py-1">
        <div className="flex items-center">
          <Image className="rotate-180 cursor-pointer mx-2 w-auto" src="/img/Arrow.png" alt="Image description" height={15} width={15} />
          <p className="font-bold text-gray-400 mx-2 text-xs">{props.post.score}</p>
          <Image className="cursor-pointer mx-2 w-auto" src="/img/Arrow.png" alt="Image description" height={15} width={15} />

          <Image className="cursor-pointer mx-2 w-4" src="/img/comment.png" alt="Image description" height={25} width={25} />

          <p className="cursor-pointer text-base">{props.post.commentsCount}</p>
        </div>

        <p className="text-gray-400 font-bold text-xs mx-2"><span className="text-red">7 days</span> ago</p>
      </div>
    </div>
  );
};

export default Post;