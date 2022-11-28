import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Picture } from "./picture";



// PresetsMetadataConnectionsVideos
/** 
 * Information about the videos in this preset.
**/
export class PresetsMetadataConnectionsVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsMetadataConnections
/** 
 * A list of resource URIs related to the album.
**/
export class PresetsMetadataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=videos" })
  videos: PresetsMetadataConnectionsVideos;
}


// PresetsMetadata
/** 
 * Metadata about the album.
**/
export class PresetsMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections" })
  connections: PresetsMetadataConnections;
}


export class PresetsSettingsButtons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=embed" })
  embed: boolean;

  @SpeakeasyMetadata({ data: "json, name=hd" })
  hd: boolean;

  @SpeakeasyMetadata({ data: "json, name=like" })
  like: boolean;

  @SpeakeasyMetadata({ data: "json, name=share" })
  share: boolean;

  @SpeakeasyMetadata({ data: "json, name=vote" })
  vote: boolean;

  @SpeakeasyMetadata({ data: "json, name=watchlater" })
  watchlater: boolean;
}


export class PresetsSettingsLogos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom" })
  custom: boolean;

  @SpeakeasyMetadata({ data: "json, name=sticky_custom" })
  stickyCustom: boolean;

  @SpeakeasyMetadata({ data: "json, name=vimeo" })
  vimeo: boolean;
}


// PresetsSettingsOutroLink
/** 
 * The outro link settings. Present only if the type is `link`.
**/
export class PresetsSettingsOutroLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

export enum PresetsSettingsOutroTypeEnum {
    Link = "link",
    NoIdea = "no idea",
    Text = "text",
    UploadedClips = "uploaded_clips",
    UploadedVideos = "uploaded_videos"
}


export class PresetsSettingsOutro extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clips" })
  clips?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: PresetsSettingsOutroLink;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PresetsSettingsOutroTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=videos" })
  videos?: string;
}


// PresetsSettings
/** 
 * The contents of the presets group.
**/
export class PresetsSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buttons" })
  buttons: PresetsSettingsButtons;

  @SpeakeasyMetadata({ data: "json, name=logos" })
  logos: PresetsSettingsLogos;

  @SpeakeasyMetadata({ data: "json, name=outro" })
  outro: PresetsSettingsOutro;
}

export enum PresetsUserAccountEnum {
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


// PresetsUserMetadataConnectionsAlbums
/** 
 * Information about the albums created by this user.
**/
export class PresetsUserMetadataConnectionsAlbums extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsAppearances
/** 
 * Information about the appearances of this user in other videos.
**/
export class PresetsUserMetadataConnectionsAppearances extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsBlock
/** 
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
export class PresetsUserMetadataConnectionsBlock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsCategories
/** 
 * Information about this user's followed categories.
**/
export class PresetsUserMetadataConnectionsCategories extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsChannels
/** 
 * Information about this user's subscribed channels.
**/
export class PresetsUserMetadataConnectionsChannels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsFeed
/** 
 * Information about this user's feed.
**/
export class PresetsUserMetadataConnectionsFeed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsFolders
/** 
 * Information about this user's folders.
**/
export class PresetsUserMetadataConnectionsFolders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsFollowers
/** 
 * Information about the user's followers.
**/
export class PresetsUserMetadataConnectionsFollowers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsFollowing
/** 
 * Information about the users that the current user is following.
**/
export class PresetsUserMetadataConnectionsFollowing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsGroups
/** 
 * Information about the groups created by this user.
**/
export class PresetsUserMetadataConnectionsGroups extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsLikes
/** 
 * Information about the videos that this user has liked.
**/
export class PresetsUserMetadataConnectionsLikes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsModeratedChannels
/** 
 * Information about the channels that this user moderates.
**/
export class PresetsUserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsPictures
/** 
 * Information about this user's portraits.
**/
export class PresetsUserMetadataConnectionsPictures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsPortfolios
/** 
 * Information about this user's portfolios.
**/
export class PresetsUserMetadataConnectionsPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsRecommendedChannels
/** 
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class PresetsUserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsRecommendedUsers
/** 
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class PresetsUserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsShared
/** 
 * Information about the videos that have been shared with this user.
**/
export class PresetsUserMetadataConnectionsShared extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsVideos
/** 
 * Information about the videos uploaded by this user.
**/
export class PresetsUserMetadataConnectionsVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsWatchedVideos
/** 
 * Information about the videos that this user has watched.
**/
export class PresetsUserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnectionsWatchlater
/** 
 * Information about the videos that this user wants to watch later.
**/
export class PresetsUserMetadataConnectionsWatchlater extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataConnections
/** 
 * The list of resource URIs related to the user.
**/
export class PresetsUserMetadataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=albums" })
  albums: PresetsUserMetadataConnectionsAlbums;

