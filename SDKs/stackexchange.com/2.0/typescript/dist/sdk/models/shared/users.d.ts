import { SpeakeasyBase } from "../../../internal/utils";
export declare class UsersBadgeCounts extends SpeakeasyBase {
    bronze?: number;
    gold?: number;
    silver?: number;
}
export declare class Users extends SpeakeasyBase {
    aboutMe?: string;
    acceptRate?: number;
    accountId?: number;
    age?: number;
    answerCount?: number;
    badgeCounts?: UsersBadgeCounts;
    creationDate?: number;
    displayName?: string;
    downVoteCount?: number;
    isEmployee?: boolean;
    lastAccessDate?: number;
    lastModifiedDate?: number;
    link?: string;
    location?: string;
    profileImage?: string;
    questionCount?: number;
    reputation?: number;
    reputationChangeDay?: number;
    reputationChangeMonth?: number;
    reputationChangeQuarter?: number;
    reputationChangeWeek?: number;
    reputationChangeYear?: number;
    timedPenaltyDate?: number;
    upVoteCount?: number;
    userId?: number;
    userType?: string;
    viewCount?: number;
    websiteUrl?: string;
}
