import { SpeakeasyBase } from "../../../internal/utils";
export declare class CommentsOwnerBadgeCounts extends SpeakeasyBase {
    bronze?: number;
    gold?: number;
    silver?: number;
}
export declare class CommentsOwner extends SpeakeasyBase {
    acceptRate?: number;
    badgeCounts?: CommentsOwnerBadgeCounts;
    displayName?: string;
    link?: string;
    profileImage?: string;
    reputation?: number;
    userId?: number;
    userType?: string;
}
export declare class CommentsReplyToUserBadgeCounts extends SpeakeasyBase {
    bronze?: number;
    gold?: number;
    silver?: number;
}
export declare class CommentsReplyToUser extends SpeakeasyBase {
    acceptRate?: number;
    badgeCounts?: CommentsReplyToUserBadgeCounts;
    displayName?: string;
    link?: string;
    profileImage?: string;
    reputation?: number;
    userId?: number;
    userType?: string;
}
export declare class Comments extends SpeakeasyBase {
    body?: string;
    bodyMarkdown?: string;
    canFlag?: boolean;
    commentId?: number;
    creationDate?: number;
    edited?: boolean;
    link?: string;
    owner?: CommentsOwner;
    postId?: number;
    postType?: string;
    replyToUser?: CommentsReplyToUser;
    score?: number;
    upvoted?: boolean;
}
