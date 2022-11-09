import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Category } from "./category";
import { EmbedSettings } from "./embedsettings";
import { User } from "./user";
import { Picture } from "./picture";
import { Tag } from "./tag";
import { Picture } from "./picture";

export enum VideoContextActionEnum {
    AddedTo = "Added to"
,    AppearanceBy = "Appearance by"
,    LikedBy = "Liked by"
,    UploadedBy = "Uploaded by"
}


// VideoContext
/** 
 * The context of the video's subscription, if this video is part of a subscription.
**/
export class VideoContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: VideoContextActionEnum;

  @Metadata({ data: "json, name=resource" })
  resource: Map<string, any>;

  @Metadata({ data: "json, name=resource_type" })
  resourceType: string;
}

export enum VideoLicenseEnum {
    By = "by"
,    ByNc = "by-nc"
,    ByNcNd = "by-nc-nd"
,    ByNcSa = "by-nc-sa"
,    ByNd = "by-nd"
,    BySa = "by-sa"
,    Cc0 = "cc0"
}


// VideoMetadataConnectionsComments
/** 
 * Information about the comments on this video.
**/
export class VideoMetadataConnectionsComments extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataConnectionsCredits
/** 
 * Information about the users credited in this video.
**/
export class VideoMetadataConnectionsCredits extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options?: string[];

  @Metadata({ data: "json, name=total" })
  total?: number;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


// VideoMetadataConnectionsLikes
/** 
 * Information about the users who have liked this video.
**/
export class VideoMetadataConnectionsLikes extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataConnectionsOndemand
/** 
 * Information about this video's ondemand data.
**/
export class VideoMetadataConnectionsOndemand extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataConnectionsPictures
/** 
 * Information about this video's thumbnails.
**/
export class VideoMetadataConnectionsPictures extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataConnectionsPlayback
/** 
 * The DRM playback status connection for this video.
**/
export class VideoMetadataConnectionsPlayback extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataConnectionsRecommendations
/** 
 * The recommendations for this video.
**/
export class VideoMetadataConnectionsRecommendations extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options?: string[];

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


// VideoMetadataConnectionsRelated
/** 
 * Related content for this video.
**/
export class VideoMetadataConnectionsRelated extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options?: string[];

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


// VideoMetadataConnectionsSeason
/** 
 * Information about the video's season.
**/
export class VideoMetadataConnectionsSeason extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataConnectionsTexttracks
/** 
 * Information about this video's text tracks.
**/
export class VideoMetadataConnectionsTexttracks extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataConnectionsTrailer
/** 
 * Information about this video's VOD trailer.
**/
export class VideoMetadataConnectionsTrailer extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataConnectionsUsersWithAccess
/** 
 * Information about the user privacy of this video, if the video privacy is `users`.
**/
export class VideoMetadataConnectionsUsersWithAccess extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataConnectionsVersions
/** 
 * Information about the versions of this video.
**/
export class VideoMetadataConnectionsVersions extends SpeakeasyBase {
  @Metadata({ data: "json, name=current_uri" })
  currentUri?: string;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataConnections
/** 
 * A list of resource URIs related to the video.
**/
export class VideoMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=comments" })
  comments: VideoMetadataConnectionsComments;

  @Metadata({ data: "json, name=credits" })
  credits: VideoMetadataConnectionsCredits;

  @Metadata({ data: "json, name=likes" })
  likes: VideoMetadataConnectionsLikes;

  @Metadata({ data: "json, name=ondemand" })
  ondemand: VideoMetadataConnectionsOndemand;

  @Metadata({ data: "json, name=pictures" })
  pictures: VideoMetadataConnectionsPictures;

  @Metadata({ data: "json, name=playback" })
  playback: VideoMetadataConnectionsPlayback;

  @Metadata({ data: "json, name=recommendations" })
  recommendations: VideoMetadataConnectionsRecommendations;

  @Metadata({ data: "json, name=related" })
  related: VideoMetadataConnectionsRelated;

  @Metadata({ data: "json, name=season" })
  season: VideoMetadataConnectionsSeason;

  @Metadata({ data: "json, name=texttracks" })
  texttracks: VideoMetadataConnectionsTexttracks;

  @Metadata({ data: "json, name=trailer" })
  trailer: VideoMetadataConnectionsTrailer;

