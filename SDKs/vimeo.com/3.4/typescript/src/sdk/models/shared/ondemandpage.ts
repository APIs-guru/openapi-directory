import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Video } from "./video";
import { OnDemandGenre } from "./ondemandgenre";
import { PurchaseInteraction } from "./purchaseinteraction";
import { Category } from "./category";
import { EmbedSettings } from "./embedsettings";
import { User } from "./user";
import { Picture } from "./picture";
import { Tag } from "./tag";



export class OnDemandPagePictureSizes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height: number;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=link_with_play_button" })
  linkWithPlayButton?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width: number;
}

export enum OnDemandPagePictureTypeEnum {
    Caution = "caution",
    Custom = "custom",
    Default = "default"
}


// OnDemandPagePicture
/** 
 * The background image for the On Demand page on Vimeo.
**/
export class OnDemandPagePicture extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active: boolean;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @SpeakeasyMetadata({ data: "json, name=sizes", elemType: OnDemandPagePictureSizes })
  sizes: OnDemandPagePictureSizes[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: OnDemandPagePictureTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageColors
/** 
 * The primary and secondary colors used for rendering this On Demand page.
**/
export class OnDemandPageColors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary: string;

  @SpeakeasyMetadata({ data: "json, name=secondary" })
  secondary: string;
}


export class OnDemandPageEpisodesBuy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active: boolean;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price: number;
}

export enum OnDemandPageEpisodesRentPeriodEnum {
    OneDay = "1 day",
    OneMonth = "1 month",
    OneWeek = "1 week",
    OneYear = "1 year",
    TwoDay = "2 day",
    TwentyFourHour = "24 hour",
    ThreeDay = "3 day",
    ThreeMonth = "3 month",
    ThirtyDay = "30 day",
    FortyEightHour = "48 hour",
    SixMonth = "6 month",
    SixtyDay = "60 day",
    SevenDay = "7 day",
    SeventyTwoHour = "72 hour"
}


export class OnDemandPageEpisodesRent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active: boolean;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period: OnDemandPageEpisodesRentPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price: number;
}


// OnDemandPageEpisodes
/** 
 * Information about this On Demand page's episodes, if the page is for a series.
**/
export class OnDemandPageEpisodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buy" })
  buy: OnDemandPageEpisodesBuy;

  @SpeakeasyMetadata({ data: "json, name=rent" })
  rent: OnDemandPageEpisodesRent;
}


// OnDemandPageMetadataConnectionsMetadataConnectionsComments
/** 
 * Information about the comments associated with this page.
**/
export class OnDemandPageMetadataConnectionsMetadataConnectionsComments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageMetadataConnectionsMetadataConnectionsGenres
/** 
 * Information about the genres associated with this page.
**/
export class OnDemandPageMetadataConnectionsMetadataConnectionsGenres extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageMetadataConnectionsMetadataConnectionsLikes
/** 
 * Information about the likes associated with this page.
**/
export class OnDemandPageMetadataConnectionsMetadataConnectionsLikes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageMetadataConnectionsMetadataConnectionsPictures
/** 
 * Information about the pictures associated with this page.
**/
export class OnDemandPageMetadataConnectionsMetadataConnectionsPictures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageMetadataConnectionsMetadataConnectionsSeasons
/** 
 * Information about the seasons associated with this page.
**/
export class OnDemandPageMetadataConnectionsMetadataConnectionsSeasons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageMetadataConnectionsMetadataConnectionsVideos
/** 
 * Information about the videos associated with this page.
**/
export class OnDemandPageMetadataConnectionsMetadataConnectionsVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extra_total" })
  extraTotal: number;

  @SpeakeasyMetadata({ data: "json, name=main_total" })
  mainTotal: number;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;

  @SpeakeasyMetadata({ data: "json, name=viewable_total" })
  viewableTotal: number;
}


export class OnDemandPageMetadataConnectionsMetadataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments: OnDemandPageMetadataConnectionsMetadataConnectionsComments;

  @SpeakeasyMetadata({ data: "json, name=genres" })
  genres: OnDemandPageMetadataConnectionsMetadataConnectionsGenres;

  @SpeakeasyMetadata({ data: "json, name=likes" })
  likes: OnDemandPageMetadataConnectionsMetadataConnectionsLikes;

  @SpeakeasyMetadata({ data: "json, name=pictures" })
  pictures: OnDemandPageMetadataConnectionsMetadataConnectionsPictures;

  @SpeakeasyMetadata({ data: "json, name=seasons" })
  seasons: OnDemandPageMetadataConnectionsMetadataConnectionsSeasons;

  @SpeakeasyMetadata({ data: "json, name=videos" })
  videos: OnDemandPageMetadataConnectionsMetadataConnectionsVideos;
}


export class OnDemandPageMetadataConnectionsMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections" })
  connections: OnDemandPageMetadataConnectionsMetadataConnections;
}


// OnDemandPageMetadataConnections
/** 
 * A collection of information that is connected to this resource, including videos, genres, and pictures connections.
**/
export class OnDemandPageMetadataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: OnDemandPageMetadataConnectionsMetadata;
}


// OnDemandPageMetadata
/** 
 * Metadata about the On Demand page.
**/
export class OnDemandPageMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections" })
  connections: OnDemandPageMetadataConnections;

  @SpeakeasyMetadata({ data: "json, name=interactions" })
  interactions: PurchaseInteraction;
}


export class OnDemandPagePreorder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active: boolean;

  @SpeakeasyMetadata({ data: "json, name=cancel_time" })
  cancelTime: string;

  @SpeakeasyMetadata({ data: "json, name=publish_time" })
  publishTime: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time: string;
}


