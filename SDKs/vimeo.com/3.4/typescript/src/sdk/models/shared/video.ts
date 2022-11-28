import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { EmbedSettings } from "./embedsettings";
import { User } from "./user";
import { Picture } from "./picture";
import { Tag } from "./tag";


export enum VideoContextActionEnum {
    AddedTo = "Added to",
    AppearanceBy = "Appearance by",
    LikedBy = "Liked by",
    UploadedBy = "Uploaded by"
}


// VideoContext
/** 
 * The context of the video's subscription, if this video is part of a subscription.
**/
export class VideoContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: VideoContextActionEnum;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType: string;
}

export enum VideoLicenseEnum {
    By = "by",
    ByNc = "by-nc",
    ByNcNd = "by-nc-nd",
    ByNcSa = "by-nc-sa",
    ByNd = "by-nd",
    BySa = "by-sa",
    Cc0 = "cc0"
}


// VideoMetadataConnectionsComments
/** 
 * Information about the comments on this video.
**/
export class VideoMetadataConnectionsComments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataConnectionsCredits
/** 
 * Information about the users credited in this video.
**/
export class VideoMetadataConnectionsCredits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


// VideoMetadataConnectionsLikes
/** 
 * Information about the users who have liked this video.
**/
export class VideoMetadataConnectionsLikes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataConnectionsOndemand
/** 
 * Information about this video's ondemand data.
**/
export class VideoMetadataConnectionsOndemand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataConnectionsPictures
/** 
 * Information about this video's thumbnails.
**/
export class VideoMetadataConnectionsPictures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataConnectionsPlayback
/** 
 * The DRM playback status connection for this video.
**/
export class VideoMetadataConnectionsPlayback extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataConnectionsRecommendations
/** 
 * The recommendations for this video.
**/
export class VideoMetadataConnectionsRecommendations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


// VideoMetadataConnectionsRelated
/** 
 * Related content for this video.
**/
export class VideoMetadataConnectionsRelated extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


// VideoMetadataConnectionsSeason
/** 
 * Information about the video's season.
**/
export class VideoMetadataConnectionsSeason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataConnectionsTexttracks
/** 
 * Information about this video's text tracks.
**/
export class VideoMetadataConnectionsTexttracks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataConnectionsTrailer
/** 
 * Information about this video's VOD trailer.
**/
export class VideoMetadataConnectionsTrailer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataConnectionsUsersWithAccess
/** 
 * Information about the user privacy of this video, if the video privacy is `users`.
**/
export class VideoMetadataConnectionsUsersWithAccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataConnectionsVersions
/** 
 * Information about the versions of this video.
**/
export class VideoMetadataConnectionsVersions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current_uri" })
  currentUri?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataConnections
/** 
 * A list of resource URIs related to the video.
**/
export class VideoMetadataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments: VideoMetadataConnectionsComments;

  @SpeakeasyMetadata({ data: "json, name=credits" })
  credits: VideoMetadataConnectionsCredits;

  @SpeakeasyMetadata({ data: "json, name=likes" })
  likes: VideoMetadataConnectionsLikes;

  @SpeakeasyMetadata({ data: "json, name=ondemand" })
  ondemand: VideoMetadataConnectionsOndemand;

  @SpeakeasyMetadata({ data: "json, name=pictures" })
  pictures: VideoMetadataConnectionsPictures;

  @SpeakeasyMetadata({ data: "json, name=playback" })
  playback: VideoMetadataConnectionsPlayback;

  @SpeakeasyMetadata({ data: "json, name=recommendations" })
  recommendations: VideoMetadataConnectionsRecommendations;

  @SpeakeasyMetadata({ data: "json, name=related" })
  related: VideoMetadataConnectionsRelated;

  @SpeakeasyMetadata({ data: "json, name=season" })
  season: VideoMetadataConnectionsSeason;

  @SpeakeasyMetadata({ data: "json, name=texttracks" })
  texttracks: VideoMetadataConnectionsTexttracks;

  @SpeakeasyMetadata({ data: "json, name=trailer" })
  trailer: VideoMetadataConnectionsTrailer;

  @SpeakeasyMetadata({ data: "json, name=users_with_access" })
  usersWithAccess: VideoMetadataConnectionsUsersWithAccess;

  @SpeakeasyMetadata({ data: "json, name=versions" })
  versions: VideoMetadataConnectionsVersions;
}

