import Image from "next/image";

const Post = () => {
  return (
    <div className="rounded-lg border border-black w-3/4">
      <div className="flex items-center">
        <p className="text-xs  py-2 px-4 w-1/4 h-full text-center text-gray-400 font-bold border-r border-black">Posted by <span className="text-red">Author</span></p>
        <p className="text-xs py-2 px-4 w-3/4 h-full text-center">Text</p>
      </div>

      <div className="w-full border-t border-b border-black">
        <Image className="mx-auto my-2 w-auto" priority={true} src="/img/1200477.jpg" alt="Image description" height={800} width={800} />
      </div>

      <div className="flex justify-between py-1">
        <div className="flex items-center">
          <Image className="rotate-180 cursor-pointe mx-2 w-auto" src="/img/Arrow.png" alt="Image description" height={15} width={15} />
          <p className="font-bold text-gray-400 mx-2 text-xs">12.6k</p>
          <Image className="cursor-pointer mx-2 w-auto" src="/img/Arrow.png" alt="Image description" height={15} width={15} />

          <Image className="cursor-pointer mx-2 w-4" src="/img/comment.png" alt="Image description" height={25} width={25} />

          <p className="cursor-pointer text-base"></p>
        </div>

        <p className="text-gray-400 font-bold text-xs mx-2"><span className="text-red">7 days</span> ago</p>

      </div>
    </div>
  );
};

export default Post;
