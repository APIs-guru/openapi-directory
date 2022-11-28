import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreatedCommentOwnerBadgeCounts extends SpeakeasyBase {
    bronze?: number;
    gold?: number;
    silver?: number;
}
export declare class CreatedCommentOwner extends SpeakeasyBase {
    acceptRate?: number;
    badgeCounts?: CreatedCommentOwnerBadgeCounts;
    displayName?: string;
    link?: string;
    profileImage?: string;
    reputation?: number;
    userId?: number;
    userType?: string;
}
export declare class CreatedCommentReplyToUserBadgeCounts extends SpeakeasyBase {
    bronze?: number;
    gold?: number;
    silver?: number;
}
export declare class CreatedCommentReplyToUser extends SpeakeasyBase {
    acceptRate?: number;
    badgeCounts?: CreatedCommentReplyToUserBadgeCounts;
    displayName?: string;
    link?: string;
    profileImage?: string;
    reputation?: number;
    userId?: number;
    userType?: string;
}
export declare class CreatedComment extends SpeakeasyBase {
    body?: string;
    bodyMarkdown?: string;
    canFlag?: boolean;
    commentId?: number;
    creationDate?: number;
    edited?: boolean;
    link?: string;
    owner?: CreatedCommentOwner;
    postId?: number;
    postType?: string;
    replyToUser?: CreatedCommentReplyToUser;
    score?: number;
    upvoted?: boolean;
}
