import { SpeakeasyBase } from "../../../internal/utils";
export declare class SuggestedEditsProposingUserBadgeCounts extends SpeakeasyBase {
    bronze?: number;
    gold?: number;
    silver?: number;
}
export declare class SuggestedEditsProposingUser extends SpeakeasyBase {
    acceptRate?: number;
    badgeCounts?: SuggestedEditsProposingUserBadgeCounts;
    displayName?: string;
    link?: string;
    profileImage?: string;
    reputation?: number;
    userId?: number;
    userType?: string;
}
export declare class SuggestedEdits extends SpeakeasyBase {
    approvalDate?: number;
    body?: string;
    comment?: string;
    creationDate?: number;
    postId?: number;
    postType?: string;
    proposingUser?: SuggestedEditsProposingUser;
    rejectionDate?: number;
    suggestedEditId?: number;
    tags?: any[];
    title?: string;
}
