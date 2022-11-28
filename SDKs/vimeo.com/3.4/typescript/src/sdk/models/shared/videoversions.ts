import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiApp } from "./apiapp";
import { Play } from "./play";
import { Picture } from "./picture";



// VideoVersionsMetadataConnectionsVideo
/** 
 * Data from video associated with version
**/
export class VideoVersionsMetadataConnectionsVideo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


export class VideoVersionsMetadataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=video" })
  video: VideoVersionsMetadataConnectionsVideo;
}


// VideoVersionsMetadata
/** 
 * The video version's metadata.
**/
export class VideoVersionsMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections" })
  connections: VideoVersionsMetadataConnections;
}

export enum VideoVersionsUploadApproachEnum {
    Post = "post",
    Pull = "pull",
    Streaming = "streaming",
    Tus = "tus"
}

export enum VideoVersionsUploadStatusEnum {
    Complete = "complete",
    Error = "error",
    InProgress = "in_progress"
}


// VideoVersionsUpload
/** 
 * The upload information for this version.
**/
export class VideoVersionsUpload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approach" })
  approach?: VideoVersionsUploadApproachEnum;

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
  status: VideoVersionsUploadStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=upload_link" })
  uploadLink?: string;
}

export enum VideoVersionsUserAccountEnum {
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


// VideoVersionsUserMetadataConnectionsAlbums
/** 
 * Information about the albums created by this user.
**/
export class VideoVersionsUserMetadataConnectionsAlbums extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsAppearances
/** 
 * Information about the appearances of this user in other videos.
**/
export class VideoVersionsUserMetadataConnectionsAppearances extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsBlock
/** 
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
export class VideoVersionsUserMetadataConnectionsBlock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsCategories
/** 
 * Information about this user's followed categories.
**/
export class VideoVersionsUserMetadataConnectionsCategories extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsChannels
/** 
 * Information about this user's subscribed channels.
**/
export class VideoVersionsUserMetadataConnectionsChannels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsFeed
/** 
 * Information about this user's feed.
**/
export class VideoVersionsUserMetadataConnectionsFeed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsFolders
/** 
 * Information about this user's folders.
**/
export class VideoVersionsUserMetadataConnectionsFolders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsFollowers
/** 
 * Information about the user's followers.
**/
export class VideoVersionsUserMetadataConnectionsFollowers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsFollowing
/** 
 * Information about the users that the current user is following.
**/
export class VideoVersionsUserMetadataConnectionsFollowing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsGroups
/** 
 * Information about the groups created by this user.
**/
export class VideoVersionsUserMetadataConnectionsGroups extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsLikes
/** 
 * Information about the videos that this user has liked.
**/
export class VideoVersionsUserMetadataConnectionsLikes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsModeratedChannels
/** 
 * Information about the channels that this user moderates.
**/
export class VideoVersionsUserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsPictures
/** 
 * Information about this user's portraits.
**/
export class VideoVersionsUserMetadataConnectionsPictures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsPortfolios
/** 
 * Information about this user's portfolios.
**/
export class VideoVersionsUserMetadataConnectionsPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsRecommendedChannels
/** 
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class VideoVersionsUserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsRecommendedUsers
/** 
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class VideoVersionsUserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsShared
/** 
 * Information about the videos that have been shared with this user.
**/
export class VideoVersionsUserMetadataConnectionsShared extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsVideos
/** 
 * Information about the videos uploaded by this user.
**/
export class VideoVersionsUserMetadataConnectionsVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsWatchedVideos
/** 
 * Information about the videos that this user has watched.
**/
export class VideoVersionsUserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnectionsWatchlater
/** 
 * Information about the videos that this user wants to watch later.
**/
export class VideoVersionsUserMetadataConnectionsWatchlater extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataConnections
/** 
 * The list of resource URIs related to the user.
**/
export class VideoVersionsUserMetadataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=albums" })
  albums: VideoVersionsUserMetadataConnectionsAlbums;

  @SpeakeasyMetadata({ data: "json, name=appearances" })
  appearances: VideoVersionsUserMetadataConnectionsAppearances;

