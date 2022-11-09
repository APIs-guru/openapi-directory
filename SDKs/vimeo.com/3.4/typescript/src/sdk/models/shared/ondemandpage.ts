import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Video } from "./video";
import { OnDemandGenre } from "./ondemandgenre";
import { PurchaseInteraction } from "./purchaseinteraction";
import { Category } from "./category";
import { EmbedSettings } from "./embedsettings";
import { User } from "./user";
import { Picture } from "./picture";
import { Tag } from "./tag";
import { Picture } from "./picture";
import { Picture } from "./picture";


export class OnDemandPagePictureSizes extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height: number;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=link_with_play_button" })
  linkWithPlayButton?: string;

  @Metadata({ data: "json, name=width" })
  width: number;
}

export enum OnDemandPagePictureTypeEnum {
    Caution = "caution"
,    Custom = "custom"
,    Default = "default"
}


// OnDemandPagePicture
/** 
 * The background image for the On Demand page on Vimeo.
**/
export class OnDemandPagePicture extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active: boolean;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @Metadata({ data: "json, name=sizes", elemType: shared.OnDemandPagePictureSizes })
  sizes: OnDemandPagePictureSizes[];

  @Metadata({ data: "json, name=type" })
  type: OnDemandPagePictureTypeEnum;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageColors
/** 
 * The primary and secondary colors used for rendering this On Demand page.
**/
export class OnDemandPageColors extends SpeakeasyBase {
  @Metadata({ data: "json, name=primary" })
  primary: string;

  @Metadata({ data: "json, name=secondary" })
  secondary: string;
}


export class OnDemandPageEpisodesBuy extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active: boolean;

  @Metadata({ data: "json, name=price" })
  price: number;
}

export enum OnDemandPageEpisodesRentPeriodEnum {
    OneDay = "1 day"
,    OneMonth = "1 month"
,    OneWeek = "1 week"
,    OneYear = "1 year"
,    TwoDay = "2 day"
,    TwentyFourHour = "24 hour"
,    ThreeDay = "3 day"
,    ThreeMonth = "3 month"
,    ThirtyDay = "30 day"
,    FortyEightHour = "48 hour"
,    SixMonth = "6 month"
,    SixtyDay = "60 day"
,    SevenDay = "7 day"
,    SeventyTwoHour = "72 hour"
}


export class OnDemandPageEpisodesRent extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active: boolean;

  @Metadata({ data: "json, name=period" })
  period: OnDemandPageEpisodesRentPeriodEnum;

  @Metadata({ data: "json, name=price" })
  price: number;
}


// OnDemandPageEpisodes
/** 
 * Information about this On Demand page's episodes, if the page is for a series.
**/
export class OnDemandPageEpisodes extends SpeakeasyBase {
  @Metadata({ data: "json, name=buy" })
  buy: OnDemandPageEpisodesBuy;

  @Metadata({ data: "json, name=rent" })
  rent: OnDemandPageEpisodesRent;
}


// OnDemandPageMetadataConnectionsMetadataConnectionsComments
/** 
 * Information about the comments associated with this page.
**/
export class OnDemandPageMetadataConnectionsMetadataConnectionsComments extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageMetadataConnectionsMetadataConnectionsGenres
/** 
 * Information about the genres associated with this page.
**/
export class OnDemandPageMetadataConnectionsMetadataConnectionsGenres extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageMetadataConnectionsMetadataConnectionsLikes
/** 
 * Information about the likes associated with this page.
**/
export class OnDemandPageMetadataConnectionsMetadataConnectionsLikes extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageMetadataConnectionsMetadataConnectionsPictures
/** 
 * Information about the pictures associated with this page.
**/
export class OnDemandPageMetadataConnectionsMetadataConnectionsPictures extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageMetadataConnectionsMetadataConnectionsSeasons
/** 
 * Information about the seasons associated with this page.
**/
export class OnDemandPageMetadataConnectionsMetadataConnectionsSeasons extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageMetadataConnectionsMetadataConnectionsVideos
/** 
 * Information about the videos associated with this page.
**/
export class OnDemandPageMetadataConnectionsMetadataConnectionsVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=extra_total" })
  extraTotal: number;

  @Metadata({ data: "json, name=main_total" })
  mainTotal: number;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;

  @Metadata({ data: "json, name=viewable_total" })
  viewableTotal: number;
}


export class OnDemandPageMetadataConnectionsMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=comments" })
  comments: OnDemandPageMetadataConnectionsMetadataConnectionsComments;

  @Metadata({ data: "json, name=genres" })
  genres: OnDemandPageMetadataConnectionsMetadataConnectionsGenres;

  @Metadata({ data: "json, name=likes" })
  likes: OnDemandPageMetadataConnectionsMetadataConnectionsLikes;

  @Metadata({ data: "json, name=pictures" })
  pictures: OnDemandPageMetadataConnectionsMetadataConnectionsPictures;

  @Metadata({ data: "json, name=seasons" })
  seasons: OnDemandPageMetadataConnectionsMetadataConnectionsSeasons;

  @Metadata({ data: "json, name=videos" })
  videos: OnDemandPageMetadataConnectionsMetadataConnectionsVideos;
}


export class OnDemandPageMetadataConnectionsMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: OnDemandPageMetadataConnectionsMetadataConnections;
}


// OnDemandPageMetadataConnections
/** 
 * A collection of information that is connected to this resource, including videos, genres, and pictures connections.
**/
export class OnDemandPageMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadata" })
  metadata: OnDemandPageMetadataConnectionsMetadata;
}


// OnDemandPageMetadata
/** 
 * Metadata about the On Demand page.
**/
export class OnDemandPageMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: OnDemandPageMetadataConnections;

  @Metadata({ data: "json, name=interactions" })
  interactions: PurchaseInteraction;
}


