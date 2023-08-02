import Image from "next/image";
import { PostType } from "@/types/types";
import NextLink from 'next/link';

const Post = (props: { post: PostType }) => {
  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    console.log(props.post.link);
  }
  
  return (
    <div className="rounded-lg border border-black w-3/4 bg-white m-2" onClick={handleClick}>
      <div className="flex items-center border-b border-black">
        <p className="text-xs py-2 px-4 w-1/4 h-full text-center text-gray-400 font-bold border-r border-black">Posted by <NextLink href={`https://www.reddit.com/user/${props.post.author}/`} className="text-red" target="_blank" passHref>{props.post.author}</NextLink></p>
        <NextLink className="text-xs py-2 px-4 w-3/4 h-full text-center"  href={props.post.link} target="_blank" passHref>{props.post.title}</NextLink>
      </div>

      <div className="flex justify-between py-1">
        <div className="flex items-center">
          <Image className="rotate-180 mx-2 w-auto select-none" src="/img/Arrow.png" alt="Image description" height={15} width={15} />
          <p className="font-bold text-gray-400 mx-2 text-xs select-none">{props.post.score}</p>
          <Image className=" mx-2 w-auto select-none" src="/img/Arrow.png" alt="Image description" height={15} width={15} />

          <Image className="mx-2 w-4 select-none" src="/img/comment.png" alt="Image description" height={25} width={25} />

          <p className="text-base select-none">{props.post.commentsCount}</p>
        </div>

        <p className="text-gray-400 font-bold text-xs mx-2">posted <span className="text-red">{props.post.publicationDate}</span></p>
      </div>
    </div>
  );
};

export default Post;