import { SpeakeasyBase } from "../../../internal/utils";
export declare class InboxItemsSiteStyling extends SpeakeasyBase {
    linkColor?: string;
    tagBackgroundColor?: string;
    tagForegroundColor?: string;
}
export declare class InboxItemsSite extends SpeakeasyBase {
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
    styling?: InboxItemsSiteStyling;
    twitterAccount?: string;
}
export declare class InboxItems extends SpeakeasyBase {
    answerId?: number;
    body?: string;
    commentId?: number;
    creationDate?: number;
    isUnread?: boolean;
    itemType?: string;
    link?: string;
    questionId?: number;
    site?: InboxItemsSite;
    title?: string;
}