export class OnDemandPagePreorder extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active: boolean;

  @Metadata({ data: "json, name=cancel_time" })
  cancelTime: string;

  @Metadata({ data: "json, name=publish_time" })
  publishTime: string;

  @Metadata({ data: "json, name=time" })
  time: string;
}


export class OnDemandPagePublished extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=time" })
  time: string;
}


// OnDemandPageSubscription
/** 
 * Information about subscribing to this On Demand page, if enabled.
**/
export class OnDemandPageSubscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active: boolean;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=period" })
  period?: string;

  @Metadata({ data: "json, name=price" })
  price: Map<string, any>;
}

export enum OnDemandPageVideoContextActionEnum {
    AddedTo = "Added to"
,    AppearanceBy = "Appearance by"
,    LikedBy = "Liked by"
,    UploadedBy = "Uploaded by"
}


// OnDemandPageVideoContext
/** 
 * The context of the video's subscription, if this video is part of a subscription.
**/
export class OnDemandPageVideoContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: OnDemandPageVideoContextActionEnum;

  @Metadata({ data: "json, name=resource" })
  resource: Map<string, any>;

  @Metadata({ data: "json, name=resource_type" })
  resourceType: string;
}

export enum OnDemandPageVideoLicenseEnum {
    By = "by"
,    ByNc = "by-nc"
,    ByNcNd = "by-nc-nd"
,    ByNcSa = "by-nc-sa"
,    ByNd = "by-nd"
,    BySa = "by-sa"
,    Cc0 = "cc0"
}


// OnDemandPageVideoMetadataConnectionsComments
/** 
 * Information about the comments on this video.
**/
export class OnDemandPageVideoMetadataConnectionsComments extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataConnectionsCredits
/** 
 * Information about the users credited in this video.
**/
export class OnDemandPageVideoMetadataConnectionsCredits extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options?: string[];

  @Metadata({ data: "json, name=total" })
  total?: number;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


// OnDemandPageVideoMetadataConnectionsLikes
/** 
 * Information about the users who have liked this video.
**/
export class OnDemandPageVideoMetadataConnectionsLikes extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataConnectionsOndemand
/** 
 * Information about this video's ondemand data.
**/
export class OnDemandPageVideoMetadataConnectionsOndemand extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataConnectionsPictures
/** 
 * Information about this video's thumbnails.
**/
export class OnDemandPageVideoMetadataConnectionsPictures extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataConnectionsPlayback
/** 
 * The DRM playback status connection for this video.
**/
export class OnDemandPageVideoMetadataConnectionsPlayback extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataConnectionsRecommendations
/** 
 * The recommendations for this video.
**/
export class OnDemandPageVideoMetadataConnectionsRecommendations extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options?: string[];

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


// OnDemandPageVideoMetadataConnectionsRelated
/** 
 * Related content for this video.
**/
export class OnDemandPageVideoMetadataConnectionsRelated extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options?: string[];

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


// OnDemandPageVideoMetadataConnectionsSeason
/** 
 * Information about the video's season.
**/
export class OnDemandPageVideoMetadataConnectionsSeason extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataConnectionsTexttracks
/** 
 * Information about this video's text tracks.
**/
export class OnDemandPageVideoMetadataConnectionsTexttracks extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataConnectionsTrailer
/** 
 * Information about this video's VOD trailer.
**/
export class OnDemandPageVideoMetadataConnectionsTrailer extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataConnectionsUsersWithAccess
/** 
 * Information about the user privacy of this video, if the video privacy is `users`.
**/
export class OnDemandPageVideoMetadataConnectionsUsersWithAccess extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataConnectionsVersions
/** 
 * Information about the versions of this video.
**/
export class OnDemandPageVideoMetadataConnectionsVersions extends SpeakeasyBase {
  @Metadata({ data: "json, name=current_uri" })
  currentUri?: string;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataConnections
/** 
 * A list of resource URIs related to the video.
**/
export class OnDemandPageVideoMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=comments" })
  comments: OnDemandPageVideoMetadataConnectionsComments;

  @Metadata({ data: "json, name=credits" })
  credits: OnDemandPageVideoMetadataConnectionsCredits;

  @Metadata({ data: "json, name=likes" })
  likes: OnDemandPageVideoMetadataConnectionsLikes;

  @Metadata({ data: "json, name=ondemand" })
  ondemand: OnDemandPageVideoMetadataConnectionsOndemand;

  @Metadata({ data: "json, name=pictures" })
  pictures: OnDemandPageVideoMetadataConnectionsPictures;

  @Metadata({ data: "json, name=playback" })
  playback: OnDemandPageVideoMetadataConnectionsPlayback;

  @Metadata({ data: "json, name=recommendations" })
  recommendations: OnDemandPageVideoMetadataConnectionsRecommendations;

  @Metadata({ data: "json, name=related" })
  related: OnDemandPageVideoMetadataConnectionsRelated;

  @Metadata({ data: "json, name=season" })
  season: OnDemandPageVideoMetadataConnectionsSeason;

  @Metadata({ data: "json, name=texttracks" })
  texttracks: OnDemandPageVideoMetadataConnectionsTexttracks;

  @Metadata({ data: "json, name=trailer" })
  trailer: OnDemandPageVideoMetadataConnectionsTrailer;

  @Metadata({ data: "json, name=users_with_access" })
  usersWithAccess: OnDemandPageVideoMetadataConnectionsUsersWithAccess;

  @Metadata({ data: "json, name=versions" })
  versions: OnDemandPageVideoMetadataConnectionsVersions;
}

export enum OnDemandPageVideoMetadataInteractionsBuyDownloadEnum {
    Available = "available"
,    Purchased = "purchased"
,    Restricted = "restricted"
,    Unavailable = "unavailable"
}

