import { SpeakeasyBase } from "../../../internal/utils";
import { Video } from "./video";
import { OnDemandGenre } from "./ondemandgenre";
import { PurchaseInteraction } from "./purchaseinteraction";
import { Category } from "./category";
import { EmbedSettings } from "./embedsettings";
import { User } from "./user";
import { Picture } from "./picture";
import { Tag } from "./tag";
export declare class OnDemandPagePictureSizes extends SpeakeasyBase {
    height: number;
    link: string;
    linkWithPlayButton?: string;
    width: number;
}
export declare enum OnDemandPagePictureTypeEnum {
    Caution = "caution",
    Custom = "custom",
    Default = "default"
}
/**
 * The background image for the On Demand page on Vimeo.
**/
export declare class OnDemandPagePicture extends SpeakeasyBase {
    active: boolean;
    link?: string;
    resourceKey: string;
    sizes: OnDemandPagePictureSizes[];
    type: OnDemandPagePictureTypeEnum;
    uri: string;
}
/**
 * The primary and secondary colors used for rendering this On Demand page.
**/
export declare class OnDemandPageColors extends SpeakeasyBase {
    primary: string;
    secondary: string;
}
export declare class OnDemandPageEpisodesBuy extends SpeakeasyBase {
    active: boolean;
    price: number;
}
export declare enum OnDemandPageEpisodesRentPeriodEnum {
    OneDay = "1 day",
    OneMonth = "1 month",
    OneWeek = "1 week",
    OneYear = "1 year",
    TwoDay = "2 day",
    TwentyFourHour = "24 hour",
    ThreeDay = "3 day",
    ThreeMonth = "3 month",
    ThirtyDay = "30 day",
    FortyEightHour = "48 hour",
    SixMonth = "6 month",
    SixtyDay = "60 day",
    SevenDay = "7 day",
    SeventyTwoHour = "72 hour"
}
export declare class OnDemandPageEpisodesRent extends SpeakeasyBase {
    active: boolean;
    period: OnDemandPageEpisodesRentPeriodEnum;
    price: number;
}
/**
 * Information about this On Demand page's episodes, if the page is for a series.
**/
export declare class OnDemandPageEpisodes extends SpeakeasyBase {
    buy: OnDemandPageEpisodesBuy;
    rent: OnDemandPageEpisodesRent;
}
/**
 * Information about the comments associated with this page.
**/
export declare class OnDemandPageMetadataConnectionsMetadataConnectionsComments extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the genres associated with this page.
**/
export declare class OnDemandPageMetadataConnectionsMetadataConnectionsGenres extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the likes associated with this page.
**/
export declare class OnDemandPageMetadataConnectionsMetadataConnectionsLikes extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the pictures associated with this page.
**/
export declare class OnDemandPageMetadataConnectionsMetadataConnectionsPictures extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the seasons associated with this page.
**/
export declare class OnDemandPageMetadataConnectionsMetadataConnectionsSeasons extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos associated with this page.
**/
export declare class OnDemandPageMetadataConnectionsMetadataConnectionsVideos extends SpeakeasyBase {
    extraTotal: number;
    mainTotal: number;
    options: string[];
    total: number;
    uri: string;
    viewableTotal: number;
}
export declare class OnDemandPageMetadataConnectionsMetadataConnections extends SpeakeasyBase {
    comments: OnDemandPageMetadataConnectionsMetadataConnectionsComments;
    genres: OnDemandPageMetadataConnectionsMetadataConnectionsGenres;
    likes: OnDemandPageMetadataConnectionsMetadataConnectionsLikes;
    pictures: OnDemandPageMetadataConnectionsMetadataConnectionsPictures;
    seasons: OnDemandPageMetadataConnectionsMetadataConnectionsSeasons;
    videos: OnDemandPageMetadataConnectionsMetadataConnectionsVideos;
}
export declare class OnDemandPageMetadataConnectionsMetadata extends SpeakeasyBase {
    connections: OnDemandPageMetadataConnectionsMetadataConnections;
}
/**
 * A collection of information that is connected to this resource, including videos, genres, and pictures connections.
**/
export declare class OnDemandPageMetadataConnections extends SpeakeasyBase {
    metadata: OnDemandPageMetadataConnectionsMetadata;
}
/**
 * Metadata about the On Demand page.
**/
export declare class OnDemandPageMetadata extends SpeakeasyBase {
    connections: OnDemandPageMetadataConnections;
    interactions: PurchaseInteraction;
}
export declare class OnDemandPagePreorder extends SpeakeasyBase {
    active: boolean;
    cancelTime: string;
    publishTime: string;
    time: string;
}
export declare class OnDemandPagePublished extends SpeakeasyBase {
    enabled: boolean;
    time: string;
}
/**
 * Information about subscribing to this On Demand page, if enabled.
**/
export declare class OnDemandPageSubscription extends SpeakeasyBase {
    active: boolean;
    link: string;
    period?: string;
    price: Map<string, any>;
}
export declare enum OnDemandPageVideoContextActionEnum {
    AddedTo = "Added to",
    AppearanceBy = "Appearance by",
    LikedBy = "Liked by",
    UploadedBy = "Uploaded by"
}
/**
 * The context of the video's subscription, if this video is part of a subscription.
**/
export declare class OnDemandPageVideoContext extends SpeakeasyBase {
    action: OnDemandPageVideoContextActionEnum;
    resource: Map<string, any>;
    resourceType: string;
}
export declare enum OnDemandPageVideoLicenseEnum {
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
export declare class OnDemandPageVideoMetadataConnectionsComments extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the users credited in this video.
**/
export declare class OnDemandPageVideoMetadataConnectionsCredits extends SpeakeasyBase {
    options?: string[];
    total?: number;
    uri?: string;
}
/**
 * Information about the users who have liked this video.
**/
export declare class OnDemandPageVideoMetadataConnectionsLikes extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this video's ondemand data.
**/
export declare class OnDemandPageVideoMetadataConnectionsOndemand extends SpeakeasyBase {
    options: string[];
    resourceKey: string;
    uri: string;
}
/**
 * Information about this video's thumbnails.
**/
export declare class OnDemandPageVideoMetadataConnectionsPictures extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * The DRM playback status connection for this video.
**/
export declare class OnDemandPageVideoMetadataConnectionsPlayback extends SpeakeasyBase {
    options: string[];
    uri: string;
}
/**
 * The recommendations for this video.
**/
export declare class OnDemandPageVideoMetadataConnectionsRecommendations extends SpeakeasyBase {
    options?: string[];
    uri?: string;
}
/**
 * Related content for this video.
**/
export declare class OnDemandPageVideoMetadataConnectionsRelated extends SpeakeasyBase {
    options?: string[];
    uri?: string;
}
/**
 * Information about the video's season.
**/
export declare class OnDemandPageVideoMetadataConnectionsSeason extends SpeakeasyBase {
    name: string;
    options: string[];
    uri: string;
}
/**
 * Information about this video's text tracks.
**/
export declare class OnDemandPageVideoMetadataConnectionsTexttracks extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this video's VOD trailer.
**/
export declare class OnDemandPageVideoMetadataConnectionsTrailer extends SpeakeasyBase {
    options: string[];
    resourceKey: string;
    uri: string;
}
/**
 * Information about the user privacy of this video, if the video privacy is `users`.
**/
export declare class OnDemandPageVideoMetadataConnectionsUsersWithAccess extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the versions of this video.
**/
export declare class OnDemandPageVideoMetadataConnectionsVersions extends SpeakeasyBase {
    currentUri?: string;
    options: string[];
    total: number;
    uri: string;
}
/**
 * A list of resource URIs related to the video.
**/
export declare class OnDemandPageVideoMetadataConnections extends SpeakeasyBase {
    comments: OnDemandPageVideoMetadataConnectionsComments;
    credits: OnDemandPageVideoMetadataConnectionsCredits;
    likes: OnDemandPageVideoMetadataConnectionsLikes;
    ondemand: OnDemandPageVideoMetadataConnectionsOndemand;
    pictures: OnDemandPageVideoMetadataConnectionsPictures;
    playback: OnDemandPageVideoMetadataConnectionsPlayback;
    recommendations: OnDemandPageVideoMetadataConnectionsRecommendations;
    related: OnDemandPageVideoMetadataConnectionsRelated;
    season: OnDemandPageVideoMetadataConnectionsSeason;
    texttracks: OnDemandPageVideoMetadataConnectionsTexttracks;
    trailer: OnDemandPageVideoMetadataConnectionsTrailer;
    usersWithAccess: OnDemandPageVideoMetadataConnectionsUsersWithAccess;
    versions: OnDemandPageVideoMetadataConnectionsVersions;
}
export declare enum OnDemandPageVideoMetadataInteractionsBuyDownloadEnum {
    Available = "available",
    Purchased = "purchased",
    Restricted = "restricted",
    Unavailable = "unavailable"
}
export declare enum OnDemandPageVideoMetadataInteractionsBuyStreamEnum {
    Available = "available",
    Purchased = "purchased",
    Restricted = "restricted",
    Unavailable = "unavailable"
}
/**
 * The Buy interaction for a On Demand video.
**/
export declare class OnDemandPageVideoMetadataInteractionsBuy extends SpeakeasyBase {
    currency: string;
    displayPrice: string;
    download: OnDemandPageVideoMetadataInteractionsBuyDownloadEnum;
    drm: boolean;
    link: string;
    price: number;
    purchaseTime: string;
    stream: OnDemandPageVideoMetadataInteractionsBuyStreamEnum;
    uri: string;
}
/**
 * When a video is referenced by a channel URI, if the user is a moderator of the channel, include information about removing the video from the channel.
**/
export declare class OnDemandPageVideoMetadataInteractionsChannel extends SpeakeasyBase {
    options: string[];
    uri: string;
}
/**
 * Information about whether the authenticated user has liked this video.
**/
export declare class OnDemandPageVideoMetadataInteractionsLike extends SpeakeasyBase {
    added: boolean;
    addedTime: string;
    options: string[];
    uri: string;
}
export declare enum OnDemandPageVideoMetadataInteractionsRentStreamEnum {
    Available = "available",
    Purchased = "purchased",
    Restricted = "restricted",
    Unavailable = "unavailable"
}
/**
 * The Rent interaction for an On Demand video.
**/
export declare class OnDemandPageVideoMetadataInteractionsRent extends SpeakeasyBase {
    currency: string;
    displayPrice: string;
    drm: boolean;
    expiresTime: string;
    link: string;
    price: number;
    purchaseTime: string;
    stream: OnDemandPageVideoMetadataInteractionsRentStreamEnum;
    uri: string;
}
/**
 * Information about where and how to report a video.
**/
export declare class OnDemandPageVideoMetadataInteractionsReport extends SpeakeasyBase {
    options: string[];
    reason: string[];
    uri: string;
}
/**
 * Subscription information for an On Demand video.
**/
export declare class OnDemandPageVideoMetadataInteractionsSubscribe extends SpeakeasyBase {
    drm?: boolean;
    expiresTime?: string;
    purchaseTime?: string;
    stream?: string;
}
/**
 * Information about removing this video from the user's list of watched videos.
**/
export declare class OnDemandPageVideoMetadataInteractionsWatched extends SpeakeasyBase {
    added: boolean;
    addedTime: string;
    options: string[];
    uri: string;
}
/**
 * Information about whether this video appears on the authenticated user's Watch Later list.
**/
export declare class OnDemandPageVideoMetadataInteractionsWatchlater extends SpeakeasyBase {
    added: boolean;
    addedTime: string;
    options: string[];
    uri: string;
}
/**
 * A list of resource URIs related to the video.
**/
export declare class OnDemandPageVideoMetadataInteractions extends SpeakeasyBase {
    buy: OnDemandPageVideoMetadataInteractionsBuy;
    channel: OnDemandPageVideoMetadataInteractionsChannel;
    like: OnDemandPageVideoMetadataInteractionsLike;
    rent: OnDemandPageVideoMetadataInteractionsRent;
    report: OnDemandPageVideoMetadataInteractionsReport;
    subscribe?: OnDemandPageVideoMetadataInteractionsSubscribe;
    watched: OnDemandPageVideoMetadataInteractionsWatched;
    watchlater: OnDemandPageVideoMetadataInteractionsWatchlater;
}
/**
 * The video's metadata.
**/
export declare class OnDemandPageVideoMetadata extends SpeakeasyBase {
    connections: OnDemandPageVideoMetadataConnections;
    interactions: OnDemandPageVideoMetadataInteractions;
}
/**
 * A standard connection object indicating how to get all the videos in this project.
**/
export declare class OnDemandPageVideoProjectMetadataConnectionsVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A list of resource URIs related to the project.
**/
export declare class OnDemandPageVideoProjectMetadataConnections extends SpeakeasyBase {
    videos: OnDemandPageVideoProjectMetadataConnectionsVideos;
}
/**
 * The project's metadata.
**/
export declare class OnDemandPageVideoProjectMetadata extends SpeakeasyBase {
    connections: OnDemandPageVideoProjectMetadataConnections;
}
/**
 * Information about the folder that contains this video.
**/
export declare class OnDemandPageVideoProject extends SpeakeasyBase {
    createdTime: string;
    metadata: OnDemandPageVideoProjectMetadata;
    modifiedTime: string;
    name: string;
    resourceKey: string;
    uri: string;
    user: User;
}
export declare enum OnDemandPageVideoPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}
export declare enum OnDemandPageVideoPrivacyEmbedEnum {
    Private = "private",
    Public = "public"
}
export declare enum OnDemandPageVideoPrivacyViewEnum {
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
export declare class OnDemandPageVideoPrivacy extends SpeakeasyBase {
    add: boolean;
    comments: OnDemandPageVideoPrivacyCommentsEnum;
    download: boolean;
    embed: OnDemandPageVideoPrivacyEmbedEnum;
    view: OnDemandPageVideoPrivacyViewEnum;
}
export declare class OnDemandPageVideoSpatialDirectorTimeline extends SpeakeasyBase {
    pitch?: number;
    roll?: number;
    timeCode?: number;
    yaw?: number;
}
export declare enum OnDemandPageVideoSpatialProjectionEnum {
    Cubical = "cubical",
    Cylindrical = "cylindrical",
    Dome = "dome",
    Equirectangular = "equirectangular",
    Pyramid = "pyramid"
}
export declare enum OnDemandPageVideoSpatialStereoFormatEnum {
    LeftRight = "left-right",
    Mono = "mono",
    TopBottom = "top-bottom"
}
/**
 * 360 spatial data.
**/
export declare class OnDemandPageVideoSpatial extends SpeakeasyBase {
    directorTimeline: OnDemandPageVideoSpatialDirectorTimeline[];
    fieldOfView: number;
    projection: OnDemandPageVideoSpatialProjectionEnum;
    stereoFormat: OnDemandPageVideoSpatialStereoFormatEnum;
}
/**
 * A collection of stats associated with this video.
**/
export declare class OnDemandPageVideoStats extends SpeakeasyBase {
    plays: number;
}
export declare enum OnDemandPageVideoStatusEnum {
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
export declare enum OnDemandPageVideoTranscodeStatusEnum {
    Complete = "complete",
    Error = "error",
    InProgress = "in_progress"
}
/**
 * The transcode information for a video upload.
**/
export declare class OnDemandPageVideoTranscode extends SpeakeasyBase {
    status?: OnDemandPageVideoTranscodeStatusEnum;
}
export declare enum OnDemandPageVideoUploadApproachEnum {
    Post = "post",
    Pull = "pull",
    Streaming = "streaming",
    Tus = "tus"
}
export declare enum OnDemandPageVideoUploadStatusEnum {
    Complete = "complete",
    Error = "error",
    InProgress = "in_progress"
}
/**
 * The upload information for this video.
**/
export declare class OnDemandPageVideoUpload extends SpeakeasyBase {
    approach?: OnDemandPageVideoUploadApproachEnum;
    completeUri?: string;
    form?: string;
    link?: string;
    redirectUrl?: string;
    size?: number;
    status: OnDemandPageVideoUploadStatusEnum;
    uploadLink?: string;
}
export declare enum OnDemandPageVideoUserAccountEnum {
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
export declare class OnDemandPageVideoUserMetadataConnectionsAlbums extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the appearances of this user in other videos.
**/
export declare class OnDemandPageVideoUserMetadataConnectionsAppearances extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
export declare class OnDemandPageVideoUserMetadataConnectionsBlock extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's followed categories.
**/
export declare class OnDemandPageVideoUserMetadataConnectionsCategories extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's subscribed channels.
**/
export declare class OnDemandPageVideoUserMetadataConnectionsChannels extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's feed.
**/
export declare class OnDemandPageVideoUserMetadataConnectionsFeed extends SpeakeasyBase {
    options: string[];
    uri: string;
}
/**
 * Information about this user's folders.
**/
export declare class OnDemandPageVideoUserMetadataConnectionsFolders extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the user's followers.
**/
export declare class OnDemandPageVideoUserMetadataConnectionsFollowers extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the users that the current user is following.
**/
export declare class OnDemandPageVideoUserMetadataConnectionsFollowing extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the groups created by this user.
**/
export declare class OnDemandPageVideoUserMetadataConnectionsGroups extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that this user has liked.
**/
export declare class OnDemandPageVideoUserMetadataConnectionsLikes extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the channels that this user moderates.
**/
export declare class OnDemandPageVideoUserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's portraits.
**/
export declare class OnDemandPageVideoUserMetadataConnectionsPictures extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's portfolios.
**/
export declare class OnDemandPageVideoUserMetadataConnectionsPortfolios extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export declare class OnDemandPageVideoUserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export declare class OnDemandPageVideoUserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that have been shared with this user.
**/
export declare class OnDemandPageVideoUserMetadataConnectionsShared extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos uploaded by this user.
**/
export declare class OnDemandPageVideoUserMetadataConnectionsVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that this user has watched.
**/
export declare class OnDemandPageVideoUserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that this user wants to watch later.
**/
export declare class OnDemandPageVideoUserMetadataConnectionsWatchlater extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * The list of resource URIs related to the user.
**/
export declare class OnDemandPageVideoUserMetadataConnections extends SpeakeasyBase {
    albums: OnDemandPageVideoUserMetadataConnectionsAlbums;
    appearances: OnDemandPageVideoUserMetadataConnectionsAppearances;
    block: OnDemandPageVideoUserMetadataConnectionsBlock;
    categories: OnDemandPageVideoUserMetadataConnectionsCategories;
    channels: OnDemandPageVideoUserMetadataConnectionsChannels;
    feed: OnDemandPageVideoUserMetadataConnectionsFeed;
    folders: OnDemandPageVideoUserMetadataConnectionsFolders;
    followers: OnDemandPageVideoUserMetadataConnectionsFollowers;
    following: OnDemandPageVideoUserMetadataConnectionsFollowing;
    groups: OnDemandPageVideoUserMetadataConnectionsGroups;
    likes: OnDemandPageVideoUserMetadataConnectionsLikes;
    moderatedChannels: OnDemandPageVideoUserMetadataConnectionsModeratedChannels;
    pictures: OnDemandPageVideoUserMetadataConnectionsPictures;
    portfolios: OnDemandPageVideoUserMetadataConnectionsPortfolios;
    recommendedChannels: OnDemandPageVideoUserMetadataConnectionsRecommendedChannels;
    recommendedUsers: OnDemandPageVideoUserMetadataConnectionsRecommendedUsers;
    shared: OnDemandPageVideoUserMetadataConnectionsShared;
    videos: OnDemandPageVideoUserMetadataConnectionsVideos;
    watchedVideos: OnDemandPageVideoUserMetadataConnectionsWatchedVideos;
    watchlater: OnDemandPageVideoUserMetadataConnectionsWatchlater;
}
export declare class OnDemandPageVideoUserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
    options?: string[];
    uri?: string;
}
/**
 * Information related to the block status of this user.
**/
export declare class OnDemandPageVideoUserMetadataInteractionsBlock extends SpeakeasyBase {
    added: boolean;
    addedTime: string;
    options: string[];
    uri: string;
}
/**
 * Information related to the followed status of this user.
**/
export declare class OnDemandPageVideoUserMetadataInteractionsFollow extends SpeakeasyBase {
    added: boolean;
    options: string[];
    uri: string;
}
/**
 * Information regarding where and how to report a user.
**/
export declare class OnDemandPageVideoUserMetadataInteractionsReport extends SpeakeasyBase {
    options: string[];
    reason: string[];
    uri: string;
}
export declare class OnDemandPageVideoUserMetadataInteractions extends SpeakeasyBase {
    addPrivacyUser?: OnDemandPageVideoUserMetadataInteractionsAddPrivacyUser;
    block: OnDemandPageVideoUserMetadataInteractionsBlock;
    follow: OnDemandPageVideoUserMetadataInteractionsFollow;
    report: OnDemandPageVideoUserMetadataInteractionsReport;
}
/**
 * The user's metadata.
**/
export declare class OnDemandPageVideoUserMetadata extends SpeakeasyBase {
    connections: OnDemandPageVideoUserMetadataConnections;
    interactions: OnDemandPageVideoUserMetadataInteractions;
}
export declare enum OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}
export declare enum OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnum {
    Private = "private",
    Public = "public",
    Whitelist = "whitelist"
}
export declare enum OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}
export declare class OnDemandPageVideoUserPreferencesVideosPrivacy extends SpeakeasyBase {
    add?: boolean;
    comments?: OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnum;
    download?: boolean;
    embed?: OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnum;
    view?: OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum;
}
export declare class OnDemandPageVideoUserPreferencesVideos extends SpeakeasyBase {
    privacy?: OnDemandPageVideoUserPreferencesVideosPrivacy;
}
export declare class OnDemandPageVideoUserPreferences extends SpeakeasyBase {
    videos?: OnDemandPageVideoUserPreferencesVideos;
}
/**
 * Information about the user's lifetime upload usage.
**/
export declare class OnDemandPageVideoUserUploadQuotaLifetime extends SpeakeasyBase {
    free: number;
    max: number;
    used: number;
}
/**
 * Information about the user's usage for the current period.
**/
export declare class OnDemandPageVideoUserUploadQuotaPeriodic extends SpeakeasyBase {
    free: number;
    max: number;
    resetDate: string;
    used: number;
}
export declare enum OnDemandPageVideoUserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime",
    Periodic = "periodic"
}
/**
 * Information about the user's upload space remaining for the current period.
**/
export declare class OnDemandPageVideoUserUploadQuotaSpace extends SpeakeasyBase {
    free: number;
    max: number;
    showing: OnDemandPageVideoUserUploadQuotaSpaceShowingEnum;
    used: number;
}
/**
 * Appears only when the user has upload access and is looking at their own user record.
**/
export declare class OnDemandPageVideoUserUploadQuota extends SpeakeasyBase {
    lifetime: OnDemandPageVideoUserUploadQuotaLifetime;
    periodic: OnDemandPageVideoUserUploadQuotaPeriodic;
    space: OnDemandPageVideoUserUploadQuotaSpace;
}
export declare class OnDemandPageVideoUserWebsites extends SpeakeasyBase {
    description: string;
    link: string;
    name: string;
}
/**
 * The video owner.
**/
export declare class OnDemandPageVideoUser extends SpeakeasyBase {
    account: OnDemandPageVideoUserAccountEnum;
    bio: string;
    contentFilter?: string[];
    createdTime: string;
    email?: string;
    link: string;
    location: string;
    metadata: OnDemandPageVideoUserMetadata;
    name: string;
    pictures: Picture;
    preferences?: OnDemandPageVideoUserPreferences;
    resourceKey: string;
    uploadQuota: OnDemandPageVideoUserUploadQuota;
    uri: string;
    websites: OnDemandPageVideoUserWebsites[];
}
/**
 * The trailer for this On Demand page.
**/
export declare class OnDemandPageVideo extends SpeakeasyBase {
    categories: Category[];
    contentRating: string[];
    context: OnDemandPageVideoContext;
    createdTime: string;
    description: string;
    duration: number;
    embed: EmbedSettings;
    height: number;
    language: string;
    lastUserActionEventDate?: string;
    license: OnDemandPageVideoLicenseEnum;
    link: string;
    metadata: OnDemandPageVideoMetadata;
    modifiedTime: string;
    name: string;
    parentFolder?: OnDemandPageVideoProject;
    password?: string;
    pictures: Picture;
    privacy: OnDemandPageVideoPrivacy;
    releaseTime: string;
    resourceKey: string;
    spatial: OnDemandPageVideoSpatial;
    stats: OnDemandPageVideoStats;
    status: OnDemandPageVideoStatusEnum;
    tags: Tag[];
    transcode: OnDemandPageVideoTranscode;
    upload: OnDemandPageVideoUpload;
    uri: string;
    user: OnDemandPageVideoUser;
    width: number;
}
export declare enum OnDemandPageTypeEnum {
    Film = "film",
    Series = "series"
}
export declare enum OnDemandPageUserAccountEnum {
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
export declare class OnDemandPageUserMetadataConnectionsAlbums extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the appearances of this user in other videos.
**/
export declare class OnDemandPageUserMetadataConnectionsAppearances extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
export declare class OnDemandPageUserMetadataConnectionsBlock extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's followed categories.
**/
export declare class OnDemandPageUserMetadataConnectionsCategories extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's subscribed channels.
**/
export declare class OnDemandPageUserMetadataConnectionsChannels extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's feed.
**/
export declare class OnDemandPageUserMetadataConnectionsFeed extends SpeakeasyBase {
    options: string[];
    uri: string;
}
/**
 * Information about this user's folders.
**/
export declare class OnDemandPageUserMetadataConnectionsFolders extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the user's followers.
**/
export declare class OnDemandPageUserMetadataConnectionsFollowers extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the users that the current user is following.
**/
export declare class OnDemandPageUserMetadataConnectionsFollowing extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the groups created by this user.
**/
export declare class OnDemandPageUserMetadataConnectionsGroups extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that this user has liked.
**/
export declare class OnDemandPageUserMetadataConnectionsLikes extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the channels that this user moderates.
**/
export declare class OnDemandPageUserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's portraits.
**/
export declare class OnDemandPageUserMetadataConnectionsPictures extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about this user's portfolios.
**/
export declare class OnDemandPageUserMetadataConnectionsPortfolios extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export declare class OnDemandPageUserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export declare class OnDemandPageUserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that have been shared with this user.
**/
export declare class OnDemandPageUserMetadataConnectionsShared extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos uploaded by this user.
**/
export declare class OnDemandPageUserMetadataConnectionsVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that this user has watched.
**/
export declare class OnDemandPageUserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that this user wants to watch later.
**/
export declare class OnDemandPageUserMetadataConnectionsWatchlater extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * The list of resource URIs related to the user.
**/
export declare class OnDemandPageUserMetadataConnections extends SpeakeasyBase {
    albums: OnDemandPageUserMetadataConnectionsAlbums;
    appearances: OnDemandPageUserMetadataConnectionsAppearances;
    block: OnDemandPageUserMetadataConnectionsBlock;
    categories: OnDemandPageUserMetadataConnectionsCategories;
    channels: OnDemandPageUserMetadataConnectionsChannels;
    feed: OnDemandPageUserMetadataConnectionsFeed;
    folders: OnDemandPageUserMetadataConnectionsFolders;
    followers: OnDemandPageUserMetadataConnectionsFollowers;
    following: OnDemandPageUserMetadataConnectionsFollowing;
    groups: OnDemandPageUserMetadataConnectionsGroups;
    likes: OnDemandPageUserMetadataConnectionsLikes;
    moderatedChannels: OnDemandPageUserMetadataConnectionsModeratedChannels;
    pictures: OnDemandPageUserMetadataConnectionsPictures;
    portfolios: OnDemandPageUserMetadataConnectionsPortfolios;
    recommendedChannels: OnDemandPageUserMetadataConnectionsRecommendedChannels;
    recommendedUsers: OnDemandPageUserMetadataConnectionsRecommendedUsers;
    shared: OnDemandPageUserMetadataConnectionsShared;
    videos: OnDemandPageUserMetadataConnectionsVideos;
    watchedVideos: OnDemandPageUserMetadataConnectionsWatchedVideos;
    watchlater: OnDemandPageUserMetadataConnectionsWatchlater;
}
export declare class OnDemandPageUserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
    options?: string[];
    uri?: string;
}
/**
 * Information related to the block status of this user.
**/
export declare class OnDemandPageUserMetadataInteractionsBlock extends SpeakeasyBase {
    added: boolean;
    addedTime: string;
    options: string[];
    uri: string;
}
/**
 * Information related to the followed status of this user.
**/
export declare class OnDemandPageUserMetadataInteractionsFollow extends SpeakeasyBase {
    added: boolean;
    options: string[];
    uri: string;
}
/**
 * Information regarding where and how to report a user.
**/
export declare class OnDemandPageUserMetadataInteractionsReport extends SpeakeasyBase {
    options: string[];
    reason: string[];
    uri: string;
}
export declare class OnDemandPageUserMetadataInteractions extends SpeakeasyBase {
    addPrivacyUser?: OnDemandPageUserMetadataInteractionsAddPrivacyUser;
    block: OnDemandPageUserMetadataInteractionsBlock;
    follow: OnDemandPageUserMetadataInteractionsFollow;
    report: OnDemandPageUserMetadataInteractionsReport;
}
/**
 * The user's metadata.
**/
export declare class OnDemandPageUserMetadata extends SpeakeasyBase {
    connections: OnDemandPageUserMetadataConnections;
    interactions: OnDemandPageUserMetadataInteractions;
}
export declare enum OnDemandPageUserPreferencesVideosPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}
export declare enum OnDemandPageUserPreferencesVideosPrivacyEmbedEnum {
    Private = "private",
    Public = "public",
    Whitelist = "whitelist"
}
export declare enum OnDemandPageUserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}
export declare class OnDemandPageUserPreferencesVideosPrivacy extends SpeakeasyBase {
    add?: boolean;
    comments?: OnDemandPageUserPreferencesVideosPrivacyCommentsEnum;
    download?: boolean;
    embed?: OnDemandPageUserPreferencesVideosPrivacyEmbedEnum;
    view?: OnDemandPageUserPreferencesVideosPrivacyViewEnum;
}
export declare class OnDemandPageUserPreferencesVideos extends SpeakeasyBase {
    privacy?: OnDemandPageUserPreferencesVideosPrivacy;
}
export declare class OnDemandPageUserPreferences extends SpeakeasyBase {
    videos?: OnDemandPageUserPreferencesVideos;
}
/**
 * Information about the user's lifetime upload usage.
**/
export declare class OnDemandPageUserUploadQuotaLifetime extends SpeakeasyBase {
    free: number;
    max: number;
    used: number;
}
/**
 * Information about the user's usage for the current period.
**/
export declare class OnDemandPageUserUploadQuotaPeriodic extends SpeakeasyBase {
    free: number;
    max: number;
    resetDate: string;
    used: number;
}
export declare enum OnDemandPageUserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime",
    Periodic = "periodic"
}
/**
 * Information about the user's upload space remaining for the current period.
**/
export declare class OnDemandPageUserUploadQuotaSpace extends SpeakeasyBase {
    free: number;
    max: number;
    showing: OnDemandPageUserUploadQuotaSpaceShowingEnum;
    used: number;
}
/**
 * Appears only when the user has upload access and is looking at their own user record.
**/
export declare class OnDemandPageUserUploadQuota extends SpeakeasyBase {
    lifetime: OnDemandPageUserUploadQuotaLifetime;
    periodic: OnDemandPageUserUploadQuotaPeriodic;
    space: OnDemandPageUserUploadQuotaSpace;
}
export declare class OnDemandPageUserWebsites extends SpeakeasyBase {
    description: string;
    link: string;
    name: string;
}
/**
 * The user who created this On Demand page.
**/
export declare class OnDemandPageUser extends SpeakeasyBase {
    account: OnDemandPageUserAccountEnum;
    bio: string;
    contentFilter?: string[];
    createdTime: string;
    email?: string;
    link: string;
    location: string;
    metadata: OnDemandPageUserMetadata;
    name: string;
    pictures: Picture;
    preferences?: OnDemandPageUserPreferences;
    resourceKey: string;
    uploadQuota: OnDemandPageUserUploadQuota;
    uri: string;
    websites: OnDemandPageUserWebsites[];
}
export declare class OnDemandPage extends SpeakeasyBase {
    background: OnDemandPagePicture;
    colors: OnDemandPageColors;
    contentRating: string[];
    createdTime?: string;
    description: string;
    domainLink: string;
    episodes: OnDemandPageEpisodes;
    film?: Video;
    genres: OnDemandGenre[];
    link: string;
    metadata: OnDemandPageMetadata;
    modifiedTime?: string;
    name: string;
    pictures: OnDemandPagePicture;
    preorder: OnDemandPagePreorder;
    published: OnDemandPagePublished;
    rating: number;
    resourceKey: string;
    sku?: string;
    subscription: OnDemandPageSubscription;
    theme: string;
    thumbnail: OnDemandPagePicture;
    trailer: OnDemandPageVideo;
    type: OnDemandPageTypeEnum;
    uri: string;
    user: OnDemandPageUser;
}
