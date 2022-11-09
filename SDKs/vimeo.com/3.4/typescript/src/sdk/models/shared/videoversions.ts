import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiApp } from "./apiapp";
import { Play } from "./play";
import { Picture } from "./picture";


// VideoVersionsMetadataConnectionsVideo
/** 
 * Data from video associated with version
**/
export class VideoVersionsMetadataConnectionsVideo extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


export class VideoVersionsMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=video" })
  video: VideoVersionsMetadataConnectionsVideo;
}


// VideoVersionsMetadata
/** 
 * The video version's metadata.
**/
export class VideoVersionsMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: VideoVersionsMetadataConnections;
}

export enum VideoVersionsUploadApproachEnum {
    Post = "post"
,    Pull = "pull"
,    Streaming = "streaming"
,    Tus = "tus"
}

export enum VideoVersionsUploadStatusEnum {
    Complete = "complete"
,    Error = "error"
,    InProgress = "in_progress"
}


// VideoVersionsUpload
/** 
 * The upload information for this version.
**/
export class VideoVersionsUpload extends SpeakeasyBase {
  @Metadata({ data: "json, name=approach" })
  approach?: VideoVersionsUploadApproachEnum;

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
  status: VideoVersionsUploadStatusEnum;

  @Metadata({ data: "json, name=upload_link" })
  uploadLink?: string;
}

export enum VideoVersionsUserAccountEnum {
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


// VideoVersionsUserMetadataConnectionsAlbums
/** 
 * Information about the albums created by this user.
**/
export class VideoVersionsUserMetadataConnectionsAlbums extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsAppearances
/** 
 * Information about the appearances of this user in other videos.
**/
export class VideoVersionsUserMetadataConnectionsAppearances extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsBlock
/** 
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
export class VideoVersionsUserMetadataConnectionsBlock extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsCategories
/** 
 * Information about this user's followed categories.
**/
export class VideoVersionsUserMetadataConnectionsCategories extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsChannels
/** 
 * Information about this user's subscribed channels.
**/
export class VideoVersionsUserMetadataConnectionsChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsFeed
/** 
 * Information about this user's feed.
**/
export class VideoVersionsUserMetadataConnectionsFeed extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsFolders
/** 
 * Information about this user's folders.
**/
export class VideoVersionsUserMetadataConnectionsFolders extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsFollowers
/** 
 * Information about the user's followers.
**/
export class VideoVersionsUserMetadataConnectionsFollowers extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsFollowing
/** 
 * Information about the users that the current user is following.
**/
export class VideoVersionsUserMetadataConnectionsFollowing extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsGroups
/** 
 * Information about the groups created by this user.
**/
export class VideoVersionsUserMetadataConnectionsGroups extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsLikes
/** 
 * Information about the videos that this user has liked.
**/
export class VideoVersionsUserMetadataConnectionsLikes extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsModeratedChannels
/** 
 * Information about the channels that this user moderates.
**/
export class VideoVersionsUserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsPictures
/** 
 * Information about this user's portraits.
**/
export class VideoVersionsUserMetadataConnectionsPictures extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsPortfolios
/** 
 * Information about this user's portfolios.
**/
export class VideoVersionsUserMetadataConnectionsPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsRecommendedChannels
/** 
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class VideoVersionsUserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsRecommendedUsers
/** 
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class VideoVersionsUserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsShared
/** 
 * Information about the videos that have been shared with this user.
**/
export class VideoVersionsUserMetadataConnectionsShared extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsVideos
/** 
 * Information about the videos uploaded by this user.
**/
export class VideoVersionsUserMetadataConnectionsVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsWatchedVideos
/** 
 * Information about the videos that this user has watched.
**/
export class VideoVersionsUserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsWatchlater
/** 
 * Information about the videos that this user wants to watch later.
**/
export class VideoVersionsUserMetadataConnectionsWatchlater extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnections
/** 
 * The list of resource URIs related to the user.
**/
export class VideoVersionsUserMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=albums" })
  albums: VideoVersionsUserMetadataConnectionsAlbums;

  @Metadata({ data: "json, name=appearances" })
  appearances: VideoVersionsUserMetadataConnectionsAppearances;

  @Metadata({ data: "json, name=block" })
  block: VideoVersionsUserMetadataConnectionsBlock;

  @Metadata({ data: "json, name=categories" })
  categories: VideoVersionsUserMetadataConnectionsCategories;

