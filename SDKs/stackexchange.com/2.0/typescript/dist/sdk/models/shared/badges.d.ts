import { SpeakeasyBase } from "../../../internal/utils";
export declare class BadgesUserBadgeCounts extends SpeakeasyBase {
    bronze?: number;
    gold?: number;
    silver?: number;
}
export declare class BadgesUser extends SpeakeasyBase {
    acceptRate?: number;
    badgeCounts?: BadgesUserBadgeCounts;
    displayName?: string;
    link?: string;
    profileImage?: string;
    reputation?: number;
    userId?: number;
    userType?: string;
}
export declare class Badges extends SpeakeasyBase {
    awardCount?: number;
    badgeId?: number;
    badgeType?: string;
    description?: string;
    link?: string;
    name?: string;
    rank?: string;
    user?: BadgesUser;
}
