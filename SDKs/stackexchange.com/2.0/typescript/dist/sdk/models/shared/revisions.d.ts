import { SpeakeasyBase } from "../../../internal/utils";
export declare class RevisionsUserBadgeCounts extends SpeakeasyBase {
    bronze?: number;
    gold?: number;
    silver?: number;
}
export declare class RevisionsUser extends SpeakeasyBase {
    acceptRate?: number;
    badgeCounts?: RevisionsUserBadgeCounts;
    displayName?: string;
    link?: string;
    profileImage?: string;
    reputation?: number;
    userId?: number;
    userType?: string;
}
export declare class Revisions extends SpeakeasyBase {
    body?: string;
    comment?: string;
    creationDate?: number;
    isRollback?: boolean;
    lastBody?: string;
    lastTags?: any[];
    lastTitle?: string;
    postId?: number;
    postType?: string;
    revisionGuid?: string;
    revisionNumber?: number;
    revisionType?: string;
    setCommunityWiki?: boolean;
    tags?: any[];
    title?: string;
    user?: RevisionsUser;
}