export class OnDemandPagePublished extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time: string;
}


// OnDemandPageSubscription
/** 
 * Information about subscribing to this On Demand page, if enabled.
**/
export class OnDemandPageSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active: boolean;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price: Map<string, any>;
}

export enum OnDemandPageVideoContextActionEnum {
    AddedTo = "Added to",
    AppearanceBy = "Appearance by",
    LikedBy = "Liked by",
    UploadedBy = "Uploaded by"
}


// OnDemandPageVideoContext
/** 
 * The context of the video's subscription, if this video is part of a subscription.
**/
export class OnDemandPageVideoContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: OnDemandPageVideoContextActionEnum;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType: string;
}

export enum OnDemandPageVideoLicenseEnum {
    By = "by",
    ByNc = "by-nc",
    ByNcNd = "by-nc-nd",
    ByNcSa = "by-nc-sa",
    ByNd = "by-nd",
    BySa = "by-sa",
    Cc0 = "cc0"
}


// OnDemandPageVideoMetadataConnectionsComments
/** 
 * Information about the comments on this video.
**/
export class OnDemandPageVideoMetadataConnectionsComments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataConnectionsCredits
/** 
 * Information about the users credited in this video.
**/
export class OnDemandPageVideoMetadataConnectionsCredits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


// OnDemandPageVideoMetadataConnectionsLikes
/** 
 * Information about the users who have liked this video.
**/
export class OnDemandPageVideoMetadataConnectionsLikes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataConnectionsOndemand
/** 
 * Information about this video's ondemand data.
**/
export class OnDemandPageVideoMetadataConnectionsOndemand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataConnectionsPictures
/** 
 * Information about this video's thumbnails.
**/
export class OnDemandPageVideoMetadataConnectionsPictures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataConnectionsPlayback
/** 
 * The DRM playback status connection for this video.
**/
export class OnDemandPageVideoMetadataConnectionsPlayback extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataConnectionsRecommendations
/** 
 * The recommendations for this video.
**/
export class OnDemandPageVideoMetadataConnectionsRecommendations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


// OnDemandPageVideoMetadataConnectionsRelated
/** 
 * Related content for this video.
**/
export class OnDemandPageVideoMetadataConnectionsRelated extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


// OnDemandPageVideoMetadataConnectionsSeason
/** 
 * Information about the video's season.
**/
export class OnDemandPageVideoMetadataConnectionsSeason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataConnectionsTexttracks
/** 
 * Information about this video's text tracks.
**/
export class OnDemandPageVideoMetadataConnectionsTexttracks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataConnectionsTrailer
/** 
 * Information about this video's VOD trailer.
**/
export class OnDemandPageVideoMetadataConnectionsTrailer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataConnectionsUsersWithAccess
/** 
 * Information about the user privacy of this video, if the video privacy is `users`.
**/
export class OnDemandPageVideoMetadataConnectionsUsersWithAccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataConnectionsVersions
/** 
 * Information about the versions of this video.
**/
export class OnDemandPageVideoMetadataConnectionsVersions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current_uri" })
  currentUri?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataConnections
/** 
 * A list of resource URIs related to the video.
**/
export class OnDemandPageVideoMetadataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments: OnDemandPageVideoMetadataConnectionsComments;

  @SpeakeasyMetadata({ data: "json, name=credits" })
  credits: OnDemandPageVideoMetadataConnectionsCredits;

  @SpeakeasyMetadata({ data: "json, name=likes" })
  likes: OnDemandPageVideoMetadataConnectionsLikes;

  @SpeakeasyMetadata({ data: "json, name=ondemand" })
  ondemand: OnDemandPageVideoMetadataConnectionsOndemand;

  @SpeakeasyMetadata({ data: "json, name=pictures" })
  pictures: OnDemandPageVideoMetadataConnectionsPictures;

  @SpeakeasyMetadata({ data: "json, name=playback" })
  playback: OnDemandPageVideoMetadataConnectionsPlayback;

  @SpeakeasyMetadata({ data: "json, name=recommendations" })
  recommendations: OnDemandPageVideoMetadataConnectionsRecommendations;

  @SpeakeasyMetadata({ data: "json, name=related" })
  related: OnDemandPageVideoMetadataConnectionsRelated;

  @SpeakeasyMetadata({ data: "json, name=season" })
  season: OnDemandPageVideoMetadataConnectionsSeason;

  @SpeakeasyMetadata({ data: "json, name=texttracks" })
  texttracks: OnDemandPageVideoMetadataConnectionsTexttracks;

  @SpeakeasyMetadata({ data: "json, name=trailer" })
  trailer: OnDemandPageVideoMetadataConnectionsTrailer;

  @SpeakeasyMetadata({ data: "json, name=users_with_access" })
  usersWithAccess: OnDemandPageVideoMetadataConnectionsUsersWithAccess;

  @SpeakeasyMetadata({ data: "json, name=versions" })
  versions: OnDemandPageVideoMetadataConnectionsVersions;
}

export enum OnDemandPageVideoMetadataInteractionsBuyDownloadEnum {
    Available = "available",
    Purchased = "purchased",
    Restricted = "restricted",
    Unavailable = "unavailable"
}

export enum OnDemandPageVideoMetadataInteractionsBuyStreamEnum {
    Available = "available",
    Purchased = "purchased",
    Restricted = "restricted",
    Unavailable = "unavailable"
}