  @Metadata({ data: "json, name=users_with_access" })
  usersWithAccess: VideoMetadataConnectionsUsersWithAccess;

  @Metadata({ data: "json, name=versions" })
  versions: VideoMetadataConnectionsVersions;
}

export enum VideoMetadataInteractionsBuyDownloadEnum {
    Available = "available"
,    Purchased = "purchased"
,    Restricted = "restricted"
,    Unavailable = "unavailable"
}

export enum VideoMetadataInteractionsBuyStreamEnum {
    Available = "available"
,    Purchased = "purchased"
,    Restricted = "restricted"
,    Unavailable = "unavailable"
}


// VideoMetadataInteractionsBuy
/** 
 * The Buy interaction for a On Demand video.
**/
export class VideoMetadataInteractionsBuy extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency: string;

  @Metadata({ data: "json, name=display_price" })
  displayPrice: string;

  @Metadata({ data: "json, name=download" })
  download: VideoMetadataInteractionsBuyDownloadEnum;

  @Metadata({ data: "json, name=drm" })
  drm: boolean;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=price" })
  price: number;

  @Metadata({ data: "json, name=purchase_time" })
  purchaseTime: string;

  @Metadata({ data: "json, name=stream" })
  stream: VideoMetadataInteractionsBuyStreamEnum;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataInteractionsChannel
/** 
 * When a video is referenced by a channel URI, if the user is a moderator of the channel, include information about removing the video from the channel.
**/
export class VideoMetadataInteractionsChannel extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataInteractionsLike
/** 
 * Information about whether the authenticated user has liked this video.
**/
export class VideoMetadataInteractionsLike extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=added_time" })
  addedTime: string;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}

export enum VideoMetadataInteractionsRentStreamEnum {
    Available = "available"
,    Purchased = "purchased"
,    Restricted = "restricted"
,    Unavailable = "unavailable"
}


// VideoMetadataInteractionsRent
/** 
 * The Rent interaction for an On Demand video.
**/
export class VideoMetadataInteractionsRent extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency: string;

  @Metadata({ data: "json, name=display_price" })
  displayPrice: string;

  @Metadata({ data: "json, name=drm" })
  drm: boolean;

  @Metadata({ data: "json, name=expires_time" })
  expiresTime: string;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=price" })
  price: number;

  @Metadata({ data: "json, name=purchase_time" })
  purchaseTime: string;

  @Metadata({ data: "json, name=stream" })
  stream: VideoMetadataInteractionsRentStreamEnum;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataInteractionsReport
/** 
 * Information about where and how to report a video.
**/
export class VideoMetadataInteractionsReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=reason" })
  reason: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataInteractionsSubscribe
/** 
 * Subscription information for an On Demand video.
**/
export class VideoMetadataInteractionsSubscribe extends SpeakeasyBase {
  @Metadata({ data: "json, name=drm" })
  drm?: boolean;

  @Metadata({ data: "json, name=expires_time" })
  expiresTime?: string;

  @Metadata({ data: "json, name=purchase_time" })
  purchaseTime?: string;

  @Metadata({ data: "json, name=stream" })
  stream?: string;
}


// VideoMetadataInteractionsWatched
/** 
 * Information about removing this video from the user's list of watched videos.
**/
export class VideoMetadataInteractionsWatched extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=added_time" })
  addedTime: string;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataInteractionsWatchlater
/** 
 * Information about whether this video appears on the authenticated user's Watch Later list.
**/
export class VideoMetadataInteractionsWatchlater extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=added_time" })
  addedTime: string;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoMetadataInteractions
/** 
 * A list of resource URIs related to the video.
**/
export class VideoMetadataInteractions extends SpeakeasyBase {
  @Metadata({ data: "json, name=buy" })
  buy: VideoMetadataInteractionsBuy;

  @Metadata({ data: "json, name=channel" })
  channel: VideoMetadataInteractionsChannel;

  @Metadata({ data: "json, name=like" })
  like: VideoMetadataInteractionsLike;

  @Metadata({ data: "json, name=rent" })
  rent: VideoMetadataInteractionsRent;

  @Metadata({ data: "json, name=report" })
  report: VideoMetadataInteractionsReport;

  @Metadata({ data: "json, name=subscribe" })
  subscribe?: VideoMetadataInteractionsSubscribe;

  @Metadata({ data: "json, name=watched" })
  watched: VideoMetadataInteractionsWatched;

