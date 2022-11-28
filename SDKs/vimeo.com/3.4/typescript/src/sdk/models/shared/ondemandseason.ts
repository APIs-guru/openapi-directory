import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Picture } from "./picture";



// OnDemandSeasonMetadataConnectionsVideos
/** 
 * The Videos connection.
**/
export class OnDemandSeasonMetadataConnectionsVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


export class OnDemandSeasonMetadataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=videos" })
  videos: OnDemandSeasonMetadataConnectionsVideos;
}


export class OnDemandSeasonMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections" })
  connections: OnDemandSeasonMetadataConnections;
}

export enum OnDemandSeasonUserAccountEnum {
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


// OnDemandSeasonUserMetadataConnectionsAlbums
/** 
 * Information about the albums created by this user.
**/
export class OnDemandSeasonUserMetadataConnectionsAlbums extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsAppearances
/** 
 * Information about the appearances of this user in other videos.
**/
export class OnDemandSeasonUserMetadataConnectionsAppearances extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsBlock
/** 
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
export class OnDemandSeasonUserMetadataConnectionsBlock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsCategories
/** 
 * Information about this user's followed categories.
**/
export class OnDemandSeasonUserMetadataConnectionsCategories extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsChannels
/** 
 * Information about this user's subscribed channels.
**/
export class OnDemandSeasonUserMetadataConnectionsChannels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsFeed
/** 
 * Information about this user's feed.
**/
export class OnDemandSeasonUserMetadataConnectionsFeed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsFolders
/** 
 * Information about this user's folders.
**/
export class OnDemandSeasonUserMetadataConnectionsFolders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsFollowers
/** 
 * Information about the user's followers.
**/
export class OnDemandSeasonUserMetadataConnectionsFollowers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsFollowing
/** 
 * Information about the users that the current user is following.
**/
export class OnDemandSeasonUserMetadataConnectionsFollowing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsGroups
/** 
 * Information about the groups created by this user.
**/
export class OnDemandSeasonUserMetadataConnectionsGroups extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsLikes
/** 
 * Information about the videos that this user has liked.
**/
export class OnDemandSeasonUserMetadataConnectionsLikes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsModeratedChannels
/** 
 * Information about the channels that this user moderates.
**/
export class OnDemandSeasonUserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsPictures
/** 
 * Information about this user's portraits.
**/
export class OnDemandSeasonUserMetadataConnectionsPictures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsPortfolios
/** 
 * Information about this user's portfolios.
**/
export class OnDemandSeasonUserMetadataConnectionsPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsRecommendedChannels
/** 
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class OnDemandSeasonUserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsRecommendedUsers
/** 
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class OnDemandSeasonUserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsShared
/** 
 * Information about the videos that have been shared with this user.
**/
export class OnDemandSeasonUserMetadataConnectionsShared extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsVideos
/** 
 * Information about the videos uploaded by this user.
**/
export class OnDemandSeasonUserMetadataConnectionsVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsWatchedVideos
/** 
 * Information about the videos that this user has watched.
**/
export class OnDemandSeasonUserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnectionsWatchlater
/** 
 * Information about the videos that this user wants to watch later.
**/
export class OnDemandSeasonUserMetadataConnectionsWatchlater extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataConnections
/** 
 * The list of resource URIs related to the user.
**/
export class OnDemandSeasonUserMetadataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=albums" })
  albums: OnDemandSeasonUserMetadataConnectionsAlbums;

  @SpeakeasyMetadata({ data: "json, name=appearances" })
  appearances: OnDemandSeasonUserMetadataConnectionsAppearances;

  @SpeakeasyMetadata({ data: "json, name=block" })
  block: OnDemandSeasonUserMetadataConnectionsBlock;

  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories: OnDemandSeasonUserMetadataConnectionsCategories;

  @SpeakeasyMetadata({ data: "json, name=channels" })
  channels: OnDemandSeasonUserMetadataConnectionsChannels;

  @SpeakeasyMetadata({ data: "json, name=feed" })
  feed: OnDemandSeasonUserMetadataConnectionsFeed;

  @SpeakeasyMetadata({ data: "json, name=folders" })
  folders: OnDemandSeasonUserMetadataConnectionsFolders;

  @SpeakeasyMetadata({ data: "json, name=followers" })
  followers: OnDemandSeasonUserMetadataConnectionsFollowers;

  @SpeakeasyMetadata({ data: "json, name=following" })
  following: OnDemandSeasonUserMetadataConnectionsFollowing;

  @SpeakeasyMetadata({ data: "json, name=groups" })
  groups: OnDemandSeasonUserMetadataConnectionsGroups;

  @SpeakeasyMetadata({ data: "json, name=likes" })
  likes: OnDemandSeasonUserMetadataConnectionsLikes;

  @SpeakeasyMetadata({ data: "json, name=moderated_channels" })
  moderatedChannels: OnDemandSeasonUserMetadataConnectionsModeratedChannels;

  @SpeakeasyMetadata({ data: "json, name=pictures" })
  pictures: OnDemandSeasonUserMetadataConnectionsPictures;

  @SpeakeasyMetadata({ data: "json, name=portfolios" })
  portfolios: OnDemandSeasonUserMetadataConnectionsPortfolios;

  @SpeakeasyMetadata({ data: "json, name=recommended_channels" })
  recommendedChannels: OnDemandSeasonUserMetadataConnectionsRecommendedChannels;

  @SpeakeasyMetadata({ data: "json, name=recommended_users" })
  recommendedUsers: OnDemandSeasonUserMetadataConnectionsRecommendedUsers;

  @SpeakeasyMetadata({ data: "json, name=shared" })
  shared: OnDemandSeasonUserMetadataConnectionsShared;

