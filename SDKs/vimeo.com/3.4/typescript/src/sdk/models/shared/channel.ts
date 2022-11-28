import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { Picture } from "./picture";
import { Tag } from "./tag";
import { User } from "./user";



// ChannelMetadataConnectionsPrivacyUsers
/** 
 * Information provided to channel moderators about which users they have specifically permitted to access a private channel. This data requires a bearer token with the `private` scope.
**/
export class ChannelMetadataConnectionsPrivacyUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// ChannelMetadataConnectionsUsers
/** 
 * Information about the users following or moderating this channel.
**/
export class ChannelMetadataConnectionsUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// ChannelMetadataConnectionsVideos
/** 
 * Information about the videos that belong to this channel.
**/
export class ChannelMetadataConnectionsVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// ChannelMetadataConnections
/** 
 * A collection of information that is connected to this resource.
**/
export class ChannelMetadataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=privacy_users" })
  privacyUsers: ChannelMetadataConnectionsPrivacyUsers;

  @SpeakeasyMetadata({ data: "json, name=users" })
  users: ChannelMetadataConnectionsUsers;

  @SpeakeasyMetadata({ data: "json, name=videos" })
  videos: ChannelMetadataConnectionsVideos;
}


// ChannelMetadataInteractionsAddModerators
/** 
 * An action indicating that the authenticated user is the owner of the channel and may therefore add other users as channel moderators. This data requires a bearer token with the `private` scope.
**/
export class ChannelMetadataInteractionsAddModerators extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// ChannelMetadataInteractionsAddTo
/** 
 * When a channel appears in the context of adding or removing a video from it (`/videos/{video_id}/available_channels`), include information about adding or removing the video. This data requires a bearer token with the `private` scope.
**/
export class ChannelMetadataInteractionsAddTo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}

export enum ChannelMetadataInteractionsFollowTypeEnum {
    Moderator = "moderator",
    Subscriber = "subscriber"
}


// ChannelMetadataInteractionsFollow
/** 
 * An action indicating if the authenticated user has followed this channel. This data requires a bearer token with the `private` scope.
**/
export class ChannelMetadataInteractionsFollow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added" })
  added: boolean;

  @SpeakeasyMetadata({ data: "json, name=added_time" })
  addedTime: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ChannelMetadataInteractionsFollowTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// ChannelMetadataInteractionsModerateVideos
/** 
 * An action indicating that the authenticated user is a moderator of the channel and may therefore add or remove videos from the channel. This data requires a bearer token with the `private` scope.
**/
export class ChannelMetadataInteractionsModerateVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// ChannelMetadataInteractions
/** 
 * A list of resource URIs related to the channel.
**/
export class ChannelMetadataInteractions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add_moderators" })
  addModerators: ChannelMetadataInteractionsAddModerators;

  @SpeakeasyMetadata({ data: "json, name=add_to" })
  addTo: ChannelMetadataInteractionsAddTo;

  @SpeakeasyMetadata({ data: "json, name=follow" })
  follow: ChannelMetadataInteractionsFollow;

  @SpeakeasyMetadata({ data: "json, name=moderate_videos" })
  moderateVideos: ChannelMetadataInteractionsModerateVideos;
}


// ChannelMetadata
/** 
 * Metadata about the channel.
**/
export class ChannelMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections" })
  connections: ChannelMetadataConnections;

  @SpeakeasyMetadata({ data: "json, name=interactions" })
  interactions: ChannelMetadataInteractions;
}

export enum ChannelPrivacyViewEnum {
    Anybody = "anybody",
    Moderators = "moderators",
    Users = "users"
}


// ChannelPrivacy
/** 
 * The privacy settings of the channel.
**/
export class ChannelPrivacy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=view" })
  view: ChannelPrivacyViewEnum;
}


export class Channel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories", elemType: Category })
  categories: Category[];

  @SpeakeasyMetadata({ data: "json, name=created_time" })
  createdTime: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=header" })
  header: Picture;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: ChannelMetadata;

  @SpeakeasyMetadata({ data: "json, name=modified_time" })
  modifiedTime: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=pictures" })
  pictures: Picture;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy: ChannelPrivacy;

  @SpeakeasyMetadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags: Tag[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: User;
}
