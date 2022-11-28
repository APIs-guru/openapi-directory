import { SpeakeasyBase } from "../../../internal/utils";
export declare class SitesStyling extends SpeakeasyBase {
    linkColor?: string;
    tagBackgroundColor?: string;
    tagForegroundColor?: string;
}
export declare class Sites extends SpeakeasyBase {
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
    styling?: SitesStyling;
    twitterAccount?: string;
}