export enum OnDemandPageVideoMetadataInteractionsBuyStreamEnum {
    Available = "available"
,    Purchased = "purchased"
,    Restricted = "restricted"
,    Unavailable = "unavailable"
}


// OnDemandPageVideoMetadataInteractionsBuy
/** 
 * The Buy interaction for a On Demand video.
**/
export class OnDemandPageVideoMetadataInteractionsBuy extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency: string;

  @Metadata({ data: "json, name=display_price" })
  displayPrice: string;

  @Metadata({ data: "json, name=download" })
  download: OnDemandPageVideoMetadataInteractionsBuyDownloadEnum;

  @Metadata({ data: "json, name=drm" })
  drm: boolean;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=price" })
  price: number;

  @Metadata({ data: "json, name=purchase_time" })
  purchaseTime: string;

  @Metadata({ data: "json, name=stream" })
  stream: OnDemandPageVideoMetadataInteractionsBuyStreamEnum;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataInteractionsChannel
/** 
 * When a video is referenced by a channel URI, if the user is a moderator of the channel, include information about removing the video from the channel.
**/
export class OnDemandPageVideoMetadataInteractionsChannel extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataInteractionsLike
/** 
 * Information about whether the authenticated user has liked this video.
**/
export class OnDemandPageVideoMetadataInteractionsLike extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=added_time" })
  addedTime: string;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}

export enum OnDemandPageVideoMetadataInteractionsRentStreamEnum {
    Available = "available"
,    Purchased = "purchased"
,    Restricted = "restricted"
,    Unavailable = "unavailable"
}


// OnDemandPageVideoMetadataInteractionsRent
/** 
 * The Rent interaction for an On Demand video.
**/
export class OnDemandPageVideoMetadataInteractionsRent extends SpeakeasyBase {
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
  stream: OnDemandPageVideoMetadataInteractionsRentStreamEnum;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataInteractionsReport
/** 
 * Information about where and how to report a video.
**/
export class OnDemandPageVideoMetadataInteractionsReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=reason" })
  reason: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataInteractionsSubscribe
/** 
 * Subscription information for an On Demand video.
**/
export class OnDemandPageVideoMetadataInteractionsSubscribe extends SpeakeasyBase {
  @Metadata({ data: "json, name=drm" })
  drm?: boolean;

  @Metadata({ data: "json, name=expires_time" })
  expiresTime?: string;

  @Metadata({ data: "json, name=purchase_time" })
  purchaseTime?: string;

  @Metadata({ data: "json, name=stream" })
  stream?: string;
}


// OnDemandPageVideoMetadataInteractionsWatched
/** 
 * Information about removing this video from the user's list of watched videos.
**/
export class OnDemandPageVideoMetadataInteractionsWatched extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=added_time" })
  addedTime: string;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataInteractionsWatchlater
/** 
 * Information about whether this video appears on the authenticated user's Watch Later list.
**/
export class OnDemandPageVideoMetadataInteractionsWatchlater extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=added_time" })
  addedTime: string;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataInteractions
/** 
 * A list of resource URIs related to the video.
**/
export class OnDemandPageVideoMetadataInteractions extends SpeakeasyBase {
  @Metadata({ data: "json, name=buy" })
  buy: OnDemandPageVideoMetadataInteractionsBuy;

  @Metadata({ data: "json, name=channel" })
  channel: OnDemandPageVideoMetadataInteractionsChannel;

  @Metadata({ data: "json, name=like" })
  like: OnDemandPageVideoMetadataInteractionsLike;

  @Metadata({ data: "json, name=rent" })
  rent: OnDemandPageVideoMetadataInteractionsRent;

  @Metadata({ data: "json, name=report" })
  report: OnDemandPageVideoMetadataInteractionsReport;

  @Metadata({ data: "json, name=subscribe" })
  subscribe?: OnDemandPageVideoMetadataInteractionsSubscribe;

  @Metadata({ data: "json, name=watched" })
  watched: OnDemandPageVideoMetadataInteractionsWatched;

  @Metadata({ data: "json, name=watchlater" })
  watchlater: OnDemandPageVideoMetadataInteractionsWatchlater;
}


// OnDemandPageVideoMetadata
/** 
 * The video's metadata.
**/
export class OnDemandPageVideoMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: OnDemandPageVideoMetadataConnections;

  @Metadata({ data: "json, name=interactions" })
  interactions: OnDemandPageVideoMetadataInteractions;
}


// OnDemandPageVideoProjectMetadataConnectionsVideos
/** 
 * A standard connection object indicating how to get all the videos in this project.
**/
export class OnDemandPageVideoProjectMetadataConnectionsVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoProjectMetadataConnections
/** 
 * A list of resource URIs related to the project.
**/
export class OnDemandPageVideoProjectMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=videos" })
  videos: OnDemandPageVideoProjectMetadataConnectionsVideos;
}


// OnDemandPageVideoProjectMetadata
/** 
 * The project's metadata.
**/
export class OnDemandPageVideoProjectMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: OnDemandPageVideoProjectMetadataConnections;
}


// OnDemandPageVideoProject
/** 
 * Information about the folder that contains this video.
**/
export class OnDemandPageVideoProject extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_time" })
  createdTime: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: OnDemandPageVideoProjectMetadata;

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

export enum OnDemandPageVideoPrivacyCommentsEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Nobody = "nobody"
}

export enum OnDemandPageVideoPrivacyEmbedEnum {
    Private = "private"
,    Public = "public"
}

export enum OnDemandPageVideoPrivacyViewEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Disable = "disable"
,    Nobody = "nobody"
,    Password = "password"
,    Unlisted = "unlisted"
,    Users = "users"
}


