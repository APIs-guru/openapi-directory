import { SpeakeasyBase } from "../../../internal/utils";
import { Picture } from "./picture";
/**
 * Information about this comment's replies.
**/
export declare class CommentMetadataConnectionsReplies extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
export declare class CommentMetadataConnections extends SpeakeasyBase {
    replies: CommentMetadataConnectionsReplies;
}
export declare class CommentMetadata extends SpeakeasyBase {
    connections: CommentMetadataConnections;
}
export declare enum CommentTypeEnum {
    Video = "video"
}
export declare enum CommentUserAccountEnum {
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
export declare class CommentUserMetadataConnectionsAlbums extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the appearances of this user in other videos.
**/
export declare class CommentUserMetadataConnectionsAppearances extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
export declare class CommentUserMetadataConnectionsBlock extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's followed categories.
**/
export declare class CommentUserMetadataConnectionsCategories extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's subscribed channels.
**/
export declare class CommentUserMetadataConnectionsChannels extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's feed.
**/
export declare class CommentUserMetadataConnectionsFeed extends SpeakeasyBase {
    options: string[];
    uri: string;
}
/**
 * Information about this user's folders.
**/
export declare class CommentUserMetadataConnectionsFolders extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the user's followers.
**/
export declare class CommentUserMetadataConnectionsFollowers extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the users that the current user is following.
**/
export declare class CommentUserMetadataConnectionsFollowing extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the groups created by this user.
**/
export declare class CommentUserMetadataConnectionsGroups extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that this user has liked.
**/
export declare class CommentUserMetadataConnectionsLikes extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the channels that this user moderates.
**/
export declare class CommentUserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's portraits.
**/
export declare class CommentUserMetadataConnectionsPictures extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's portfolios.
**/
export declare class CommentUserMetadataConnectionsPortfolios extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export declare class CommentUserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export declare class CommentUserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that have been shared with this user.
**/
export declare class CommentUserMetadataConnectionsShared extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos uploaded by this user.
**/
export declare class CommentUserMetadataConnectionsVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that this user has watched.
**/
export declare class CommentUserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that this user wants to watch later.
**/
export declare class CommentUserMetadataConnectionsWatchlater extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * The list of resource URIs related to the user.
**/
export declare class CommentUserMetadataConnections extends SpeakeasyBase {
    albums: CommentUserMetadataConnectionsAlbums;
    appearances: CommentUserMetadataConnectionsAppearances;
    block: CommentUserMetadataConnectionsBlock;
    categories: CommentUserMetadataConnectionsCategories;
    channels: CommentUserMetadataConnectionsChannels;
    feed: CommentUserMetadataConnectionsFeed;
    folders: CommentUserMetadataConnectionsFolders;
    followers: CommentUserMetadataConnectionsFollowers;
    following: CommentUserMetadataConnectionsFollowing;
    groups: CommentUserMetadataConnectionsGroups;
    likes: CommentUserMetadataConnectionsLikes;
    moderatedChannels: CommentUserMetadataConnectionsModeratedChannels;
    pictures: CommentUserMetadataConnectionsPictures;
    portfolios: CommentUserMetadataConnectionsPortfolios;
    recommendedChannels: CommentUserMetadataConnectionsRecommendedChannels;
    recommendedUsers: CommentUserMetadataConnectionsRecommendedUsers;
    shared: CommentUserMetadataConnectionsShared;
    videos: CommentUserMetadataConnectionsVideos;
    watchedVideos: CommentUserMetadataConnectionsWatchedVideos;
    watchlater: CommentUserMetadataConnectionsWatchlater;
}
export declare class CommentUserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
    options?: string[];
    uri?: string;
}
/**
 * Information related to the block status of this user.
**/
export declare class CommentUserMetadataInteractionsBlock extends SpeakeasyBase {
    added: boolean;
    addedTime: string;
    options: string[];
    uri: string;
}
/**
 * Information related to the followed status of this user.
**/
export declare class CommentUserMetadataInteractionsFollow extends SpeakeasyBase {
    added: boolean;
    options: string[];
    uri: string;
}
/**
 * Information regarding where and how to report a user.
**/
export declare class CommentUserMetadataInteractionsReport extends SpeakeasyBase {
    options: string[];
    reason: string[];
    uri: string;
}
export declare class CommentUserMetadataInteractions extends SpeakeasyBase {
    addPrivacyUser?: CommentUserMetadataInteractionsAddPrivacyUser;
    block: CommentUserMetadataInteractionsBlock;
    follow: CommentUserMetadataInteractionsFollow;
    report: CommentUserMetadataInteractionsReport;
}
/**
 * The user's metadata.
**/
export declare class CommentUserMetadata extends SpeakeasyBase {
    connections: CommentUserMetadataConnections;
    interactions: CommentUserMetadataInteractions;
}
export declare enum CommentUserPreferencesVideosPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}
export declare enum CommentUserPreferencesVideosPrivacyEmbedEnum {
    Private = "private",
    Public = "public",
    Whitelist = "whitelist"
}
export declare enum CommentUserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}
export declare class CommentUserPreferencesVideosPrivacy extends SpeakeasyBase {
    add?: boolean;
    comments?: CommentUserPreferencesVideosPrivacyCommentsEnum;
    download?: boolean;
    embed?: CommentUserPreferencesVideosPrivacyEmbedEnum;
    view?: CommentUserPreferencesVideosPrivacyViewEnum;
}
export declare class CommentUserPreferencesVideos extends SpeakeasyBase {
    privacy?: CommentUserPreferencesVideosPrivacy;
}
export declare class CommentUserPreferences extends SpeakeasyBase {
    videos?: CommentUserPreferencesVideos;
}
/**
 * Information about the user's lifetime upload usage.
**/
export declare class CommentUserUploadQuotaLifetime extends SpeakeasyBase {
    free: number;
    max: number;
    used: number;
}
/**
 * Information about the user's usage for the current period.
**/
export declare class CommentUserUploadQuotaPeriodic extends SpeakeasyBase {
    free: number;
    max: number;
    resetDate: string;
    used: number;
}
export declare enum CommentUserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime",
    Periodic = "periodic"
}
/**
 * Information about the user's upload space remaining for the current period.
**/
export declare class CommentUserUploadQuotaSpace extends SpeakeasyBase {
    free: number;
    max: number;
    showing: CommentUserUploadQuotaSpaceShowingEnum;
    used: number;
}
/**
 * Appears only when the user has upload access and is looking at their own user record.
**/
export declare class CommentUserUploadQuota extends SpeakeasyBase {
    lifetime: CommentUserUploadQuotaLifetime;
    periodic: CommentUserUploadQuotaPeriodic;
    space: CommentUserUploadQuotaSpace;
}
export declare class CommentUserWebsites extends SpeakeasyBase {
    description: string;
    link: string;
    name: string;
}
/**
 * The user who posted the comment.
**/
export declare class CommentUser extends SpeakeasyBase {
    account: CommentUserAccountEnum;
    bio: string;
    contentFilter?: string[];
    createdTime: string;
    email?: string;
    link: string;
    location: string;
    metadata: CommentUserMetadata;
    name: string;
    pictures: Picture;
    preferences?: CommentUserPreferences;
    resourceKey: string;
    uploadQuota: CommentUserUploadQuota;
    uri: string;
    websites: CommentUserWebsites[];
}
export declare class Comment extends SpeakeasyBase {
    createdOn: string;
    metadata: CommentMetadata;
    resourceKey: string;
    text: string;
    type: CommentTypeEnum;
    uri: string;
    user: CommentUser;
}