  @Metadata({ data: "json, name=watchlater" })
  watchlater: VideoMetadataInteractionsWatchlater;
}


// VideoMetadata
/** 
 * The video's metadata.
**/
export class VideoMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: VideoMetadataConnections;

  @Metadata({ data: "json, name=interactions" })
  interactions: VideoMetadataInteractions;
}


// VideoProjectMetadataConnectionsVideos
/** 
 * A standard connection object indicating how to get all the videos in this project.
**/
export class VideoProjectMetadataConnectionsVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoProjectMetadataConnections
/** 
 * A list of resource URIs related to the project.
**/
export class VideoProjectMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=videos" })
  videos: VideoProjectMetadataConnectionsVideos;
}


// VideoProjectMetadata
/** 
 * The project's metadata.
**/
export class VideoProjectMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: VideoProjectMetadataConnections;
}


// VideoProject
/** 
 * Information about the folder that contains this video.
**/
export class VideoProject extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_time" })
  createdTime: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: VideoProjectMetadata;

  @Metadata({ data: "json, name=modified_time" })
  modifiedTime: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @Metadata({ data: "json, name=uri" })
  uri: string;

  @Metadata({ data: "json, name=user" })
  user: User;
}

export enum VideoPrivacyCommentsEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Nobody = "nobody"
}

export enum VideoPrivacyEmbedEnum {
    Private = "private"
,    Public = "public"
}

export enum VideoPrivacyViewEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Disable = "disable"
,    Nobody = "nobody"
,    Password = "password"
,    Unlisted = "unlisted"
,    Users = "users"
}


// VideoPrivacy
/** 
 * The video's privacy setting.
**/
export class VideoPrivacy extends SpeakeasyBase {
  @Metadata({ data: "json, name=add" })
  add: boolean;

  @Metadata({ data: "json, name=comments" })
  comments: VideoPrivacyCommentsEnum;

  @Metadata({ data: "json, name=download" })
  download: boolean;

  @Metadata({ data: "json, name=embed" })
  embed: VideoPrivacyEmbedEnum;

  @Metadata({ data: "json, name=view" })
  view: VideoPrivacyViewEnum;
}


export class VideoSpatialDirectorTimeline extends SpeakeasyBase {
  @Metadata({ data: "json, name=pitch" })
  pitch?: number;

  @Metadata({ data: "json, name=roll" })
  roll?: number;

  @Metadata({ data: "json, name=time_code" })
  timeCode?: number;

  @Metadata({ data: "json, name=yaw" })
  yaw?: number;
}

export enum VideoSpatialProjectionEnum {
    Cubical = "cubical"
,    Cylindrical = "cylindrical"
,    Dome = "dome"
,    Equirectangular = "equirectangular"
,    Pyramid = "pyramid"
}

export enum VideoSpatialStereoFormatEnum {
    LeftRight = "left-right"
,    Mono = "mono"
,    TopBottom = "top-bottom"
}


// VideoSpatial
/** 
 * 360 spatial data.
**/
export class VideoSpatial extends SpeakeasyBase {
  @Metadata({ data: "json, name=director_timeline", elemType: shared.VideoSpatialDirectorTimeline })
  directorTimeline: VideoSpatialDirectorTimeline[];

  @Metadata({ data: "json, name=field_of_view" })
  fieldOfView: number;

  @Metadata({ data: "json, name=projection" })
  projection: VideoSpatialProjectionEnum;

  @Metadata({ data: "json, name=stereo_format" })
  stereoFormat: VideoSpatialStereoFormatEnum;
}


// VideoStats
/** 
 * A collection of stats associated with this video.
**/
export class VideoStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=plays" })
  plays: number;
}

export enum VideoStatusEnum {
    Available = "available"
,    QuotaExceeded = "quota_exceeded"
,    TotalCapExceeded = "total_cap_exceeded"
,    TranscodeStarting = "transcode_starting"
,    Transcoding = "transcoding"
,    TranscodingError = "transcoding_error"
,    Unavailable = "unavailable"
,    Uploading = "uploading"
,    UploadingError = "uploading_error"
}

export enum VideoTranscodeStatusEnum {
    Complete = "complete"
,    Error = "error"
,    InProgress = "in_progress"
}


// VideoTranscode
/** 
 * The transcode information for a video upload.
**/
export class VideoTranscode extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: VideoTranscodeStatusEnum;
}

