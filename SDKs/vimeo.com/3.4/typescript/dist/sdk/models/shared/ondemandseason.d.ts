import { SpeakeasyBase } from "../../../internal/utils";
import { Picture } from "./picture";
/**
 * The Videos connection.
**/
export declare class OnDemandSeasonMetadataConnectionsVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
export declare class OnDemandSeasonMetadataConnections extends SpeakeasyBase {
    videos: OnDemandSeasonMetadataConnectionsVideos;
}
export declare class OnDemandSeasonMetadata extends SpeakeasyBase {
    connections: OnDemandSeasonMetadataConnections;
}
export declare enum OnDemandSeasonUserAccountEnum {
    Basic = "basic",
    Business = "business",
    LiveBusiness = "live_business",
    LivePremium = "live_premium",
    LivePro = "live_pro",
    Plus = "plus",
    Pro = "pro",
    ProUnlimited = "pro_unlimited",
    Producer = "producer"
}
/**
 * Information about the albums created by this user.
**/
export declare class OnDemandSeasonUserMetadataConnectionsAlbums extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the appearances of this user in other videos.
**/
export declare class OnDemandSeasonUserMetadataConnectionsAppearances extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
export declare class OnDemandSeasonUserMetadataConnectionsBlock extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's followed categories.
**/
export declare class OnDemandSeasonUserMetadataConnectionsCategories extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's subscribed channels.
**/
export declare class OnDemandSeasonUserMetadataConnectionsChannels extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's feed.
**/
export declare class OnDemandSeasonUserMetadataConnectionsFeed extends SpeakeasyBase {
    options: string[];
    uri: string;
}
/**
 * Information about this user's folders.
**/
export declare class OnDemandSeasonUserMetadataConnectionsFolders extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the user's followers.
**/
export declare class OnDemandSeasonUserMetadataConnectionsFollowers extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the users that the current user is following.
**/
export declare class OnDemandSeasonUserMetadataConnectionsFollowing extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the groups created by this user.
**/
export declare class OnDemandSeasonUserMetadataConnectionsGroups extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that this user has liked.
**/
export declare class OnDemandSeasonUserMetadataConnectionsLikes extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the channels that this user moderates.
**/
export declare class OnDemandSeasonUserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's portraits.
**/
export declare class OnDemandSeasonUserMetadataConnectionsPictures extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's portfolios.
**/
export declare class OnDemandSeasonUserMetadataConnectionsPortfolios extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export declare class OnDemandSeasonUserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export declare class OnDemandSeasonUserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that have been shared with this user.
**/
export declare class OnDemandSeasonUserMetadataConnectionsShared extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos uploaded by this user.
**/
export declare class OnDemandSeasonUserMetadataConnectionsVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that this user has watched.
**/
export declare class OnDemandSeasonUserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that this user wants to watch later.
**/
export declare class OnDemandSeasonUserMetadataConnectionsWatchlater extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * The list of resource URIs related to the user.
**/
export declare class OnDemandSeasonUserMetadataConnections extends SpeakeasyBase {
    albums: OnDemandSeasonUserMetadataConnectionsAlbums;
    appearances: OnDemandSeasonUserMetadataConnectionsAppearances;
    block: OnDemandSeasonUserMetadataConnectionsBlock;
    categories: OnDemandSeasonUserMetadataConnectionsCategories;
    channels: OnDemandSeasonUserMetadataConnectionsChannels;
    feed: OnDemandSeasonUserMetadataConnectionsFeed;
    folders: OnDemandSeasonUserMetadataConnectionsFolders;
    followers: OnDemandSeasonUserMetadataConnectionsFollowers;
    following: OnDemandSeasonUserMetadataConnectionsFollowing;
    groups: OnDemandSeasonUserMetadataConnectionsGroups;
    likes: OnDemandSeasonUserMetadataConnectionsLikes;
    moderatedChannels: OnDemandSeasonUserMetadataConnectionsModeratedChannels;
    pictures: OnDemandSeasonUserMetadataConnectionsPictures;
    portfolios: OnDemandSeasonUserMetadataConnectionsPortfolios;
    recommendedChannels: OnDemandSeasonUserMetadataConnectionsRecommendedChannels;
    recommendedUsers: OnDemandSeasonUserMetadataConnectionsRecommendedUsers;
    shared: OnDemandSeasonUserMetadataConnectionsShared;
    videos: OnDemandSeasonUserMetadataConnectionsVideos;
    watchedVideos: OnDemandSeasonUserMetadataConnectionsWatchedVideos;
    watchlater: OnDemandSeasonUserMetadataConnectionsWatchlater;
}
export declare class OnDemandSeasonUserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
    options?: string[];
    uri?: string;
}
/**
 * Information related to the block status of this user.
**/
export declare class OnDemandSeasonUserMetadataInteractionsBlock extends SpeakeasyBase {
    added: boolean;
    addedTime: string;
    options: string[];
    uri: string;
}
/**
 * Information related to the followed status of this user.
**/
export declare class OnDemandSeasonUserMetadataInteractionsFollow extends SpeakeasyBase {
    added: boolean;
    options: string[];
    uri: string;
}
/**
 * Information regarding where and how to report a user.
**/
export declare class OnDemandSeasonUserMetadataInteractionsReport extends SpeakeasyBase {
    options: string[];
    reason: string[];
    uri: string;
}
export declare class OnDemandSeasonUserMetadataInteractions extends SpeakeasyBase {
    addPrivacyUser?: OnDemandSeasonUserMetadataInteractionsAddPrivacyUser;
    block: OnDemandSeasonUserMetadataInteractionsBlock;
    follow: OnDemandSeasonUserMetadataInteractionsFollow;
    report: OnDemandSeasonUserMetadataInteractionsReport;
}
/**
 * The user's metadata.
**/
export declare class OnDemandSeasonUserMetadata extends SpeakeasyBase {
    connections: OnDemandSeasonUserMetadataConnections;
    interactions: OnDemandSeasonUserMetadataInteractions;
}
export declare enum OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}
export declare enum OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnum {
    Private = "private",
    Public = "public",
    Whitelist = "whitelist"
}
export declare enum OnDemandSeasonUserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}
export declare class OnDemandSeasonUserPreferencesVideosPrivacy extends SpeakeasyBase {
    add?: boolean;
    comments?: OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnum;
    download?: boolean;
    embed?: OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnum;
    view?: OnDemandSeasonUserPreferencesVideosPrivacyViewEnum;
}
export declare class OnDemandSeasonUserPreferencesVideos extends SpeakeasyBase {
    privacy?: OnDemandSeasonUserPreferencesVideosPrivacy;
}
export declare class OnDemandSeasonUserPreferences extends SpeakeasyBase {
    videos?: OnDemandSeasonUserPreferencesVideos;
}
/**
 * Information about the user's lifetime upload usage.
**/
export declare class OnDemandSeasonUserUploadQuotaLifetime extends SpeakeasyBase {
    free: number;
    max: number;
    used: number;
}
/**
 * Information about the user's usage for the current period.
**/
export declare class OnDemandSeasonUserUploadQuotaPeriodic extends SpeakeasyBase {
    free: number;
    max: number;
    resetDate: string;
    used: number;
}
export declare enum OnDemandSeasonUserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime",
    Periodic = "periodic"
}
/**
 * Information about the user's upload space remaining for the current period.
**/
export declare class OnDemandSeasonUserUploadQuotaSpace extends SpeakeasyBase {
    free: number;
    max: number;
    showing: OnDemandSeasonUserUploadQuotaSpaceShowingEnum;
    used: number;
}
/**
 * Appears only when the user has upload access and is looking at their own user record.
**/
export declare class OnDemandSeasonUserUploadQuota extends SpeakeasyBase {
    lifetime: OnDemandSeasonUserUploadQuotaLifetime;
    periodic: OnDemandSeasonUserUploadQuotaPeriodic;
    space: OnDemandSeasonUserUploadQuotaSpace;
}
export declare class OnDemandSeasonUserWebsites extends SpeakeasyBase {
    description: string;
    link: string;
    name: string;
}
/**
 * The creator of this On Demand page.
**/
export declare class OnDemandSeasonUser extends SpeakeasyBase {
    account: OnDemandSeasonUserAccountEnum;
    bio: string;
    contentFilter?: string[];
    createdTime: string;
    email?: string;
    link: string;
    location: string;
    metadata: OnDemandSeasonUserMetadata;
    name: string;
    pictures: Picture;
    preferences?: OnDemandSeasonUserPreferences;
    resourceKey: string;
    uploadQuota: OnDemandSeasonUserUploadQuota;
    uri: string;
    websites: OnDemandSeasonUserWebsites[];
}
export declare class OnDemandSeason extends SpeakeasyBase {
    description: string;
    metadata: OnDemandSeasonMetadata;
    name: string;
    position: number;
    resourceKey: string;
    type: string;
    uri: string;
    user: OnDemandSeasonUser;
}
