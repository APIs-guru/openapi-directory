import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Category } from "./category";
import { Channel } from "./channel";
import { Video } from "./video";
import { Group } from "./group";
import { Tag } from "./tag";
import { User } from "./user";


// Activity31MetadataConnectionsRelated
/** 
 * Related content for this activity.
**/
export class Activity31MetadataConnectionsRelated extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// Activity31MetadataConnections
/** 
 * A list of resource URIs related to the activity.
**/
export class Activity31MetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=related" })
  related: Activity31MetadataConnectionsRelated;
}


// Activity31Metadata
/** 
 * The activity's metadata.
**/
export class Activity31Metadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: Activity31MetadataConnections;
}

export enum Activity31TypeEnum {
    Appearance = "appearance"
,    Category = "category"
,    Channel = "channel"
,    FacebookFeed = "facebook_feed"
,    Group = "group"
,    Like = "like"
,    Ondemand = "ondemand"
,    Share = "share"
,    Tag = "tag"
,    TwitterTimeline = "twitter_timeline"
,    Upload = "upload"
}


export class Activity31 extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: Category;

  @Metadata({ data: "json, name=channel" })
  channel?: Channel;

  @Metadata({ data: "json, name=clip" })
  clip: Video;

  @Metadata({ data: "json, name=group" })
  group?: Group;

  @Metadata({ data: "json, name=metadata" })
  metadata: Activity31Metadata;

  @Metadata({ data: "json, name=tag" })
  tag?: Tag;

  @Metadata({ data: "json, name=time" })
  time: string;

  @Metadata({ data: "json, name=type" })
  type: Activity31TypeEnum;

  @Metadata({ data: "json, name=user" })
  user?: User;
}
