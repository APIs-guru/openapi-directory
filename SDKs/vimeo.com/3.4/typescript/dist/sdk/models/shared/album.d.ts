import { SpeakeasyBase } from "../../../internal/utils";
import { Picture } from "./picture";
import { User } from "./user";
export declare class AlbumPictureSizes extends SpeakeasyBase {
    height: number;
    link: string;
    linkWithPlayButton?: string;
    width: number;
}
export declare enum AlbumPictureTypeEnum {
    Caution = "caution",
    Custom = "custom",
    Default = "default"
}
/**
 * The custom logo for this album.
**/
export declare class AlbumPicture extends SpeakeasyBase {
    active: boolean;
    link?: string;
    resourceKey: string;
    sizes: AlbumPictureSizes[];
    type: AlbumPictureTypeEnum;
    uri: string;
}
/**
 * Embed data for the album.
**/
export declare class AlbumEmbed extends SpeakeasyBase {
    html: string;
}
export declare enum AlbumLayoutEnum {
    Grid = "grid",
    Player = "player"
}
/**
 * Information about the videos that belong to this album.
**/
export declare class AlbumMetadataConnectionsVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A collection of information that is connected to this resource.
**/
export declare class AlbumMetadataConnections extends SpeakeasyBase {
    videos: AlbumMetadataConnectionsVideos;
}
/**
 * An action indicating that the authenticated user is an admin of the album and may therefore add custom thumbnails. This data requires a bearer token with the `private` scope.
**/
export declare class AlbumMetadataInteractionsAddCustomThumbnails extends SpeakeasyBase {
    options: string[];
    uri: string;
}
/**
 * An action indicating that the authenticated user is an admin of the album and may therefore add custom logos. This data requires a bearer token with the `private` scope.
**/
export declare class AlbumMetadataInteractionsAddLogos extends SpeakeasyBase {
    options: string[];
    uri: string;
}
/**
 * An action indicating that the authenticated user is an admin of the album and may therefore add videos. This data requires a bearer token with the `private` scope.
**/
export declare class AlbumMetadataInteractionsAddVideos extends SpeakeasyBase {
    options: string[];
    uri: string;
}
/**
 * A list of resource URIs related to the album.
**/
export declare class AlbumMetadataInteractions extends SpeakeasyBase {
    addCustomThumbnails: AlbumMetadataInteractionsAddCustomThumbnails;
    addLogos: AlbumMetadataInteractionsAddLogos;
    addVideos: AlbumMetadataInteractionsAddVideos;
}
/**
 * Metadata about the album.
**/
export declare class AlbumMetadata extends SpeakeasyBase {
    connections: AlbumMetadataConnections;
    interactions: AlbumMetadataInteractions;
}
export declare enum AlbumPrivacyViewEnum {
    Anybody = "anybody",
    EmbedOnly = "embed_only",
    Password = "password"
}
/**
 * The privacy settings of the album.
**/
export declare class AlbumPrivacy extends SpeakeasyBase {
    password?: string;
    view: AlbumPrivacyViewEnum;
}
export declare enum AlbumSortEnum {
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
export declare enum AlbumThemeEnum {
    Dark = "dark",
    Standard = "standard"
}
export declare class Album extends SpeakeasyBase {
    allowContinuousPlay: boolean;
    allowDownloads: boolean;
    allowShare: boolean;
    brandColor: string;
    createdTime: string;
    customLogo: AlbumPicture;
    description: string;
    domain: string;
    duration: number;
    embed: AlbumEmbed;
    embedBrandColor: boolean;
    embedCustomLogo: boolean;
    hideNav: boolean;
    hideVimeoLogo: boolean;
    layout: AlbumLayoutEnum;
    link: string;
    metadata: AlbumMetadata;
    modifiedTime: string;
    name: string;
    pictures: Picture;
    privacy: AlbumPrivacy;
    resourceKey: string;
    reviewMode: boolean;
    sort: AlbumSortEnum;
    theme: AlbumThemeEnum;
    uri: string;
    url: string;
    useCustomDomain: boolean;
    user: User;
    webBrandColor: boolean;
    webCustomLogo: boolean;
}