export enum VideoUploadApproachEnum {
    Post = "post"
,    Pull = "pull"
,    Streaming = "streaming"
,    Tus = "tus"
}

export enum VideoUploadStatusEnum {
    Complete = "complete"
,    Error = "error"
,    InProgress = "in_progress"
}


// VideoUpload
/** 
 * The upload information for this video.
**/
export class VideoUpload extends SpeakeasyBase {
  @Metadata({ data: "json, name=approach" })
  approach?: VideoUploadApproachEnum;

  @Metadata({ data: "json, name=complete_uri" })
  completeUri?: string;

  @Metadata({ data: "json, name=form" })
  form?: string;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=redirect_url" })
  redirectUrl?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=status" })
  status: VideoUploadStatusEnum;

  @Metadata({ data: "json, name=upload_link" })
  uploadLink?: string;
}

export enum VideoUserAccountEnum {
    Basic = "basic"
,    Business = "business"
,    LiveBusiness = "live_business"
,    LivePremium = "live_premium"
,    LivePro = "live_pro"
,    Plus = "plus"
,    Pro = "pro"
,    ProUnlimited = "pro_unlimited"
,    Producer = "producer"
}


// VideoUserMetadataConnectionsAlbums
/** 
 * Information about the albums created by this user.
**/
export class VideoUserMetadataConnectionsAlbums extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsAppearances
/** 
 * Information about the appearances of this user in other videos.
**/
export class VideoUserMetadataConnectionsAppearances extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsBlock
/** 
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
export class VideoUserMetadataConnectionsBlock extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsCategories
/** 
 * Information about this user's followed categories.
**/
export class VideoUserMetadataConnectionsCategories extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsChannels
/** 
 * Information about this user's subscribed channels.
**/
export class VideoUserMetadataConnectionsChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsFeed
/** 
 * Information about this user's feed.
**/
export class VideoUserMetadataConnectionsFeed extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsFolders
/** 
 * Information about this user's folders.
**/
export class VideoUserMetadataConnectionsFolders extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsFollowers
/** 
 * Information about the user's followers.
**/
export class VideoUserMetadataConnectionsFollowers extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsFollowing
/** 
 * Information about the users that the current user is following.
**/
export class VideoUserMetadataConnectionsFollowing extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsGroups
/** 
 * Information about the groups created by this user.
**/
export class VideoUserMetadataConnectionsGroups extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsLikes
/** 
 * Information about the videos that this user has liked.
**/
export class VideoUserMetadataConnectionsLikes extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsModeratedChannels
/** 
 * Information about the channels that this user moderates.
**/
export class VideoUserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsPictures
/** 
 * Information about this user's portraits.
**/
export class VideoUserMetadataConnectionsPictures extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsPortfolios
/** 
 * Information about this user's portfolios.
**/
export class VideoUserMetadataConnectionsPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsRecommendedChannels
/** 
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class VideoUserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsRecommendedUsers
/** 
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class VideoUserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsShared
/** 
 * Information about the videos that have been shared with this user.
**/
export class VideoUserMetadataConnectionsShared extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsVideos
/** 
 * Information about the videos uploaded by this user.
**/
export class VideoUserMetadataConnectionsVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsWatchedVideos
/** 
 * Information about the videos that this user has watched.
**/
export class VideoUserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnectionsWatchlater
/** 
 * Information about the videos that this user wants to watch later.
**/
export class VideoUserMetadataConnectionsWatchlater extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataConnections
/** 
 * The list of resource URIs related to the user.
**/
export class VideoUserMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=albums" })
  albums: VideoUserMetadataConnectionsAlbums;

  @Metadata({ data: "json, name=appearances" })
  appearances: VideoUserMetadataConnectionsAppearances;

  @Metadata({ data: "json, name=block" })
  block: VideoUserMetadataConnectionsBlock;

  @Metadata({ data: "json, name=categories" })
  categories: VideoUserMetadataConnectionsCategories;

  @Metadata({ data: "json, name=channels" })
  channels: VideoUserMetadataConnectionsChannels;

  @Metadata({ data: "json, name=feed" })
  feed: VideoUserMetadataConnectionsFeed;

  @Metadata({ data: "json, name=folders" })
  folders: VideoUserMetadataConnectionsFolders;

  @Metadata({ data: "json, name=followers" })
  followers: VideoUserMetadataConnectionsFollowers;

  @Metadata({ data: "json, name=following" })
  following: VideoUserMetadataConnectionsFollowing;

  @Metadata({ data: "json, name=groups" })
  groups: VideoUserMetadataConnectionsGroups;

  @Metadata({ data: "json, name=likes" })
  likes: VideoUserMetadataConnectionsLikes;

  @Metadata({ data: "json, name=moderated_channels" })
  moderatedChannels: VideoUserMetadataConnectionsModeratedChannels;

  @Metadata({ data: "json, name=pictures" })
  pictures: VideoUserMetadataConnectionsPictures;

  @Metadata({ data: "json, name=portfolios" })
  portfolios: VideoUserMetadataConnectionsPortfolios;

  @Metadata({ data: "json, name=recommended_channels" })
  recommendedChannels: VideoUserMetadataConnectionsRecommendedChannels;

  @Metadata({ data: "json, name=recommended_users" })
  recommendedUsers: VideoUserMetadataConnectionsRecommendedUsers;

  @Metadata({ data: "json, name=shared" })
  shared: VideoUserMetadataConnectionsShared;

  @Metadata({ data: "json, name=videos" })
  videos: VideoUserMetadataConnectionsVideos;

  @Metadata({ data: "json, name=watched_videos" })
  watchedVideos: VideoUserMetadataConnectionsWatchedVideos;

  @Metadata({ data: "json, name=watchlater" })
  watchlater: VideoUserMetadataConnectionsWatchlater;
}


