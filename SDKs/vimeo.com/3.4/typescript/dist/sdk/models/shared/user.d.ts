import { SpeakeasyBase } from "../../../internal/utils";
import { Picture } from "./picture";
export declare enum UserAccountEnum {
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
export declare class UserMetadataConnectionsAlbums extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the appearances of this user in other videos.
**/
export declare class UserMetadataConnectionsAppearances extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
export declare class UserMetadataConnectionsBlock extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's followed categories.
**/
export declare class UserMetadataConnectionsCategories extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's subscribed channels.
**/
export declare class UserMetadataConnectionsChannels extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's feed.
**/
export declare class UserMetadataConnectionsFeed extends SpeakeasyBase {
    options: string[];
    uri: string;
}
/**
 * Information about this user's folders.
**/
export declare class UserMetadataConnectionsFolders extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the user's followers.
**/
export declare class UserMetadataConnectionsFollowers extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the users that the current user is following.
**/
export declare class UserMetadataConnectionsFollowing extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the groups created by this user.
**/
export declare class UserMetadataConnectionsGroups extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that this user has liked.
**/
export declare class UserMetadataConnectionsLikes extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the channels that this user moderates.
**/
export declare class UserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's portraits.
**/
export declare class UserMetadataConnectionsPictures extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's portfolios.
**/
export declare class UserMetadataConnectionsPortfolios extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export declare class UserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export declare class UserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that have been shared with this user.
**/
export declare class UserMetadataConnectionsShared extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos uploaded by this user.
**/
export declare class UserMetadataConnectionsVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that this user has watched.
**/
export declare class UserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that this user wants to watch later.
**/
export declare class UserMetadataConnectionsWatchlater extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * The list of resource URIs related to the user.
**/
export declare class UserMetadataConnections extends SpeakeasyBase {
    albums: UserMetadataConnectionsAlbums;
    appearances: UserMetadataConnectionsAppearances;
    block: UserMetadataConnectionsBlock;
    categories: UserMetadataConnectionsCategories;
    channels: UserMetadataConnectionsChannels;
    feed: UserMetadataConnectionsFeed;
    folders: UserMetadataConnectionsFolders;
    followers: UserMetadataConnectionsFollowers;
    following: UserMetadataConnectionsFollowing;
    groups: UserMetadataConnectionsGroups;
    likes: UserMetadataConnectionsLikes;
    moderatedChannels: UserMetadataConnectionsModeratedChannels;
    pictures: UserMetadataConnectionsPictures;
    portfolios: UserMetadataConnectionsPortfolios;
    recommendedChannels: UserMetadataConnectionsRecommendedChannels;
    recommendedUsers: UserMetadataConnectionsRecommendedUsers;
    shared: UserMetadataConnectionsShared;
    videos: UserMetadataConnectionsVideos;
    watchedVideos: UserMetadataConnectionsWatchedVideos;
    watchlater: UserMetadataConnectionsWatchlater;
}
export declare class UserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
    options?: string[];
    uri?: string;
}
/**
 * Information related to the block status of this user.
**/
export declare class UserMetadataInteractionsBlock extends SpeakeasyBase {
    added: boolean;
    addedTime: string;
    options: string[];
    uri: string;
}
/**
 * Information related to the followed status of this user.
**/
export declare class UserMetadataInteractionsFollow extends SpeakeasyBase {
    added: boolean;
    options: string[];
    uri: string;
}
/**
 * Information regarding where and how to report a user.
**/
export declare class UserMetadataInteractionsReport extends SpeakeasyBase {
    options: string[];
    reason: string[];
    uri: string;
}
export declare class UserMetadataInteractions extends SpeakeasyBase {
    addPrivacyUser?: UserMetadataInteractionsAddPrivacyUser;
    block: UserMetadataInteractionsBlock;
    follow: UserMetadataInteractionsFollow;
    report: UserMetadataInteractionsReport;
}
/**
 * The user's metadata.
**/
export declare class UserMetadata extends SpeakeasyBase {
    connections: UserMetadataConnections;
    interactions: UserMetadataInteractions;
}
export declare enum UserPreferencesVideosPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}
export declare enum UserPreferencesVideosPrivacyEmbedEnum {
    Private = "private",
    Public = "public",
    Whitelist = "whitelist"
}
export declare enum UserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}
export declare class UserPreferencesVideosPrivacy extends SpeakeasyBase {
    add?: boolean;
    comments?: UserPreferencesVideosPrivacyCommentsEnum;
    download?: boolean;
    embed?: UserPreferencesVideosPrivacyEmbedEnum;
    view?: UserPreferencesVideosPrivacyViewEnum;
}
export declare class UserPreferencesVideos extends SpeakeasyBase {
    privacy?: UserPreferencesVideosPrivacy;
}
export declare class UserPreferences extends SpeakeasyBase {
    videos?: UserPreferencesVideos;
}
/**
 * Information about the user's lifetime upload usage.
**/
export declare class UserUploadQuotaLifetime extends SpeakeasyBase {
    free: number;
    max: number;
    used: number;
}
/**
 * Information about the user's usage for the current period.
**/
export declare class UserUploadQuotaPeriodic extends SpeakeasyBase {
    free: number;
    max: number;
    resetDate: string;
    used: number;
}
export declare enum UserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime",
    Periodic = "periodic"
}
/**
 * Information about the user's upload space remaining for the current period.
**/
export declare class UserUploadQuotaSpace extends SpeakeasyBase {
    free: number;
    max: number;
    showing: UserUploadQuotaSpaceShowingEnum;
    used: number;
}
/**
 * Appears only when the user has upload access and is looking at their own user record.
**/
export declare class UserUploadQuota extends SpeakeasyBase {
    lifetime: UserUploadQuotaLifetime;
    periodic: UserUploadQuotaPeriodic;
    space: UserUploadQuotaSpace;
}
export declare class UserWebsites extends SpeakeasyBase {
    description: string;
    link: string;
    name: string;
}
export declare class User extends SpeakeasyBase {
    account: UserAccountEnum;
    bio: string;
    contentFilter?: string[];
    createdTime: string;
    email?: string;
    link: string;
    location: string;
    metadata: UserMetadata;
    name: string;
    pictures: Picture;
    preferences?: UserPreferences;
    resourceKey: string;
    uploadQuota: UserUploadQuota;
    uri: string;
    websites: UserWebsites[];
}
