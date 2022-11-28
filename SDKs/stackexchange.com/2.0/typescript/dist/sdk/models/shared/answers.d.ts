import { SpeakeasyBase } from "../../../internal/utils";
export declare class AnswersLastEditorBadgeCounts extends SpeakeasyBase {
    bronze?: number;
    gold?: number;
    silver?: number;
}
export declare class AnswersLastEditor extends SpeakeasyBase {
    acceptRate?: number;
    badgeCounts?: AnswersLastEditorBadgeCounts;
    displayName?: string;
    link?: string;
    profileImage?: string;
    reputation?: number;
    userId?: number;
    userType?: string;
}
export declare class AnswersOwnerBadgeCounts extends SpeakeasyBase {
    bronze?: number;
    gold?: number;
    silver?: number;
}
export declare class AnswersOwner extends SpeakeasyBase {
    acceptRate?: number;
    badgeCounts?: AnswersOwnerBadgeCounts;
    displayName?: string;
    link?: string;
    profileImage?: string;
    reputation?: number;
    userId?: number;
    userType?: string;
}
export declare class Answers extends SpeakeasyBase {
    accepted?: boolean;
    answerId?: number;
    awardedBountyAmount?: number;
    awardedBountyUsers?: any[];
    body?: string;
    bodyMarkdown?: string;
    canFlag?: boolean;
    commentCount?: number;
    comments?: any[];
    communityOwnedDate?: number;
    creationDate?: number;
    downVoteCount?: number;
    downvoted?: boolean;
    isAccepted?: boolean;
    lastActivityDate?: number;
    lastEditDate?: number;
    lastEditor?: AnswersLastEditor;
    link?: string;
    lockedDate?: number;
    owner?: AnswersOwner;
    questionId?: number;
    score?: number;
    shareLink?: string;
    tags?: any[];
    title?: string;
    upVoteCount?: number;
    upvoted?: boolean;
}