// OnDemandPageVideoPrivacy
/** 
 * The video's privacy setting.
**/
export class OnDemandPageVideoPrivacy extends SpeakeasyBase {
  @Metadata({ data: "json, name=add" })
  add: boolean;

  @Metadata({ data: "json, name=comments" })
  comments: OnDemandPageVideoPrivacyCommentsEnum;

  @Metadata({ data: "json, name=download" })
  download: boolean;

  @Metadata({ data: "json, name=embed" })
  embed: OnDemandPageVideoPrivacyEmbedEnum;

  @Metadata({ data: "json, name=view" })
  view: OnDemandPageVideoPrivacyViewEnum;
}


export class OnDemandPageVideoSpatialDirectorTimeline extends SpeakeasyBase {
  @Metadata({ data: "json, name=pitch" })
  pitch?: number;

  @Metadata({ data: "json, name=roll" })
  roll?: number;

  @Metadata({ data: "json, name=time_code" })
  timeCode?: number;

  @Metadata({ data: "json, name=yaw" })
  yaw?: number;
}

export enum OnDemandPageVideoSpatialProjectionEnum {
    Cubical = "cubical"
,    Cylindrical = "cylindrical"
,    Dome = "dome"
,    Equirectangular = "equirectangular"
,    Pyramid = "pyramid"
}

export enum OnDemandPageVideoSpatialStereoFormatEnum {
    LeftRight = "left-right"
,    Mono = "mono"
,    TopBottom = "top-bottom"
}


// OnDemandPageVideoSpatial
/** 
 * 360 spatial data.
**/
export class OnDemandPageVideoSpatial extends SpeakeasyBase {
  @Metadata({ data: "json, name=director_timeline", elemType: shared.OnDemandPageVideoSpatialDirectorTimeline })
  directorTimeline: OnDemandPageVideoSpatialDirectorTimeline[];

  @Metadata({ data: "json, name=field_of_view" })
  fieldOfView: number;

  @Metadata({ data: "json, name=projection" })
  projection: OnDemandPageVideoSpatialProjectionEnum;

  @Metadata({ data: "json, name=stereo_format" })
  stereoFormat: OnDemandPageVideoSpatialStereoFormatEnum;
}


// OnDemandPageVideoStats
/** 
 * A collection of stats associated with this video.
**/
export class OnDemandPageVideoStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=plays" })
  plays: number;
}

export enum OnDemandPageVideoStatusEnum {
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

export enum OnDemandPageVideoTranscodeStatusEnum {
    Complete = "complete"
,    Error = "error"
,    InProgress = "in_progress"
}


// OnDemandPageVideoTranscode
/** 
 * The transcode information for a video upload.
**/
export class OnDemandPageVideoTranscode extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: OnDemandPageVideoTranscodeStatusEnum;
}

export enum OnDemandPageVideoUploadApproachEnum {
    Post = "post"
,    Pull = "pull"
,    Streaming = "streaming"
,    Tus = "tus"
}

export enum OnDemandPageVideoUploadStatusEnum {
    Complete = "complete"
,    Error = "error"
,    InProgress = "in_progress"
}


// OnDemandPageVideoUpload
/** 
 * The upload information for this video.
**/
export class OnDemandPageVideoUpload extends SpeakeasyBase {
  @Metadata({ data: "json, name=approach" })
  approach?: OnDemandPageVideoUploadApproachEnum;

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
  status: OnDemandPageVideoUploadStatusEnum;

  @Metadata({ data: "json, name=upload_link" })
  uploadLink?: string;
}

export enum OnDemandPageVideoUserAccountEnum {
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


// OnDemandPageVideoUserMetadataConnectionsAlbums
/** 
 * Information about the albums created by this user.
**/
export class OnDemandPageVideoUserMetadataConnectionsAlbums extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsAppearances
/** 
 * Information about the appearances of this user in other videos.
**/
export class OnDemandPageVideoUserMetadataConnectionsAppearances extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsBlock
/** 
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
export class OnDemandPageVideoUserMetadataConnectionsBlock extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsCategories
/** 
 * Information about this user's followed categories.
**/
export class OnDemandPageVideoUserMetadataConnectionsCategories extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsChannels
/** 
 * Information about this user's subscribed channels.
**/
export class OnDemandPageVideoUserMetadataConnectionsChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsFeed
/** 
 * Information about this user's feed.
**/
export class OnDemandPageVideoUserMetadataConnectionsFeed extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsFolders
/** 
 * Information about this user's folders.
**/
export class OnDemandPageVideoUserMetadataConnectionsFolders extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsFollowers
/** 
 * Information about the user's followers.
**/
export class OnDemandPageVideoUserMetadataConnectionsFollowers extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsFollowing
/** 
 * Information about the users that the current user is following.
**/
export class OnDemandPageVideoUserMetadataConnectionsFollowing extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsGroups
/** 
 * Information about the groups created by this user.
**/
export class OnDemandPageVideoUserMetadataConnectionsGroups extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsLikes
/** 
 * Information about the videos that this user has liked.
**/
export class OnDemandPageVideoUserMetadataConnectionsLikes extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsModeratedChannels
/** 
 * Information about the channels that this user moderates.
**/
export class OnDemandPageVideoUserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsPictures
/** 
 * Information about this user's portraits.
**/
export class OnDemandPageVideoUserMetadataConnectionsPictures extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsPortfolios
/** 
 * Information about this user's portfolios.
**/
export class OnDemandPageVideoUserMetadataConnectionsPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsRecommendedChannels
/** 
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class OnDemandPageVideoUserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsRecommendedUsers
/** 
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class OnDemandPageVideoUserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsShared
/** 
 * Information about the videos that have been shared with this user.
**/
export class OnDemandPageVideoUserMetadataConnectionsShared extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsVideos
/** 
 * Information about the videos uploaded by this user.
**/
export class OnDemandPageVideoUserMetadataConnectionsVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsWatchedVideos
/** 
 * Information about the videos that this user has watched.
**/
export class OnDemandPageVideoUserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsWatchlater
/** 
 * Information about the videos that this user wants to watch later.
**/
export class OnDemandPageVideoUserMetadataConnectionsWatchlater extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnections
/** 
 * The list of resource URIs related to the user.
**/
export class OnDemandPageVideoUserMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=albums" })
  albums: OnDemandPageVideoUserMetadataConnectionsAlbums;

