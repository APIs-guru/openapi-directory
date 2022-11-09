import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Picture } from "./picture";
import { Picture } from "./picture";


// GroupMetadataConnectionsUsers
/** 
 * Information about the members or moderators of this group.
**/
export class GroupMetadataConnectionsUsers extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// GroupMetadataConnectionsVideos
/** 
 * Information about the videos contained within this group.
**/
export class GroupMetadataConnectionsVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// GroupMetadataConnections
/** 
 * A collection of information that is connected to this resource.
**/
export class GroupMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=users" })
  users: GroupMetadataConnectionsUsers;

  @Metadata({ data: "json, name=videos" })
  videos: GroupMetadataConnectionsVideos;
}

export enum GroupMetadataInteractionsJoinTypeEnum {
    Member = "member"
,    Moderator = "moderator"
}


// GroupMetadataInteractionsJoin
/** 
 * An action indicating that someone has joined the group. This data requires a bearer token with the `private` scope.
**/
export class GroupMetadataInteractionsJoin extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=added_time" })
  addedTime: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: GroupMetadataInteractionsJoinTypeEnum;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// GroupMetadataInteractions
/** 
 * User actions that have involved the group. This data requires a bearer token with the `private` scope.
**/
export class GroupMetadataInteractions extends SpeakeasyBase {
  @Metadata({ data: "json, name=join" })
  join: GroupMetadataInteractionsJoin;
}


// GroupMetadata
/** 
 * Metadata about the group.
**/
export class GroupMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: GroupMetadataConnections;

  @Metadata({ data: "json, name=interactions" })
  interactions: GroupMetadataInteractions;
}

export enum GroupPrivacyCommentEnum {
    All = "all"
,    Members = "members"
}

export enum GroupPrivacyInviteEnum {
    All = "all"
,    Members = "members"
}

export enum GroupPrivacyJoinEnum {
    Anybody = "anybody"
,    Members = "members"
}

export enum GroupPrivacyVideosEnum {
    All = "all"
,    Members = "members"
}

export enum GroupPrivacyViewEnum {
    Anybody = "anybody"
,    Members = "members"
}


// GroupPrivacy
/** 
 * The group's privacy settings.
**/
export class GroupPrivacy extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment: GroupPrivacyCommentEnum;

  @Metadata({ data: "json, name=invite" })
  invite: GroupPrivacyInviteEnum;

  @Metadata({ data: "json, name=join" })
  join: GroupPrivacyJoinEnum;

  @Metadata({ data: "json, name=videos" })
  videos: GroupPrivacyVideosEnum;

  @Metadata({ data: "json, name=view" })
  view: GroupPrivacyViewEnum;
}

export enum GroupUserAccountEnum {
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


// GroupUserMetadataConnectionsAlbums
/** 
 * Information about the albums created by this user.
**/
export class GroupUserMetadataConnectionsAlbums extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// GroupUserMetadataConnectionsAppearances
/** 
 * Information about the appearances of this user in other videos.
**/
export class GroupUserMetadataConnectionsAppearances extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// GroupUserMetadataConnectionsBlock
/** 
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
export class GroupUserMetadataConnectionsBlock extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// GroupUserMetadataConnectionsCategories
/** 
 * Information about this user's followed categories.
**/
export class GroupUserMetadataConnectionsCategories extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// GroupUserMetadataConnectionsChannels
/** 
 * Information about this user's subscribed channels.
**/
export class GroupUserMetadataConnectionsChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// GroupUserMetadataConnectionsFeed
/** 
 * Information about this user's feed.
**/
export class GroupUserMetadataConnectionsFeed extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// GroupUserMetadataConnectionsFolders
/** 
 * Information about this user's folders.
**/
export class GroupUserMetadataConnectionsFolders extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// GroupUserMetadataConnectionsFollowers
/** 
 * Information about the user's followers.
**/
export class GroupUserMetadataConnectionsFollowers extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// GroupUserMetadataConnectionsFollowing
/** 
 * Information about the users that the current user is following.
**/
export class GroupUserMetadataConnectionsFollowing extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// GroupUserMetadataConnectionsGroups
/** 
 * Information about the groups created by this user.
**/
export class GroupUserMetadataConnectionsGroups extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// GroupUserMetadataConnectionsLikes
/** 
 * Information about the videos that this user has liked.
**/
export class GroupUserMetadataConnectionsLikes extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// GroupUserMetadataConnectionsModeratedChannels
/** 
 * Information about the channels that this user moderates.
**/
export class GroupUserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// GroupUserMetadataConnectionsPictures
/** 
 * Information about this user's portraits.
**/
export class GroupUserMetadataConnectionsPictures extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// GroupUserMetadataConnectionsPortfolios
/** 
 * Information about this user's portfolios.
**/
export class GroupUserMetadataConnectionsPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// GroupUserMetadataConnectionsRecommendedChannels
/** 
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class GroupUserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// GroupUserMetadataConnectionsRecommendedUsers
/** 
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class GroupUserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// GroupUserMetadataConnectionsShared
/** 
 * Information about the videos that have been shared with this user.
**/
export class GroupUserMetadataConnectionsShared extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// GroupUserMetadataConnectionsVideos
/** 
 * Information about the videos uploaded by this user.
**/
export class GroupUserMetadataConnectionsVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// GroupUserMetadataConnectionsWatchedVideos
/** 
 * Information about the videos that this user has watched.
**/
export class GroupUserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// GroupUserMetadataConnectionsWatchlater
/** 
 * Information about the videos that this user wants to watch later.
**/
export class GroupUserMetadataConnectionsWatchlater extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// GroupUserMetadataConnections
/** 
 * The list of resource URIs related to the user.
**/
export class GroupUserMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=albums" })
  albums: GroupUserMetadataConnectionsAlbums;

