import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Picture } from "./picture";

export enum UserAccountEnum {
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


// UserMetadataConnectionsAlbums
/** 
 * Information about the albums created by this user.
**/
export class UserMetadataConnectionsAlbums extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// UserMetadataConnectionsAppearances
/** 
 * Information about the appearances of this user in other videos.
**/
export class UserMetadataConnectionsAppearances extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// UserMetadataConnectionsBlock
/** 
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
export class UserMetadataConnectionsBlock extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// UserMetadataConnectionsCategories
/** 
 * Information about this user's followed categories.
**/
export class UserMetadataConnectionsCategories extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// UserMetadataConnectionsChannels
/** 
 * Information about this user's subscribed channels.
**/
export class UserMetadataConnectionsChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// UserMetadataConnectionsFeed
/** 
 * Information about this user's feed.
**/
export class UserMetadataConnectionsFeed extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// UserMetadataConnectionsFolders
/** 
 * Information about this user's folders.
**/
export class UserMetadataConnectionsFolders extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// UserMetadataConnectionsFollowers
/** 
 * Information about the user's followers.
**/
export class UserMetadataConnectionsFollowers extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// UserMetadataConnectionsFollowing
/** 
 * Information about the users that the current user is following.
**/
export class UserMetadataConnectionsFollowing extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// UserMetadataConnectionsGroups
/** 
 * Information about the groups created by this user.
**/
export class UserMetadataConnectionsGroups extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// UserMetadataConnectionsLikes
/** 
 * Information about the videos that this user has liked.
**/
export class UserMetadataConnectionsLikes extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// UserMetadataConnectionsModeratedChannels
/** 
 * Information about the channels that this user moderates.
**/
export class UserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// UserMetadataConnectionsPictures
/** 
 * Information about this user's portraits.
**/
export class UserMetadataConnectionsPictures extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// UserMetadataConnectionsPortfolios
/** 
 * Information about this user's portfolios.
**/
export class UserMetadataConnectionsPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// UserMetadataConnectionsRecommendedChannels
/** 
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class UserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// UserMetadataConnectionsRecommendedUsers
/** 
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class UserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// UserMetadataConnectionsShared
/** 
 * Information about the videos that have been shared with this user.
**/
export class UserMetadataConnectionsShared extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// UserMetadataConnectionsVideos
/** 
 * Information about the videos uploaded by this user.
**/
export class UserMetadataConnectionsVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// UserMetadataConnectionsWatchedVideos
/** 
 * Information about the videos that this user has watched.
**/
export class UserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// UserMetadataConnectionsWatchlater
/** 
 * Information about the videos that this user wants to watch later.
**/
export class UserMetadataConnectionsWatchlater extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// UserMetadataConnections
/** 
 * The list of resource URIs related to the user.
**/
export class UserMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=albums" })
  albums: UserMetadataConnectionsAlbums;

  @Metadata({ data: "json, name=appearances" })
  appearances: UserMetadataConnectionsAppearances;

  @Metadata({ data: "json, name=block" })
  block: UserMetadataConnectionsBlock;

  @Metadata({ data: "json, name=categories" })
  categories: UserMetadataConnectionsCategories;

  @Metadata({ data: "json, name=channels" })
  channels: UserMetadataConnectionsChannels;

  @Metadata({ data: "json, name=feed" })
  feed: UserMetadataConnectionsFeed;

  @Metadata({ data: "json, name=folders" })
  folders: UserMetadataConnectionsFolders;

  @Metadata({ data: "json, name=followers" })
  followers: UserMetadataConnectionsFollowers;

  @Metadata({ data: "json, name=following" })
  following: UserMetadataConnectionsFollowing;

  @Metadata({ data: "json, name=groups" })
  groups: UserMetadataConnectionsGroups;

  @Metadata({ data: "json, name=likes" })
  likes: UserMetadataConnectionsLikes;

  @Metadata({ data: "json, name=moderated_channels" })
  moderatedChannels: UserMetadataConnectionsModeratedChannels;

  @Metadata({ data: "json, name=pictures" })
  pictures: UserMetadataConnectionsPictures;

  @Metadata({ data: "json, name=portfolios" })
  portfolios: UserMetadataConnectionsPortfolios;

  @Metadata({ data: "json, name=recommended_channels" })
  recommendedChannels: UserMetadataConnectionsRecommendedChannels;

  @Metadata({ data: "json, name=recommended_users" })
  recommendedUsers: UserMetadataConnectionsRecommendedUsers;

  @Metadata({ data: "json, name=shared" })
  shared: UserMetadataConnectionsShared;

  @Metadata({ data: "json, name=videos" })
  videos: UserMetadataConnectionsVideos;

  @Metadata({ data: "json, name=watched_videos" })
  watchedVideos: UserMetadataConnectionsWatchedVideos;

