import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { EmbedSettings } from "./embedsettings";
import { User } from "./user";
import { Picture } from "./picture";
import { Tag } from "./tag";
export declare enum VideoContextActionEnum {
    AddedTo = "Added to",
    AppearanceBy = "Appearance by",
    LikedBy = "Liked by",
    UploadedBy = "Uploaded by"
}
/**
 * The context of the video's subscription, if this video is part of a subscription.
**/
export declare class VideoContext extends SpeakeasyBase {
    action: VideoContextActionEnum;
    resource: Map<string, any>;
    resourceType: string;
}
export declare enum VideoLicenseEnum {
    By = "by",
    ByNc = "by-nc",
    ByNcNd = "by-nc-nd",
    ByNcSa = "by-nc-sa",
    ByNd = "by-nd",
    BySa = "by-sa",
    Cc0 = "cc0"
}
/**
 * Information about the comments on this video.
**/
export declare class VideoMetadataConnectionsComments extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the users credited in this video.
**/
export declare class VideoMetadataConnectionsCredits extends SpeakeasyBase {
    options?: string[];
    total?: number;
    uri?: string;
}
/**
 * Information about the users who have liked this video.
**/
export declare class VideoMetadataConnectionsLikes extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this video's ondemand data.
**/
export declare class VideoMetadataConnectionsOndemand extends SpeakeasyBase {
    options: string[];
    resourceKey: string;
    uri: string;
}
/**
 * Information about this video's thumbnails.
**/
export declare class VideoMetadataConnectionsPictures extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * The DRM playback status connection for this video.
**/
export declare class VideoMetadataConnectionsPlayback extends SpeakeasyBase {
    options: string[];
    uri: string;
}
/**
 * The recommendations for this video.
**/
export declare class VideoMetadataConnectionsRecommendations extends SpeakeasyBase {
    options?: string[];
    uri?: string;
}
/**
 * Related content for this video.
**/
export declare class VideoMetadataConnectionsRelated extends SpeakeasyBase {
    options?: string[];
    uri?: string;
}
/**
 * Information about the video's season.
**/
export declare class VideoMetadataConnectionsSeason extends SpeakeasyBase {
    name: string;
    options: string[];
    uri: string;
}
/**
 * Information about this video's text tracks.
**/
export declare class VideoMetadataConnectionsTexttracks extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this video's VOD trailer.
**/
export declare class VideoMetadataConnectionsTrailer extends SpeakeasyBase {
    options: string[];
    resourceKey: string;
    uri: string;
}
/**
 * Information about the user privacy of this video, if the video privacy is `users`.
**/
export declare class VideoMetadataConnectionsUsersWithAccess extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the versions of this video.
**/
export declare class VideoMetadataConnectionsVersions extends SpeakeasyBase {
    currentUri?: string;
    options: string[];
    total: number;
    uri: string;
}
/**
 * A list of resource URIs related to the video.
**/
export declare class VideoMetadataConnections extends SpeakeasyBase {
    comments: VideoMetadataConnectionsComments;
    credits: VideoMetadataConnectionsCredits;
    likes: VideoMetadataConnectionsLikes;
    ondemand: VideoMetadataConnectionsOndemand;
    pictures: VideoMetadataConnectionsPictures;
    playback: VideoMetadataConnectionsPlayback;
    recommendations: VideoMetadataConnectionsRecommendations;
    related: VideoMetadataConnectionsRelated;
    season: VideoMetadataConnectionsSeason;
    texttracks: VideoMetadataConnectionsTexttracks;
    trailer: VideoMetadataConnectionsTrailer;
    usersWithAccess: VideoMetadataConnectionsUsersWithAccess;
    versions: VideoMetadataConnectionsVersions;
}
export declare enum VideoMetadataInteractionsBuyDownloadEnum {
    Available = "available",
    Purchased = "purchased",
    Restricted = "restricted",
    Unavailable = "unavailable"
}
export declare enum VideoMetadataInteractionsBuyStreamEnum {
    Available = "available",
    Purchased = "purchased",
    Restricted = "restricted",
    Unavailable = "unavailable"
}
/**
 * The Buy interaction for a On Demand video.
**/
export declare class VideoMetadataInteractionsBuy extends SpeakeasyBase {
    currency: string;
    displayPrice: string;
    download: VideoMetadataInteractionsBuyDownloadEnum;
    drm: boolean;
    link: string;
    price: number;
    purchaseTime: string;
    stream: VideoMetadataInteractionsBuyStreamEnum;
    uri: string;
}
/**
 * When a video is referenced by a channel URI, if the user is a moderator of the channel, include information about removing the video from the channel.
**/
export declare class VideoMetadataInteractionsChannel extends SpeakeasyBase {
    options: string[];
    uri: string;
}
/**
 * Information about whether the authenticated user has liked this video.
**/
export declare class VideoMetadataInteractionsLike extends SpeakeasyBase {
    added: boolean;
    addedTime: string;
    options: string[];
    uri: string;
}
export declare enum VideoMetadataInteractionsRentStreamEnum {
    Available = "available",
    Purchased = "purchased",
    Restricted = "restricted",
    Unavailable = "unavailable"
}
/**
 * The Rent interaction for an On Demand video.
**/
export declare class VideoMetadataInteractionsRent extends SpeakeasyBase {
    currency: string;
    displayPrice: string;
    drm: boolean;
    expiresTime: string;
    link: string;
    price: number;
    purchaseTime: string;
    stream: VideoMetadataInteractionsRentStreamEnum;
    uri: string;
}
/**
 * Information about where and how to report a video.
**/
export declare class VideoMetadataInteractionsReport extends SpeakeasyBase {
    options: string[];
    reason: string[];
    uri: string;
}
/**
 * Subscription information for an On Demand video.
**/
export declare class VideoMetadataInteractionsSubscribe extends SpeakeasyBase {
    drm?: boolean;
    expiresTime?: string;
    purchaseTime?: string;
    stream?: string;
}
/**
 * Information about removing this video from the user's list of watched videos.
**/
export declare class VideoMetadataInteractionsWatched extends SpeakeasyBase {
    added: boolean;
    addedTime: string;
    options: string[];
    uri: string;
}
/**
 * Information about whether this video appears on the authenticated user's Watch Later list.
**/
export declare class VideoMetadataInteractionsWatchlater extends SpeakeasyBase {
    added: boolean;
    addedTime: string;
    options: string[];
    uri: string;
}
/**
 * A list of resource URIs related to the video.
**/
export declare class VideoMetadataInteractions extends SpeakeasyBase {
    buy: VideoMetadataInteractionsBuy;
    channel: VideoMetadataInteractionsChannel;
    like: VideoMetadataInteractionsLike;
    rent: VideoMetadataInteractionsRent;
    report: VideoMetadataInteractionsReport;
    subscribe?: VideoMetadataInteractionsSubscribe;
    watched: VideoMetadataInteractionsWatched;
    watchlater: VideoMetadataInteractionsWatchlater;
}
/**
 * The video's metadata.
**/
export declare class VideoMetadata extends SpeakeasyBase {
    connections: VideoMetadataConnections;
    interactions: VideoMetadataInteractions;
}
/**
 * A standard connection object indicating how to get all the videos in this project.
**/
export declare class VideoProjectMetadataConnectionsVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A list of resource URIs related to the project.
**/
export declare class VideoProjectMetadataConnections extends SpeakeasyBase {
    videos: VideoProjectMetadataConnectionsVideos;
}
/**
 * The project's metadata.
**/
export declare class VideoProjectMetadata extends SpeakeasyBase {
    connections: VideoProjectMetadataConnections;
}
/**
 * Information about the folder that contains this video.
**/
export declare class VideoProject extends SpeakeasyBase {
    createdTime: string;
    metadata: VideoProjectMetadata;
    modifiedTime: string;
    name: string;
    resourceKey: string;
    uri: string;
    user: User;
}
export declare enum VideoPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}
export declare enum VideoPrivacyEmbedEnum {
    Private = "private",
    Public = "public"
}
export declare enum VideoPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}
/**
 * The video's privacy setting.
**/
export declare class VideoPrivacy extends SpeakeasyBase {
    add: boolean;
    comments: VideoPrivacyCommentsEnum;
    download: boolean;
    embed: VideoPrivacyEmbedEnum;
    view: VideoPrivacyViewEnum;
}
export declare class VideoSpatialDirectorTimeline extends SpeakeasyBase {
    pitch?: number;
    roll?: number;
    timeCode?: number;
    yaw?: number;
}
export declare enum VideoSpatialProjectionEnum {
    Cubical = "cubical",
    Cylindrical = "cylindrical",
    Dome = "dome",
    Equirectangular = "equirectangular",
    Pyramid = "pyramid"
}
export declare enum VideoSpatialStereoFormatEnum {
    LeftRight = "left-right",
    Mono = "mono",
    TopBottom = "top-bottom"
}
/**
 * 360 spatial data.
**/
export declare class VideoSpatial extends SpeakeasyBase {
    directorTimeline: VideoSpatialDirectorTimeline[];
    fieldOfView: number;
    projection: VideoSpatialProjectionEnum;
    stereoFormat: VideoSpatialStereoFormatEnum;
}
/**
 * A collection of stats associated with this video.
**/
export declare class VideoStats extends SpeakeasyBase {
    plays: number;
}
export declare enum VideoStatusEnum {
    Available = "available",
    QuotaExceeded = "quota_exceeded",
    TotalCapExceeded = "total_cap_exceeded",
    TranscodeStarting = "transcode_starting",
    Transcoding = "transcoding",
    TranscodingError = "transcoding_error",
    Unavailable = "unavailable",
    Uploading = "uploading",
    UploadingError = "uploading_error"
}
export declare enum VideoTranscodeStatusEnum {
    Complete = "complete",
    Error = "error",
    InProgress = "in_progress"
}
/**
 * The transcode information for a video upload.
**/
export declare class VideoTranscode extends SpeakeasyBase {
    status?: VideoTranscodeStatusEnum;
}
export declare enum VideoUploadApproachEnum {
    Post = "post",
    Pull = "pull",
    Streaming = "streaming",
    Tus = "tus"
}
export declare enum VideoUploadStatusEnum {
    Complete = "complete",
    Error = "error",
    InProgress = "in_progress"
}
/**
 * The upload information for this video.
**/
export declare class VideoUpload extends SpeakeasyBase {
    approach?: VideoUploadApproachEnum;
    completeUri?: string;
    form?: string;
    link?: string;
    redirectUrl?: string;
    size?: number;
    status: VideoUploadStatusEnum;
    uploadLink?: string;
}
export declare enum VideoUserAccountEnum {
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
export declare class VideoUserMetadataConnectionsAlbums extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the appearances of this user in other videos.
**/
export declare class VideoUserMetadataConnectionsAppearances extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
export declare class VideoUserMetadataConnectionsBlock extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's followed categories.
**/
export declare class VideoUserMetadataConnectionsCategories extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's subscribed channels.
**/
export declare class VideoUserMetadataConnectionsChannels extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's feed.
**/
export declare class VideoUserMetadataConnectionsFeed extends SpeakeasyBase {
    options: string[];
    uri: string;
}
/**
 * Information about this user's folders.
**/
export declare class VideoUserMetadataConnectionsFolders extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the user's followers.
**/
export declare class VideoUserMetadataConnectionsFollowers extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the users that the current user is following.
**/
export declare class VideoUserMetadataConnectionsFollowing extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the groups created by this user.
**/
export declare class VideoUserMetadataConnectionsGroups extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that this user has liked.
**/
export declare class VideoUserMetadataConnectionsLikes extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the channels that this user moderates.
**/
export declare class VideoUserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's portraits.
**/
export declare class VideoUserMetadataConnectionsPictures extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's portfolios.
**/
export declare class VideoUserMetadataConnectionsPortfolios extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export declare class VideoUserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export declare class VideoUserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that have been shared with this user.
**/
export declare class VideoUserMetadataConnectionsShared extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos uploaded by this user.
**/
export declare class VideoUserMetadataConnectionsVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that this user has watched.
**/
export declare class VideoUserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that this user wants to watch later.
**/
export declare class VideoUserMetadataConnectionsWatchlater extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * The list of resource URIs related to the user.
**/
export declare class VideoUserMetadataConnections extends SpeakeasyBase {
    albums: VideoUserMetadataConnectionsAlbums;
    appearances: VideoUserMetadataConnectionsAppearances;
    block: VideoUserMetadataConnectionsBlock;
    categories: VideoUserMetadataConnectionsCategories;
    channels: VideoUserMetadataConnectionsChannels;
    feed: VideoUserMetadataConnectionsFeed;
    folders: VideoUserMetadataConnectionsFolders;
    followers: VideoUserMetadataConnectionsFollowers;
    following: VideoUserMetadataConnectionsFollowing;
    groups: VideoUserMetadataConnectionsGroups;
    likes: VideoUserMetadataConnectionsLikes;
    moderatedChannels: VideoUserMetadataConnectionsModeratedChannels;
    pictures: VideoUserMetadataConnectionsPictures;
    portfolios: VideoUserMetadataConnectionsPortfolios;
    recommendedChannels: VideoUserMetadataConnectionsRecommendedChannels;
    recommendedUsers: VideoUserMetadataConnectionsRecommendedUsers;
    shared: VideoUserMetadataConnectionsShared;
    videos: VideoUserMetadataConnectionsVideos;
    watchedVideos: VideoUserMetadataConnectionsWatchedVideos;
    watchlater: VideoUserMetadataConnectionsWatchlater;
}
export declare class VideoUserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
    options?: string[];
    uri?: string;
}
/**
 * Information related to the block status of this user.
**/
export declare class VideoUserMetadataInteractionsBlock extends SpeakeasyBase {
    added: boolean;
    addedTime: string;
    options: string[];
    uri: string;
}
/**
 * Information related to the followed status of this user.
**/
export declare class VideoUserMetadataInteractionsFollow extends SpeakeasyBase {
    added: boolean;
    options: string[];
    uri: string;
}
/**
 * Information regarding where and how to report a user.
**/
export declare class VideoUserMetadataInteractionsReport extends SpeakeasyBase {
    options: string[];
    reason: string[];
    uri: string;
}
export declare class VideoUserMetadataInteractions extends SpeakeasyBase {
    addPrivacyUser?: VideoUserMetadataInteractionsAddPrivacyUser;
    block: VideoUserMetadataInteractionsBlock;
    follow: VideoUserMetadataInteractionsFollow;
    report: VideoUserMetadataInteractionsReport;
}
/**
 * The user's metadata.
**/
export declare class VideoUserMetadata extends SpeakeasyBase {
    connections: VideoUserMetadataConnections;
    interactions: VideoUserMetadataInteractions;
}
export declare enum VideoUserPreferencesVideosPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}
export declare enum VideoUserPreferencesVideosPrivacyEmbedEnum {
    Private = "private",
    Public = "public",
    Whitelist = "whitelist"
}
export declare enum VideoUserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}
export declare class VideoUserPreferencesVideosPrivacy extends SpeakeasyBase {
    add?: boolean;
    comments?: VideoUserPreferencesVideosPrivacyCommentsEnum;
    download?: boolean;
    embed?: VideoUserPreferencesVideosPrivacyEmbedEnum;
    view?: VideoUserPreferencesVideosPrivacyViewEnum;
}
export declare class VideoUserPreferencesVideos extends SpeakeasyBase {
    privacy?: VideoUserPreferencesVideosPrivacy;
}
export declare class VideoUserPreferences extends SpeakeasyBase {
    videos?: VideoUserPreferencesVideos;
}
/**
 * Information about the user's lifetime upload usage.
**/
export declare class VideoUserUploadQuotaLifetime extends SpeakeasyBase {
    free: number;
    max: number;
    used: number;
}
/**
 * Information about the user's usage for the current period.
**/
export declare class VideoUserUploadQuotaPeriodic extends SpeakeasyBase {
    free: number;
    max: number;
    resetDate: string;
    used: number;
}
export declare enum VideoUserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime",
    Periodic = "periodic"
}
/**
 * Information about the user's upload space remaining for the current period.
**/
export declare class VideoUserUploadQuotaSpace extends SpeakeasyBase {
    free: number;
    max: number;
    showing: VideoUserUploadQuotaSpaceShowingEnum;
    used: number;
}
/**
 * Appears only when the user has upload access and is looking at their own user record.
**/
export declare class VideoUserUploadQuota extends SpeakeasyBase {
    lifetime: VideoUserUploadQuotaLifetime;
    periodic: VideoUserUploadQuotaPeriodic;
    space: VideoUserUploadQuotaSpace;
}
export declare class VideoUserWebsites extends SpeakeasyBase {
    description: string;
    link: string;
    name: string;
}
/**
 * The video owner.
**/
export declare class VideoUser extends SpeakeasyBase {
    account: VideoUserAccountEnum;
    bio: string;
    contentFilter?: string[];
    createdTime: string;
    email?: string;
    link: string;
    location: string;
    metadata: VideoUserMetadata;
    name: string;
    pictures: Picture;
    preferences?: VideoUserPreferences;
    resourceKey: string;
    uploadQuota: VideoUserUploadQuota;
    uri: string;
    websites: VideoUserWebsites[];
}
export declare class Video extends SpeakeasyBase {
    categories: Category[];
    contentRating: string[];
    context: VideoContext;
    createdTime: string;
    description: string;
    duration: number;
    embed: EmbedSettings;
    height: number;
    language: string;
    lastUserActionEventDate?: string;
    license: VideoLicenseEnum;
    link: string;
    metadata: VideoMetadata;
    modifiedTime: string;
    name: string;
    parentFolder?: VideoProject;
    password?: string;
    pictures: Picture;
    privacy: VideoPrivacy;
    releaseTime: string;
    resourceKey: string;
    spatial: VideoSpatial;
    stats: VideoStats;
    status: VideoStatusEnum;
    tags: Tag[];
    transcode: VideoTranscode;
    upload: VideoUpload;
    uri: string;
    user: VideoUser;
    width: number;
}
