import { SpeakeasyBase } from "../../../internal/utils";
import { Picture } from "./picture";
/**
 * Information about the videos in this preset.
**/
export declare class PresetsMetadataConnectionsVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A list of resource URIs related to the album.
**/
export declare class PresetsMetadataConnections extends SpeakeasyBase {
    videos: PresetsMetadataConnectionsVideos;
}
/**
 * Metadata about the album.
**/
export declare class PresetsMetadata extends SpeakeasyBase {
    connections: PresetsMetadataConnections;
}
export declare class PresetsSettingsButtons extends SpeakeasyBase {
    embed: boolean;
    hd: boolean;
    like: boolean;
    share: boolean;
    vote: boolean;
    watchlater: boolean;
}
export declare class PresetsSettingsLogos extends SpeakeasyBase {
    custom: boolean;
    stickyCustom: boolean;
    vimeo: boolean;
}
/**
 * The outro link settings. Present only if the type is `link`.
**/
export declare class PresetsSettingsOutroLink extends SpeakeasyBase {
    name?: string;
    url?: string;
}
export declare enum PresetsSettingsOutroTypeEnum {
    Link = "link",
    NoIdea = "no idea",
    Text = "text",
    UploadedClips = "uploaded_clips",
    UploadedVideos = "uploaded_videos"
}
export declare class PresetsSettingsOutro extends SpeakeasyBase {
    clips?: string;
    link?: PresetsSettingsOutroLink;
    text?: string;
    type: PresetsSettingsOutroTypeEnum;
    videos?: string;
}
/**
 * The contents of the presets group.
**/
export declare class PresetsSettings extends SpeakeasyBase {
    buttons: PresetsSettingsButtons;
    logos: PresetsSettingsLogos;
    outro: PresetsSettingsOutro;
}
export declare enum PresetsUserAccountEnum {
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
export declare class PresetsUserMetadataConnectionsAlbums extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the appearances of this user in other videos.
**/
export declare class PresetsUserMetadataConnectionsAppearances extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
export declare class PresetsUserMetadataConnectionsBlock extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's followed categories.
**/
export declare class PresetsUserMetadataConnectionsCategories extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's subscribed channels.
**/
export declare class PresetsUserMetadataConnectionsChannels extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's feed.
**/
export declare class PresetsUserMetadataConnectionsFeed extends SpeakeasyBase {
    options: string[];
    uri: string;
}
/**
 * Information about this user's folders.
**/
export declare class PresetsUserMetadataConnectionsFolders extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the user's followers.
**/
export declare class PresetsUserMetadataConnectionsFollowers extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the users that the current user is following.
**/
export declare class PresetsUserMetadataConnectionsFollowing extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the groups created by this user.
**/
export declare class PresetsUserMetadataConnectionsGroups extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that this user has liked.
**/
export declare class PresetsUserMetadataConnectionsLikes extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the channels that this user moderates.
**/
export declare class PresetsUserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's portraits.
**/
export declare class PresetsUserMetadataConnectionsPictures extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's portfolios.
**/
export declare class PresetsUserMetadataConnectionsPortfolios extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export declare class PresetsUserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export declare class PresetsUserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that have been shared with this user.
**/
export declare class PresetsUserMetadataConnectionsShared extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos uploaded by this user.
**/
export declare class PresetsUserMetadataConnectionsVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that this user has watched.
**/
export declare class PresetsUserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that this user wants to watch later.
**/
export declare class PresetsUserMetadataConnectionsWatchlater extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * The list of resource URIs related to the user.
**/
export declare class PresetsUserMetadataConnections extends SpeakeasyBase {
    albums: PresetsUserMetadataConnectionsAlbums;
    appearances: PresetsUserMetadataConnectionsAppearances;
    block: PresetsUserMetadataConnectionsBlock;
    categories: PresetsUserMetadataConnectionsCategories;
    channels: PresetsUserMetadataConnectionsChannels;
    feed: PresetsUserMetadataConnectionsFeed;
    folders: PresetsUserMetadataConnectionsFolders;
    followers: PresetsUserMetadataConnectionsFollowers;
    following: PresetsUserMetadataConnectionsFollowing;
    groups: PresetsUserMetadataConnectionsGroups;
    likes: PresetsUserMetadataConnectionsLikes;
    moderatedChannels: PresetsUserMetadataConnectionsModeratedChannels;
    pictures: PresetsUserMetadataConnectionsPictures;
    portfolios: PresetsUserMetadataConnectionsPortfolios;
    recommendedChannels: PresetsUserMetadataConnectionsRecommendedChannels;
    recommendedUsers: PresetsUserMetadataConnectionsRecommendedUsers;
    shared: PresetsUserMetadataConnectionsShared;
    videos: PresetsUserMetadataConnectionsVideos;
    watchedVideos: PresetsUserMetadataConnectionsWatchedVideos;
    watchlater: PresetsUserMetadataConnectionsWatchlater;
}
export declare class PresetsUserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
    options?: string[];
    uri?: string;
}
/**
 * Information related to the block status of this user.
**/
export declare class PresetsUserMetadataInteractionsBlock extends SpeakeasyBase {
    added: boolean;
    addedTime: string;
    options: string[];
    uri: string;
}
/**
 * Information related to the followed status of this user.
**/
export declare class PresetsUserMetadataInteractionsFollow extends SpeakeasyBase {
    added: boolean;
    options: string[];
    uri: string;
}
/**
 * Information regarding where and how to report a user.
**/
export declare class PresetsUserMetadataInteractionsReport extends SpeakeasyBase {
    options: string[];
    reason: string[];
    uri: string;
}
export declare class PresetsUserMetadataInteractions extends SpeakeasyBase {
    addPrivacyUser?: PresetsUserMetadataInteractionsAddPrivacyUser;
    block: PresetsUserMetadataInteractionsBlock;
    follow: PresetsUserMetadataInteractionsFollow;
    report: PresetsUserMetadataInteractionsReport;
}
/**
 * The user's metadata.
**/
export declare class PresetsUserMetadata extends SpeakeasyBase {
    connections: PresetsUserMetadataConnections;
    interactions: PresetsUserMetadataInteractions;
}
export declare enum PresetsUserPreferencesVideosPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}
export declare enum PresetsUserPreferencesVideosPrivacyEmbedEnum {
    Private = "private",
    Public = "public",
    Whitelist = "whitelist"
}
export declare enum PresetsUserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}
export declare class PresetsUserPreferencesVideosPrivacy extends SpeakeasyBase {
    add?: boolean;
    comments?: PresetsUserPreferencesVideosPrivacyCommentsEnum;
    download?: boolean;
    embed?: PresetsUserPreferencesVideosPrivacyEmbedEnum;
    view?: PresetsUserPreferencesVideosPrivacyViewEnum;
}
export declare class PresetsUserPreferencesVideos extends SpeakeasyBase {
    privacy?: PresetsUserPreferencesVideosPrivacy;
}
export declare class PresetsUserPreferences extends SpeakeasyBase {
    videos?: PresetsUserPreferencesVideos;
}
/**
 * Information about the user's lifetime upload usage.
**/
export declare class PresetsUserUploadQuotaLifetime extends SpeakeasyBase {
    free: number;
    max: number;
    used: number;
}
/**
 * Information about the user's usage for the current period.
**/
export declare class PresetsUserUploadQuotaPeriodic extends SpeakeasyBase {
    free: number;
    max: number;
    resetDate: string;
    used: number;
}
export declare enum PresetsUserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime",
    Periodic = "periodic"
}
/**
 * Information about the user's upload space remaining for the current period.
**/
export declare class PresetsUserUploadQuotaSpace extends SpeakeasyBase {
    free: number;
    max: number;
    showing: PresetsUserUploadQuotaSpaceShowingEnum;
    used: number;
}
/**
 * Appears only when the user has upload access and is looking at their own user record.
**/
export declare class PresetsUserUploadQuota extends SpeakeasyBase {
    lifetime: PresetsUserUploadQuotaLifetime;
    periodic: PresetsUserUploadQuotaPeriodic;
    space: PresetsUserUploadQuotaSpace;
}
export declare class PresetsUserWebsites extends SpeakeasyBase {
    description: string;
    link: string;
    name: string;
}
/**
 * The owner of the preset.
**/
export declare class PresetsUser extends SpeakeasyBase {
    account: PresetsUserAccountEnum;
    bio: string;
    contentFilter?: string[];
    createdTime: string;
    email?: string;
    link: string;
    location: string;
    metadata: PresetsUserMetadata;
    name: string;
    pictures: Picture;
    preferences?: PresetsUserPreferences;
    resourceKey: string;
    uploadQuota: PresetsUserUploadQuota;
    uri: string;
    websites: PresetsUserWebsites[];
}
export declare class Presets extends SpeakeasyBase {
    metadata: PresetsMetadata;
    name: string;
    settings: PresetsSettings;
    uri: string;
    user: PresetsUser;
}
