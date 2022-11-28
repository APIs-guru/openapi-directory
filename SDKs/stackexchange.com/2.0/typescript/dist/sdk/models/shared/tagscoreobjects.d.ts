import { SpeakeasyBase } from "../../../internal/utils";
export declare class TagScoreObjectsUserBadgeCounts extends SpeakeasyBase {
    bronze?: number;
    gold?: number;
    silver?: number;
}
export declare class TagScoreObjectsUser extends SpeakeasyBase {
    acceptRate?: number;
    badgeCounts?: TagScoreObjectsUserBadgeCounts;
    displayName?: string;
    link?: string;
    profileImage?: string;
    reputation?: number;
    userId?: number;
    userType?: string;
}
export declare class TagScoreObjects extends SpeakeasyBase {
    postCount?: number;
    score?: number;
    user?: TagScoreObjectsUser;
}