  @Metadata({ data: "json, name=channels" })
  channels: VideoVersionsUserMetadataConnectionsChannels;

  @Metadata({ data: "json, name=feed" })
  feed: VideoVersionsUserMetadataConnectionsFeed;

  @Metadata({ data: "json, name=folders" })
  folders: VideoVersionsUserMetadataConnectionsFolders;

  @Metadata({ data: "json, name=followers" })
  followers: VideoVersionsUserMetadataConnectionsFollowers;

  @Metadata({ data: "json, name=following" })
  following: VideoVersionsUserMetadataConnectionsFollowing;

  @Metadata({ data: "json, name=groups" })
  groups: VideoVersionsUserMetadataConnectionsGroups;

  @Metadata({ data: "json, name=likes" })
  likes: VideoVersionsUserMetadataConnectionsLikes;

  @Metadata({ data: "json, name=moderated_channels" })
  moderatedChannels: VideoVersionsUserMetadataConnectionsModeratedChannels;

  @Metadata({ data: "json, name=pictures" })
  pictures: VideoVersionsUserMetadataConnectionsPictures;

  @Metadata({ data: "json, name=portfolios" })
  portfolios: VideoVersionsUserMetadataConnectionsPortfolios;

  @Metadata({ data: "json, name=recommended_channels" })
  recommendedChannels: VideoVersionsUserMetadataConnectionsRecommendedChannels;

  @Metadata({ data: "json, name=recommended_users" })
  recommendedUsers: VideoVersionsUserMetadataConnectionsRecommendedUsers;

  @Metadata({ data: "json, name=shared" })
  shared: VideoVersionsUserMetadataConnectionsShared;

  @Metadata({ data: "json, name=videos" })
  videos: VideoVersionsUserMetadataConnectionsVideos;

  @Metadata({ data: "json, name=watched_videos" })
  watchedVideos: VideoVersionsUserMetadataConnectionsWatchedVideos;

  @Metadata({ data: "json, name=watchlater" })
  watchlater: VideoVersionsUserMetadataConnectionsWatchlater;
}


export class VideoVersionsUserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options?: string[];

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


// VideoVersionsUserMetadataInteractionsBlock
/** 
 * Information related to the block status of this user.
**/
export class VideoVersionsUserMetadataInteractionsBlock extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=added_time" })
  addedTime: string;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataInteractionsFollow
/** 
 * Information related to the followed status of this user.
**/
export class VideoVersionsUserMetadataInteractionsFollow extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataInteractionsReport
/** 
 * Information regarding where and how to report a user.
**/
export class VideoVersionsUserMetadataInteractionsReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=reason" })
  reason: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


export class VideoVersionsUserMetadataInteractions extends SpeakeasyBase {
  @Metadata({ data: "json, name=add_privacy_user" })
  addPrivacyUser?: VideoVersionsUserMetadataInteractionsAddPrivacyUser;

  @Metadata({ data: "json, name=block" })
  block: VideoVersionsUserMetadataInteractionsBlock;

  @Metadata({ data: "json, name=follow" })
  follow: VideoVersionsUserMetadataInteractionsFollow;

  @Metadata({ data: "json, name=report" })
  report: VideoVersionsUserMetadataInteractionsReport;
}


// VideoVersionsUserMetadata
/** 
 * The user's metadata.
**/
export class VideoVersionsUserMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: VideoVersionsUserMetadataConnections;

  @Metadata({ data: "json, name=interactions" })
  interactions: VideoVersionsUserMetadataInteractions;
}

export enum VideoVersionsUserPreferencesVideosPrivacyCommentsEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Nobody = "nobody"
}

export enum VideoVersionsUserPreferencesVideosPrivacyEmbedEnum {
    Private = "private"
,    Public = "public"
,    Whitelist = "whitelist"
}

export enum VideoVersionsUserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Disable = "disable"
,    Nobody = "nobody"
,    Password = "password"
,    Unlisted = "unlisted"
,    Users = "users"
}


export class VideoVersionsUserPreferencesVideosPrivacy extends SpeakeasyBase {
  @Metadata({ data: "json, name=add" })
  add?: boolean;

  @Metadata({ data: "json, name=comments" })
  comments?: VideoVersionsUserPreferencesVideosPrivacyCommentsEnum;

  @Metadata({ data: "json, name=download" })
  download?: boolean;