  @Metadata({ data: "json, name=appearances" })
  appearances: OnDemandPageVideoUserMetadataConnectionsAppearances;

  @Metadata({ data: "json, name=block" })
  block: OnDemandPageVideoUserMetadataConnectionsBlock;

  @Metadata({ data: "json, name=categories" })
  categories: OnDemandPageVideoUserMetadataConnectionsCategories;

  @Metadata({ data: "json, name=channels" })
  channels: OnDemandPageVideoUserMetadataConnectionsChannels;

  @Metadata({ data: "json, name=feed" })
  feed: OnDemandPageVideoUserMetadataConnectionsFeed;

  @Metadata({ data: "json, name=folders" })
  folders: OnDemandPageVideoUserMetadataConnectionsFolders;

  @Metadata({ data: "json, name=followers" })
  followers: OnDemandPageVideoUserMetadataConnectionsFollowers;

  @Metadata({ data: "json, name=following" })
  following: OnDemandPageVideoUserMetadataConnectionsFollowing;

  @Metadata({ data: "json, name=groups" })
  groups: OnDemandPageVideoUserMetadataConnectionsGroups;

  @Metadata({ data: "json, name=likes" })
  likes: OnDemandPageVideoUserMetadataConnectionsLikes;

  @Metadata({ data: "json, name=moderated_channels" })
  moderatedChannels: OnDemandPageVideoUserMetadataConnectionsModeratedChannels;

  @Metadata({ data: "json, name=pictures" })
  pictures: OnDemandPageVideoUserMetadataConnectionsPictures;

  @Metadata({ data: "json, name=portfolios" })
  portfolios: OnDemandPageVideoUserMetadataConnectionsPortfolios;

  @Metadata({ data: "json, name=recommended_channels" })
  recommendedChannels: OnDemandPageVideoUserMetadataConnectionsRecommendedChannels;

  @Metadata({ data: "json, name=recommended_users" })
  recommendedUsers: OnDemandPageVideoUserMetadataConnectionsRecommendedUsers;

  @Metadata({ data: "json, name=shared" })
  shared: OnDemandPageVideoUserMetadataConnectionsShared;

  @Metadata({ data: "json, name=videos" })
  videos: OnDemandPageVideoUserMetadataConnectionsVideos;

  @Metadata({ data: "json, name=watched_videos" })
  watchedVideos: OnDemandPageVideoUserMetadataConnectionsWatchedVideos;

  @Metadata({ data: "json, name=watchlater" })
  watchlater: OnDemandPageVideoUserMetadataConnectionsWatchlater;
}


export class OnDemandPageVideoUserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options?: string[];

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


// OnDemandPageVideoUserMetadataInteractionsBlock
/** 
 * Information related to the block status of this user.
**/
export class OnDemandPageVideoUserMetadataInteractionsBlock extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=added_time" })
  addedTime: string;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataInteractionsFollow
/** 
 * Information related to the followed status of this user.
**/
export class OnDemandPageVideoUserMetadataInteractionsFollow extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataInteractionsReport
/** 
 * Information regarding where and how to report a user.
**/
export class OnDemandPageVideoUserMetadataInteractionsReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=reason" })
  reason: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


export class OnDemandPageVideoUserMetadataInteractions extends SpeakeasyBase {
  @Metadata({ data: "json, name=add_privacy_user" })
  addPrivacyUser?: OnDemandPageVideoUserMetadataInteractionsAddPrivacyUser;

  @Metadata({ data: "json, name=block" })
  block: OnDemandPageVideoUserMetadataInteractionsBlock;

  @Metadata({ data: "json, name=follow" })
  follow: OnDemandPageVideoUserMetadataInteractionsFollow;

  @Metadata({ data: "json, name=report" })
  report: OnDemandPageVideoUserMetadataInteractionsReport;
}


// OnDemandPageVideoUserMetadata
/** 
 * The user's metadata.
**/
export class OnDemandPageVideoUserMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: OnDemandPageVideoUserMetadataConnections;

  @Metadata({ data: "json, name=interactions" })
  interactions: OnDemandPageVideoUserMetadataInteractions;
}

export enum OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Nobody = "nobody"
}

export enum OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnum {
    Private = "private"
,    Public = "public"
,    Whitelist = "whitelist"
}

export enum OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Disable = "disable"
,    Nobody = "nobody"
,    Password = "password"
,    Unlisted = "unlisted"
,    Users = "users"
}


export class OnDemandPageVideoUserPreferencesVideosPrivacy extends SpeakeasyBase {
  @Metadata({ data: "json, name=add" })
  add?: boolean;

  @Metadata({ data: "json, name=comments" })
  comments?: OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnum;

  @Metadata({ data: "json, name=download" })
  download?: boolean;

  @Metadata({ data: "json, name=embed" })
  embed?: OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnum;

  @Metadata({ data: "json, name=view" })
  view?: OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum;
}


export class OnDemandPageVideoUserPreferencesVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=privacy" })
  privacy?: OnDemandPageVideoUserPreferencesVideosPrivacy;
}


export class OnDemandPageVideoUserPreferences extends SpeakeasyBase {
  @Metadata({ data: "json, name=videos" })
  videos?: OnDemandPageVideoUserPreferencesVideos;
}


