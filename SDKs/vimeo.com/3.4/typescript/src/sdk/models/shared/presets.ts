import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Picture } from "./picture";


// PresetsMetadataConnectionsVideos
/** 
 * Information about the videos in this preset.
**/
export class PresetsMetadataConnectionsVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsMetadataConnections
/** 
 * A list of resource URIs related to the album.
**/
export class PresetsMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=videos" })
  videos: PresetsMetadataConnectionsVideos;
}


// PresetsMetadata
/** 
 * Metadata about the album.
**/
export class PresetsMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: PresetsMetadataConnections;
}


export class PresetsSettingsButtons extends SpeakeasyBase {
  @Metadata({ data: "json, name=embed" })
  embed: boolean;

  @Metadata({ data: "json, name=hd" })
  hd: boolean;

  @Metadata({ data: "json, name=like" })
  like: boolean;

  @Metadata({ data: "json, name=share" })
  share: boolean;

  @Metadata({ data: "json, name=vote" })
  vote: boolean;

  @Metadata({ data: "json, name=watchlater" })
  watchlater: boolean;
}


export class PresetsSettingsLogos extends SpeakeasyBase {
  @Metadata({ data: "json, name=custom" })
  custom: boolean;

  @Metadata({ data: "json, name=sticky_custom" })
  stickyCustom: boolean;

  @Metadata({ data: "json, name=vimeo" })
  vimeo: boolean;
}


// PresetsSettingsOutroLink
/** 
 * The outro link settings. Present only if the type is `link`.
**/
export class PresetsSettingsOutroLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

export enum PresetsSettingsOutroTypeEnum {
    Link = "link"
,    NoIdea = "no idea"
,    Text = "text"
,    UploadedClips = "uploaded_clips"
,    UploadedVideos = "uploaded_videos"
}


export class PresetsSettingsOutro extends SpeakeasyBase {
  @Metadata({ data: "json, name=clips" })
  clips?: string;

  @Metadata({ data: "json, name=link" })
  link?: PresetsSettingsOutroLink;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=type" })
  type: PresetsSettingsOutroTypeEnum;

  @Metadata({ data: "json, name=videos" })
  videos?: string;
}


// PresetsSettings
/** 
 * The contents of the presets group.
**/
export class PresetsSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=buttons" })
  buttons: PresetsSettingsButtons;

  @Metadata({ data: "json, name=logos" })
  logos: PresetsSettingsLogos;

  @Metadata({ data: "json, name=outro" })
  outro: PresetsSettingsOutro;
}

export enum PresetsUserAccountEnum {
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


// PresetsUserMetadataConnectionsAlbums
/** 
 * Information about the albums created by this user.
**/
export class PresetsUserMetadataConnectionsAlbums extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsAppearances
/** 
 * Information about the appearances of this user in other videos.
**/
export class PresetsUserMetadataConnectionsAppearances extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsBlock
/** 
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
export class PresetsUserMetadataConnectionsBlock extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsCategories
/** 
 * Information about this user's followed categories.
**/
export class PresetsUserMetadataConnectionsCategories extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsChannels
/** 
 * Information about this user's subscribed channels.
**/
export class PresetsUserMetadataConnectionsChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsFeed
/** 
 * Information about this user's feed.
**/
export class PresetsUserMetadataConnectionsFeed extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsFolders
/** 
 * Information about this user's folders.
**/
export class PresetsUserMetadataConnectionsFolders extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsFollowers
/** 
 * Information about the user's followers.
**/
export class PresetsUserMetadataConnectionsFollowers extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsFollowing
/** 
 * Information about the users that the current user is following.
**/
export class PresetsUserMetadataConnectionsFollowing extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsGroups
/** 
 * Information about the groups created by this user.
**/
export class PresetsUserMetadataConnectionsGroups extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsLikes
/** 
 * Information about the videos that this user has liked.
**/
export class PresetsUserMetadataConnectionsLikes extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsModeratedChannels
/** 
 * Information about the channels that this user moderates.
**/
export class PresetsUserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsPictures
/** 
 * Information about this user's portraits.
**/
export class PresetsUserMetadataConnectionsPictures extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsPortfolios
/** 
 * Information about this user's portfolios.
**/
export class PresetsUserMetadataConnectionsPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsRecommendedChannels
/** 
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class PresetsUserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsRecommendedUsers
/** 
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class PresetsUserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsShared
/** 
 * Information about the videos that have been shared with this user.
**/
export class PresetsUserMetadataConnectionsShared extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsVideos
/** 
 * Information about the videos uploaded by this user.
**/
export class PresetsUserMetadataConnectionsVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsWatchedVideos
/** 
 * Information about the videos that this user has watched.
**/
export class PresetsUserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsWatchlater
/** 
 * Information about the videos that this user wants to watch later.
**/
export class PresetsUserMetadataConnectionsWatchlater extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnections
/** 
 * The list of resource URIs related to the user.
**/
export class PresetsUserMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=albums" })
  albums: PresetsUserMetadataConnectionsAlbums;