  @Metadata({ data: "json, name=embed" })
  embed?: VideoVersionsUserPreferencesVideosPrivacyEmbedEnum;

  @Metadata({ data: "json, name=view" })
  view?: VideoVersionsUserPreferencesVideosPrivacyViewEnum;
}


export class VideoVersionsUserPreferencesVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=privacy" })
  privacy?: VideoVersionsUserPreferencesVideosPrivacy;
}


export class VideoVersionsUserPreferences extends SpeakeasyBase {
  @Metadata({ data: "json, name=videos" })
  videos?: VideoVersionsUserPreferencesVideos;
}


// VideoVersionsUserUploadQuotaLifetime
/** 
 * Information about the user's lifetime upload usage.
**/
export class VideoVersionsUserUploadQuotaLifetime extends SpeakeasyBase {
  @Metadata({ data: "json, name=free" })
  free: number;

  @Metadata({ data: "json, name=max" })
  max: number;

  @Metadata({ data: "json, name=used" })
  used: number;
}


// VideoVersionsUserUploadQuotaPeriodic
/** 
 * Information about the user's usage for the current period.
**/
export class VideoVersionsUserUploadQuotaPeriodic extends SpeakeasyBase {
  @Metadata({ data: "json, name=free" })
  free: number;

  @Metadata({ data: "json, name=max" })
  max: number;

  @Metadata({ data: "json, name=reset_date" })
  resetDate: string;

  @Metadata({ data: "json, name=used" })
  used: number;
}

export enum VideoVersionsUserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime"
,    Periodic = "periodic"
}


// VideoVersionsUserUploadQuotaSpace
/** 
 * Information about the user's upload space remaining for the current period.
**/
export class VideoVersionsUserUploadQuotaSpace extends SpeakeasyBase {
  @Metadata({ data: "json, name=free" })
  free: number;

  @Metadata({ data: "json, name=max" })
  max: number;

  @Metadata({ data: "json, name=showing" })
  showing: VideoVersionsUserUploadQuotaSpaceShowingEnum;

  @Metadata({ data: "json, name=used" })
  used: number;
}


// VideoVersionsUserUploadQuota
/** 
 * Appears only when the user has upload access and is looking at their own user record.
**/
export class VideoVersionsUserUploadQuota extends SpeakeasyBase {
  @Metadata({ data: "json, name=lifetime" })
  lifetime: VideoVersionsUserUploadQuotaLifetime;

  @Metadata({ data: "json, name=periodic" })
  periodic: VideoVersionsUserUploadQuotaPeriodic;

  @Metadata({ data: "json, name=space" })
  space: VideoVersionsUserUploadQuotaSpace;
}


export class VideoVersionsUserWebsites extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


// VideoVersionsUser
/** 
 * The owner of the video version.
**/
export class VideoVersionsUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account: VideoVersionsUserAccountEnum;

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
  metadata: VideoVersionsUserMetadata;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=pictures" })
  pictures: Picture;

  @Metadata({ data: "json, name=preferences" })
  preferences?: VideoVersionsUserPreferences;

  @Metadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @Metadata({ data: "json, name=upload_quota" })
  uploadQuota: VideoVersionsUserUploadQuota;

  @Metadata({ data: "json, name=uri" })
  uri: string;

  @Metadata({ data: "json, name=websites", elemType: shared.VideoVersionsUserWebsites })
  websites: VideoVersionsUserWebsites[];
}


export class VideoVersions extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active: boolean;

  @Metadata({ data: "json, name=app" })
  app: ApiApp;

  @Metadata({ data: "json, name=created_time" })
  createdTime: string;

  @Metadata({ data: "json, name=duration" })
  duration: number;

  @Metadata({ data: "json, name=filename" })
  filename: string;

  @Metadata({ data: "json, name=filesize" })
  filesize: number;

  @Metadata({ data: "json, name=metadata" })
  metadata: VideoVersionsMetadata;

  @Metadata({ data: "json, name=modified_time" })
  modifiedTime: string;

  @Metadata({ data: "json, name=play" })
  play: Play;

  @Metadata({ data: "json, name=upload" })
  upload: VideoVersionsUpload;

  @Metadata({ data: "json, name=upload_date" })
  uploadDate: string;

  @Metadata({ data: "json, name=uri" })
  uri: string;

  @Metadata({ data: "json, name=user" })
  user: VideoVersionsUser;
}