export class VideoUserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options?: string[];

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


// VideoUserMetadataInteractionsBlock
/** 
 * Information related to the block status of this user.
**/
export class VideoUserMetadataInteractionsBlock extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=added_time" })
  addedTime: string;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataInteractionsFollow
/** 
 * Information related to the followed status of this user.
**/
export class VideoUserMetadataInteractionsFollow extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoUserMetadataInteractionsReport
/** 
 * Information regarding where and how to report a user.
**/
export class VideoUserMetadataInteractionsReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=reason" })
  reason: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


export class VideoUserMetadataInteractions extends SpeakeasyBase {
  @Metadata({ data: "json, name=add_privacy_user" })
  addPrivacyUser?: VideoUserMetadataInteractionsAddPrivacyUser;

  @Metadata({ data: "json, name=block" })
  block: VideoUserMetadataInteractionsBlock;

  @Metadata({ data: "json, name=follow" })
  follow: VideoUserMetadataInteractionsFollow;

  @Metadata({ data: "json, name=report" })
  report: VideoUserMetadataInteractionsReport;
}


// VideoUserMetadata
/** 
 * The user's metadata.
**/
export class VideoUserMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: VideoUserMetadataConnections;

  @Metadata({ data: "json, name=interactions" })
  interactions: VideoUserMetadataInteractions;
}

export enum VideoUserPreferencesVideosPrivacyCommentsEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Nobody = "nobody"
}

export enum VideoUserPreferencesVideosPrivacyEmbedEnum {
    Private = "private"
,    Public = "public"
,    Whitelist = "whitelist"
}

export enum VideoUserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Disable = "disable"
,    Nobody = "nobody"
,    Password = "password"
,    Unlisted = "unlisted"
,    Users = "users"
}


export class VideoUserPreferencesVideosPrivacy extends SpeakeasyBase {
  @Metadata({ data: "json, name=add" })
  add?: boolean;

  @Metadata({ data: "json, name=comments" })
  comments?: VideoUserPreferencesVideosPrivacyCommentsEnum;

  @Metadata({ data: "json, name=download" })
  download?: boolean;

  @Metadata({ data: "json, name=embed" })
  embed?: VideoUserPreferencesVideosPrivacyEmbedEnum;

  @Metadata({ data: "json, name=view" })
  view?: VideoUserPreferencesVideosPrivacyViewEnum;
}


export class VideoUserPreferencesVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=privacy" })
  privacy?: VideoUserPreferencesVideosPrivacy;
}


export class VideoUserPreferences extends SpeakeasyBase {
  @Metadata({ data: "json, name=videos" })
  videos?: VideoUserPreferencesVideos;
}


// VideoUserUploadQuotaLifetime
/** 
 * Information about the user's lifetime upload usage.
**/
export class VideoUserUploadQuotaLifetime extends SpeakeasyBase {
  @Metadata({ data: "json, name=free" })
  free: number;