// OnDemandPageVideoUserUploadQuotaLifetime
/** 
 * Information about the user's lifetime upload usage.
**/
export class OnDemandPageVideoUserUploadQuotaLifetime extends SpeakeasyBase {
  @Metadata({ data: "json, name=free" })
  free: number;

  @Metadata({ data: "json, name=max" })
  max: number;

  @Metadata({ data: "json, name=used" })
  used: number;
}


// OnDemandPageVideoUserUploadQuotaPeriodic
/** 
 * Information about the user's usage for the current period.
**/
export class OnDemandPageVideoUserUploadQuotaPeriodic extends SpeakeasyBase {
  @Metadata({ data: "json, name=free" })
  free: number;

  @Metadata({ data: "json, name=max" })
  max: number;

  @Metadata({ data: "json, name=reset_date" })
  resetDate: string;

  @Metadata({ data: "json, name=used" })
  used: number;
}

export enum OnDemandPageVideoUserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime"
,    Periodic = "periodic"
}


// OnDemandPageVideoUserUploadQuotaSpace
/** 
 * Information about the user's upload space remaining for the current period.
**/
export class OnDemandPageVideoUserUploadQuotaSpace extends SpeakeasyBase {
  @Metadata({ data: "json, name=free" })
  free: number;

  @Metadata({ data: "json, name=max" })
  max: number;

  @Metadata({ data: "json, name=showing" })
  showing: OnDemandPageVideoUserUploadQuotaSpaceShowingEnum;

  @Metadata({ data: "json, name=used" })
  used: number;
}


// OnDemandPageVideoUserUploadQuota
/** 
 * Appears only when the user has upload access and is looking at their own user record.
**/
export class OnDemandPageVideoUserUploadQuota extends SpeakeasyBase {
  @Metadata({ data: "json, name=lifetime" })
  lifetime: OnDemandPageVideoUserUploadQuotaLifetime;

  @Metadata({ data: "json, name=periodic" })
  periodic: OnDemandPageVideoUserUploadQuotaPeriodic;

  @Metadata({ data: "json, name=space" })
  space: OnDemandPageVideoUserUploadQuotaSpace;
}


export class OnDemandPageVideoUserWebsites extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


// OnDemandPageVideoUser
/** 
 * The video owner.
**/
export class OnDemandPageVideoUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account: OnDemandPageVideoUserAccountEnum;

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
  metadata: OnDemandPageVideoUserMetadata;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=pictures" })
  pictures: Picture;

  @Metadata({ data: "json, name=preferences" })
  preferences?: OnDemandPageVideoUserPreferences;

  @Metadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @Metadata({ data: "json, name=upload_quota" })
  uploadQuota: OnDemandPageVideoUserUploadQuota;

  @Metadata({ data: "json, name=uri" })
  uri: string;

  @Metadata({ data: "json, name=websites", elemType: shared.OnDemandPageVideoUserWebsites })
  websites: OnDemandPageVideoUserWebsites[];
}


// OnDemandPageVideo
/** 
 * The trailer for this On Demand page.
**/
export class OnDemandPageVideo extends SpeakeasyBase {
  @Metadata({ data: "json, name=categories", elemType: shared.Category })
  categories: Category[];

  @Metadata({ data: "json, name=content_rating" })
  contentRating: string[];

  @Metadata({ data: "json, name=context" })
  context: OnDemandPageVideoContext;

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
  license: OnDemandPageVideoLicenseEnum;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: OnDemandPageVideoMetadata;

  @Metadata({ data: "json, name=modified_time" })
  modifiedTime: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=parent_folder" })
  parentFolder?: OnDemandPageVideoProject;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=pictures" })
  pictures: Picture;

  @Metadata({ data: "json, name=privacy" })
  privacy: OnDemandPageVideoPrivacy;

  @Metadata({ data: "json, name=release_time" })
  releaseTime: string;

  @Metadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @Metadata({ data: "json, name=spatial" })
  spatial: OnDemandPageVideoSpatial;

  @Metadata({ data: "json, name=stats" })
  stats: OnDemandPageVideoStats;

  @Metadata({ data: "json, name=status" })
  status: OnDemandPageVideoStatusEnum;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags: Tag[];

  @Metadata({ data: "json, name=transcode" })
  transcode: OnDemandPageVideoTranscode;

  @Metadata({ data: "json, name=upload" })
  upload: OnDemandPageVideoUpload;

  @Metadata({ data: "json, name=uri" })
  uri: string;

  @Metadata({ data: "json, name=user" })
  user: OnDemandPageVideoUser;

  @Metadata({ data: "json, name=width" })
  width: number;
}

export enum OnDemandPageTypeEnum {
    Film = "film"
,    Series = "series"
}