// OnDemandPageVideoMetadataInteractionsBuy
/** 
 * The Buy interaction for a On Demand video.
**/
export class OnDemandPageVideoMetadataInteractionsBuy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=display_price" })
  displayPrice: string;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download: OnDemandPageVideoMetadataInteractionsBuyDownloadEnum;

  @SpeakeasyMetadata({ data: "json, name=drm" })
  drm: boolean;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price: number;

  @SpeakeasyMetadata({ data: "json, name=purchase_time" })
  purchaseTime: string;

  @SpeakeasyMetadata({ data: "json, name=stream" })
  stream: OnDemandPageVideoMetadataInteractionsBuyStreamEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataInteractionsChannel
/** 
 * When a video is referenced by a channel URI, if the user is a moderator of the channel, include information about removing the video from the channel.
**/
export class OnDemandPageVideoMetadataInteractionsChannel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataInteractionsLike
/** 
 * Information about whether the authenticated user has liked this video.
**/
export class OnDemandPageVideoMetadataInteractionsLike extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added" })
  added: boolean;

  @SpeakeasyMetadata({ data: "json, name=added_time" })
  addedTime: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}

export enum OnDemandPageVideoMetadataInteractionsRentStreamEnum {
    Available = "available",
    Purchased = "purchased",
    Restricted = "restricted",
    Unavailable = "unavailable"
}


// OnDemandPageVideoMetadataInteractionsRent
/** 
 * The Rent interaction for an On Demand video.
**/
export class OnDemandPageVideoMetadataInteractionsRent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=display_price" })
  displayPrice: string;

  @SpeakeasyMetadata({ data: "json, name=drm" })
  drm: boolean;

  @SpeakeasyMetadata({ data: "json, name=expires_time" })
  expiresTime: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price: number;

  @SpeakeasyMetadata({ data: "json, name=purchase_time" })
  purchaseTime: string;

  @SpeakeasyMetadata({ data: "json, name=stream" })
  stream: OnDemandPageVideoMetadataInteractionsRentStreamEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataInteractionsReport
/** 
 * Information about where and how to report a video.
**/
export class OnDemandPageVideoMetadataInteractionsReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataInteractionsSubscribe
/** 
 * Subscription information for an On Demand video.
**/
export class OnDemandPageVideoMetadataInteractionsSubscribe extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=drm" })
  drm?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expires_time" })
  expiresTime?: string;

  @SpeakeasyMetadata({ data: "json, name=purchase_time" })
  purchaseTime?: string;

  @SpeakeasyMetadata({ data: "json, name=stream" })
  stream?: string;
}


// OnDemandPageVideoMetadataInteractionsWatched
/** 
 * Information about removing this video from the user's list of watched videos.
**/
export class OnDemandPageVideoMetadataInteractionsWatched extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added" })
  added: boolean;

  @SpeakeasyMetadata({ data: "json, name=added_time" })
  addedTime: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataInteractionsWatchlater
/** 
 * Information about whether this video appears on the authenticated user's Watch Later list.
**/
export class OnDemandPageVideoMetadataInteractionsWatchlater extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added" })
  added: boolean;

  @SpeakeasyMetadata({ data: "json, name=added_time" })
  addedTime: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoMetadataInteractions
/** 
 * A list of resource URIs related to the video.
**/
export class OnDemandPageVideoMetadataInteractions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buy" })
  buy: OnDemandPageVideoMetadataInteractionsBuy;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: OnDemandPageVideoMetadataInteractionsChannel;

  @SpeakeasyMetadata({ data: "json, name=like" })
  like: OnDemandPageVideoMetadataInteractionsLike;

  @SpeakeasyMetadata({ data: "json, name=rent" })
  rent: OnDemandPageVideoMetadataInteractionsRent;

  @SpeakeasyMetadata({ data: "json, name=report" })
  report: OnDemandPageVideoMetadataInteractionsReport;

  @SpeakeasyMetadata({ data: "json, name=subscribe" })
  subscribe?: OnDemandPageVideoMetadataInteractionsSubscribe;

  @SpeakeasyMetadata({ data: "json, name=watched" })
  watched: OnDemandPageVideoMetadataInteractionsWatched;

  @SpeakeasyMetadata({ data: "json, name=watchlater" })
  watchlater: OnDemandPageVideoMetadataInteractionsWatchlater;
}


// OnDemandPageVideoMetadata
/** 
 * The video's metadata.
**/
export class OnDemandPageVideoMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections" })
  connections: OnDemandPageVideoMetadataConnections;

  @SpeakeasyMetadata({ data: "json, name=interactions" })
  interactions: OnDemandPageVideoMetadataInteractions;
}


// OnDemandPageVideoProjectMetadataConnectionsVideos
/** 
 * A standard connection object indicating how to get all the videos in this project.
**/
export class OnDemandPageVideoProjectMetadataConnectionsVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoProjectMetadataConnections
/** 
 * A list of resource URIs related to the project.
**/
export class OnDemandPageVideoProjectMetadataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=videos" })
  videos: OnDemandPageVideoProjectMetadataConnectionsVideos;
}


// OnDemandPageVideoProjectMetadata
/** 
 * The project's metadata.
**/
export class OnDemandPageVideoProjectMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections" })
  connections: OnDemandPageVideoProjectMetadataConnections;
}


// OnDemandPageVideoProject
/** 
 * Information about the folder that contains this video.
**/
export class OnDemandPageVideoProject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_time" })
  createdTime: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: OnDemandPageVideoProjectMetadata;

  @SpeakeasyMetadata({ data: "json, name=modified_time" })
  modifiedTime: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: User;
}

export enum OnDemandPageVideoPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}

export enum OnDemandPageVideoPrivacyEmbedEnum {
    Private = "private",
    Public = "public"
}