  @SpeakeasyMetadata({ data: "json, name=appearances" })
  appearances: PresetsUserMetadataConnectionsAppearances;

  @SpeakeasyMetadata({ data: "json, name=block" })
  block: PresetsUserMetadataConnectionsBlock;

  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories: PresetsUserMetadataConnectionsCategories;

  @SpeakeasyMetadata({ data: "json, name=channels" })
  channels: PresetsUserMetadataConnectionsChannels;

  @SpeakeasyMetadata({ data: "json, name=feed" })
  feed: PresetsUserMetadataConnectionsFeed;

  @SpeakeasyMetadata({ data: "json, name=folders" })
  folders: PresetsUserMetadataConnectionsFolders;

  @SpeakeasyMetadata({ data: "json, name=followers" })
  followers: PresetsUserMetadataConnectionsFollowers;

  @SpeakeasyMetadata({ data: "json, name=following" })
  following: PresetsUserMetadataConnectionsFollowing;

  @SpeakeasyMetadata({ data: "json, name=groups" })
  groups: PresetsUserMetadataConnectionsGroups;

  @SpeakeasyMetadata({ data: "json, name=likes" })
  likes: PresetsUserMetadataConnectionsLikes;

  @SpeakeasyMetadata({ data: "json, name=moderated_channels" })
  moderatedChannels: PresetsUserMetadataConnectionsModeratedChannels;

  @SpeakeasyMetadata({ data: "json, name=pictures" })
  pictures: PresetsUserMetadataConnectionsPictures;

  @SpeakeasyMetadata({ data: "json, name=portfolios" })
  portfolios: PresetsUserMetadataConnectionsPortfolios;

  @SpeakeasyMetadata({ data: "json, name=recommended_channels" })
  recommendedChannels: PresetsUserMetadataConnectionsRecommendedChannels;

  @SpeakeasyMetadata({ data: "json, name=recommended_users" })
  recommendedUsers: PresetsUserMetadataConnectionsRecommendedUsers;

  @SpeakeasyMetadata({ data: "json, name=shared" })
  shared: PresetsUserMetadataConnectionsShared;

  @SpeakeasyMetadata({ data: "json, name=videos" })
  videos: PresetsUserMetadataConnectionsVideos;

  @SpeakeasyMetadata({ data: "json, name=watched_videos" })
  watchedVideos: PresetsUserMetadataConnectionsWatchedVideos;

  @SpeakeasyMetadata({ data: "json, name=watchlater" })
  watchlater: PresetsUserMetadataConnectionsWatchlater;
}


export class PresetsUserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


// PresetsUserMetadataInteractionsBlock
/** 
 * Information related to the block status of this user.
**/
export class PresetsUserMetadataInteractionsBlock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added" })
  added: boolean;

  @SpeakeasyMetadata({ data: "json, name=added_time" })
  addedTime: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataInteractionsFollow
/** 
 * Information related to the followed status of this user.
**/
export class PresetsUserMetadataInteractionsFollow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added" })
  added: boolean;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// PresetsUserMetadataInteractionsReport
/** 
 * Information regarding where and how to report a user.
**/
export class PresetsUserMetadataInteractionsReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