export enum OnDemandPageUserAccountEnum {
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


// OnDemandPageUserMetadataConnectionsAlbums
/** 
 * Information about the albums created by this user.
**/
export class OnDemandPageUserMetadataConnectionsAlbums extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsAppearances
/** 
 * Information about the appearances of this user in other videos.
**/
export class OnDemandPageUserMetadataConnectionsAppearances extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsBlock
/** 
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
export class OnDemandPageUserMetadataConnectionsBlock extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsCategories
/** 
 * Information about this user's followed categories.
**/
export class OnDemandPageUserMetadataConnectionsCategories extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsChannels
/** 
 * Information about this user's subscribed channels.
**/
export class OnDemandPageUserMetadataConnectionsChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsFeed
/** 
 * Information about this user's feed.
**/
export class OnDemandPageUserMetadataConnectionsFeed extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsFolders
/** 
 * Information about this user's folders.
**/
export class OnDemandPageUserMetadataConnectionsFolders extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsFollowers
/** 
 * Information about the user's followers.
**/
export class OnDemandPageUserMetadataConnectionsFollowers extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsFollowing
/** 
 * Information about the users that the current user is following.
**/
export class OnDemandPageUserMetadataConnectionsFollowing extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsGroups
/** 
 * Information about the groups created by this user.
**/
export class OnDemandPageUserMetadataConnectionsGroups extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsLikes
/** 
 * Information about the videos that this user has liked.
**/
export class OnDemandPageUserMetadataConnectionsLikes extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsModeratedChannels
/** 
 * Information about the channels that this user moderates.
**/
export class OnDemandPageUserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsPictures
/** 
 * Information about this user's portraits.
**/
export class OnDemandPageUserMetadataConnectionsPictures extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsPortfolios
/** 
 * Information about this user's portfolios.
**/
export class OnDemandPageUserMetadataConnectionsPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsRecommendedChannels
/** 
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class OnDemandPageUserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsRecommendedUsers
/** 
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class OnDemandPageUserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsShared
/** 
 * Information about the videos that have been shared with this user.
**/
export class OnDemandPageUserMetadataConnectionsShared extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsVideos
/** 
 * Information about the videos uploaded by this user.
**/
export class OnDemandPageUserMetadataConnectionsVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsWatchedVideos
/** 
 * Information about the videos that this user has watched.
**/
export class OnDemandPageUserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsWatchlater
/** 
 * Information about the videos that this user wants to watch later.
**/
export class OnDemandPageUserMetadataConnectionsWatchlater extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnections
/** 
 * The list of resource URIs related to the user.
**/
export class OnDemandPageUserMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=albums" })
  albums: OnDemandPageUserMetadataConnectionsAlbums;

  @Metadata({ data: "json, name=appearances" })
  appearances: OnDemandPageUserMetadataConnectionsAppearances;

  @Metadata({ data: "json, name=block" })
  block: OnDemandPageUserMetadataConnectionsBlock;

  @Metadata({ data: "json, name=categories" })
  categories: OnDemandPageUserMetadataConnectionsCategories;

  @Metadata({ data: "json, name=channels" })
  channels: OnDemandPageUserMetadataConnectionsChannels;

  @Metadata({ data: "json, name=feed" })
  feed: OnDemandPageUserMetadataConnectionsFeed;

  @Metadata({ data: "json, name=folders" })
  folders: OnDemandPageUserMetadataConnectionsFolders;

  @Metadata({ data: "json, name=followers" })
  followers: OnDemandPageUserMetadataConnectionsFollowers;

  @Metadata({ data: "json, name=following" })
  following: OnDemandPageUserMetadataConnectionsFollowing;

  @Metadata({ data: "json, name=groups" })
  groups: OnDemandPageUserMetadataConnectionsGroups;

  @Metadata({ data: "json, name=likes" })
  likes: OnDemandPageUserMetadataConnectionsLikes;

  @Metadata({ data: "json, name=moderated_channels" })
  moderatedChannels: OnDemandPageUserMetadataConnectionsModeratedChannels;

  @Metadata({ data: "json, name=pictures" })
  pictures: OnDemandPageUserMetadataConnectionsPictures;

  @Metadata({ data: "json, name=portfolios" })
  portfolios: OnDemandPageUserMetadataConnectionsPortfolios;

  @Metadata({ data: "json, name=recommended_channels" })
  recommendedChannels: OnDemandPageUserMetadataConnectionsRecommendedChannels;

  @Metadata({ data: "json, name=recommended_users" })
  recommendedUsers: OnDemandPageUserMetadataConnectionsRecommendedUsers;

  @Metadata({ data: "json, name=shared" })
  shared: OnDemandPageUserMetadataConnectionsShared;

  @Metadata({ data: "json, name=videos" })
  videos: OnDemandPageUserMetadataConnectionsVideos;

  @Metadata({ data: "json, name=watched_videos" })
  watchedVideos: OnDemandPageUserMetadataConnectionsWatchedVideos;

  @Metadata({ data: "json, name=watchlater" })
  watchlater: OnDemandPageUserMetadataConnectionsWatchlater;
}


export class OnDemandPageUserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options?: string[];

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


// OnDemandPageUserMetadataInteractionsBlock
/** 
 * Information related to the block status of this user.
**/
export class OnDemandPageUserMetadataInteractionsBlock extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=added_time" })
  addedTime: string;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataInteractionsFollow
/** 
 * Information related to the followed status of this user.
**/
export class OnDemandPageUserMetadataInteractionsFollow extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataInteractionsReport
/** 
 * Information regarding where and how to report a user.
**/
export class OnDemandPageUserMetadataInteractionsReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=reason" })
  reason: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


export class OnDemandPageUserMetadataInteractions extends SpeakeasyBase {
  @Metadata({ data: "json, name=add_privacy_user" })
  addPrivacyUser?: OnDemandPageUserMetadataInteractionsAddPrivacyUser;

  @Metadata({ data: "json, name=block" })
  block: OnDemandPageUserMetadataInteractionsBlock;

  @Metadata({ data: "json, name=follow" })
  follow: OnDemandPageUserMetadataInteractionsFollow;

  @Metadata({ data: "json, name=report" })
  report: OnDemandPageUserMetadataInteractionsReport;
}


// OnDemandPageUserMetadata
/** 
 * The user's metadata.
**/
export class OnDemandPageUserMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: OnDemandPageUserMetadataConnections;

  @Metadata({ data: "json, name=interactions" })
  interactions: OnDemandPageUserMetadataInteractions;
}

export enum OnDemandPageUserPreferencesVideosPrivacyCommentsEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Nobody = "nobody"
}

export enum OnDemandPageUserPreferencesVideosPrivacyEmbedEnum {
    Private = "private"
,    Public = "public"
,    Whitelist = "whitelist"
}

