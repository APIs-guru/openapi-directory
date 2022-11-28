import { SpeakeasyBase } from "../../../internal/utils";
import { ApiApp } from "./apiapp";
import { Play } from "./play";
import { Picture } from "./picture";
/**
 * Data from video associated with version
**/
export declare class VideoVersionsMetadataConnectionsVideo extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
export declare class VideoVersionsMetadataConnections extends SpeakeasyBase {
    video: VideoVersionsMetadataConnectionsVideo;
}
/**
 * The video version's metadata.
**/
export declare class VideoVersionsMetadata extends SpeakeasyBase {
    connections: VideoVersionsMetadataConnections;
}
export declare enum VideoVersionsUploadApproachEnum {
    Post = "post",
    Pull = "pull",
    Streaming = "streaming",
    Tus = "tus"
}
export declare enum VideoVersionsUploadStatusEnum {
    Complete = "complete",
    Error = "error",
    InProgress = "in_progress"
}
/**
 * The upload information for this version.
**/
export declare class VideoVersionsUpload extends SpeakeasyBase {
    approach?: VideoVersionsUploadApproachEnum;
    completeUri?: string;
    form?: string;
    link?: string;
    redirectUrl?: string;
    size?: number;
    status: VideoVersionsUploadStatusEnum;
    uploadLink?: string;
}
export declare enum VideoVersionsUserAccountEnum {
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
export declare class VideoVersionsUserMetadataConnectionsAlbums extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the appearances of this user in other videos.
**/
export declare class VideoVersionsUserMetadataConnectionsAppearances extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
export declare class VideoVersionsUserMetadataConnectionsBlock extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's followed categories.
**/
export declare class VideoVersionsUserMetadataConnectionsCategories extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's subscribed channels.
**/
export declare class VideoVersionsUserMetadataConnectionsChannels extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's feed.
**/
export declare class VideoVersionsUserMetadataConnectionsFeed extends SpeakeasyBase {
    options: string[];
    uri: string;
}
/**
 * Information about this user's folders.
**/
export declare class VideoVersionsUserMetadataConnectionsFolders extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the user's followers.
**/
export declare class VideoVersionsUserMetadataConnectionsFollowers extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the users that the current user is following.
**/
export declare class VideoVersionsUserMetadataConnectionsFollowing extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the groups created by this user.
**/
export declare class VideoVersionsUserMetadataConnectionsGroups extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that this user has liked.
**/
export declare class VideoVersionsUserMetadataConnectionsLikes extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the channels that this user moderates.
**/
export declare class VideoVersionsUserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's portraits.
**/
export declare class VideoVersionsUserMetadataConnectionsPictures extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's portfolios.
**/
export declare class VideoVersionsUserMetadataConnectionsPortfolios extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export declare class VideoVersionsUserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export declare class VideoVersionsUserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that have been shared with this user.
**/
export declare class VideoVersionsUserMetadataConnectionsShared extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos uploaded by this user.
**/
export declare class VideoVersionsUserMetadataConnectionsVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that this user has watched.
**/
export declare class VideoVersionsUserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that this user wants to watch later.
**/
export declare class VideoVersionsUserMetadataConnectionsWatchlater extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * The list of resource URIs related to the user.
**/
export declare class VideoVersionsUserMetadataConnections extends SpeakeasyBase {
    albums: VideoVersionsUserMetadataConnectionsAlbums;
    appearances: VideoVersionsUserMetadataConnectionsAppearances;
    block: VideoVersionsUserMetadataConnectionsBlock;
    categories: VideoVersionsUserMetadataConnectionsCategories;
    channels: VideoVersionsUserMetadataConnectionsChannels;
    feed: VideoVersionsUserMetadataConnectionsFeed;
    folders: VideoVersionsUserMetadataConnectionsFolders;
    followers: VideoVersionsUserMetadataConnectionsFollowers;
    following: VideoVersionsUserMetadataConnectionsFollowing;
    groups: VideoVersionsUserMetadataConnectionsGroups;
    likes: VideoVersionsUserMetadataConnectionsLikes;
    moderatedChannels: VideoVersionsUserMetadataConnectionsModeratedChannels;
    pictures: VideoVersionsUserMetadataConnectionsPictures;
    portfolios: VideoVersionsUserMetadataConnectionsPortfolios;
    recommendedChannels: VideoVersionsUserMetadataConnectionsRecommendedChannels;
    recommendedUsers: VideoVersionsUserMetadataConnectionsRecommendedUsers;
    shared: VideoVersionsUserMetadataConnectionsShared;
    videos: VideoVersionsUserMetadataConnectionsVideos;
    watchedVideos: VideoVersionsUserMetadataConnectionsWatchedVideos;
    watchlater: VideoVersionsUserMetadataConnectionsWatchlater;
}
export declare class VideoVersionsUserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
    options?: string[];
    uri?: string;
}
/**
 * Information related to the block status of this user.
**/
export declare class VideoVersionsUserMetadataInteractionsBlock extends SpeakeasyBase {
    added: boolean;
    addedTime: string;
    options: string[];
    uri: string;
}
/**
 * Information related to the followed status of this user.
**/
export declare class VideoVersionsUserMetadataInteractionsFollow extends SpeakeasyBase {
    added: boolean;
    options: string[];
    uri: string;
}
/**
 * Information regarding where and how to report a user.
**/
export declare class VideoVersionsUserMetadataInteractionsReport extends SpeakeasyBase {
    options: string[];
    reason: string[];
    uri: string;
}
export declare class VideoVersionsUserMetadataInteractions extends SpeakeasyBase {
    addPrivacyUser?: VideoVersionsUserMetadataInteractionsAddPrivacyUser;
    block: VideoVersionsUserMetadataInteractionsBlock;
    follow: VideoVersionsUserMetadataInteractionsFollow;
    report: VideoVersionsUserMetadataInteractionsReport;
}
/**
 * The user's metadata.
**/
export declare class VideoVersionsUserMetadata extends SpeakeasyBase {
    connections: VideoVersionsUserMetadataConnections;
    interactions: VideoVersionsUserMetadataInteractions;
}
export declare enum VideoVersionsUserPreferencesVideosPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}
export declare enum VideoVersionsUserPreferencesVideosPrivacyEmbedEnum {
    Private = "private",
    Public = "public",
    Whitelist = "whitelist"
}
export declare enum VideoVersionsUserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}
export declare class VideoVersionsUserPreferencesVideosPrivacy extends SpeakeasyBase {
    add?: boolean;
    comments?: VideoVersionsUserPreferencesVideosPrivacyCommentsEnum;
    download?: boolean;
    embed?: VideoVersionsUserPreferencesVideosPrivacyEmbedEnum;
    view?: VideoVersionsUserPreferencesVideosPrivacyViewEnum;
}
export declare class VideoVersionsUserPreferencesVideos extends SpeakeasyBase {
    privacy?: VideoVersionsUserPreferencesVideosPrivacy;
}
export declare class VideoVersionsUserPreferences extends SpeakeasyBase {
    videos?: VideoVersionsUserPreferencesVideos;
}
/**
 * Information about the user's lifetime upload usage.
**/
export declare class VideoVersionsUserUploadQuotaLifetime extends SpeakeasyBase {
    free: number;
    max: number;
    used: number;
}
/**
 * Information about the user's usage for the current period.
**/
export declare class VideoVersionsUserUploadQuotaPeriodic extends SpeakeasyBase {
    free: number;
    max: number;
    resetDate: string;
    used: number;
}
export declare enum VideoVersionsUserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime",
    Periodic = "periodic"
}
/**
 * Information about the user's upload space remaining for the current period.
**/
export declare class VideoVersionsUserUploadQuotaSpace extends SpeakeasyBase {
    free: number;
    max: number;
    showing: VideoVersionsUserUploadQuotaSpaceShowingEnum;
    used: number;
}
/**
 * Appears only when the user has upload access and is looking at their own user record.
**/
export declare class VideoVersionsUserUploadQuota extends SpeakeasyBase {
    lifetime: VideoVersionsUserUploadQuotaLifetime;
    periodic: VideoVersionsUserUploadQuotaPeriodic;
    space: VideoVersionsUserUploadQuotaSpace;
}
export declare class VideoVersionsUserWebsites extends SpeakeasyBase {
    description: string;
    link: string;
    name: string;
}
/**
 * The owner of the video version.
**/
export declare class VideoVersionsUser extends SpeakeasyBase {
    account: VideoVersionsUserAccountEnum;
    bio: string;
    contentFilter?: string[];
    createdTime: string;
    email?: string;
    link: string;
    location: string;
    metadata: VideoVersionsUserMetadata;
    name: string;
    pictures: Picture;
    preferences?: VideoVersionsUserPreferences;
    resourceKey: string;
    uploadQuota: VideoVersionsUserUploadQuota;
    uri: string;
    websites: VideoVersionsUserWebsites[];
}
export declare class VideoVersions extends SpeakeasyBase {
    active: boolean;
    app: ApiApp;
    createdTime: string;
    duration: number;
    filename: string;
    filesize: number;
    metadata: VideoVersionsMetadata;
    modifiedTime: string;
    play: Play;
    upload: VideoVersionsUpload;
    uploadDate: string;
    uri: string;
    user: VideoVersionsUser;
}
