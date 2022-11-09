import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Picture } from "./picture";


// OnDemandSeasonMetadataConnectionsVideos
/** 
 * The Videos connection.
**/
export class OnDemandSeasonMetadataConnectionsVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


export class OnDemandSeasonMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=videos" })
  videos: OnDemandSeasonMetadataConnectionsVideos;
}


export class OnDemandSeasonMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: OnDemandSeasonMetadataConnections;
}

export enum OnDemandSeasonUserAccountEnum {
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


// OnDemandSeasonUserMetadataConnectionsAlbums
/** 
 * Information about the albums created by this user.
**/
export class OnDemandSeasonUserMetadataConnectionsAlbums extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsAppearances
/** 
 * Information about the appearances of this user in other videos.
**/
export class OnDemandSeasonUserMetadataConnectionsAppearances extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsBlock
/** 
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
export class OnDemandSeasonUserMetadataConnectionsBlock extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsCategories
/** 
 * Information about this user's followed categories.
**/
export class OnDemandSeasonUserMetadataConnectionsCategories extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsChannels
/** 
 * Information about this user's subscribed channels.
**/
export class OnDemandSeasonUserMetadataConnectionsChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsFeed
/** 
 * Information about this user's feed.
**/
export class OnDemandSeasonUserMetadataConnectionsFeed extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsFolders
/** 
 * Information about this user's folders.
**/
export class OnDemandSeasonUserMetadataConnectionsFolders extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsFollowers
/** 
 * Information about the user's followers.
**/
export class OnDemandSeasonUserMetadataConnectionsFollowers extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsFollowing
/** 
 * Information about the users that the current user is following.
**/
export class OnDemandSeasonUserMetadataConnectionsFollowing extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsGroups
/** 
 * Information about the groups created by this user.
**/
export class OnDemandSeasonUserMetadataConnectionsGroups extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsLikes
/** 
 * Information about the videos that this user has liked.
**/
export class OnDemandSeasonUserMetadataConnectionsLikes extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsModeratedChannels
/** 
 * Information about the channels that this user moderates.
**/
export class OnDemandSeasonUserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsPictures
/** 
 * Information about this user's portraits.
**/
export class OnDemandSeasonUserMetadataConnectionsPictures extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsPortfolios
/** 
 * Information about this user's portfolios.
**/
export class OnDemandSeasonUserMetadataConnectionsPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsRecommendedChannels
/** 
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class OnDemandSeasonUserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsRecommendedUsers
/** 
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class OnDemandSeasonUserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsShared
/** 
 * Information about the videos that have been shared with this user.
**/
export class OnDemandSeasonUserMetadataConnectionsShared extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsVideos
/** 
 * Information about the videos uploaded by this user.
**/
export class OnDemandSeasonUserMetadataConnectionsVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsWatchedVideos
/** 
 * Information about the videos that this user has watched.
**/
export class OnDemandSeasonUserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsWatchlater
/** 
 * Information about the videos that this user wants to watch later.
**/
export class OnDemandSeasonUserMetadataConnectionsWatchlater extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnections
/** 
 * The list of resource URIs related to the user.
**/
export class OnDemandSeasonUserMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=albums" })
  albums: OnDemandSeasonUserMetadataConnectionsAlbums;

  @Metadata({ data: "json, name=appearances" })
  appearances: OnDemandSeasonUserMetadataConnectionsAppearances;

  @Metadata({ data: "json, name=block" })
  block: OnDemandSeasonUserMetadataConnectionsBlock;

  @Metadata({ data: "json, name=categories" })
  categories: OnDemandSeasonUserMetadataConnectionsCategories;

  @Metadata({ data: "json, name=channels" })
  channels: OnDemandSeasonUserMetadataConnectionsChannels;

  @Metadata({ data: "json, name=feed" })
  feed: OnDemandSeasonUserMetadataConnectionsFeed;

