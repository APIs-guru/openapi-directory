import { SpeakeasyBase } from "../../../internal/utils";
export declare class QuestionTimelineEventsOwnerBadgeCounts extends SpeakeasyBase {
    bronze?: number;
    gold?: number;
    silver?: number;
}
export declare class QuestionTimelineEventsOwner extends SpeakeasyBase {
    acceptRate?: number;
    badgeCounts?: QuestionTimelineEventsOwnerBadgeCounts;
    displayName?: string;
    link?: string;
    profileImage?: string;
    reputation?: number;
    userId?: number;
    userType?: string;
}
export declare class QuestionTimelineEventsUserBadgeCounts extends SpeakeasyBase {
    bronze?: number;
    gold?: number;
    silver?: number;
}
export declare class QuestionTimelineEventsUser extends SpeakeasyBase {
    acceptRate?: number;
    badgeCounts?: QuestionTimelineEventsUserBadgeCounts;
    displayName?: string;
    link?: string;
    profileImage?: string;
    reputation?: number;
    userId?: number;
    userType?: string;
}
export declare class QuestionTimelineEvents extends SpeakeasyBase {
    commentId?: number;
    creationDate?: number;
    downVoteCount?: number;
    owner?: QuestionTimelineEventsOwner;
    postId?: number;
    questionId?: number;
    revisionGuid?: string;
    timelineType?: string;
    upVoteCount?: number;
    user?: QuestionTimelineEventsUser;
}
