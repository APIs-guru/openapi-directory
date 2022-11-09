import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Category } from "./category";
import { Picture } from "./picture";
import { Picture } from "./picture";
import { Tag } from "./tag";
import { User } from "./user";


// ChannelMetadataConnectionsPrivacyUsers
/** 
 * Information provided to channel moderators about which users they have specifically permitted to access a private channel. This data requires a bearer token with the `private` scope.
**/
export class ChannelMetadataConnectionsPrivacyUsers extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// ChannelMetadataConnectionsUsers
/** 
 * Information about the users following or moderating this channel.
**/
export class ChannelMetadataConnectionsUsers extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// ChannelMetadataConnectionsVideos
/** 
 * Information about the videos that belong to this channel.
**/
export class ChannelMetadataConnectionsVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// ChannelMetadataConnections
/** 
 * A collection of information that is connected to this resource.
**/
export class ChannelMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=privacy_users" })
  privacyUsers: ChannelMetadataConnectionsPrivacyUsers;

  @Metadata({ data: "json, name=users" })
  users: ChannelMetadataConnectionsUsers;

  @Metadata({ data: "json, name=videos" })
  videos: ChannelMetadataConnectionsVideos;
}


// ChannelMetadataInteractionsAddModerators
/** 
 * An action indicating that the authenticated user is the owner of the channel and may therefore add other users as channel moderators. This data requires a bearer token with the `private` scope.
**/
export class ChannelMetadataInteractionsAddModerators extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// ChannelMetadataInteractionsAddTo
/** 
 * When a channel appears in the context of adding or removing a video from it (`/videos/{video_id}/available_channels`), include information about adding or removing the video. This data requires a bearer token with the `private` scope.
**/
export class ChannelMetadataInteractionsAddTo extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}

export enum ChannelMetadataInteractionsFollowTypeEnum {
    Moderator = "moderator"
,    Subscriber = "subscriber"
}


// ChannelMetadataInteractionsFollow
/** 
 * An action indicating if the authenticated user has followed this channel. This data requires a bearer token with the `private` scope.
**/
export class ChannelMetadataInteractionsFollow extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=added_time" })
  addedTime: string;

  @Metadata({ data: "json, name=type" })
  type: ChannelMetadataInteractionsFollowTypeEnum;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// ChannelMetadataInteractionsModerateVideos
/** 
 * An action indicating that the authenticated user is a moderator of the channel and may therefore add or remove videos from the channel. This data requires a bearer token with the `private` scope.
**/
export class ChannelMetadataInteractionsModerateVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// ChannelMetadataInteractions
/** 
 * A list of resource URIs related to the channel.
**/
export class ChannelMetadataInteractions extends SpeakeasyBase {
  @Metadata({ data: "json, name=add_moderators" })
  addModerators: ChannelMetadataInteractionsAddModerators;

  @Metadata({ data: "json, name=add_to" })
  addTo: ChannelMetadataInteractionsAddTo;

  @Metadata({ data: "json, name=follow" })
  follow: ChannelMetadataInteractionsFollow;

  @Metadata({ data: "json, name=moderate_videos" })
  moderateVideos: ChannelMetadataInteractionsModerateVideos;
}


// ChannelMetadata
/** 
 * Metadata about the channel.
**/
export class ChannelMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: ChannelMetadataConnections;

  @Metadata({ data: "json, name=interactions" })
  interactions: ChannelMetadataInteractions;
}

export enum ChannelPrivacyViewEnum {
    Anybody = "anybody"
,    Moderators = "moderators"
,    Users = "users"
}


// ChannelPrivacy
/** 
 * The privacy settings of the channel.
**/
export class ChannelPrivacy extends SpeakeasyBase {
  @Metadata({ data: "json, name=view" })
  view: ChannelPrivacyViewEnum;
}


export class Channel extends SpeakeasyBase {
  @Metadata({ data: "json, name=categories", elemType: shared.Category })
  categories: Category[];

  @Metadata({ data: "json, name=created_time" })
  createdTime: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=header" })
  header: Picture;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: ChannelMetadata;

  @Metadata({ data: "json, name=modified_time" })
  modifiedTime: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=pictures" })
  pictures: Picture;

  @Metadata({ data: "json, name=privacy" })
  privacy: ChannelPrivacy;

  @Metadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags: Tag[];

  @Metadata({ data: "json, name=uri" })
  uri: string;

  @Metadata({ data: "json, name=user" })
  user: User;
}