  @SpeakeasyMetadata({ data: "json, name=videos" })
  videos: OnDemandSeasonUserMetadataConnectionsVideos;

  @SpeakeasyMetadata({ data: "json, name=watched_videos" })
  watchedVideos: OnDemandSeasonUserMetadataConnectionsWatchedVideos;

  @SpeakeasyMetadata({ data: "json, name=watchlater" })
  watchlater: OnDemandSeasonUserMetadataConnectionsWatchlater;
}


export class OnDemandSeasonUserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


// OnDemandSeasonUserMetadataInteractionsBlock
/** 
 * Information related to the block status of this user.
**/
export class OnDemandSeasonUserMetadataInteractionsBlock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added" })
  added: boolean;

  @SpeakeasyMetadata({ data: "json, name=added_time" })
  addedTime: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataInteractionsFollow
/** 
 * Information related to the followed status of this user.
**/
export class OnDemandSeasonUserMetadataInteractionsFollow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added" })
  added: boolean;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandSeasonUserMetadataInteractionsReport
/** 
 * Information regarding where and how to report a user.
**/
export class OnDemandSeasonUserMetadataInteractionsReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


export class OnDemandSeasonUserMetadataInteractions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add_privacy_user" })
  addPrivacyUser?: OnDemandSeasonUserMetadataInteractionsAddPrivacyUser;

  @SpeakeasyMetadata({ data: "json, name=block" })
  block: OnDemandSeasonUserMetadataInteractionsBlock;

  @SpeakeasyMetadata({ data: "json, name=follow" })
  follow: OnDemandSeasonUserMetadataInteractionsFollow;

  @SpeakeasyMetadata({ data: "json, name=report" })
  report: OnDemandSeasonUserMetadataInteractionsReport;
}


// OnDemandSeasonUserMetadata
/** 
 * The user's metadata.
**/
export class OnDemandSeasonUserMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections" })
  connections: OnDemandSeasonUserMetadataConnections;

  @SpeakeasyMetadata({ data: "json, name=interactions" })
  interactions: OnDemandSeasonUserMetadataInteractions;
}

export enum OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}

export enum OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnum {
    Private = "private",
    Public = "public",
    Whitelist = "whitelist"
}

export enum OnDemandSeasonUserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}


export class OnDemandSeasonUserPreferencesVideosPrivacy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add" })
  add?: boolean;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnum;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download?: boolean;

  @SpeakeasyMetadata({ data: "json, name=embed" })
  embed?: OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnum;

  @SpeakeasyMetadata({ data: "json, name=view" })
  view?: OnDemandSeasonUserPreferencesVideosPrivacyViewEnum;
}


export class OnDemandSeasonUserPreferencesVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: OnDemandSeasonUserPreferencesVideosPrivacy;
}


export class OnDemandSeasonUserPreferences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=videos" })
  videos?: OnDemandSeasonUserPreferencesVideos;
}


// OnDemandSeasonUserUploadQuotaLifetime
/** 
 * Information about the user's lifetime upload usage.
**/
export class OnDemandSeasonUserUploadQuotaLifetime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=free" })
  free: number;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max: number;

  @SpeakeasyMetadata({ data: "json, name=used" })
  used: number;
}


// OnDemandSeasonUserUploadQuotaPeriodic
/** 
 * Information about the user's usage for the current period.
**/
export class OnDemandSeasonUserUploadQuotaPeriodic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=free" })
  free: number;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max: number;

  @SpeakeasyMetadata({ data: "json, name=reset_date" })
  resetDate: string;

  @SpeakeasyMetadata({ data: "json, name=used" })
  used: number;
}

export enum OnDemandSeasonUserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime",
    Periodic = "periodic"
}


// OnDemandSeasonUserUploadQuotaSpace
/** 
 * Information about the user's upload space remaining for the current period.
**/
export class OnDemandSeasonUserUploadQuotaSpace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=free" })
  free: number;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max: number;

  @SpeakeasyMetadata({ data: "json, name=showing" })
  showing: OnDemandSeasonUserUploadQuotaSpaceShowingEnum;

  @SpeakeasyMetadata({ data: "json, name=used" })
  used: number;
}


// OnDemandSeasonUserUploadQuota
/** 
 * Appears only when the user has upload access and is looking at their own user record.
**/
export class OnDemandSeasonUserUploadQuota extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lifetime" })
  lifetime: OnDemandSeasonUserUploadQuotaLifetime;

  @SpeakeasyMetadata({ data: "json, name=periodic" })
  periodic: OnDemandSeasonUserUploadQuotaPeriodic;

  @SpeakeasyMetadata({ data: "json, name=space" })
  space: OnDemandSeasonUserUploadQuotaSpace;
}


export class OnDemandSeasonUserWebsites extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


// OnDemandSeasonUser
/** 
 * The creator of this On Demand page.
**/
export class OnDemandSeasonUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account: OnDemandSeasonUserAccountEnum;

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
  metadata: OnDemandSeasonUserMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=pictures" })
  pictures: Picture;

  @SpeakeasyMetadata({ data: "json, name=preferences" })
  preferences?: OnDemandSeasonUserPreferences;

  @SpeakeasyMetadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @SpeakeasyMetadata({ data: "json, name=upload_quota" })
  uploadQuota: OnDemandSeasonUserUploadQuota;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;

  @SpeakeasyMetadata({ data: "json, name=websites", elemType: OnDemandSeasonUserWebsites })
  websites: OnDemandSeasonUserWebsites[];
}


export class OnDemandSeason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: OnDemandSeasonMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position: number;

  @SpeakeasyMetadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: OnDemandSeasonUser;
}
