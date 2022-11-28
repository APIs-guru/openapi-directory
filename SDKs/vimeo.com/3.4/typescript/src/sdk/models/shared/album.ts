import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Picture } from "./picture";
import { User } from "./user";



export class AlbumPictureSizes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height: number;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=link_with_play_button" })
  linkWithPlayButton?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width: number;
}

export enum AlbumPictureTypeEnum {
    Caution = "caution",
    Custom = "custom",
    Default = "default"
}


// AlbumPicture
/** 
 * The custom logo for this album.
**/
export class AlbumPicture extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active: boolean;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @SpeakeasyMetadata({ data: "json, name=sizes", elemType: AlbumPictureSizes })
  sizes: AlbumPictureSizes[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: AlbumPictureTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// AlbumEmbed
/** 
 * Embed data for the album.
**/
export class AlbumEmbed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=html" })
  html: string;
}

export enum AlbumLayoutEnum {
    Grid = "grid",
    Player = "player"
}


// AlbumMetadataConnectionsVideos
/** 
 * Information about the videos that belong to this album.
**/
export class AlbumMetadataConnectionsVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// AlbumMetadataConnections
/** 
 * A collection of information that is connected to this resource.
**/
export class AlbumMetadataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=videos" })
  videos: AlbumMetadataConnectionsVideos;
}


// AlbumMetadataInteractionsAddCustomThumbnails
/** 
 * An action indicating that the authenticated user is an admin of the album and may therefore add custom thumbnails. This data requires a bearer token with the `private` scope.
**/
export class AlbumMetadataInteractionsAddCustomThumbnails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// AlbumMetadataInteractionsAddLogos
/** 
 * An action indicating that the authenticated user is an admin of the album and may therefore add custom logos. This data requires a bearer token with the `private` scope.
**/
export class AlbumMetadataInteractionsAddLogos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// AlbumMetadataInteractionsAddVideos
/** 
 * An action indicating that the authenticated user is an admin of the album and may therefore add videos. This data requires a bearer token with the `private` scope.
**/
export class AlbumMetadataInteractionsAddVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// AlbumMetadataInteractions
/** 
 * A list of resource URIs related to the album.
**/
export class AlbumMetadataInteractions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add_custom_thumbnails" })
  addCustomThumbnails: AlbumMetadataInteractionsAddCustomThumbnails;

  @SpeakeasyMetadata({ data: "json, name=add_logos" })
  addLogos: AlbumMetadataInteractionsAddLogos;

  @SpeakeasyMetadata({ data: "json, name=add_videos" })
  addVideos: AlbumMetadataInteractionsAddVideos;
}


// AlbumMetadata
/** 
 * Metadata about the album.
**/
export class AlbumMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections" })
  connections: AlbumMetadataConnections;

  @SpeakeasyMetadata({ data: "json, name=interactions" })
  interactions: AlbumMetadataInteractions;
}

export enum AlbumPrivacyViewEnum {
    Anybody = "anybody",
    EmbedOnly = "embed_only",
    Password = "password"
}


// AlbumPrivacy
/** 
 * The privacy settings of the album.
**/
export class AlbumPrivacy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=view" })
  view: AlbumPrivacyViewEnum;
}

export enum AlbumSortEnum {
    AddedFirst = "added_first",
    AddedLast = "added_last",
    Alphabetical = "alphabetical",
    Arranged = "arranged",
    Comments = "comments",
    Likes = "likes",
    Newest = "newest",
    Oldest = "oldest",
    Plays = "plays"
}

export enum AlbumThemeEnum {
    Dark = "dark",
    Standard = "standard"
}


export class Album extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_continuous_play" })
  allowContinuousPlay: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_downloads" })
  allowDownloads: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_share" })
  allowShare: boolean;

  @SpeakeasyMetadata({ data: "json, name=brand_color" })
  brandColor: string;

  @SpeakeasyMetadata({ data: "json, name=created_time" })
  createdTime: string;

  @SpeakeasyMetadata({ data: "json, name=custom_logo" })
  customLogo: AlbumPicture;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration: number;

  @SpeakeasyMetadata({ data: "json, name=embed" })
  embed: AlbumEmbed;

  @SpeakeasyMetadata({ data: "json, name=embed_brand_color" })
  embedBrandColor: boolean;

  @SpeakeasyMetadata({ data: "json, name=embed_custom_logo" })
  embedCustomLogo: boolean;

  @SpeakeasyMetadata({ data: "json, name=hide_nav" })
  hideNav: boolean;

  @SpeakeasyMetadata({ data: "json, name=hide_vimeo_logo" })
  hideVimeoLogo: boolean;

  @SpeakeasyMetadata({ data: "json, name=layout" })
  layout: AlbumLayoutEnum;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: AlbumMetadata;

  @SpeakeasyMetadata({ data: "json, name=modified_time" })
  modifiedTime: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=pictures" })
  pictures: Picture;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy: AlbumPrivacy;

  @SpeakeasyMetadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @SpeakeasyMetadata({ data: "json, name=review_mode" })
  reviewMode: boolean;

  @SpeakeasyMetadata({ data: "json, name=sort" })
  sort: AlbumSortEnum;

  @SpeakeasyMetadata({ data: "json, name=theme" })
  theme: AlbumThemeEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=use_custom_domain" })
  useCustomDomain: boolean;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: User;

  @SpeakeasyMetadata({ data: "json, name=web_brand_color" })
  webBrandColor: boolean;

  @SpeakeasyMetadata({ data: "json, name=web_custom_logo" })
  webCustomLogo: boolean;
}