  @SpeakeasyMetadata({ data: "json, name=block" })
  block: VideoVersionsUserMetadataConnectionsBlock;

  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories: VideoVersionsUserMetadataConnectionsCategories;

  @SpeakeasyMetadata({ data: "json, name=channels" })
  channels: VideoVersionsUserMetadataConnectionsChannels;

  @SpeakeasyMetadata({ data: "json, name=feed" })
  feed: VideoVersionsUserMetadataConnectionsFeed;

  @SpeakeasyMetadata({ data: "json, name=folders" })
  folders: VideoVersionsUserMetadataConnectionsFolders;

  @SpeakeasyMetadata({ data: "json, name=followers" })
  followers: VideoVersionsUserMetadataConnectionsFollowers;

  @SpeakeasyMetadata({ data: "json, name=following" })
  following: VideoVersionsUserMetadataConnectionsFollowing;

  @SpeakeasyMetadata({ data: "json, name=groups" })
  groups: VideoVersionsUserMetadataConnectionsGroups;

  @SpeakeasyMetadata({ data: "json, name=likes" })
  likes: VideoVersionsUserMetadataConnectionsLikes;

  @SpeakeasyMetadata({ data: "json, name=moderated_channels" })
  moderatedChannels: VideoVersionsUserMetadataConnectionsModeratedChannels;

  @SpeakeasyMetadata({ data: "json, name=pictures" })
  pictures: VideoVersionsUserMetadataConnectionsPictures;

  @SpeakeasyMetadata({ data: "json, name=portfolios" })
  portfolios: VideoVersionsUserMetadataConnectionsPortfolios;

  @SpeakeasyMetadata({ data: "json, name=recommended_channels" })
  recommendedChannels: VideoVersionsUserMetadataConnectionsRecommendedChannels;

  @SpeakeasyMetadata({ data: "json, name=recommended_users" })
  recommendedUsers: VideoVersionsUserMetadataConnectionsRecommendedUsers;

  @SpeakeasyMetadata({ data: "json, name=shared" })
  shared: VideoVersionsUserMetadataConnectionsShared;

  @SpeakeasyMetadata({ data: "json, name=videos" })
  videos: VideoVersionsUserMetadataConnectionsVideos;

  @SpeakeasyMetadata({ data: "json, name=watched_videos" })
  watchedVideos: VideoVersionsUserMetadataConnectionsWatchedVideos;

  @SpeakeasyMetadata({ data: "json, name=watchlater" })
  watchlater: VideoVersionsUserMetadataConnectionsWatchlater;
}


export class VideoVersionsUserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


// VideoVersionsUserMetadataInteractionsBlock
/** 
 * Information related to the block status of this user.
**/
export class VideoVersionsUserMetadataInteractionsBlock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added" })
  added: boolean;

  @SpeakeasyMetadata({ data: "json, name=added_time" })
  addedTime: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataInteractionsFollow
/** 
 * Information related to the followed status of this user.
**/
export class VideoVersionsUserMetadataInteractionsFollow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added" })
  added: boolean;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// VideoVersionsUserMetadataInteractionsReport
/** 
 * Information regarding where and how to report a user.
**/
export class VideoVersionsUserMetadataInteractionsReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


export class VideoVersionsUserMetadataInteractions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add_privacy_user" })
  addPrivacyUser?: VideoVersionsUserMetadataInteractionsAddPrivacyUser;

  @SpeakeasyMetadata({ data: "json, name=block" })
  block: VideoVersionsUserMetadataInteractionsBlock;

  @SpeakeasyMetadata({ data: "json, name=follow" })
  follow: VideoVersionsUserMetadataInteractionsFollow;

  @SpeakeasyMetadata({ data: "json, name=report" })
  report: VideoVersionsUserMetadataInteractionsReport;
}


// VideoVersionsUserMetadata
/** 
 * The user's metadata.
**/
export class VideoVersionsUserMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections" })
  connections: VideoVersionsUserMetadataConnections;

  @SpeakeasyMetadata({ data: "json, name=interactions" })
  interactions: VideoVersionsUserMetadataInteractions;
}

export enum VideoVersionsUserPreferencesVideosPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}