export enum OnDemandPageVideoPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}


// OnDemandPageVideoPrivacy
/** 
 * The video's privacy setting.
**/
export class OnDemandPageVideoPrivacy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add" })
  add: boolean;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments: OnDemandPageVideoPrivacyCommentsEnum;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download: boolean;

  @SpeakeasyMetadata({ data: "json, name=embed" })
  embed: OnDemandPageVideoPrivacyEmbedEnum;

  @SpeakeasyMetadata({ data: "json, name=view" })
  view: OnDemandPageVideoPrivacyViewEnum;
}


export class OnDemandPageVideoSpatialDirectorTimeline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pitch" })
  pitch?: number;

  @SpeakeasyMetadata({ data: "json, name=roll" })
  roll?: number;

  @SpeakeasyMetadata({ data: "json, name=time_code" })
  timeCode?: number;

  @SpeakeasyMetadata({ data: "json, name=yaw" })
  yaw?: number;
}

export enum OnDemandPageVideoSpatialProjectionEnum {
    Cubical = "cubical",
    Cylindrical = "cylindrical",
    Dome = "dome",
    Equirectangular = "equirectangular",
    Pyramid = "pyramid"
}

export enum OnDemandPageVideoSpatialStereoFormatEnum {
    LeftRight = "left-right",
    Mono = "mono",
    TopBottom = "top-bottom"
}


// OnDemandPageVideoSpatial
/** 
 * 360 spatial data.
**/
export class OnDemandPageVideoSpatial extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=director_timeline", elemType: OnDemandPageVideoSpatialDirectorTimeline })
  directorTimeline: OnDemandPageVideoSpatialDirectorTimeline[];

  @SpeakeasyMetadata({ data: "json, name=field_of_view" })
  fieldOfView: number;

  @SpeakeasyMetadata({ data: "json, name=projection" })
  projection: OnDemandPageVideoSpatialProjectionEnum;

  @SpeakeasyMetadata({ data: "json, name=stereo_format" })
  stereoFormat: OnDemandPageVideoSpatialStereoFormatEnum;
}


// OnDemandPageVideoStats
/** 
 * A collection of stats associated with this video.
**/
export class OnDemandPageVideoStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=plays" })
  plays: number;
}

export enum OnDemandPageVideoStatusEnum {
    Available = "available",
    QuotaExceeded = "quota_exceeded",
    TotalCapExceeded = "total_cap_exceeded",
    TranscodeStarting = "transcode_starting",
    Transcoding = "transcoding",
    TranscodingError = "transcoding_error",
    Unavailable = "unavailable",
    Uploading = "uploading",
    UploadingError = "uploading_error"
}

export enum OnDemandPageVideoTranscodeStatusEnum {
    Complete = "complete",
    Error = "error",
    InProgress = "in_progress"
}


// OnDemandPageVideoTranscode
/** 
 * The transcode information for a video upload.
**/
export class OnDemandPageVideoTranscode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OnDemandPageVideoTranscodeStatusEnum;
}

export enum OnDemandPageVideoUploadApproachEnum {
    Post = "post",
    Pull = "pull",
    Streaming = "streaming",
    Tus = "tus"
}

export enum OnDemandPageVideoUploadStatusEnum {
    Complete = "complete",
    Error = "error",
    InProgress = "in_progress"
}


// OnDemandPageVideoUpload
/** 
 * The upload information for this video.
**/
export class OnDemandPageVideoUpload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approach" })
  approach?: OnDemandPageVideoUploadApproachEnum;

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
  status: OnDemandPageVideoUploadStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=upload_link" })
  uploadLink?: string;
}

export enum OnDemandPageVideoUserAccountEnum {
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


// OnDemandPageVideoUserMetadataConnectionsAlbums
/** 
 * Information about the albums created by this user.
**/
export class OnDemandPageVideoUserMetadataConnectionsAlbums extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsAppearances
/** 
 * Information about the appearances of this user in other videos.
**/
export class OnDemandPageVideoUserMetadataConnectionsAppearances extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsBlock
/** 
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
export class OnDemandPageVideoUserMetadataConnectionsBlock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsCategories
/** 
 * Information about this user's followed categories.
**/
export class OnDemandPageVideoUserMetadataConnectionsCategories extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsChannels
/** 
 * Information about this user's subscribed channels.
**/
export class OnDemandPageVideoUserMetadataConnectionsChannels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsFeed
/** 
 * Information about this user's feed.
**/
export class OnDemandPageVideoUserMetadataConnectionsFeed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsFolders
/** 
 * Information about this user's folders.
**/
export class OnDemandPageVideoUserMetadataConnectionsFolders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsFollowers
/** 
 * Information about the user's followers.
**/
export class OnDemandPageVideoUserMetadataConnectionsFollowers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsFollowing
/** 
 * Information about the users that the current user is following.
**/
export class OnDemandPageVideoUserMetadataConnectionsFollowing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsGroups
/** 
 * Information about the groups created by this user.
**/
export class OnDemandPageVideoUserMetadataConnectionsGroups extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsLikes
/** 
 * Information about the videos that this user has liked.
**/
export class OnDemandPageVideoUserMetadataConnectionsLikes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsModeratedChannels
/** 
 * Information about the channels that this user moderates.
**/
export class OnDemandPageVideoUserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsPictures
/** 
 * Information about this user's portraits.
**/
export class OnDemandPageVideoUserMetadataConnectionsPictures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsPortfolios
/** 
 * Information about this user's portfolios.
**/
export class OnDemandPageVideoUserMetadataConnectionsPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsRecommendedChannels
/** 
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class OnDemandPageVideoUserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsRecommendedUsers
/** 
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class OnDemandPageVideoUserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsShared
/** 
 * Information about the videos that have been shared with this user.
**/
export class OnDemandPageVideoUserMetadataConnectionsShared extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsVideos
/** 
 * Information about the videos uploaded by this user.
**/
export class OnDemandPageVideoUserMetadataConnectionsVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsWatchedVideos
/** 
 * Information about the videos that this user has watched.
**/
export class OnDemandPageVideoUserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnectionsWatchlater
/** 
 * Information about the videos that this user wants to watch later.
**/
export class OnDemandPageVideoUserMetadataConnectionsWatchlater extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataConnections
/** 
 * The list of resource URIs related to the user.
**/
export class OnDemandPageVideoUserMetadataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=albums" })
  albums: OnDemandPageVideoUserMetadataConnectionsAlbums;