export class PresetsUserMetadataInteractions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add_privacy_user" })
  addPrivacyUser?: PresetsUserMetadataInteractionsAddPrivacyUser;

  @SpeakeasyMetadata({ data: "json, name=block" })
  block: PresetsUserMetadataInteractionsBlock;

  @SpeakeasyMetadata({ data: "json, name=follow" })
  follow: PresetsUserMetadataInteractionsFollow;

  @SpeakeasyMetadata({ data: "json, name=report" })
  report: PresetsUserMetadataInteractionsReport;
}


// PresetsUserMetadata
/** 
 * The user's metadata.
**/
export class PresetsUserMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections" })
  connections: PresetsUserMetadataConnections;

  @SpeakeasyMetadata({ data: "json, name=interactions" })
  interactions: PresetsUserMetadataInteractions;
}

export enum PresetsUserPreferencesVideosPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}

export enum PresetsUserPreferencesVideosPrivacyEmbedEnum {
    Private = "private",
    Public = "public",
    Whitelist = "whitelist"
}

export enum PresetsUserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}


export class PresetsUserPreferencesVideosPrivacy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add" })
  add?: boolean;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: PresetsUserPreferencesVideosPrivacyCommentsEnum;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download?: boolean;

  @SpeakeasyMetadata({ data: "json, name=embed" })
  embed?: PresetsUserPreferencesVideosPrivacyEmbedEnum;

  @SpeakeasyMetadata({ data: "json, name=view" })
  view?: PresetsUserPreferencesVideosPrivacyViewEnum;
}


export class PresetsUserPreferencesVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: PresetsUserPreferencesVideosPrivacy;
}


export class PresetsUserPreferences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=videos" })
  videos?: PresetsUserPreferencesVideos;
}


// PresetsUserUploadQuotaLifetime
/** 
 * Information about the user's lifetime upload usage.
**/
export class PresetsUserUploadQuotaLifetime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=free" })
  free: number;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max: number;

  @SpeakeasyMetadata({ data: "json, name=used" })
  used: number;
}


// PresetsUserUploadQuotaPeriodic
/** 
 * Information about the user's usage for the current period.
**/
export class PresetsUserUploadQuotaPeriodic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=free" })
  free: number;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max: number;

  @SpeakeasyMetadata({ data: "json, name=reset_date" })
  resetDate: string;

  @SpeakeasyMetadata({ data: "json, name=used" })
  used: number;
}

export enum PresetsUserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime",
    Periodic = "periodic"
}


// PresetsUserUploadQuotaSpace
/** 
 * Information about the user's upload space remaining for the current period.
**/
export class PresetsUserUploadQuotaSpace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=free" })
  free: number;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max: number;

  @SpeakeasyMetadata({ data: "json, name=showing" })
  showing: PresetsUserUploadQuotaSpaceShowingEnum;

  @SpeakeasyMetadata({ data: "json, name=used" })
  used: number;
}


// PresetsUserUploadQuota
/** 
 * Appears only when the user has upload access and is looking at their own user record.
**/
export class PresetsUserUploadQuota extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lifetime" })
  lifetime: PresetsUserUploadQuotaLifetime;

  @SpeakeasyMetadata({ data: "json, name=periodic" })
  periodic: PresetsUserUploadQuotaPeriodic;

  @SpeakeasyMetadata({ data: "json, name=space" })
  space: PresetsUserUploadQuotaSpace;
}


export class PresetsUserWebsites extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


// PresetsUser
/** 
 * The owner of the preset.
**/
export class PresetsUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account: PresetsUserAccountEnum;

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
  metadata: PresetsUserMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=pictures" })
  pictures: Picture;

  @SpeakeasyMetadata({ data: "json, name=preferences" })
  preferences?: PresetsUserPreferences;

  @SpeakeasyMetadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @SpeakeasyMetadata({ data: "json, name=upload_quota" })
  uploadQuota: PresetsUserUploadQuota;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;

  @SpeakeasyMetadata({ data: "json, name=websites", elemType: PresetsUserWebsites })
  websites: PresetsUserWebsites[];
}


export class Presets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: PresetsMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings: PresetsSettings;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: PresetsUser;
}