  @Metadata({ data: "json, name=appearances" })
  appearances: PresetsUserMetadataConnectionsAppearances;

  @Metadata({ data: "json, name=block" })
  block: PresetsUserMetadataConnectionsBlock;

  @Metadata({ data: "json, name=categories" })
  categories: PresetsUserMetadataConnectionsCategories;

  @Metadata({ data: "json, name=channels" })
  channels: PresetsUserMetadataConnectionsChannels;

  @Metadata({ data: "json, name=feed" })
  feed: PresetsUserMetadataConnectionsFeed;

  @Metadata({ data: "json, name=folders" })
  folders: PresetsUserMetadataConnectionsFolders;

  @Metadata({ data: "json, name=followers" })
  followers: PresetsUserMetadataConnectionsFollowers;

  @Metadata({ data: "json, name=following" })
  following: PresetsUserMetadataConnectionsFollowing;

  @Metadata({ data: "json, name=groups" })
  groups: PresetsUserMetadataConnectionsGroups;

  @Metadata({ data: "json, name=likes" })
  likes: PresetsUserMetadataConnectionsLikes;

  @Metadata({ data: "json, name=moderated_channels" })
  moderatedChannels: PresetsUserMetadataConnectionsModeratedChannels;

  @Metadata({ data: "json, name=pictures" })
  pictures: PresetsUserMetadataConnectionsPictures;

  @Metadata({ data: "json, name=portfolios" })
  portfolios: PresetsUserMetadataConnectionsPortfolios;

  @Metadata({ data: "json, name=recommended_channels" })
  recommendedChannels: PresetsUserMetadataConnectionsRecommendedChannels;

  @Metadata({ data: "json, name=recommended_users" })
  recommendedUsers: PresetsUserMetadataConnectionsRecommendedUsers;

  @Metadata({ data: "json, name=shared" })
  shared: PresetsUserMetadataConnectionsShared;

  @Metadata({ data: "json, name=videos" })
  videos: PresetsUserMetadataConnectionsVideos;

  @Metadata({ data: "json, name=watched_videos" })
  watchedVideos: PresetsUserMetadataConnectionsWatchedVideos;

  @Metadata({ data: "json, name=watchlater" })
  watchlater: PresetsUserMetadataConnectionsWatchlater;
}


export class PresetsUserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options?: string[];

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


// PresetsUserMetadataInteractionsBlock
/** 
 * Information related to the block status of this user.
**/
export class PresetsUserMetadataInteractionsBlock extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=added_time" })
  addedTime: string;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataInteractionsFollow
/** 
 * Information related to the followed status of this user.
**/
export class PresetsUserMetadataInteractionsFollow extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataInteractionsReport
/** 
 * Information regarding where and how to report a user.
**/
export class PresetsUserMetadataInteractionsReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=reason" })
  reason: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


export class PresetsUserMetadataInteractions extends SpeakeasyBase {
  @Metadata({ data: "json, name=add_privacy_user" })
  addPrivacyUser?: PresetsUserMetadataInteractionsAddPrivacyUser;

  @Metadata({ data: "json, name=block" })
  block: PresetsUserMetadataInteractionsBlock;

  @Metadata({ data: "json, name=follow" })
  follow: PresetsUserMetadataInteractionsFollow;

  @Metadata({ data: "json, name=report" })
  report: PresetsUserMetadataInteractionsReport;
}


// PresetsUserMetadata
/** 
 * The user's metadata.
**/
export class PresetsUserMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: PresetsUserMetadataConnections;

  @Metadata({ data: "json, name=interactions" })
  interactions: PresetsUserMetadataInteractions;
}