  @SpeakeasyMetadata({ data: "json, name=appearances" })
  appearances: OnDemandPageVideoUserMetadataConnectionsAppearances;

  @SpeakeasyMetadata({ data: "json, name=block" })
  block: OnDemandPageVideoUserMetadataConnectionsBlock;

  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories: OnDemandPageVideoUserMetadataConnectionsCategories;

  @SpeakeasyMetadata({ data: "json, name=channels" })
  channels: OnDemandPageVideoUserMetadataConnectionsChannels;

  @SpeakeasyMetadata({ data: "json, name=feed" })
  feed: OnDemandPageVideoUserMetadataConnectionsFeed;

  @SpeakeasyMetadata({ data: "json, name=folders" })
  folders: OnDemandPageVideoUserMetadataConnectionsFolders;

  @SpeakeasyMetadata({ data: "json, name=followers" })
  followers: OnDemandPageVideoUserMetadataConnectionsFollowers;

  @SpeakeasyMetadata({ data: "json, name=following" })
  following: OnDemandPageVideoUserMetadataConnectionsFollowing;

  @SpeakeasyMetadata({ data: "json, name=groups" })
  groups: OnDemandPageVideoUserMetadataConnectionsGroups;

  @SpeakeasyMetadata({ data: "json, name=likes" })
  likes: OnDemandPageVideoUserMetadataConnectionsLikes;

  @SpeakeasyMetadata({ data: "json, name=moderated_channels" })
  moderatedChannels: OnDemandPageVideoUserMetadataConnectionsModeratedChannels;

  @SpeakeasyMetadata({ data: "json, name=pictures" })
  pictures: OnDemandPageVideoUserMetadataConnectionsPictures;

  @SpeakeasyMetadata({ data: "json, name=portfolios" })
  portfolios: OnDemandPageVideoUserMetadataConnectionsPortfolios;

  @SpeakeasyMetadata({ data: "json, name=recommended_channels" })
  recommendedChannels: OnDemandPageVideoUserMetadataConnectionsRecommendedChannels;

  @SpeakeasyMetadata({ data: "json, name=recommended_users" })
  recommendedUsers: OnDemandPageVideoUserMetadataConnectionsRecommendedUsers;

  @SpeakeasyMetadata({ data: "json, name=shared" })
  shared: OnDemandPageVideoUserMetadataConnectionsShared;

  @SpeakeasyMetadata({ data: "json, name=videos" })
  videos: OnDemandPageVideoUserMetadataConnectionsVideos;

  @SpeakeasyMetadata({ data: "json, name=watched_videos" })
  watchedVideos: OnDemandPageVideoUserMetadataConnectionsWatchedVideos;

  @SpeakeasyMetadata({ data: "json, name=watchlater" })
  watchlater: OnDemandPageVideoUserMetadataConnectionsWatchlater;
}


export class OnDemandPageVideoUserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


// OnDemandPageVideoUserMetadataInteractionsBlock
/** 
 * Information related to the block status of this user.
**/
export class OnDemandPageVideoUserMetadataInteractionsBlock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added" })
  added: boolean;

  @SpeakeasyMetadata({ data: "json, name=added_time" })
  addedTime: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataInteractionsFollow
/** 
 * Information related to the followed status of this user.
**/
export class OnDemandPageVideoUserMetadataInteractionsFollow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added" })
  added: boolean;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageVideoUserMetadataInteractionsReport
/** 
 * Information regarding where and how to report a user.
**/
export class OnDemandPageVideoUserMetadataInteractionsReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


export class OnDemandPageVideoUserMetadataInteractions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add_privacy_user" })
  addPrivacyUser?: OnDemandPageVideoUserMetadataInteractionsAddPrivacyUser;

  @SpeakeasyMetadata({ data: "json, name=block" })
  block: OnDemandPageVideoUserMetadataInteractionsBlock;

  @SpeakeasyMetadata({ data: "json, name=follow" })
  follow: OnDemandPageVideoUserMetadataInteractionsFollow;

  @SpeakeasyMetadata({ data: "json, name=report" })
  report: OnDemandPageVideoUserMetadataInteractionsReport;
}


// OnDemandPageVideoUserMetadata
/** 
 * The user's metadata.
**/
export class OnDemandPageVideoUserMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections" })
  connections: OnDemandPageVideoUserMetadataConnections;

  @SpeakeasyMetadata({ data: "json, name=interactions" })
  interactions: OnDemandPageVideoUserMetadataInteractions;
}

export enum OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}

export enum OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnum {
    Private = "private",
    Public = "public",
    Whitelist = "whitelist"
}

export enum OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}


export class OnDemandPageVideoUserPreferencesVideosPrivacy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add" })
  add?: boolean;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnum;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download?: boolean;

  @SpeakeasyMetadata({ data: "json, name=embed" })
  embed?: OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnum;

  @SpeakeasyMetadata({ data: "json, name=view" })
  view?: OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum;
}


export class OnDemandPageVideoUserPreferencesVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: OnDemandPageVideoUserPreferencesVideosPrivacy;
}


export class OnDemandPageVideoUserPreferences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=videos" })
  videos?: OnDemandPageVideoUserPreferencesVideos;
}


// OnDemandPageVideoUserUploadQuotaLifetime
/** 
 * Information about the user's lifetime upload usage.
**/
export class OnDemandPageVideoUserUploadQuotaLifetime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=free" })
  free: number;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max: number;

  @SpeakeasyMetadata({ data: "json, name=used" })
  used: number;
}


// OnDemandPageVideoUserUploadQuotaPeriodic
/** 
 * Information about the user's usage for the current period.
**/
export class OnDemandPageVideoUserUploadQuotaPeriodic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=free" })
  free: number;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max: number;

  @SpeakeasyMetadata({ data: "json, name=reset_date" })
  resetDate: string;

  @SpeakeasyMetadata({ data: "json, name=used" })
  used: number;
}

export enum OnDemandPageVideoUserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime",
    Periodic = "periodic"
}


// OnDemandPageVideoUserUploadQuotaSpace
/** 
 * Information about the user's upload space remaining for the current period.
**/
export class OnDemandPageVideoUserUploadQuotaSpace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=free" })
  free: number;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max: number;

  @SpeakeasyMetadata({ data: "json, name=showing" })
  showing: OnDemandPageVideoUserUploadQuotaSpaceShowingEnum;

  @SpeakeasyMetadata({ data: "json, name=used" })
  used: number;
}


// OnDemandPageVideoUserUploadQuota
/** 
 * Appears only when the user has upload access and is looking at their own user record.
**/
export class OnDemandPageVideoUserUploadQuota extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lifetime" })
  lifetime: OnDemandPageVideoUserUploadQuotaLifetime;

  @SpeakeasyMetadata({ data: "json, name=periodic" })
  periodic: OnDemandPageVideoUserUploadQuotaPeriodic;

  @SpeakeasyMetadata({ data: "json, name=space" })
  space: OnDemandPageVideoUserUploadQuotaSpace;
}


export class OnDemandPageVideoUserWebsites extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


// OnDemandPageVideoUser
/** 
 * The video owner.
**/
export class OnDemandPageVideoUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account: OnDemandPageVideoUserAccountEnum;

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
  metadata: OnDemandPageVideoUserMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=pictures" })
  pictures: Picture;

  @SpeakeasyMetadata({ data: "json, name=preferences" })
  preferences?: OnDemandPageVideoUserPreferences;

  @SpeakeasyMetadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @SpeakeasyMetadata({ data: "json, name=upload_quota" })
  uploadQuota: OnDemandPageVideoUserUploadQuota;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;

  @SpeakeasyMetadata({ data: "json, name=websites", elemType: OnDemandPageVideoUserWebsites })
  websites: OnDemandPageVideoUserWebsites[];
}


// OnDemandPageVideo
/** 
 * The trailer for this On Demand page.
**/
export class OnDemandPageVideo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories", elemType: Category })
  categories: Category[];

  @SpeakeasyMetadata({ data: "json, name=content_rating" })
  contentRating: string[];

  @SpeakeasyMetadata({ data: "json, name=context" })
  context: OnDemandPageVideoContext;

  @SpeakeasyMetadata({ data: "json, name=created_time" })
  createdTime: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration: number;

  @SpeakeasyMetadata({ data: "json, name=embed" })
  embed: EmbedSettings;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height: number;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language: string;

  @SpeakeasyMetadata({ data: "json, name=last_user_action_event_date" })
  lastUserActionEventDate?: string;

  @SpeakeasyMetadata({ data: "json, name=license" })
  license: OnDemandPageVideoLicenseEnum;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: OnDemandPageVideoMetadata;

  @SpeakeasyMetadata({ data: "json, name=modified_time" })
  modifiedTime: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parent_folder" })
  parentFolder?: OnDemandPageVideoProject;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=pictures" })
  pictures: Picture;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy: OnDemandPageVideoPrivacy;

  @SpeakeasyMetadata({ data: "json, name=release_time" })
  releaseTime: string;

  @SpeakeasyMetadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @SpeakeasyMetadata({ data: "json, name=spatial" })
  spatial: OnDemandPageVideoSpatial;

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats: OnDemandPageVideoStats;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: OnDemandPageVideoStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags: Tag[];

  @SpeakeasyMetadata({ data: "json, name=transcode" })
  transcode: OnDemandPageVideoTranscode;

  @SpeakeasyMetadata({ data: "json, name=upload" })
  upload: OnDemandPageVideoUpload;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: OnDemandPageVideoUser;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width: number;
}

export enum OnDemandPageTypeEnum {
    Film = "film",
    Series = "series"
}