  @Metadata({ data: "json, name=max" })
  max: number;

  @Metadata({ data: "json, name=used" })
  used: number;
}


// VideoUserUploadQuotaPeriodic
/** 
 * Information about the user's usage for the current period.
**/
export class VideoUserUploadQuotaPeriodic extends SpeakeasyBase {
  @Metadata({ data: "json, name=free" })
  free: number;

  @Metadata({ data: "json, name=max" })
  max: number;

  @Metadata({ data: "json, name=reset_date" })
  resetDate: string;

  @Metadata({ data: "json, name=used" })
  used: number;
}

export enum VideoUserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime"
,    Periodic = "periodic"
}


// VideoUserUploadQuotaSpace
/** 
 * Information about the user's upload space remaining for the current period.
**/
export class VideoUserUploadQuotaSpace extends SpeakeasyBase {
  @Metadata({ data: "json, name=free" })
  free: number;

  @Metadata({ data: "json, name=max" })
  max: number;

  @Metadata({ data: "json, name=showing" })
  showing: VideoUserUploadQuotaSpaceShowingEnum;

  @Metadata({ data: "json, name=used" })
  used: number;
}


// VideoUserUploadQuota
/** 
 * Appears only when the user has upload access and is looking at their own user record.
**/
export class VideoUserUploadQuota extends SpeakeasyBase {
  @Metadata({ data: "json, name=lifetime" })
  lifetime: VideoUserUploadQuotaLifetime;

  @Metadata({ data: "json, name=periodic" })
  periodic: VideoUserUploadQuotaPeriodic;

  @Metadata({ data: "json, name=space" })
  space: VideoUserUploadQuotaSpace;
}


export class VideoUserWebsites extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


// VideoUser
/** 
 * The video owner.
**/
export class VideoUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account: VideoUserAccountEnum;

  @Metadata({ data: "json, name=bio" })
  bio: string;

  @Metadata({ data: "json, name=content_filter" })
  contentFilter?: string[];

  @Metadata({ data: "json, name=created_time" })
  createdTime: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=location" })
  location: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: VideoUserMetadata;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=pictures" })
  pictures: Picture;

  @Metadata({ data: "json, name=preferences" })
  preferences?: VideoUserPreferences;

  @Metadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @Metadata({ data: "json, name=upload_quota" })
  uploadQuota: VideoUserUploadQuota;

  @Metadata({ data: "json, name=uri" })
  uri: string;

  @Metadata({ data: "json, name=websites", elemType: shared.VideoUserWebsites })
  websites: VideoUserWebsites[];
}


export class Video extends SpeakeasyBase {
  @Metadata({ data: "json, name=categories", elemType: shared.Category })
  categories: Category[];

  @Metadata({ data: "json, name=content_rating" })
  contentRating: string[];

  @Metadata({ data: "json, name=context" })
  context: VideoContext;

  @Metadata({ data: "json, name=created_time" })
  createdTime: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=duration" })
  duration: number;

  @Metadata({ data: "json, name=embed" })
  embed: EmbedSettings;

  @Metadata({ data: "json, name=height" })
  height: number;

  @Metadata({ data: "json, name=language" })
  language: string;

  @Metadata({ data: "json, name=last_user_action_event_date" })
  lastUserActionEventDate?: string;

  @Metadata({ data: "json, name=license" })
  license: VideoLicenseEnum;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: VideoMetadata;

  @Metadata({ data: "json, name=modified_time" })
  modifiedTime: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=parent_folder" })
  parentFolder?: VideoProject;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=pictures" })
  pictures: Picture;

  @Metadata({ data: "json, name=privacy" })
  privacy: VideoPrivacy;

  @Metadata({ data: "json, name=release_time" })
  releaseTime: string;

  @Metadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @Metadata({ data: "json, name=spatial" })
  spatial: VideoSpatial;

  @Metadata({ data: "json, name=stats" })
  stats: VideoStats;

  @Metadata({ data: "json, name=status" })
  status: VideoStatusEnum;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags: Tag[];

  @Metadata({ data: "json, name=transcode" })
  transcode: VideoTranscode;

  @Metadata({ data: "json, name=upload" })
  upload: VideoUpload;

  @Metadata({ data: "json, name=uri" })
  uri: string;

  @Metadata({ data: "json, name=user" })
  user: VideoUser;

  @Metadata({ data: "json, name=width" })
  width: number;
}