export enum OnDemandPageUserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Disable = "disable"
,    Nobody = "nobody"
,    Password = "password"
,    Unlisted = "unlisted"
,    Users = "users"
}


export class OnDemandPageUserPreferencesVideosPrivacy extends SpeakeasyBase {
  @Metadata({ data: "json, name=add" })
  add?: boolean;

  @Metadata({ data: "json, name=comments" })
  comments?: OnDemandPageUserPreferencesVideosPrivacyCommentsEnum;

  @Metadata({ data: "json, name=download" })
  download?: boolean;

  @Metadata({ data: "json, name=embed" })
  embed?: OnDemandPageUserPreferencesVideosPrivacyEmbedEnum;

  @Metadata({ data: "json, name=view" })
  view?: OnDemandPageUserPreferencesVideosPrivacyViewEnum;
}


export class OnDemandPageUserPreferencesVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=privacy" })
  privacy?: OnDemandPageUserPreferencesVideosPrivacy;
}


export class OnDemandPageUserPreferences extends SpeakeasyBase {
  @Metadata({ data: "json, name=videos" })
  videos?: OnDemandPageUserPreferencesVideos;
}


// OnDemandPageUserUploadQuotaLifetime
/** 
 * Information about the user's lifetime upload usage.
**/
export class OnDemandPageUserUploadQuotaLifetime extends SpeakeasyBase {
  @Metadata({ data: "json, name=free" })
  free: number;

  @Metadata({ data: "json, name=max" })
  max: number;

  @Metadata({ data: "json, name=used" })
  used: number;
}


// OnDemandPageUserUploadQuotaPeriodic
/** 
 * Information about the user's usage for the current period.
**/
export class OnDemandPageUserUploadQuotaPeriodic extends SpeakeasyBase {
  @Metadata({ data: "json, name=free" })
  free: number;

  @Metadata({ data: "json, name=max" })
  max: number;

  @Metadata({ data: "json, name=reset_date" })
  resetDate: string;

  @Metadata({ data: "json, name=used" })
  used: number;
}

export enum OnDemandPageUserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime"
,    Periodic = "periodic"
}


// OnDemandPageUserUploadQuotaSpace
/** 
 * Information about the user's upload space remaining for the current period.
**/
export class OnDemandPageUserUploadQuotaSpace extends SpeakeasyBase {
  @Metadata({ data: "json, name=free" })
  free: number;

  @Metadata({ data: "json, name=max" })
  max: number;

  @Metadata({ data: "json, name=showing" })
  showing: OnDemandPageUserUploadQuotaSpaceShowingEnum;

  @Metadata({ data: "json, name=used" })
  used: number;
}


// OnDemandPageUserUploadQuota
/** 
 * Appears only when the user has upload access and is looking at their own user record.
**/
export class OnDemandPageUserUploadQuota extends SpeakeasyBase {
  @Metadata({ data: "json, name=lifetime" })
  lifetime: OnDemandPageUserUploadQuotaLifetime;

  @Metadata({ data: "json, name=periodic" })
  periodic: OnDemandPageUserUploadQuotaPeriodic;

  @Metadata({ data: "json, name=space" })
  space: OnDemandPageUserUploadQuotaSpace;
}


export class OnDemandPageUserWebsites extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


// OnDemandPageUser
/** 
 * The user who created this On Demand page.
**/
export class OnDemandPageUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account: OnDemandPageUserAccountEnum;

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
  metadata: OnDemandPageUserMetadata;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=pictures" })
  pictures: Picture;

  @Metadata({ data: "json, name=preferences" })
  preferences?: OnDemandPageUserPreferences;

  @Metadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @Metadata({ data: "json, name=upload_quota" })
  uploadQuota: OnDemandPageUserUploadQuota;

  @Metadata({ data: "json, name=uri" })
  uri: string;

  @Metadata({ data: "json, name=websites", elemType: shared.OnDemandPageUserWebsites })
  websites: OnDemandPageUserWebsites[];
}


export class OnDemandPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=background" })
  background: OnDemandPagePicture;

  @Metadata({ data: "json, name=colors" })
  colors: OnDemandPageColors;

  @Metadata({ data: "json, name=content_rating" })
  contentRating: string[];

  @Metadata({ data: "json, name=created_time" })
  createdTime?: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=domain_link" })
  domainLink: string;

  @Metadata({ data: "json, name=episodes" })
  episodes: OnDemandPageEpisodes;

  @Metadata({ data: "json, name=film" })
  film?: Video;

  @Metadata({ data: "json, name=genres", elemType: shared.OnDemandGenre })
  genres: OnDemandGenre[];

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: OnDemandPageMetadata;

  @Metadata({ data: "json, name=modified_time" })
  modifiedTime?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=pictures" })
  pictures: OnDemandPagePicture;

  @Metadata({ data: "json, name=preorder" })
  preorder: OnDemandPagePreorder;

  @Metadata({ data: "json, name=published" })
  published: OnDemandPagePublished;

  @Metadata({ data: "json, name=rating" })
  rating: number;

  @Metadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @Metadata({ data: "json, name=sku" })
  sku?: string;

  @Metadata({ data: "json, name=subscription" })
  subscription: OnDemandPageSubscription;

  @Metadata({ data: "json, name=theme" })
  theme: string;

  @Metadata({ data: "json, name=thumbnail" })
  thumbnail: OnDemandPagePicture;

  @Metadata({ data: "json, name=trailer" })
  trailer: OnDemandPageVideo;

  @Metadata({ data: "json, name=type" })
  type: OnDemandPageTypeEnum;

  @Metadata({ data: "json, name=uri" })
  uri: string;

  @Metadata({ data: "json, name=user" })
  user: OnDemandPageUser;
}