  @Metadata({ data: "json, name=appearances" })
  appearances: GroupUserMetadataConnectionsAppearances;

  @Metadata({ data: "json, name=block" })
  block: GroupUserMetadataConnectionsBlock;

  @Metadata({ data: "json, name=categories" })
  categories: GroupUserMetadataConnectionsCategories;

  @Metadata({ data: "json, name=channels" })
  channels: GroupUserMetadataConnectionsChannels;

  @Metadata({ data: "json, name=feed" })
  feed: GroupUserMetadataConnectionsFeed;

  @Metadata({ data: "json, name=folders" })
  folders: GroupUserMetadataConnectionsFolders;

  @Metadata({ data: "json, name=followers" })
  followers: GroupUserMetadataConnectionsFollowers;

  @Metadata({ data: "json, name=following" })
  following: GroupUserMetadataConnectionsFollowing;

  @Metadata({ data: "json, name=groups" })
  groups: GroupUserMetadataConnectionsGroups;

  @Metadata({ data: "json, name=likes" })
  likes: GroupUserMetadataConnectionsLikes;

  @Metadata({ data: "json, name=moderated_channels" })
  moderatedChannels: GroupUserMetadataConnectionsModeratedChannels;

  @Metadata({ data: "json, name=pictures" })
  pictures: GroupUserMetadataConnectionsPictures;

  @Metadata({ data: "json, name=portfolios" })
  portfolios: GroupUserMetadataConnectionsPortfolios;

  @Metadata({ data: "json, name=recommended_channels" })
  recommendedChannels: GroupUserMetadataConnectionsRecommendedChannels;

  @Metadata({ data: "json, name=recommended_users" })
  recommendedUsers: GroupUserMetadataConnectionsRecommendedUsers;

  @Metadata({ data: "json, name=shared" })
  shared: GroupUserMetadataConnectionsShared;

  @Metadata({ data: "json, name=videos" })
  videos: GroupUserMetadataConnectionsVideos;

  @Metadata({ data: "json, name=watched_videos" })
  watchedVideos: GroupUserMetadataConnectionsWatchedVideos;

  @Metadata({ data: "json, name=watchlater" })
  watchlater: GroupUserMetadataConnectionsWatchlater;
}


export class GroupUserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options?: string[];

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


// GroupUserMetadataInteractionsBlock
/** 
 * Information related to the block status of this user.
**/
export class GroupUserMetadataInteractionsBlock extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=added_time" })
  addedTime: string;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// GroupUserMetadataInteractionsFollow
/** 
 * Information related to the followed status of this user.
**/
export class GroupUserMetadataInteractionsFollow extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// GroupUserMetadataInteractionsReport
/** 
 * Information regarding where and how to report a user.
**/
export class GroupUserMetadataInteractionsReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=reason" })
  reason: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


export class GroupUserMetadataInteractions extends SpeakeasyBase {
  @Metadata({ data: "json, name=add_privacy_user" })
  addPrivacyUser?: GroupUserMetadataInteractionsAddPrivacyUser;

  @Metadata({ data: "json, name=block" })
  block: GroupUserMetadataInteractionsBlock;

  @Metadata({ data: "json, name=follow" })
  follow: GroupUserMetadataInteractionsFollow;

  @Metadata({ data: "json, name=report" })
  report: GroupUserMetadataInteractionsReport;
}


