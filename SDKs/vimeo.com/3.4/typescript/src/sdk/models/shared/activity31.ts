import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// Activity31MetadataConnections
/** 
 * A list of resource URIs related to the activity.
**/
export class Activity31MetadataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=related" })
  related: Activity31MetadataConnectionsRelated;
}


// Activity31Metadata
/** 
 * The activity's metadata.
**/
export class Activity31Metadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections" })
  connections: Activity31MetadataConnections;
}

export enum Activity31TypeEnum {
    Appearance = "appearance",
    Category = "category",
    Channel = "channel",
    FacebookFeed = "facebook_feed",
    Group = "group",
    Like = "like",
    Ondemand = "ondemand",
    Share = "share",
    Tag = "tag",
    TwitterTimeline = "twitter_timeline",
    Upload = "upload"
}


export class Activity31 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: Category;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: Channel;

  @SpeakeasyMetadata({ data: "json, name=clip" })
  clip: Video;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: Group;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: Activity31Metadata;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: Tag;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: Activity31TypeEnum;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: User;
}
