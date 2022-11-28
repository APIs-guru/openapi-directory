import { SpeakeasyBase } from "../../../internal/utils";
import { Picture } from "./picture";
/**
 * Information about the members or moderators of this group.
**/
export declare class GroupMetadataConnectionsUsers extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos contained within this group.
**/
export declare class GroupMetadataConnectionsVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A collection of information that is connected to this resource.
**/
export declare class GroupMetadataConnections extends SpeakeasyBase {
    users: GroupMetadataConnectionsUsers;
    videos: GroupMetadataConnectionsVideos;
}
export declare enum GroupMetadataInteractionsJoinTypeEnum {
    Member = "member",
    Moderator = "moderator"
}
/**
 * An action indicating that someone has joined the group. This data requires a bearer token with the `private` scope.
**/
export declare class GroupMetadataInteractionsJoin extends SpeakeasyBase {
    added: boolean;
    addedTime: string;
    title: string;
    type: GroupMetadataInteractionsJoinTypeEnum;
    uri: string;
}
/**
 * User actions that have involved the group. This data requires a bearer token with the `private` scope.
**/
export declare class GroupMetadataInteractions extends SpeakeasyBase {
    join: GroupMetadataInteractionsJoin;
}
/**
 * Metadata about the group.
**/
export declare class GroupMetadata extends SpeakeasyBase {
    connections: GroupMetadataConnections;
    interactions: GroupMetadataInteractions;
}
export declare enum GroupPrivacyCommentEnum {
    All = "all",
    Members = "members"
}
export declare enum GroupPrivacyInviteEnum {
    All = "all",
    Members = "members"
}
export declare enum GroupPrivacyJoinEnum {
    Anybody = "anybody",
    Members = "members"
}
export declare enum GroupPrivacyVideosEnum {
    All = "all",
    Members = "members"
}
export declare enum GroupPrivacyViewEnum {
    Anybody = "anybody",
    Members = "members"
}
/**
 * The group's privacy settings.
**/
export declare class GroupPrivacy extends SpeakeasyBase {
    comment: GroupPrivacyCommentEnum;
    invite: GroupPrivacyInviteEnum;
    join: GroupPrivacyJoinEnum;
    videos: GroupPrivacyVideosEnum;
    view: GroupPrivacyViewEnum;
}
export declare enum GroupUserAccountEnum {
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
export declare class GroupUserMetadataConnectionsAlbums extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the appearances of this user in other videos.
**/
export declare class GroupUserMetadataConnectionsAppearances extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
export declare class GroupUserMetadataConnectionsBlock extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's followed categories.
**/
export declare class GroupUserMetadataConnectionsCategories extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's subscribed channels.
**/
export declare class GroupUserMetadataConnectionsChannels extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's feed.
**/
export declare class GroupUserMetadataConnectionsFeed extends SpeakeasyBase {
    options: string[];
    uri: string;
}
/**
 * Information about this user's folders.
**/
export declare class GroupUserMetadataConnectionsFolders extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the user's followers.
**/
export declare class GroupUserMetadataConnectionsFollowers extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the users that the current user is following.
**/
export declare class GroupUserMetadataConnectionsFollowing extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the groups created by this user.
**/
export declare class GroupUserMetadataConnectionsGroups extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that this user has liked.
**/
export declare class GroupUserMetadataConnectionsLikes extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the channels that this user moderates.
**/
export declare class GroupUserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's portraits.
**/
export declare class GroupUserMetadataConnectionsPictures extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's portfolios.
**/
export declare class GroupUserMetadataConnectionsPortfolios extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export declare class GroupUserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export declare class GroupUserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that have been shared with this user.
**/
export declare class GroupUserMetadataConnectionsShared extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos uploaded by this user.
**/
export declare class GroupUserMetadataConnectionsVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that this user has watched.
**/
export declare class GroupUserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that this user wants to watch later.
**/
export declare class GroupUserMetadataConnectionsWatchlater extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * The list of resource URIs related to the user.
**/
export declare class GroupUserMetadataConnections extends SpeakeasyBase {
    albums: GroupUserMetadataConnectionsAlbums;
    appearances: GroupUserMetadataConnectionsAppearances;
    block: GroupUserMetadataConnectionsBlock;
    categories: GroupUserMetadataConnectionsCategories;
    channels: GroupUserMetadataConnectionsChannels;
    feed: GroupUserMetadataConnectionsFeed;
    folders: GroupUserMetadataConnectionsFolders;
    followers: GroupUserMetadataConnectionsFollowers;
    following: GroupUserMetadataConnectionsFollowing;
    groups: GroupUserMetadataConnectionsGroups;
    likes: GroupUserMetadataConnectionsLikes;
    moderatedChannels: GroupUserMetadataConnectionsModeratedChannels;
    pictures: GroupUserMetadataConnectionsPictures;
    portfolios: GroupUserMetadataConnectionsPortfolios;
    recommendedChannels: GroupUserMetadataConnectionsRecommendedChannels;
    recommendedUsers: GroupUserMetadataConnectionsRecommendedUsers;
    shared: GroupUserMetadataConnectionsShared;
    videos: GroupUserMetadataConnectionsVideos;
    watchedVideos: GroupUserMetadataConnectionsWatchedVideos;
    watchlater: GroupUserMetadataConnectionsWatchlater;
}
export declare class GroupUserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
    options?: string[];
    uri?: string;
}
/**
 * Information related to the block status of this user.
**/
export declare class GroupUserMetadataInteractionsBlock extends SpeakeasyBase {
    added: boolean;
    addedTime: string;
    options: string[];
    uri: string;
}
/**
 * Information related to the followed status of this user.
**/
export declare class GroupUserMetadataInteractionsFollow extends SpeakeasyBase {
    added: boolean;
    options: string[];
    uri: string;
}
/**
 * Information regarding where and how to report a user.
**/
export declare class GroupUserMetadataInteractionsReport extends SpeakeasyBase {
    options: string[];
    reason: string[];
    uri: string;
}
export declare class GroupUserMetadataInteractions extends SpeakeasyBase {
    addPrivacyUser?: GroupUserMetadataInteractionsAddPrivacyUser;
    block: GroupUserMetadataInteractionsBlock;
    follow: GroupUserMetadataInteractionsFollow;
    report: GroupUserMetadataInteractionsReport;
}
/**
 * The user's metadata.
**/
export declare class GroupUserMetadata extends SpeakeasyBase {
    connections: GroupUserMetadataConnections;
    interactions: GroupUserMetadataInteractions;
}
export declare enum GroupUserPreferencesVideosPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}
export declare enum GroupUserPreferencesVideosPrivacyEmbedEnum {
    Private = "private",
    Public = "public",
    Whitelist = "whitelist"
}
export declare enum GroupUserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}
export declare class GroupUserPreferencesVideosPrivacy extends SpeakeasyBase {
    add?: boolean;
    comments?: GroupUserPreferencesVideosPrivacyCommentsEnum;
    download?: boolean;
    embed?: GroupUserPreferencesVideosPrivacyEmbedEnum;
    view?: GroupUserPreferencesVideosPrivacyViewEnum;
}
export declare class GroupUserPreferencesVideos extends SpeakeasyBase {
    privacy?: GroupUserPreferencesVideosPrivacy;
}
export declare class GroupUserPreferences extends SpeakeasyBase {
    videos?: GroupUserPreferencesVideos;
}
/**
 * Information about the user's lifetime upload usage.
**/
export declare class GroupUserUploadQuotaLifetime extends SpeakeasyBase {
    free: number;
    max: number;
    used: number;
}
/**
 * Information about the user's usage for the current period.
**/
export declare class GroupUserUploadQuotaPeriodic extends SpeakeasyBase {
    free: number;
    max: number;
    resetDate: string;
    used: number;
}
export declare enum GroupUserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime",
    Periodic = "periodic"
}
/**
 * Information about the user's upload space remaining for the current period.
**/
export declare class GroupUserUploadQuotaSpace extends SpeakeasyBase {
    free: number;
    max: number;
    showing: GroupUserUploadQuotaSpaceShowingEnum;
    used: number;
}
/**
 * Appears only when the user has upload access and is looking at their own user record.
**/
export declare class GroupUserUploadQuota extends SpeakeasyBase {
    lifetime: GroupUserUploadQuotaLifetime;
    periodic: GroupUserUploadQuotaPeriodic;
    space: GroupUserUploadQuotaSpace;
}
export declare class GroupUserWebsites extends SpeakeasyBase {
    description: string;
    link: string;
    name: string;
}
/**
 * The owner of the group.
**/
export declare class GroupUser extends SpeakeasyBase {
    account: GroupUserAccountEnum;
    bio: string;
    contentFilter?: string[];
    createdTime: string;
    email?: string;
    link: string;
    location: string;
    metadata: GroupUserMetadata;
    name: string;
    pictures: Picture;
    preferences?: GroupUserPreferences;
    resourceKey: string;
    uploadQuota: GroupUserUploadQuota;
    uri: string;
    websites: GroupUserWebsites[];
}
export declare class Group extends SpeakeasyBase {
    createdTime: string;
    description: string;
    link: string;
    metadata: GroupMetadata;
    modifiedTime: string;
    name: string;
    pictures: Picture;
    privacy: GroupPrivacy;
    resourceKey: string;
    uri: string;
    user?: GroupUser;
}