export enum OnDemandPageUserAccountEnum {
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


// OnDemandPageUserMetadataConnectionsAlbums
/** 
 * Information about the albums created by this user.
**/
export class OnDemandPageUserMetadataConnectionsAlbums extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsAppearances
/** 
 * Information about the appearances of this user in other videos.
**/
export class OnDemandPageUserMetadataConnectionsAppearances extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsBlock
/** 
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
export class OnDemandPageUserMetadataConnectionsBlock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsCategories
/** 
 * Information about this user's followed categories.
**/
export class OnDemandPageUserMetadataConnectionsCategories extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsChannels
/** 
 * Information about this user's subscribed channels.
**/
export class OnDemandPageUserMetadataConnectionsChannels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsFeed
/** 
 * Information about this user's feed.
**/
export class OnDemandPageUserMetadataConnectionsFeed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsFolders
/** 
 * Information about this user's folders.
**/
export class OnDemandPageUserMetadataConnectionsFolders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsFollowers
/** 
 * Information about the user's followers.
**/
export class OnDemandPageUserMetadataConnectionsFollowers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsFollowing
/** 
 * Information about the users that the current user is following.
**/
export class OnDemandPageUserMetadataConnectionsFollowing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsGroups
/** 
 * Information about the groups created by this user.
**/
export class OnDemandPageUserMetadataConnectionsGroups extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsLikes
/** 
 * Information about the videos that this user has liked.
**/
export class OnDemandPageUserMetadataConnectionsLikes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsModeratedChannels
/** 
 * Information about the channels that this user moderates.
**/
export class OnDemandPageUserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsPictures
/** 
 * Information about this user's portraits.
**/
export class OnDemandPageUserMetadataConnectionsPictures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsPortfolios
/** 
 * Information about this user's portfolios.
**/
export class OnDemandPageUserMetadataConnectionsPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsRecommendedChannels
/** 
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class OnDemandPageUserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsRecommendedUsers
/** 
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
export class OnDemandPageUserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsShared
/** 
 * Information about the videos that have been shared with this user.
**/
export class OnDemandPageUserMetadataConnectionsShared extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsVideos
/** 
 * Information about the videos uploaded by this user.
**/
export class OnDemandPageUserMetadataConnectionsVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsWatchedVideos
/** 
 * Information about the videos that this user has watched.
**/
export class OnDemandPageUserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnectionsWatchlater
/** 
 * Information about the videos that this user wants to watch later.
**/
export class OnDemandPageUserMetadataConnectionsWatchlater extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataConnections
/** 
 * The list of resource URIs related to the user.
**/
export class OnDemandPageUserMetadataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=albums" })
  albums: OnDemandPageUserMetadataConnectionsAlbums;

  @SpeakeasyMetadata({ data: "json, name=appearances" })
  appearances: OnDemandPageUserMetadataConnectionsAppearances;

  @SpeakeasyMetadata({ data: "json, name=block" })
  block: OnDemandPageUserMetadataConnectionsBlock;

  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories: OnDemandPageUserMetadataConnectionsCategories;

  @SpeakeasyMetadata({ data: "json, name=channels" })
  channels: OnDemandPageUserMetadataConnectionsChannels;

  @SpeakeasyMetadata({ data: "json, name=feed" })
  feed: OnDemandPageUserMetadataConnectionsFeed;

  @SpeakeasyMetadata({ data: "json, name=folders" })
  folders: OnDemandPageUserMetadataConnectionsFolders;

  @SpeakeasyMetadata({ data: "json, name=followers" })
  followers: OnDemandPageUserMetadataConnectionsFollowers;

  @SpeakeasyMetadata({ data: "json, name=following" })
  following: OnDemandPageUserMetadataConnectionsFollowing;

  @SpeakeasyMetadata({ data: "json, name=groups" })
  groups: OnDemandPageUserMetadataConnectionsGroups;

  @SpeakeasyMetadata({ data: "json, name=likes" })
  likes: OnDemandPageUserMetadataConnectionsLikes;

  @SpeakeasyMetadata({ data: "json, name=moderated_channels" })
  moderatedChannels: OnDemandPageUserMetadataConnectionsModeratedChannels;

  @SpeakeasyMetadata({ data: "json, name=pictures" })
  pictures: OnDemandPageUserMetadataConnectionsPictures;

  @SpeakeasyMetadata({ data: "json, name=portfolios" })
  portfolios: OnDemandPageUserMetadataConnectionsPortfolios;

  @SpeakeasyMetadata({ data: "json, name=recommended_channels" })
  recommendedChannels: OnDemandPageUserMetadataConnectionsRecommendedChannels;

  @SpeakeasyMetadata({ data: "json, name=recommended_users" })
  recommendedUsers: OnDemandPageUserMetadataConnectionsRecommendedUsers;

  @SpeakeasyMetadata({ data: "json, name=shared" })
  shared: OnDemandPageUserMetadataConnectionsShared;

  @SpeakeasyMetadata({ data: "json, name=videos" })
  videos: OnDemandPageUserMetadataConnectionsVideos;

  @SpeakeasyMetadata({ data: "json, name=watched_videos" })
  watchedVideos: OnDemandPageUserMetadataConnectionsWatchedVideos;

  @SpeakeasyMetadata({ data: "json, name=watchlater" })
  watchlater: OnDemandPageUserMetadataConnectionsWatchlater;
}


export class OnDemandPageUserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


// OnDemandPageUserMetadataInteractionsBlock
/** 
 * Information related to the block status of this user.
**/
export class OnDemandPageUserMetadataInteractionsBlock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added" })
  added: boolean;

  @SpeakeasyMetadata({ data: "json, name=added_time" })
  addedTime: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataInteractionsFollow
/** 
 * Information related to the followed status of this user.
**/
export class OnDemandPageUserMetadataInteractionsFollow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added" })
  added: boolean;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPageUserMetadataInteractionsReport
/** 
 * Information regarding where and how to report a user.
**/
export class OnDemandPageUserMetadataInteractionsReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


export class OnDemandPageUserMetadataInteractions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add_privacy_user" })
  addPrivacyUser?: OnDemandPageUserMetadataInteractionsAddPrivacyUser;

  @SpeakeasyMetadata({ data: "json, name=block" })
  block: OnDemandPageUserMetadataInteractionsBlock;

  @SpeakeasyMetadata({ data: "json, name=follow" })
  follow: OnDemandPageUserMetadataInteractionsFollow;

  @SpeakeasyMetadata({ data: "json, name=report" })
  report: OnDemandPageUserMetadataInteractionsReport;
}


