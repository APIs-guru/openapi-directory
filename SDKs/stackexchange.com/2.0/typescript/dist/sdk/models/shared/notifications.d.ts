import { SpeakeasyBase } from "../../../internal/utils";
export declare class NotificationsSiteStyling extends SpeakeasyBase {
    linkColor?: string;
    tagBackgroundColor?: string;
    tagForegroundColor?: string;
}
export declare class NotificationsSite extends SpeakeasyBase {
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
    styling?: NotificationsSiteStyling;
    twitterAccount?: string;
}
export declare class Notifications extends SpeakeasyBase {
    body?: string;
    creationDate?: number;
    isUnread?: boolean;
    notificationType?: string;
    postId?: number;
    site?: NotificationsSite;
}
