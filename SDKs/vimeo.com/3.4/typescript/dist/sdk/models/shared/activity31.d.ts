import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { Channel } from "./channel";
import { Video } from "./video";
import { Group } from "./group";
import { Tag } from "./tag";
import { User } from "./user";
/**
 * Related content for this activity.
**/
export declare class Activity31MetadataConnectionsRelated extends SpeakeasyBase {
    options: string[];
    uri: string;
}
/**
 * A list of resource URIs related to the activity.
**/
export declare class Activity31MetadataConnections extends SpeakeasyBase {
    related: Activity31MetadataConnectionsRelated;
}
/**
 * The activity's metadata.
**/
export declare class Activity31Metadata extends SpeakeasyBase {
    connections: Activity31MetadataConnections;
}
export declare enum Activity31TypeEnum {
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
export declare class Activity31 extends SpeakeasyBase {
    category?: Category;
    channel?: Channel;
    clip: Video;
    group?: Group;
    metadata: Activity31Metadata;
    tag?: Tag;
    time: string;
    type: Activity31TypeEnum;
    user?: User;
}
