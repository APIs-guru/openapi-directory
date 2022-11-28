import { SpeakeasyBase } from "../../../internal/utils";
export declare class InfoObjectSiteStyling extends SpeakeasyBase {
    linkColor?: string;
    tagBackgroundColor?: string;
    tagForegroundColor?: string;
}
export declare class InfoObjectSite extends SpeakeasyBase {
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
    styling?: InfoObjectSiteStyling;
    twitterAccount?: string;
}
export declare class InfoObject extends SpeakeasyBase {
    answersPerMinute?: number;
    apiRevision?: string;
    badgesPerMinute?: number;
    newActiveUsers?: number;
    questionsPerMinute?: number;
    site?: InfoObjectSite;
    totalAccepted?: number;
    totalAnswers?: number;
    totalBadges?: number;
    totalComments?: number;
    totalQuestions?: number;
    totalUnanswered?: number;
    totalUsers?: number;
    totalVotes?: number;
}
