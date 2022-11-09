import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Picture } from "./picture";


// CommentMetadataConnectionsReplies
/** 
 * Information about this comment's replies.
**/
export class CommentMetadataConnectionsReplies extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


export class CommentMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=replies" })
  replies: CommentMetadataConnectionsReplies;
}


export class CommentMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: CommentMetadataConnections;
}

export enum CommentTypeEnum {
    Video = "video"
}

export enum CommentUserAccountEnum {
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


// CommentUserMetadataConnectionsAlbums
/** 
 * Information about the albums created by this user.
**/
export class CommentUserMetadataConnectionsAlbums extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// CommentUserMetadataConnectionsAppearances
/** 
 * Information about the appearances of this user in other videos.
**/
export class CommentUserMetadataConnectionsAppearances extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// CommentUserMetadataConnectionsBlock
/** 
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
export class CommentUserMetadataConnectionsBlock extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// CommentUserMetadataConnectionsCategories
/** 
 * Information about this user's followed categories.
**/
export class CommentUserMetadataConnectionsCategories extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// CommentUserMetadataConnectionsChannels
/** 
 * Information about this user's subscribed channels.
**/
export class CommentUserMetadataConnectionsChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// CommentUserMetadataConnectionsFeed
/** 
 * Information about this user's feed.
**/
export class CommentUserMetadataConnectionsFeed extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// CommentUserMetadataConnectionsFolders
/** 
 * Information about this user's folders.
**/
export class CommentUserMetadataConnectionsFolders extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// CommentUserMetadataConnectionsFollowers
/** 
 * Information about the user's followers.
**/
export class CommentUserMetadataConnectionsFollowers extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// CommentUserMetadataConnectionsFollowing
/** 
 * Information about the users that the current user is following.
**/
export class CommentUserMetadataConnectionsFollowing extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// CommentUserMetadataConnectionsGroups
/** 
 * Information about the groups created by this user.
**/
export class CommentUserMetadataConnectionsGroups extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// CommentUserMetadataConnectionsLikes
/** 
 * Information about the videos that this user has liked.
**/
export class CommentUserMetadataConnectionsLikes extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// CommentUserMetadataConnectionsModeratedChannels
/** 
 * Information about the channels that this user moderates.
**/
export class CommentUserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// CommentUserMetadataConnectionsPictures
/** 
 * Information about this user's portraits.
**/
export class CommentUserMetadataConnectionsPictures extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// CommentUserMetadataConnectionsPortfolios
/** 
 * Information about this user's portfolios.
**/
export class CommentUserMetadataConnectionsPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// CommentUserMetadataConnectionsRecommendedChannels
/** 
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class CommentUserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// CommentUserMetadataConnectionsRecommendedUsers
/** 
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class CommentUserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// CommentUserMetadataConnectionsShared
/** 
 * Information about the videos that have been shared with this user.
**/
export class CommentUserMetadataConnectionsShared extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// CommentUserMetadataConnectionsVideos
/** 
 * Information about the videos uploaded by this user.
**/
export class CommentUserMetadataConnectionsVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// CommentUserMetadataConnectionsWatchedVideos
/** 
 * Information about the videos that this user has watched.
**/
export class CommentUserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// CommentUserMetadataConnectionsWatchlater
/** 
 * Information about the videos that this user wants to watch later.
**/
export class CommentUserMetadataConnectionsWatchlater extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// CommentUserMetadataConnections
/** 
 * The list of resource URIs related to the user.
**/
export class CommentUserMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=albums" })
  albums: CommentUserMetadataConnectionsAlbums;

  @Metadata({ data: "json, name=appearances" })
  appearances: CommentUserMetadataConnectionsAppearances;

  @Metadata({ data: "json, name=block" })
  block: CommentUserMetadataConnectionsBlock;

  @Metadata({ data: "json, name=categories" })
  categories: CommentUserMetadataConnectionsCategories;

  @Metadata({ data: "json, name=channels" })
  channels: CommentUserMetadataConnectionsChannels;

  @Metadata({ data: "json, name=feed" })
  feed: CommentUserMetadataConnectionsFeed;

  @Metadata({ data: "json, name=folders" })
  folders: CommentUserMetadataConnectionsFolders;

  @Metadata({ data: "json, name=followers" })
  followers: CommentUserMetadataConnectionsFollowers;

  @Metadata({ data: "json, name=following" })
  following: CommentUserMetadataConnectionsFollowing;

  @Metadata({ data: "json, name=groups" })
  groups: CommentUserMetadataConnectionsGroups;

  @Metadata({ data: "json, name=likes" })
  likes: CommentUserMetadataConnectionsLikes;

  @Metadata({ data: "json, name=moderated_channels" })
  moderatedChannels: CommentUserMetadataConnectionsModeratedChannels;

  @Metadata({ data: "json, name=pictures" })
  pictures: CommentUserMetadataConnectionsPictures;

  @Metadata({ data: "json, name=portfolios" })
  portfolios: CommentUserMetadataConnectionsPortfolios;

  @Metadata({ data: "json, name=recommended_channels" })
  recommendedChannels: CommentUserMetadataConnectionsRecommendedChannels;

  @Metadata({ data: "json, name=recommended_users" })
  recommendedUsers: CommentUserMetadataConnectionsRecommendedUsers;

  @Metadata({ data: "json, name=shared" })
  shared: CommentUserMetadataConnectionsShared;

  @Metadata({ data: "json, name=videos" })
  videos: CommentUserMetadataConnectionsVideos;

  @Metadata({ data: "json, name=watched_videos" })
  watchedVideos: CommentUserMetadataConnectionsWatchedVideos;