  @Metadata({ data: "json, name=folders" })
  folders: OnDemandSeasonUserMetadataConnectionsFolders;

  @Metadata({ data: "json, name=followers" })
  followers: OnDemandSeasonUserMetadataConnectionsFollowers;

  @Metadata({ data: "json, name=following" })
  following: OnDemandSeasonUserMetadataConnectionsFollowing;

  @Metadata({ data: "json, name=groups" })
  groups: OnDemandSeasonUserMetadataConnectionsGroups;

  @Metadata({ data: "json, name=likes" })
  likes: OnDemandSeasonUserMetadataConnectionsLikes;

  @Metadata({ data: "json, name=moderated_channels" })
  moderatedChannels: OnDemandSeasonUserMetadataConnectionsModeratedChannels;

  @Metadata({ data: "json, name=pictures" })
  pictures: OnDemandSeasonUserMetadataConnectionsPictures;

  @Metadata({ data: "json, name=portfolios" })
  portfolios: OnDemandSeasonUserMetadataConnectionsPortfolios;

  @Metadata({ data: "json, name=recommended_channels" })
  recommendedChannels: OnDemandSeasonUserMetadataConnectionsRecommendedChannels;

  @Metadata({ data: "json, name=recommended_users" })
  recommendedUsers: OnDemandSeasonUserMetadataConnectionsRecommendedUsers;

  @Metadata({ data: "json, name=shared" })
  shared: OnDemandSeasonUserMetadataConnectionsShared;

  @Metadata({ data: "json, name=videos" })
  videos: OnDemandSeasonUserMetadataConnectionsVideos;

  @Metadata({ data: "json, name=watched_videos" })
  watchedVideos: OnDemandSeasonUserMetadataConnectionsWatchedVideos;

  @Metadata({ data: "json, name=watchlater" })
  watchlater: OnDemandSeasonUserMetadataConnectionsWatchlater;
}


export class OnDemandSeasonUserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options?: string[];

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


// OnDemandSeasonUserMetadataInteractionsBlock
/** 
 * Information related to the block status of this user.
**/
export class OnDemandSeasonUserMetadataInteractionsBlock extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=added_time" })
  addedTime: string;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataInteractionsFollow
/** 
 * Information related to the followed status of this user.
**/
export class OnDemandSeasonUserMetadataInteractionsFollow extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataInteractionsReport
/** 
 * Information regarding where and how to report a user.
**/
export class OnDemandSeasonUserMetadataInteractionsReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=reason" })
  reason: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


export class OnDemandSeasonUserMetadataInteractions extends SpeakeasyBase {
  @Metadata({ data: "json, name=add_privacy_user" })
  addPrivacyUser?: OnDemandSeasonUserMetadataInteractionsAddPrivacyUser;

  @Metadata({ data: "json, name=block" })
  block: OnDemandSeasonUserMetadataInteractionsBlock;

  @Metadata({ data: "json, name=follow" })
  follow: OnDemandSeasonUserMetadataInteractionsFollow;

  @Metadata({ data: "json, name=report" })
  report: OnDemandSeasonUserMetadataInteractionsReport;
}


// OnDemandSeasonUserMetadata
/** 
 * The user's metadata.
**/
export class OnDemandSeasonUserMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: OnDemandSeasonUserMetadataConnections;

  @Metadata({ data: "json, name=interactions" })
  interactions: OnDemandSeasonUserMetadataInteractions;
}

export enum OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Nobody = "nobody"
}

export enum OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnum {
    Private = "private"
,    Public = "public"
,    Whitelist = "whitelist"
}

export enum OnDemandSeasonUserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Disable = "disable"
,    Nobody = "nobody"
,    Password = "password"
,    Unlisted = "unlisted"
,    Users = "users"
}


export class OnDemandSeasonUserPreferencesVideosPrivacy extends SpeakeasyBase {
  @Metadata({ data: "json, name=add" })
  add?: boolean;