export enum VideoVersionsUserPreferencesVideosPrivacyEmbedEnum {
    Private = "private",
    Public = "public",
    Whitelist = "whitelist"
}

export enum VideoVersionsUserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}


export class VideoVersionsUserPreferencesVideosPrivacy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add" })
  add?: boolean;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: VideoVersionsUserPreferencesVideosPrivacyCommentsEnum;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download?: boolean;

  @SpeakeasyMetadata({ data: "json, name=embed" })
  embed?: VideoVersionsUserPreferencesVideosPrivacyEmbedEnum;

  @SpeakeasyMetadata({ data: "json, name=view" })
  view?: VideoVersionsUserPreferencesVideosPrivacyViewEnum;
}


export class VideoVersionsUserPreferencesVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: VideoVersionsUserPreferencesVideosPrivacy;
}


export class VideoVersionsUserPreferences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=videos" })
  videos?: VideoVersionsUserPreferencesVideos;
}


// VideoVersionsUserUploadQuotaLifetime
/** 
 * Information about the user's lifetime upload usage.
**/
export class VideoVersionsUserUploadQuotaLifetime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=free" })
  free: number;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max: number;

  @SpeakeasyMetadata({ data: "json, name=used" })
  used: number;
}


// VideoVersionsUserUploadQuotaPeriodic
/** 
 * Information about the user's usage for the current period.
**/
export class VideoVersionsUserUploadQuotaPeriodic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=free" })
  free: number;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max: number;

  @SpeakeasyMetadata({ data: "json, name=reset_date" })
  resetDate: string;

  @SpeakeasyMetadata({ data: "json, name=used" })
  used: number;
}

export enum VideoVersionsUserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime",
    Periodic = "periodic"
}


// VideoVersionsUserUploadQuotaSpace
/** 
 * Information about the user's upload space remaining for the current period.
**/
export class VideoVersionsUserUploadQuotaSpace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=free" })
  free: number;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max: number;

  @SpeakeasyMetadata({ data: "json, name=showing" })
  showing: VideoVersionsUserUploadQuotaSpaceShowingEnum;

  @SpeakeasyMetadata({ data: "json, name=used" })
  used: number;
}


// VideoVersionsUserUploadQuota
/** 
 * Appears only when the user has upload access and is looking at their own user record.
**/
export class VideoVersionsUserUploadQuota extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lifetime" })
  lifetime: VideoVersionsUserUploadQuotaLifetime;

  @SpeakeasyMetadata({ data: "json, name=periodic" })
  periodic: VideoVersionsUserUploadQuotaPeriodic;

  @SpeakeasyMetadata({ data: "json, name=space" })
  space: VideoVersionsUserUploadQuotaSpace;
}


export class VideoVersionsUserWebsites extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


// VideoVersionsUser
/** 
 * The owner of the video version.
**/
export class VideoVersionsUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account: VideoVersionsUserAccountEnum;

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
  metadata: VideoVersionsUserMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=pictures" })
  pictures: Picture;

  @SpeakeasyMetadata({ data: "json, name=preferences" })
  preferences?: VideoVersionsUserPreferences;

  @SpeakeasyMetadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @SpeakeasyMetadata({ data: "json, name=upload_quota" })
  uploadQuota: VideoVersionsUserUploadQuota;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;

  @SpeakeasyMetadata({ data: "json, name=websites", elemType: VideoVersionsUserWebsites })
  websites: VideoVersionsUserWebsites[];
}


export class VideoVersions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active: boolean;

  @SpeakeasyMetadata({ data: "json, name=app" })
  app: ApiApp;

  @SpeakeasyMetadata({ data: "json, name=created_time" })
  createdTime: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration: number;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename: string;

  @SpeakeasyMetadata({ data: "json, name=filesize" })
  filesize: number;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: VideoVersionsMetadata;

  @SpeakeasyMetadata({ data: "json, name=modified_time" })
  modifiedTime: string;

  @SpeakeasyMetadata({ data: "json, name=play" })
  play: Play;

  @SpeakeasyMetadata({ data: "json, name=upload" })
  upload: VideoVersionsUpload;

  @SpeakeasyMetadata({ data: "json, name=upload_date" })
  uploadDate: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: VideoVersionsUser;
}
