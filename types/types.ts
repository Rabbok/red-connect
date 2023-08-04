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

interface RootState {
    search: {
        searchQuery: string;
    };
    data: {
        dataState: PostType[];
    }
}

interface Filter {
    filterState: 'best' | 'hot' | 'new',
}

export type { ActionType, PostType, HomeProps, LayoutProps, ContentProps, RootState, Filter }