  @Metadata({ data: "json, name=comments" })
  comments?: OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnum;

  @Metadata({ data: "json, name=download" })
  download?: boolean;

  @Metadata({ data: "json, name=embed" })
  embed?: OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnum;

  @Metadata({ data: "json, name=view" })
  view?: OnDemandSeasonUserPreferencesVideosPrivacyViewEnum;
}


export class OnDemandSeasonUserPreferencesVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=privacy" })
  privacy?: OnDemandSeasonUserPreferencesVideosPrivacy;
}


export class OnDemandSeasonUserPreferences extends SpeakeasyBase {
  @Metadata({ data: "json, name=videos" })
  videos?: OnDemandSeasonUserPreferencesVideos;
}


// OnDemandSeasonUserUploadQuotaLifetime
/** 
 * Information about the user's lifetime upload usage.
**/
export class OnDemandSeasonUserUploadQuotaLifetime extends SpeakeasyBase {
  @Metadata({ data: "json, name=free" })
  free: number;

  @Metadata({ data: "json, name=max" })
  max: number;

  @Metadata({ data: "json, name=used" })
  used: number;
}


// OnDemandSeasonUserUploadQuotaPeriodic
/** 
 * Information about the user's usage for the current period.
**/
export class OnDemandSeasonUserUploadQuotaPeriodic extends SpeakeasyBase {
  @Metadata({ data: "json, name=free" })
  free: number;

  @Metadata({ data: "json, name=max" })
  max: number;

  @Metadata({ data: "json, name=reset_date" })
  resetDate: string;

  @Metadata({ data: "json, name=used" })
  used: number;
}

export enum OnDemandSeasonUserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime"
,    Periodic = "periodic"
}


// OnDemandSeasonUserUploadQuotaSpace
/** 
 * Information about the user's upload space remaining for the current period.
**/
export class OnDemandSeasonUserUploadQuotaSpace extends SpeakeasyBase {
  @Metadata({ data: "json, name=free" })
  free: number;

  @Metadata({ data: "json, name=max" })
  max: number;

  @Metadata({ data: "json, name=showing" })
  showing: OnDemandSeasonUserUploadQuotaSpaceShowingEnum;

  @Metadata({ data: "json, name=used" })
  used: number;
}


// OnDemandSeasonUserUploadQuota
/** 
 * Appears only when the user has upload access and is looking at their own user record.
**/
export class OnDemandSeasonUserUploadQuota extends SpeakeasyBase {
  @Metadata({ data: "json, name=lifetime" })
  lifetime: OnDemandSeasonUserUploadQuotaLifetime;

  @Metadata({ data: "json, name=periodic" })
  periodic: OnDemandSeasonUserUploadQuotaPeriodic;

  @Metadata({ data: "json, name=space" })
  space: OnDemandSeasonUserUploadQuotaSpace;
}


export class OnDemandSeasonUserWebsites extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


// OnDemandSeasonUser
/** 
 * The creator of this On Demand page.
**/
export class OnDemandSeasonUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account: OnDemandSeasonUserAccountEnum;

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
  metadata: OnDemandSeasonUserMetadata;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=pictures" })
  pictures: Picture;

  @Metadata({ data: "json, name=preferences" })
  preferences?: OnDemandSeasonUserPreferences;

  @Metadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @Metadata({ data: "json, name=upload_quota" })
  uploadQuota: OnDemandSeasonUserUploadQuota;

  @Metadata({ data: "json, name=uri" })
  uri: string;

  @Metadata({ data: "json, name=websites", elemType: shared.OnDemandSeasonUserWebsites })
  websites: OnDemandSeasonUserWebsites[];
}


export class OnDemandSeason extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: OnDemandSeasonMetadata;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=position" })
  position: number;

  @Metadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=uri" })
  uri: string;

  @Metadata({ data: "json, name=user" })
  user: OnDemandSeasonUser;
}
