interface ActionType {
    type: string,
    payload: any,
}

interface PostType {
    title: string;
    score: number;
    author: string;
    commentsCount: number;
    media: any;
}

interface HomeProps {
    posts: PostType[];
}

interface LayoutProps {
    children: React.ReactNode;
    posts: PostType[];
}

interface ContentProps {
    posts: PostType[];
}

interface MediaData {
    type: string;
    url: string;
  }

export type { ActionType, PostType, HomeProps, LayoutProps, ContentProps, MediaData }