export enum PresetsUserPreferencesVideosPrivacyCommentsEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Nobody = "nobody"
}

export enum PresetsUserPreferencesVideosPrivacyEmbedEnum {
    Private = "private"
,    Public = "public"
,    Whitelist = "whitelist"
}

export enum PresetsUserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Disable = "disable"
,    Nobody = "nobody"
,    Password = "password"
,    Unlisted = "unlisted"
,    Users = "users"
}


export class PresetsUserPreferencesVideosPrivacy extends SpeakeasyBase {
  @Metadata({ data: "json, name=add" })
  add?: boolean;

  @Metadata({ data: "json, name=comments" })
  comments?: PresetsUserPreferencesVideosPrivacyCommentsEnum;

  @Metadata({ data: "json, name=download" })
  download?: boolean;

  @Metadata({ data: "json, name=embed" })
  embed?: PresetsUserPreferencesVideosPrivacyEmbedEnum;

  @Metadata({ data: "json, name=view" })
  view?: PresetsUserPreferencesVideosPrivacyViewEnum;
}


export class PresetsUserPreferencesVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=privacy" })
  privacy?: PresetsUserPreferencesVideosPrivacy;
}


export class PresetsUserPreferences extends SpeakeasyBase {
  @Metadata({ data: "json, name=videos" })
  videos?: PresetsUserPreferencesVideos;
}


// PresetsUserUploadQuotaLifetime
/** 
 * Information about the user's lifetime upload usage.
**/
export class PresetsUserUploadQuotaLifetime extends SpeakeasyBase {
  @Metadata({ data: "json, name=free" })
  free: number;

  @Metadata({ data: "json, name=max" })
  max: number;

  @Metadata({ data: "json, name=used" })
  used: number;
}


// PresetsUserUploadQuotaPeriodic
/** 
 * Information about the user's usage for the current period.
**/
export class PresetsUserUploadQuotaPeriodic extends SpeakeasyBase {
  @Metadata({ data: "json, name=free" })
  free: number;

  @Metadata({ data: "json, name=max" })
  max: number;

  @Metadata({ data: "json, name=reset_date" })
  resetDate: string;

  @Metadata({ data: "json, name=used" })
  used: number;
}

export enum PresetsUserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime"
,    Periodic = "periodic"
}


// PresetsUserUploadQuotaSpace
/** 
 * Information about the user's upload space remaining for the current period.
**/
export class PresetsUserUploadQuotaSpace extends SpeakeasyBase {
  @Metadata({ data: "json, name=free" })
  free: number;

  @Metadata({ data: "json, name=max" })
  max: number;

  @Metadata({ data: "json, name=showing" })
  showing: PresetsUserUploadQuotaSpaceShowingEnum;

  @Metadata({ data: "json, name=used" })
  used: number;
}


// PresetsUserUploadQuota
/** 
 * Appears only when the user has upload access and is looking at their own user record.
**/
export class PresetsUserUploadQuota extends SpeakeasyBase {
  @Metadata({ data: "json, name=lifetime" })
  lifetime: PresetsUserUploadQuotaLifetime;

  @Metadata({ data: "json, name=periodic" })
  periodic: PresetsUserUploadQuotaPeriodic;

  @Metadata({ data: "json, name=space" })
  space: PresetsUserUploadQuotaSpace;
}


export class PresetsUserWebsites extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


// PresetsUser
/** 
 * The owner of the preset.
**/
export class PresetsUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account: PresetsUserAccountEnum;

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
  metadata: PresetsUserMetadata;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=pictures" })
  pictures: Picture;

  @Metadata({ data: "json, name=preferences" })
  preferences?: PresetsUserPreferences;

  @Metadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @Metadata({ data: "json, name=upload_quota" })
  uploadQuota: PresetsUserUploadQuota;

  @Metadata({ data: "json, name=uri" })
  uri: string;

  @Metadata({ data: "json, name=websites", elemType: shared.PresetsUserWebsites })
  websites: PresetsUserWebsites[];
}


export class Presets extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadata" })
  metadata: PresetsMetadata;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=settings" })
  settings: PresetsSettings;

  @Metadata({ data: "json, name=uri" })
  uri: string;

  @Metadata({ data: "json, name=user" })
  user: PresetsUser;
}
