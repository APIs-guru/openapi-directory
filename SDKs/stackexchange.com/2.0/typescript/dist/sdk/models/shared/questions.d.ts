import { SpeakeasyBase } from "../../../internal/utils";
export declare class QuestionsBountyUserBadgeCounts extends SpeakeasyBase {
    bronze?: number;
    gold?: number;
    silver?: number;
}
export declare class QuestionsBountyUser extends SpeakeasyBase {
    acceptRate?: number;
    badgeCounts?: QuestionsBountyUserBadgeCounts;
    displayName?: string;
    link?: string;
    profileImage?: string;
    reputation?: number;
    userId?: number;
    userType?: string;
}
export declare class QuestionsClosedDetails extends SpeakeasyBase {
    byUsers?: any[];
    description?: string;
    onHold?: boolean;
    originalQuestions?: any[];
    reason?: string;
}
export declare class QuestionsLastEditorBadgeCounts extends SpeakeasyBase {
    bronze?: number;
    gold?: number;
    silver?: number;
}
export declare class QuestionsLastEditor extends SpeakeasyBase {
    acceptRate?: number;
    badgeCounts?: QuestionsLastEditorBadgeCounts;
    displayName?: string;
    link?: string;
    profileImage?: string;
    reputation?: number;
    userId?: number;
    userType?: string;
}
export declare class QuestionsMigratedFromOtherSiteStyling extends SpeakeasyBase {
    linkColor?: string;
    tagBackgroundColor?: string;
    tagForegroundColor?: string;
}
export declare class QuestionsMigratedFromOtherSite extends SpeakeasyBase {
    aliases?: any[];
    apiSiteParameter?: string;
    audience?: string;
    closedBetaDate?: number;
    faviconUrl?: string;
    highResolutionIconUrl?: string;
    iconUrl?: string;
    launchDate?: number;
    logoUrl?: string;
    markdownExtensions?: any[];
    name?: string;
    openBetaDate?: number;
    relatedSites?: any[];
    siteState?: string;
    siteType?: string;
    siteUrl?: string;
    styling?: QuestionsMigratedFromOtherSiteStyling;
    twitterAccount?: string;
}
export declare class QuestionsMigratedFrom extends SpeakeasyBase {
    onDate?: number;
    otherSite?: QuestionsMigratedFromOtherSite;
    questionId?: number;
}
export declare class QuestionsMigratedToOtherSiteStyling extends SpeakeasyBase {
    linkColor?: string;
    tagBackgroundColor?: string;
    tagForegroundColor?: string;
}
export declare class QuestionsMigratedToOtherSite extends SpeakeasyBase {
    aliases?: any[];
    apiSiteParameter?: string;
    audience?: string;
    closedBetaDate?: number;
    faviconUrl?: string;
    highResolutionIconUrl?: string;
    iconUrl?: string;
    launchDate?: number;
    logoUrl?: string;
    markdownExtensions?: any[];
    name?: string;
    openBetaDate?: number;
    relatedSites?: any[];
    siteState?: string;
    siteType?: string;
    siteUrl?: string;
    styling?: QuestionsMigratedToOtherSiteStyling;
    twitterAccount?: string;
}
export declare class QuestionsMigratedTo extends SpeakeasyBase {
    onDate?: number;
    otherSite?: QuestionsMigratedToOtherSite;
    questionId?: number;
}
export declare class QuestionsNotice extends SpeakeasyBase {
    body?: string;
    creationDate?: number;
    ownerUserId?: number;
}
export declare class QuestionsOwnerBadgeCounts extends SpeakeasyBase {
    bronze?: number;
    gold?: number;
    silver?: number;
}
export declare class QuestionsOwner extends SpeakeasyBase {
    acceptRate?: number;
    badgeCounts?: QuestionsOwnerBadgeCounts;
    displayName?: string;
    link?: string;
    profileImage?: string;
    reputation?: number;
    userId?: number;
    userType?: string;
}
export declare class Questions extends SpeakeasyBase {
    acceptedAnswerId?: number;
    answerCount?: number;
    answers?: any[];
    body?: string;
    bodyMarkdown?: string;
    bountyAmount?: number;
    bountyClosesDate?: number;
    bountyUser?: QuestionsBountyUser;
    canClose?: boolean;
    canFlag?: boolean;
    closeVoteCount?: number;
    closedDate?: number;
    closedDetails?: QuestionsClosedDetails;
    closedReason?: string;
    commentCount?: number;
    comments?: any[];
    communityOwnedDate?: number;
    creationDate?: number;
    deleteVoteCount?: number;
    downVoteCount?: number;
    downvoted?: boolean;
    favoriteCount?: number;
    favorited?: boolean;
    isAnswered?: boolean;
    lastActivityDate?: number;
    lastEditDate?: number;
    lastEditor?: QuestionsLastEditor;
    link?: string;
    lockedDate?: number;
    migratedFrom?: QuestionsMigratedFrom;
    migratedTo?: QuestionsMigratedTo;
    notice?: QuestionsNotice;
    owner?: QuestionsOwner;
    protectedDate?: number;
    questionId?: number;
    reopenVoteCount?: number;
    score?: number;
    shareLink?: string;
    tags?: any[];
    title?: string;
    upVoteCount?: number;
    upvoted?: boolean;
    viewCount?: number;
}