  @Metadata({ data: "json, name=watchlater" })
  watchlater: CommentUserMetadataConnectionsWatchlater;
}


export class CommentUserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options?: string[];

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


// CommentUserMetadataInteractionsBlock
/** 
 * Information related to the block status of this user.
**/
export class CommentUserMetadataInteractionsBlock extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=added_time" })
  addedTime: string;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// CommentUserMetadataInteractionsFollow
/** 
 * Information related to the followed status of this user.
**/
export class CommentUserMetadataInteractionsFollow extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// CommentUserMetadataInteractionsReport
/** 
 * Information regarding where and how to report a user.
**/
export class CommentUserMetadataInteractionsReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=reason" })
  reason: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


export class CommentUserMetadataInteractions extends SpeakeasyBase {
  @Metadata({ data: "json, name=add_privacy_user" })
  addPrivacyUser?: CommentUserMetadataInteractionsAddPrivacyUser;

  @Metadata({ data: "json, name=block" })
  block: CommentUserMetadataInteractionsBlock;

  @Metadata({ data: "json, name=follow" })
  follow: CommentUserMetadataInteractionsFollow;

  @Metadata({ data: "json, name=report" })
  report: CommentUserMetadataInteractionsReport;
}


// CommentUserMetadata
/** 
 * The user's metadata.
**/
export class CommentUserMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: CommentUserMetadataConnections;

  @Metadata({ data: "json, name=interactions" })
  interactions: CommentUserMetadataInteractions;
}

export enum CommentUserPreferencesVideosPrivacyCommentsEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Nobody = "nobody"
}

export enum CommentUserPreferencesVideosPrivacyEmbedEnum {
    Private = "private"
,    Public = "public"
,    Whitelist = "whitelist"
}

export enum CommentUserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Disable = "disable"
,    Nobody = "nobody"
,    Password = "password"
,    Unlisted = "unlisted"
,    Users = "users"
}


export class CommentUserPreferencesVideosPrivacy extends SpeakeasyBase {
  @Metadata({ data: "json, name=add" })
  add?: boolean;

  @Metadata({ data: "json, name=comments" })
  comments?: CommentUserPreferencesVideosPrivacyCommentsEnum;

  @Metadata({ data: "json, name=download" })
  download?: boolean;

  @Metadata({ data: "json, name=embed" })
  embed?: CommentUserPreferencesVideosPrivacyEmbedEnum;

  @Metadata({ data: "json, name=view" })
  view?: CommentUserPreferencesVideosPrivacyViewEnum;
}


export class CommentUserPreferencesVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=privacy" })
  privacy?: CommentUserPreferencesVideosPrivacy;
}


export class CommentUserPreferences extends SpeakeasyBase {
  @Metadata({ data: "json, name=videos" })
  videos?: CommentUserPreferencesVideos;
}


// CommentUserUploadQuotaLifetime
/** 
 * Information about the user's lifetime upload usage.
**/
export class CommentUserUploadQuotaLifetime extends SpeakeasyBase {
  @Metadata({ data: "json, name=free" })
  free: number;

  @Metadata({ data: "json, name=max" })
  max: number;

  @Metadata({ data: "json, name=used" })
  used: number;
}


// CommentUserUploadQuotaPeriodic
/** 
 * Information about the user's usage for the current period.
**/
export class CommentUserUploadQuotaPeriodic extends SpeakeasyBase {
  @Metadata({ data: "json, name=free" })
  free: number;

  @Metadata({ data: "json, name=max" })
  max: number;

  @Metadata({ data: "json, name=reset_date" })
  resetDate: string;

  @Metadata({ data: "json, name=used" })
  used: number;
}

export enum CommentUserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime"
,    Periodic = "periodic"
}


// CommentUserUploadQuotaSpace
/** 
 * Information about the user's upload space remaining for the current period.
**/
export class CommentUserUploadQuotaSpace extends SpeakeasyBase {
  @Metadata({ data: "json, name=free" })
  free: number;

  @Metadata({ data: "json, name=max" })
  max: number;

  @Metadata({ data: "json, name=showing" })
  showing: CommentUserUploadQuotaSpaceShowingEnum;

  @Metadata({ data: "json, name=used" })
  used: number;
}


// CommentUserUploadQuota
/** 
 * Appears only when the user has upload access and is looking at their own user record.
**/
export class CommentUserUploadQuota extends SpeakeasyBase {
  @Metadata({ data: "json, name=lifetime" })
  lifetime: CommentUserUploadQuotaLifetime;

  @Metadata({ data: "json, name=periodic" })
  periodic: CommentUserUploadQuotaPeriodic;

  @Metadata({ data: "json, name=space" })
  space: CommentUserUploadQuotaSpace;
}


export class CommentUserWebsites extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


// CommentUser
/** 
 * The user who posted the comment.
**/
export class CommentUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account: CommentUserAccountEnum;

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
  metadata: CommentUserMetadata;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=pictures" })
  pictures: Picture;

  @Metadata({ data: "json, name=preferences" })
  preferences?: CommentUserPreferences;

  @Metadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @Metadata({ data: "json, name=upload_quota" })
  uploadQuota: CommentUserUploadQuota;

  @Metadata({ data: "json, name=uri" })
  uri: string;

  @Metadata({ data: "json, name=websites", elemType: shared.CommentUserWebsites })
  websites: CommentUserWebsites[];
}


export class Comment extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_on" })
  createdOn: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: CommentMetadata;

  @Metadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @Metadata({ data: "json, name=text" })
  text: string;

  @Metadata({ data: "json, name=type" })
  type: CommentTypeEnum;

  @Metadata({ data: "json, name=uri" })
  uri: string;

  @Metadata({ data: "json, name=user" })
  user: CommentUser;
}