export enum VideoMetadataInteractionsBuyDownloadEnum {
    Available = "available",
    Purchased = "purchased",
    Restricted = "restricted",
    Unavailable = "unavailable"
}

export enum VideoMetadataInteractionsBuyStreamEnum {
    Available = "available",
    Purchased = "purchased",
    Restricted = "restricted",
    Unavailable = "unavailable"
}


// VideoMetadataInteractionsBuy
/** 
 * The Buy interaction for a On Demand video.
**/
export class VideoMetadataInteractionsBuy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=display_price" })
  displayPrice: string;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download: VideoMetadataInteractionsBuyDownloadEnum;

  @SpeakeasyMetadata({ data: "json, name=drm" })
  drm: boolean;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price: number;

  @SpeakeasyMetadata({ data: "json, name=purchase_time" })
  purchaseTime: string;

  @SpeakeasyMetadata({ data: "json, name=stream" })
  stream: VideoMetadataInteractionsBuyStreamEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataInteractionsChannel
/** 
 * When a video is referenced by a channel URI, if the user is a moderator of the channel, include information about removing the video from the channel.
**/
export class VideoMetadataInteractionsChannel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataInteractionsLike
/** 
 * Information about whether the authenticated user has liked this video.
**/
export class VideoMetadataInteractionsLike extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added" })
  added: boolean;

  @SpeakeasyMetadata({ data: "json, name=added_time" })
  addedTime: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}

export enum VideoMetadataInteractionsRentStreamEnum {
    Available = "available",
    Purchased = "purchased",
    Restricted = "restricted",
    Unavailable = "unavailable"
}


// VideoMetadataInteractionsRent
/** 
 * The Rent interaction for an On Demand video.
**/
export class VideoMetadataInteractionsRent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=display_price" })
  displayPrice: string;

  @SpeakeasyMetadata({ data: "json, name=drm" })
  drm: boolean;

  @SpeakeasyMetadata({ data: "json, name=expires_time" })
  expiresTime: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price: number;

  @SpeakeasyMetadata({ data: "json, name=purchase_time" })
  purchaseTime: string;

  @SpeakeasyMetadata({ data: "json, name=stream" })
  stream: VideoMetadataInteractionsRentStreamEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataInteractionsReport
/** 
 * Information about where and how to report a video.
**/
export class VideoMetadataInteractionsReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataInteractionsSubscribe
/** 
 * Subscription information for an On Demand video.
**/
export class VideoMetadataInteractionsSubscribe extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=drm" })
  drm?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expires_time" })
  expiresTime?: string;

  @SpeakeasyMetadata({ data: "json, name=purchase_time" })
  purchaseTime?: string;

  @SpeakeasyMetadata({ data: "json, name=stream" })
  stream?: string;
}


// VideoMetadataInteractionsWatched
/** 
 * Information about removing this video from the user's list of watched videos.
**/
export class VideoMetadataInteractionsWatched extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added" })
  added: boolean;

  @SpeakeasyMetadata({ data: "json, name=added_time" })
  addedTime: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataInteractionsWatchlater
/** 
 * Information about whether this video appears on the authenticated user's Watch Later list.
**/
export class VideoMetadataInteractionsWatchlater extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added" })
  added: boolean;

  @SpeakeasyMetadata({ data: "json, name=added_time" })
  addedTime: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataInteractions
/** 
 * A list of resource URIs related to the video.
**/
export class VideoMetadataInteractions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buy" })
  buy: VideoMetadataInteractionsBuy;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: VideoMetadataInteractionsChannel;

  @SpeakeasyMetadata({ data: "json, name=like" })
  like: VideoMetadataInteractionsLike;

  @SpeakeasyMetadata({ data: "json, name=rent" })
  rent: VideoMetadataInteractionsRent;

  @SpeakeasyMetadata({ data: "json, name=report" })
  report: VideoMetadataInteractionsReport;

  @SpeakeasyMetadata({ data: "json, name=subscribe" })
  subscribe?: VideoMetadataInteractionsSubscribe;

  @SpeakeasyMetadata({ data: "json, name=watched" })
  watched: VideoMetadataInteractionsWatched;

  @SpeakeasyMetadata({ data: "json, name=watchlater" })
  watchlater: VideoMetadataInteractionsWatchlater;
}


// VideoMetadata
/** 
 * The video's metadata.
**/
export class VideoMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections" })
  connections: VideoMetadataConnections;

  @SpeakeasyMetadata({ data: "json, name=interactions" })
  interactions: VideoMetadataInteractions;
}


// VideoProjectMetadataConnectionsVideos
/** 
 * A standard connection object indicating how to get all the videos in this project.
**/
export class VideoProjectMetadataConnectionsVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoProjectMetadataConnections
/** 
 * A list of resource URIs related to the project.
**/
export class VideoProjectMetadataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=videos" })
  videos: VideoProjectMetadataConnectionsVideos;
}


// VideoProjectMetadata
/** 
 * The project's metadata.
**/
export class VideoProjectMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections" })
  connections: VideoProjectMetadataConnections;
}


// VideoProject
/** 
 * Information about the folder that contains this video.
**/
export class VideoProject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_time" })
  createdTime: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: VideoProjectMetadata;

  @SpeakeasyMetadata({ data: "json, name=modified_time" })
  modifiedTime: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: User;
}

export enum VideoPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}

export enum VideoPrivacyEmbedEnum {
    Private = "private",
    Public = "public"
}

export enum VideoPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}


// VideoPrivacy
/** 
 * The video's privacy setting.
**/
export class VideoPrivacy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add" })
  add: boolean;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments: VideoPrivacyCommentsEnum;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download: boolean;

  @SpeakeasyMetadata({ data: "json, name=embed" })
  embed: VideoPrivacyEmbedEnum;

  @SpeakeasyMetadata({ data: "json, name=view" })
  view: VideoPrivacyViewEnum;
}


export class VideoSpatialDirectorTimeline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pitch" })
  pitch?: number;

  @SpeakeasyMetadata({ data: "json, name=roll" })
  roll?: number;

  @SpeakeasyMetadata({ data: "json, name=time_code" })
  timeCode?: number;

  @SpeakeasyMetadata({ data: "json, name=yaw" })
  yaw?: number;
}

export enum VideoSpatialProjectionEnum {
    Cubical = "cubical",
    Cylindrical = "cylindrical",
    Dome = "dome",
    Equirectangular = "equirectangular",
    Pyramid = "pyramid"
}

export enum VideoSpatialStereoFormatEnum {
    LeftRight = "left-right",
    Mono = "mono",
    TopBottom = "top-bottom"
}


// VideoSpatial
/** 
 * 360 spatial data.
**/
export class VideoSpatial extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=director_timeline", elemType: VideoSpatialDirectorTimeline })
  directorTimeline: VideoSpatialDirectorTimeline[];

  @SpeakeasyMetadata({ data: "json, name=field_of_view" })
  fieldOfView: number;

  @SpeakeasyMetadata({ data: "json, name=projection" })
  projection: VideoSpatialProjectionEnum;

  @SpeakeasyMetadata({ data: "json, name=stereo_format" })
  stereoFormat: VideoSpatialStereoFormatEnum;
}


// VideoStats
/** 
 * A collection of stats associated with this video.
**/
export class VideoStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=plays" })
  plays: number;
}

export enum VideoStatusEnum {
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

export enum VideoTranscodeStatusEnum {
    Complete = "complete",
    Error = "error",
    InProgress = "in_progress"
}


// VideoTranscode
/** 
 * The transcode information for a video upload.
**/
export class VideoTranscode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: VideoTranscodeStatusEnum;
}