// OnDemandPageUserMetadata
/** 
 * The user's metadata.
**/
export class OnDemandPageUserMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections" })
  connections: OnDemandPageUserMetadataConnections;

  @SpeakeasyMetadata({ data: "json, name=interactions" })
  interactions: OnDemandPageUserMetadataInteractions;
}

export enum OnDemandPageUserPreferencesVideosPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}

export enum OnDemandPageUserPreferencesVideosPrivacyEmbedEnum {
    Private = "private",
    Public = "public",
    Whitelist = "whitelist"
}

export enum OnDemandPageUserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}


export class OnDemandPageUserPreferencesVideosPrivacy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add" })
  add?: boolean;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: OnDemandPageUserPreferencesVideosPrivacyCommentsEnum;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download?: boolean;

  @SpeakeasyMetadata({ data: "json, name=embed" })
  embed?: OnDemandPageUserPreferencesVideosPrivacyEmbedEnum;

  @SpeakeasyMetadata({ data: "json, name=view" })
  view?: OnDemandPageUserPreferencesVideosPrivacyViewEnum;
}


export class OnDemandPageUserPreferencesVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: OnDemandPageUserPreferencesVideosPrivacy;
}


export class OnDemandPageUserPreferences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=videos" })
  videos?: OnDemandPageUserPreferencesVideos;
}


// OnDemandPageUserUploadQuotaLifetime
/** 
 * Information about the user's lifetime upload usage.
**/
export class OnDemandPageUserUploadQuotaLifetime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=free" })
  free: number;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max: number;

  @SpeakeasyMetadata({ data: "json, name=used" })
  used: number;
}


// OnDemandPageUserUploadQuotaPeriodic
/** 
 * Information about the user's usage for the current period.
**/
export class OnDemandPageUserUploadQuotaPeriodic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=free" })
  free: number;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max: number;

  @SpeakeasyMetadata({ data: "json, name=reset_date" })
  resetDate: string;

  @SpeakeasyMetadata({ data: "json, name=used" })
  used: number;
}

export enum OnDemandPageUserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime",
    Periodic = "periodic"
}


// OnDemandPageUserUploadQuotaSpace
/** 
 * Information about the user's upload space remaining for the current period.
**/
export class OnDemandPageUserUploadQuotaSpace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=free" })
  free: number;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max: number;

  @SpeakeasyMetadata({ data: "json, name=showing" })
  showing: OnDemandPageUserUploadQuotaSpaceShowingEnum;

  @SpeakeasyMetadata({ data: "json, name=used" })
  used: number;
}


// OnDemandPageUserUploadQuota
/** 
 * Appears only when the user has upload access and is looking at their own user record.
**/
export class OnDemandPageUserUploadQuota extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lifetime" })
  lifetime: OnDemandPageUserUploadQuotaLifetime;

  @SpeakeasyMetadata({ data: "json, name=periodic" })
  periodic: OnDemandPageUserUploadQuotaPeriodic;

  @SpeakeasyMetadata({ data: "json, name=space" })
  space: OnDemandPageUserUploadQuotaSpace;
}


export class OnDemandPageUserWebsites extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


// OnDemandPageUser
/** 
 * The user who created this On Demand page.
**/
export class OnDemandPageUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account: OnDemandPageUserAccountEnum;

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
  metadata: OnDemandPageUserMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=pictures" })
  pictures: Picture;

  @SpeakeasyMetadata({ data: "json, name=preferences" })
  preferences?: OnDemandPageUserPreferences;

  @SpeakeasyMetadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @SpeakeasyMetadata({ data: "json, name=upload_quota" })
  uploadQuota: OnDemandPageUserUploadQuota;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;

  @SpeakeasyMetadata({ data: "json, name=websites", elemType: OnDemandPageUserWebsites })
  websites: OnDemandPageUserWebsites[];
}


export class OnDemandPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=background" })
  background: OnDemandPagePicture;

  @SpeakeasyMetadata({ data: "json, name=colors" })
  colors: OnDemandPageColors;

  @SpeakeasyMetadata({ data: "json, name=content_rating" })
  contentRating: string[];

  @SpeakeasyMetadata({ data: "json, name=created_time" })
  createdTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=domain_link" })
  domainLink: string;

  @SpeakeasyMetadata({ data: "json, name=episodes" })
  episodes: OnDemandPageEpisodes;

  @SpeakeasyMetadata({ data: "json, name=film" })
  film?: Video;

  @SpeakeasyMetadata({ data: "json, name=genres", elemType: OnDemandGenre })
  genres: OnDemandGenre[];

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: OnDemandPageMetadata;

  @SpeakeasyMetadata({ data: "json, name=modified_time" })
  modifiedTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=pictures" })
  pictures: OnDemandPagePicture;

  @SpeakeasyMetadata({ data: "json, name=preorder" })
  preorder: OnDemandPagePreorder;

  @SpeakeasyMetadata({ data: "json, name=published" })
  published: OnDemandPagePublished;

  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating: number;

  @SpeakeasyMetadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;

  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription: OnDemandPageSubscription;

  @SpeakeasyMetadata({ data: "json, name=theme" })
  theme: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnail" })
  thumbnail: OnDemandPagePicture;

  @SpeakeasyMetadata({ data: "json, name=trailer" })
  trailer: OnDemandPageVideo;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: OnDemandPageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: OnDemandPageUser;
}