// GroupUserMetadata
/** 
 * The user's metadata.
**/
export class GroupUserMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: GroupUserMetadataConnections;

  @Metadata({ data: "json, name=interactions" })
  interactions: GroupUserMetadataInteractions;
}

export enum GroupUserPreferencesVideosPrivacyCommentsEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Nobody = "nobody"
}

export enum GroupUserPreferencesVideosPrivacyEmbedEnum {
    Private = "private"
,    Public = "public"
,    Whitelist = "whitelist"
}

export enum GroupUserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Disable = "disable"
,    Nobody = "nobody"
,    Password = "password"
,    Unlisted = "unlisted"
,    Users = "users"
}


export class GroupUserPreferencesVideosPrivacy extends SpeakeasyBase {
  @Metadata({ data: "json, name=add" })
  add?: boolean;

  @Metadata({ data: "json, name=comments" })
  comments?: GroupUserPreferencesVideosPrivacyCommentsEnum;

  @Metadata({ data: "json, name=download" })
  download?: boolean;

  @Metadata({ data: "json, name=embed" })
  embed?: GroupUserPreferencesVideosPrivacyEmbedEnum;

  @Metadata({ data: "json, name=view" })
  view?: GroupUserPreferencesVideosPrivacyViewEnum;
}


export class GroupUserPreferencesVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=privacy" })
  privacy?: GroupUserPreferencesVideosPrivacy;
}


export class GroupUserPreferences extends SpeakeasyBase {
  @Metadata({ data: "json, name=videos" })
  videos?: GroupUserPreferencesVideos;
}


// GroupUserUploadQuotaLifetime
/** 
 * Information about the user's lifetime upload usage.
**/
export class GroupUserUploadQuotaLifetime extends SpeakeasyBase {
  @Metadata({ data: "json, name=free" })
  free: number;

  @Metadata({ data: "json, name=max" })
  max: number;

  @Metadata({ data: "json, name=used" })
  used: number;
}


// GroupUserUploadQuotaPeriodic
/** 
 * Information about the user's usage for the current period.
**/
export class GroupUserUploadQuotaPeriodic extends SpeakeasyBase {
  @Metadata({ data: "json, name=free" })
  free: number;

  @Metadata({ data: "json, name=max" })
  max: number;

  @Metadata({ data: "json, name=reset_date" })
  resetDate: string;

  @Metadata({ data: "json, name=used" })
  used: number;
}

export enum GroupUserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime"
,    Periodic = "periodic"
}


// GroupUserUploadQuotaSpace
/** 
 * Information about the user's upload space remaining for the current period.
**/
export class GroupUserUploadQuotaSpace extends SpeakeasyBase {
  @Metadata({ data: "json, name=free" })
  free: number;

  @Metadata({ data: "json, name=max" })
  max: number;

  @Metadata({ data: "json, name=showing" })
  showing: GroupUserUploadQuotaSpaceShowingEnum;

  @Metadata({ data: "json, name=used" })
  used: number;
}


// GroupUserUploadQuota
/** 
 * Appears only when the user has upload access and is looking at their own user record.
**/
export class GroupUserUploadQuota extends SpeakeasyBase {
  @Metadata({ data: "json, name=lifetime" })
  lifetime: GroupUserUploadQuotaLifetime;

  @Metadata({ data: "json, name=periodic" })
  periodic: GroupUserUploadQuotaPeriodic;

  @Metadata({ data: "json, name=space" })
  space: GroupUserUploadQuotaSpace;
}


export class GroupUserWebsites extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


// GroupUser
/** 
 * The owner of the group.
**/
export class GroupUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account: GroupUserAccountEnum;

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
  metadata: GroupUserMetadata;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=pictures" })
  pictures: Picture;

  @Metadata({ data: "json, name=preferences" })
  preferences?: GroupUserPreferences;

  @Metadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @Metadata({ data: "json, name=upload_quota" })
  uploadQuota: GroupUserUploadQuota;

  @Metadata({ data: "json, name=uri" })
  uri: string;

  @Metadata({ data: "json, name=websites", elemType: shared.GroupUserWebsites })
  websites: GroupUserWebsites[];
}


export class Group extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_time" })
  createdTime: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: GroupMetadata;

  @Metadata({ data: "json, name=modified_time" })
  modifiedTime: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=pictures" })
  pictures: Picture;

  @Metadata({ data: "json, name=privacy" })
  privacy: GroupPrivacy;

  @Metadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @Metadata({ data: "json, name=uri" })
  uri: string;

  @Metadata({ data: "json, name=user" })
  user?: GroupUser;
}