export enum VideoUploadApproachEnum {
    Post = "post",
    Pull = "pull",
    Streaming = "streaming",
    Tus = "tus"
}

export enum VideoUploadStatusEnum {
    Complete = "complete",
    Error = "error",
    InProgress = "in_progress"
}


// VideoUpload
/** 
 * The upload information for this video.
**/
export class VideoUpload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approach" })
  approach?: VideoUploadApproachEnum;

  @SpeakeasyMetadata({ data: "json, name=complete_uri" })
  completeUri?: string;

  @SpeakeasyMetadata({ data: "json, name=form" })
  form?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=redirect_url" })
  redirectUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: VideoUploadStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=upload_link" })
  uploadLink?: string;
}

export enum VideoUserAccountEnum {
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


// VideoUserMetadataConnectionsAlbums
/** 
 * Information about the albums created by this user.
**/
export class VideoUserMetadataConnectionsAlbums extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsAppearances
/** 
 * Information about the appearances of this user in other videos.
**/
export class VideoUserMetadataConnectionsAppearances extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsBlock
/** 
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
export class VideoUserMetadataConnectionsBlock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsCategories
/** 
 * Information about this user's followed categories.
**/
export class VideoUserMetadataConnectionsCategories extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsChannels
/** 
 * Information about this user's subscribed channels.
**/
export class VideoUserMetadataConnectionsChannels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsFeed
/** 
 * Information about this user's feed.
**/
export class VideoUserMetadataConnectionsFeed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsFolders
/** 
 * Information about this user's folders.
**/
export class VideoUserMetadataConnectionsFolders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsFollowers
/** 
 * Information about the user's followers.
**/
export class VideoUserMetadataConnectionsFollowers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsFollowing
/** 
 * Information about the users that the current user is following.
**/
export class VideoUserMetadataConnectionsFollowing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsGroups
/** 
 * Information about the groups created by this user.
**/
export class VideoUserMetadataConnectionsGroups extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsLikes
/** 
 * Information about the videos that this user has liked.
**/
export class VideoUserMetadataConnectionsLikes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsModeratedChannels
/** 
 * Information about the channels that this user moderates.
**/
export class VideoUserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsPictures
/** 
 * Information about this user's portraits.
**/
export class VideoUserMetadataConnectionsPictures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsPortfolios
/** 
 * Information about this user's portfolios.
**/
export class VideoUserMetadataConnectionsPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsRecommendedChannels
/** 
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class VideoUserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsRecommendedUsers
/** 
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class VideoUserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsShared
/** 
 * Information about the videos that have been shared with this user.
**/
export class VideoUserMetadataConnectionsShared extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsVideos
/** 
 * Information about the videos uploaded by this user.
**/
export class VideoUserMetadataConnectionsVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsWatchedVideos
/** 
 * Information about the videos that this user has watched.
**/
export class VideoUserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsWatchlater
/** 
 * Information about the videos that this user wants to watch later.
**/
export class VideoUserMetadataConnectionsWatchlater extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnections
/** 
 * The list of resource URIs related to the user.
**/
export class VideoUserMetadataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=albums" })
  albums: VideoUserMetadataConnectionsAlbums;

  @SpeakeasyMetadata({ data: "json, name=appearances" })
  appearances: VideoUserMetadataConnectionsAppearances;

  @SpeakeasyMetadata({ data: "json, name=block" })
  block: VideoUserMetadataConnectionsBlock;

  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories: VideoUserMetadataConnectionsCategories;

  @SpeakeasyMetadata({ data: "json, name=channels" })
  channels: VideoUserMetadataConnectionsChannels;

  @SpeakeasyMetadata({ data: "json, name=feed" })
  feed: VideoUserMetadataConnectionsFeed;

  @SpeakeasyMetadata({ data: "json, name=folders" })
  folders: VideoUserMetadataConnectionsFolders;

  @SpeakeasyMetadata({ data: "json, name=followers" })
  followers: VideoUserMetadataConnectionsFollowers;