  @Metadata({ data: "json, name=watchlater" })
  watchlater: UserMetadataConnectionsWatchlater;
}


export class UserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options?: string[];

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


// UserMetadataInteractionsBlock
/** 
 * Information related to the block status of this user.
**/
export class UserMetadataInteractionsBlock extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=added_time" })
  addedTime: string;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// UserMetadataInteractionsFollow
/** 
 * Information related to the followed status of this user.
**/
export class UserMetadataInteractionsFollow extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// UserMetadataInteractionsReport
/** 
 * Information regarding where and how to report a user.
**/
export class UserMetadataInteractionsReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=reason" })
  reason: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


export class UserMetadataInteractions extends SpeakeasyBase {
  @Metadata({ data: "json, name=add_privacy_user" })
  addPrivacyUser?: UserMetadataInteractionsAddPrivacyUser;

  @Metadata({ data: "json, name=block" })
  block: UserMetadataInteractionsBlock;

  @Metadata({ data: "json, name=follow" })
  follow: UserMetadataInteractionsFollow;

  @Metadata({ data: "json, name=report" })
  report: UserMetadataInteractionsReport;
}


// UserMetadata
/** 
 * The user's metadata.
**/
export class UserMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: UserMetadataConnections;

  @Metadata({ data: "json, name=interactions" })
  interactions: UserMetadataInteractions;
}

export enum UserPreferencesVideosPrivacyCommentsEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Nobody = "nobody"
}

export enum UserPreferencesVideosPrivacyEmbedEnum {
    Private = "private"
,    Public = "public"
,    Whitelist = "whitelist"
}

export enum UserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Disable = "disable"
,    Nobody = "nobody"
,    Password = "password"
,    Unlisted = "unlisted"
,    Users = "users"
}


export class UserPreferencesVideosPrivacy extends SpeakeasyBase {
  @Metadata({ data: "json, name=add" })
  add?: boolean;

  @Metadata({ data: "json, name=comments" })
  comments?: UserPreferencesVideosPrivacyCommentsEnum;

  @Metadata({ data: "json, name=download" })
  download?: boolean;

  @Metadata({ data: "json, name=embed" })
  embed?: UserPreferencesVideosPrivacyEmbedEnum;

  @Metadata({ data: "json, name=view" })
  view?: UserPreferencesVideosPrivacyViewEnum;
}


export class UserPreferencesVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=privacy" })
  privacy?: UserPreferencesVideosPrivacy;
}


export class UserPreferences extends SpeakeasyBase {
  @Metadata({ data: "json, name=videos" })
  videos?: UserPreferencesVideos;
}


// UserUploadQuotaLifetime
/** 
 * Information about the user's lifetime upload usage.
**/
export class UserUploadQuotaLifetime extends SpeakeasyBase {
  @Metadata({ data: "json, name=free" })
  free: number;

  @Metadata({ data: "json, name=max" })
  max: number;

  @Metadata({ data: "json, name=used" })
  used: number;
}


// UserUploadQuotaPeriodic
/** 
 * Information about the user's usage for the current period.
**/
export class UserUploadQuotaPeriodic extends SpeakeasyBase {
  @Metadata({ data: "json, name=free" })
  free: number;

  @Metadata({ data: "json, name=max" })
  max: number;

  @Metadata({ data: "json, name=reset_date" })
  resetDate: string;

  @Metadata({ data: "json, name=used" })
  used: number;
}

export enum UserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime"
,    Periodic = "periodic"
}


// UserUploadQuotaSpace
/** 
 * Information about the user's upload space remaining for the current period.
**/
export class UserUploadQuotaSpace extends SpeakeasyBase {
  @Metadata({ data: "json, name=free" })
  free: number;

  @Metadata({ data: "json, name=max" })
  max: number;

  @Metadata({ data: "json, name=showing" })
  showing: UserUploadQuotaSpaceShowingEnum;

  @Metadata({ data: "json, name=used" })
  used: number;
}


// UserUploadQuota
/** 
 * Appears only when the user has upload access and is looking at their own user record.
**/
export class UserUploadQuota extends SpeakeasyBase {
  @Metadata({ data: "json, name=lifetime" })
  lifetime: UserUploadQuotaLifetime;

  @Metadata({ data: "json, name=periodic" })
  periodic: UserUploadQuotaPeriodic;

  @Metadata({ data: "json, name=space" })
  space: UserUploadQuotaSpace;
}


export class UserWebsites extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account: UserAccountEnum;

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
  metadata: UserMetadata;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=pictures" })
  pictures: Picture;

  @Metadata({ data: "json, name=preferences" })
  preferences?: UserPreferences;

  @Metadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @Metadata({ data: "json, name=upload_quota" })
  uploadQuota: UserUploadQuota;

  @Metadata({ data: "json, name=uri" })
  uri: string;

  @Metadata({ data: "json, name=websites", elemType: shared.UserWebsites })
  websites: UserWebsites[];
}
