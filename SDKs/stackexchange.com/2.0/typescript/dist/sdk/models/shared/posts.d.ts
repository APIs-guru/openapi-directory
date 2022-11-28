import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostsLastEditorBadgeCounts extends SpeakeasyBase {
    bronze?: number;
    gold?: number;
    silver?: number;
}
export declare class PostsLastEditor extends SpeakeasyBase {
    acceptRate?: number;
    badgeCounts?: PostsLastEditorBadgeCounts;
    displayName?: string;
    link?: string;
    profileImage?: string;
    reputation?: number;
    userId?: number;
    userType?: string;
}
export declare class PostsOwnerBadgeCounts extends SpeakeasyBase {
    bronze?: number;
    gold?: number;
    silver?: number;
}
export declare class PostsOwner extends SpeakeasyBase {
    acceptRate?: number;
    badgeCounts?: PostsOwnerBadgeCounts;
    displayName?: string;
    link?: string;
    profileImage?: string;
    reputation?: number;
    userId?: number;
    userType?: string;
}
export declare class Posts extends SpeakeasyBase {
    body?: string;
    bodyMarkdown?: string;
    commentCount?: number;
    comments?: any[];
    creationDate?: number;
    downVoteCount?: number;
    downvoted?: boolean;
    lastActivityDate?: number;
    lastEditDate?: number;
    lastEditor?: PostsLastEditor;
    link?: string;
    owner?: PostsOwner;
    postId?: number;
    postType?: string;
    score?: number;
    shareLink?: string;
    title?: string;
    upVoteCount?: number;
    upvoted?: boolean;
}