  @SpeakeasyMetadata({ data: "json, name=following" })
  following: VideoUserMetadataConnectionsFollowing;

  @SpeakeasyMetadata({ data: "json, name=groups" })
  groups: VideoUserMetadataConnectionsGroups;

  @SpeakeasyMetadata({ data: "json, name=likes" })
  likes: VideoUserMetadataConnectionsLikes;

  @SpeakeasyMetadata({ data: "json, name=moderated_channels" })
  moderatedChannels: VideoUserMetadataConnectionsModeratedChannels;

  @SpeakeasyMetadata({ data: "json, name=pictures" })
  pictures: VideoUserMetadataConnectionsPictures;

  @SpeakeasyMetadata({ data: "json, name=portfolios" })
  portfolios: VideoUserMetadataConnectionsPortfolios;

  @SpeakeasyMetadata({ data: "json, name=recommended_channels" })
  recommendedChannels: VideoUserMetadataConnectionsRecommendedChannels;

  @SpeakeasyMetadata({ data: "json, name=recommended_users" })
  recommendedUsers: VideoUserMetadataConnectionsRecommendedUsers;

  @SpeakeasyMetadata({ data: "json, name=shared" })
  shared: VideoUserMetadataConnectionsShared;

  @SpeakeasyMetadata({ data: "json, name=videos" })
  videos: VideoUserMetadataConnectionsVideos;

  @SpeakeasyMetadata({ data: "json, name=watched_videos" })
  watchedVideos: VideoUserMetadataConnectionsWatchedVideos;

  @SpeakeasyMetadata({ data: "json, name=watchlater" })
  watchlater: VideoUserMetadataConnectionsWatchlater;
}


export class VideoUserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


// VideoUserMetadataInteractionsBlock
/** 
 * Information related to the block status of this user.
**/
export class VideoUserMetadataInteractionsBlock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added" })
  added: boolean;

  @SpeakeasyMetadata({ data: "json, name=added_time" })
  addedTime: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataInteractionsFollow
/** 
 * Information related to the followed status of this user.
**/
export class VideoUserMetadataInteractionsFollow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added" })
  added: boolean;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataInteractionsReport
/** 
 * Information regarding where and how to report a user.
**/
export class VideoUserMetadataInteractionsReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


export class VideoUserMetadataInteractions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add_privacy_user" })
  addPrivacyUser?: VideoUserMetadataInteractionsAddPrivacyUser;

  @SpeakeasyMetadata({ data: "json, name=block" })
  block: VideoUserMetadataInteractionsBlock;

  @SpeakeasyMetadata({ data: "json, name=follow" })
  follow: VideoUserMetadataInteractionsFollow;

  @SpeakeasyMetadata({ data: "json, name=report" })
  report: VideoUserMetadataInteractionsReport;
}


// VideoUserMetadata
/** 
 * The user's metadata.
**/
export class VideoUserMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections" })
  connections: VideoUserMetadataConnections;

  @SpeakeasyMetadata({ data: "json, name=interactions" })
  interactions: VideoUserMetadataInteractions;
}

export enum VideoUserPreferencesVideosPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}

export enum VideoUserPreferencesVideosPrivacyEmbedEnum {
    Private = "private",
    Public = "public",
    Whitelist = "whitelist"
}

export enum VideoUserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}


export class VideoUserPreferencesVideosPrivacy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add" })
  add?: boolean;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: VideoUserPreferencesVideosPrivacyCommentsEnum;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download?: boolean;

  @SpeakeasyMetadata({ data: "json, name=embed" })
  embed?: VideoUserPreferencesVideosPrivacyEmbedEnum;

  @SpeakeasyMetadata({ data: "json, name=view" })
  view?: VideoUserPreferencesVideosPrivacyViewEnum;
}


export class VideoUserPreferencesVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: VideoUserPreferencesVideosPrivacy;
}


export class VideoUserPreferences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=videos" })
  videos?: VideoUserPreferencesVideos;
}


