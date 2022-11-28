import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { Picture } from "./picture";
import { Tag } from "./tag";
import { User } from "./user";
/**
 * Information provided to channel moderators about which users they have specifically permitted to access a private channel. This data requires a bearer token with the `private` scope.
**/
export declare class ChannelMetadataConnectionsPrivacyUsers extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the users following or moderating this channel.
**/
export declare class ChannelMetadataConnectionsUsers extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos that belong to this channel.
**/
export declare class ChannelMetadataConnectionsVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A collection of information that is connected to this resource.
**/
export declare class ChannelMetadataConnections extends SpeakeasyBase {
    privacyUsers: ChannelMetadataConnectionsPrivacyUsers;
    users: ChannelMetadataConnectionsUsers;
    videos: ChannelMetadataConnectionsVideos;
}
/**
 * An action indicating that the authenticated user is the owner of the channel and may therefore add other users as channel moderators. This data requires a bearer token with the `private` scope.
**/
export declare class ChannelMetadataInteractionsAddModerators extends SpeakeasyBase {
    options: string[];
    uri: string;
}
/**
 * When a channel appears in the context of adding or removing a video from it (`/videos/{video_id}/available_channels`), include information about adding or removing the video. This data requires a bearer token with the `private` scope.
**/
export declare class ChannelMetadataInteractionsAddTo extends SpeakeasyBase {
    options: string[];
    uri: string;
}
export declare enum ChannelMetadataInteractionsFollowTypeEnum {
    Moderator = "moderator",
    Subscriber = "subscriber"
}
/**
 * An action indicating if the authenticated user has followed this channel. This data requires a bearer token with the `private` scope.
**/
export declare class ChannelMetadataInteractionsFollow extends SpeakeasyBase {
    added: boolean;
    addedTime: string;
    type: ChannelMetadataInteractionsFollowTypeEnum;
    uri: string;
}
/**
 * An action indicating that the authenticated user is a moderator of the channel and may therefore add or remove videos from the channel. This data requires a bearer token with the `private` scope.
**/
export declare class ChannelMetadataInteractionsModerateVideos extends SpeakeasyBase {
    options: string[];
    uri: string;
}
/**
 * A list of resource URIs related to the channel.
**/
export declare class ChannelMetadataInteractions extends SpeakeasyBase {
    addModerators: ChannelMetadataInteractionsAddModerators;
    addTo: ChannelMetadataInteractionsAddTo;
    follow: ChannelMetadataInteractionsFollow;
    moderateVideos: ChannelMetadataInteractionsModerateVideos;
}
/**
 * Metadata about the channel.
**/
export declare class ChannelMetadata extends SpeakeasyBase {
    connections: ChannelMetadataConnections;
    interactions: ChannelMetadataInteractions;
}
export declare enum ChannelPrivacyViewEnum {
    Anybody = "anybody",
    Moderators = "moderators",
    Users = "users"
}
/**
 * The privacy settings of the channel.
**/
export declare class ChannelPrivacy extends SpeakeasyBase {
    view: ChannelPrivacyViewEnum;
}
export declare class Channel extends SpeakeasyBase {
    categories: Category[];
    createdTime: string;
    description: string;
    header: Picture;
    link: string;
    metadata: ChannelMetadata;
    modifiedTime: string;
    name: string;
    pictures: Picture;
    privacy: ChannelPrivacy;
    resourceKey: string;
    tags: Tag[];
    uri: string;
    user: User;
}
