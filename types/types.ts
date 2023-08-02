interface ActionType {
    type: string,
    payload: any,
}

interface MediaData {
    type: string,
    url: string,
}

interface PostType {
    title: string,
    score: number,
    author: string,
    commentsCount: number,
    publicationDate: string,
    link: string,
}
  
interface HomeProps {
    posts: PostType[],
}

interface LayoutProps {
    children: React.ReactNode,
}

interface ContentProps {
    posts: PostType[],
}

interface MediaData {
    type: string,
    url: string,
}

interface RootState {
    search: {
        searchQuery: string;
    };
    data: {
        dataState: PostType[];
    }
}

export type { ActionType, PostType, HomeProps, LayoutProps, ContentProps, MediaData, RootState }