// VideoUserUploadQuotaLifetime
/** 
 * Information about the user's lifetime upload usage.
**/
export class VideoUserUploadQuotaLifetime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=free" })
  free: number;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max: number;

  @SpeakeasyMetadata({ data: "json, name=used" })
  used: number;
}


// VideoUserUploadQuotaPeriodic
/** 
 * Information about the user's usage for the current period.
**/
export class VideoUserUploadQuotaPeriodic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=free" })
  free: number;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max: number;

  @SpeakeasyMetadata({ data: "json, name=reset_date" })
  resetDate: string;

  @SpeakeasyMetadata({ data: "json, name=used" })
  used: number;
}

export enum VideoUserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime",
    Periodic = "periodic"
}


// VideoUserUploadQuotaSpace
/** 
 * Information about the user's upload space remaining for the current period.
**/
export class VideoUserUploadQuotaSpace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=free" })
  free: number;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max: number;

  @SpeakeasyMetadata({ data: "json, name=showing" })
  showing: VideoUserUploadQuotaSpaceShowingEnum;

  @SpeakeasyMetadata({ data: "json, name=used" })
  used: number;
}


// VideoUserUploadQuota
/** 
 * Appears only when the user has upload access and is looking at their own user record.
**/
export class VideoUserUploadQuota extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lifetime" })
  lifetime: VideoUserUploadQuotaLifetime;

  @SpeakeasyMetadata({ data: "json, name=periodic" })
  periodic: VideoUserUploadQuotaPeriodic;

  @SpeakeasyMetadata({ data: "json, name=space" })
  space: VideoUserUploadQuotaSpace;
}


export class VideoUserWebsites extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


// VideoUser
/** 
 * The video owner.
**/
export class VideoUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account: VideoUserAccountEnum;

  @SpeakeasyMetadata({ data: "json, name=bio" })
  bio: string;

  @SpeakeasyMetadata({ data: "json, name=content_filter" })
  contentFilter?: string[];

  @SpeakeasyMetadata({ data: "json, name=created_time" })
  createdTime: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: VideoUserMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=pictures" })
  pictures: Picture;

  @SpeakeasyMetadata({ data: "json, name=preferences" })
  preferences?: VideoUserPreferences;

  @SpeakeasyMetadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @SpeakeasyMetadata({ data: "json, name=upload_quota" })
  uploadQuota: VideoUserUploadQuota;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;

  @SpeakeasyMetadata({ data: "json, name=websites", elemType: VideoUserWebsites })
  websites: VideoUserWebsites[];
}


export class Video extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories", elemType: Category })
  categories: Category[];

  @SpeakeasyMetadata({ data: "json, name=content_rating" })
  contentRating: string[];

  @SpeakeasyMetadata({ data: "json, name=context" })
  context: VideoContext;

  @SpeakeasyMetadata({ data: "json, name=created_time" })
  createdTime: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration: number;

  @SpeakeasyMetadata({ data: "json, name=embed" })
  embed: EmbedSettings;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height: number;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language: string;

  @SpeakeasyMetadata({ data: "json, name=last_user_action_event_date" })
  lastUserActionEventDate?: string;

  @SpeakeasyMetadata({ data: "json, name=license" })
  license: VideoLicenseEnum;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: VideoMetadata;

  @SpeakeasyMetadata({ data: "json, name=modified_time" })
  modifiedTime: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parent_folder" })
  parentFolder?: VideoProject;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=pictures" })
  pictures: Picture;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy: VideoPrivacy;

  @SpeakeasyMetadata({ data: "json, name=release_time" })
  releaseTime: string;

  @SpeakeasyMetadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @SpeakeasyMetadata({ data: "json, name=spatial" })
  spatial: VideoSpatial;

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats: VideoStats;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: VideoStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags: Tag[];

  @SpeakeasyMetadata({ data: "json, name=transcode" })
  transcode: VideoTranscode;

  @SpeakeasyMetadata({ data: "json, name=upload" })
  upload: VideoUpload;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: VideoUser;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width: number;
}
