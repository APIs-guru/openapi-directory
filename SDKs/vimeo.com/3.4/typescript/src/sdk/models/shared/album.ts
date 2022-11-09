import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Picture } from "./picture";
import { User } from "./user";


export class AlbumPictureSizes extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height: number;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=link_with_play_button" })
  linkWithPlayButton?: string;

  @Metadata({ data: "json, name=width" })
  width: number;
}

export enum AlbumPictureTypeEnum {
    Caution = "caution"
,    Custom = "custom"
,    Default = "default"
}


// AlbumPicture
/** 
 * The custom logo for this album.
**/
export class AlbumPicture extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active: boolean;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @Metadata({ data: "json, name=sizes", elemType: shared.AlbumPictureSizes })
  sizes: AlbumPictureSizes[];

  @Metadata({ data: "json, name=type" })
  type: AlbumPictureTypeEnum;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// AlbumEmbed
/** 
 * Embed data for the album.
**/
export class AlbumEmbed extends SpeakeasyBase {
  @Metadata({ data: "json, name=html" })
  html: string;
}

export enum AlbumLayoutEnum {
    Grid = "grid"
,    Player = "player"
}


// AlbumMetadataConnectionsVideos
/** 
 * Information about the videos that belong to this album.
**/
export class AlbumMetadataConnectionsVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// AlbumMetadataConnections
/** 
 * A collection of information that is connected to this resource.
**/
export class AlbumMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=videos" })
  videos: AlbumMetadataConnectionsVideos;
}


// AlbumMetadataInteractionsAddCustomThumbnails
/** 
 * An action indicating that the authenticated user is an admin of the album and may therefore add custom thumbnails. This data requires a bearer token with the `private` scope.
**/
export class AlbumMetadataInteractionsAddCustomThumbnails extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// AlbumMetadataInteractionsAddLogos
/** 
 * An action indicating that the authenticated user is an admin of the album and may therefore add custom logos. This data requires a bearer token with the `private` scope.
**/
export class AlbumMetadataInteractionsAddLogos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// AlbumMetadataInteractionsAddVideos
/** 
 * An action indicating that the authenticated user is an admin of the album and may therefore add videos. This data requires a bearer token with the `private` scope.
**/
export class AlbumMetadataInteractionsAddVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// AlbumMetadataInteractions
/** 
 * A list of resource URIs related to the album.
**/
export class AlbumMetadataInteractions extends SpeakeasyBase {
  @Metadata({ data: "json, name=add_custom_thumbnails" })
  addCustomThumbnails: AlbumMetadataInteractionsAddCustomThumbnails;

  @Metadata({ data: "json, name=add_logos" })
  addLogos: AlbumMetadataInteractionsAddLogos;

  @Metadata({ data: "json, name=add_videos" })
  addVideos: AlbumMetadataInteractionsAddVideos;
}


// AlbumMetadata
/** 
 * Metadata about the album.
**/
export class AlbumMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: AlbumMetadataConnections;

  @Metadata({ data: "json, name=interactions" })
  interactions: AlbumMetadataInteractions;
}

export enum AlbumPrivacyViewEnum {
    Anybody = "anybody"
,    EmbedOnly = "embed_only"
,    Password = "password"
}


// AlbumPrivacy
/** 
 * The privacy settings of the album.
**/
export class AlbumPrivacy extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=view" })
  view: AlbumPrivacyViewEnum;
}

export enum AlbumSortEnum {
    AddedFirst = "added_first"
,    AddedLast = "added_last"
,    Alphabetical = "alphabetical"
,    Arranged = "arranged"
,    Comments = "comments"
,    Likes = "likes"
,    Newest = "newest"
,    Oldest = "oldest"
,    Plays = "plays"
}

export enum AlbumThemeEnum {
    Dark = "dark"
,    Standard = "standard"
}


export class Album extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_continuous_play" })
  allowContinuousPlay: boolean;

  @Metadata({ data: "json, name=allow_downloads" })
  allowDownloads: boolean;

  @Metadata({ data: "json, name=allow_share" })
  allowShare: boolean;

  @Metadata({ data: "json, name=brand_color" })
  brandColor: string;

  @Metadata({ data: "json, name=created_time" })
  createdTime: string;

  @Metadata({ data: "json, name=custom_logo" })
  customLogo: AlbumPicture;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=duration" })
  duration: number;

  @Metadata({ data: "json, name=embed" })
  embed: AlbumEmbed;

  @Metadata({ data: "json, name=embed_brand_color" })
  embedBrandColor: boolean;

  @Metadata({ data: "json, name=embed_custom_logo" })
  embedCustomLogo: boolean;

  @Metadata({ data: "json, name=hide_nav" })
  hideNav: boolean;

  @Metadata({ data: "json, name=hide_vimeo_logo" })
  hideVimeoLogo: boolean;

  @Metadata({ data: "json, name=layout" })
  layout: AlbumLayoutEnum;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: AlbumMetadata;

  @Metadata({ data: "json, name=modified_time" })
  modifiedTime: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=pictures" })
  pictures: Picture;

  @Metadata({ data: "json, name=privacy" })
  privacy: AlbumPrivacy;

  @Metadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @Metadata({ data: "json, name=review_mode" })
  reviewMode: boolean;

  @Metadata({ data: "json, name=sort" })
  sort: AlbumSortEnum;

  @Metadata({ data: "json, name=theme" })
  theme: AlbumThemeEnum;

  @Metadata({ data: "json, name=uri" })
  uri: string;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=use_custom_domain" })
  useCustomDomain: boolean;

  @Metadata({ data: "json, name=user" })
  user: User;

  @Metadata({ data: "json, name=web_brand_color" })
  webBrandColor: boolean;

  @Metadata({ data: "json, name=web_custom_logo" })
  webCustomLogo: boolean;
}
