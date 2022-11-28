import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Picture } from "./picture";



// CategoryMetadataConnectionsChannels
/** 
 * Information about the channels related to this category.
**/
export class CategoryMetadataConnectionsChannels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// CategoryMetadataConnectionsGroups
/** 
 * Information about the groups related to this category.
**/
export class CategoryMetadataConnectionsGroups extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// CategoryMetadataConnectionsUsers
/** 
 * Information about the users related to this category.
**/
export class CategoryMetadataConnectionsUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// CategoryMetadataConnectionsVideos
/** 
 * Information about the videos related to this category.
**/
export class CategoryMetadataConnectionsVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// CategoryMetadataConnections
/** 
 * A collection of information that is connected to this resource.
**/
export class CategoryMetadataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channels" })
  channels: CategoryMetadataConnectionsChannels;

  @SpeakeasyMetadata({ data: "json, name=groups" })
  groups: CategoryMetadataConnectionsGroups;

  @SpeakeasyMetadata({ data: "json, name=users" })
  users: CategoryMetadataConnectionsUsers;

  @SpeakeasyMetadata({ data: "json, name=videos" })
  videos: CategoryMetadataConnectionsVideos;
}


// CategoryMetadataInteractionsFollow
/** 
 * An action indicating if the authenticated user has followed this category.
**/
export class CategoryMetadataInteractionsFollow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added" })
  added: boolean;

  @SpeakeasyMetadata({ data: "json, name=added_time" })
  addedTime: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// CategoryMetadataInteractions
/** 
 * The permissible actions related to the category.
**/
export class CategoryMetadataInteractions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=follow" })
  follow: CategoryMetadataInteractionsFollow;
}


// CategoryMetadata
/** 
 * Metadata about the category.
**/
export class CategoryMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections" })
  connections: CategoryMetadataConnections;

  @SpeakeasyMetadata({ data: "json, name=interactions" })
  interactions: CategoryMetadataInteractions;
}


// CategoryParent
/** 
 * The container of this category's parent category, if the current category is a subcategory.
**/
export class CategoryParent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


export class CategorySubcategories extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


export class Category extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=icon" })
  icon?: Picture;

  @SpeakeasyMetadata({ data: "json, name=last_video_featured_time" })
  lastVideoFeaturedTime: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: CategoryMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent: CategoryParent;

  @SpeakeasyMetadata({ data: "json, name=pictures" })
  pictures: Picture;

  @SpeakeasyMetadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @SpeakeasyMetadata({ data: "json, name=subcategories", elemType: CategorySubcategories })
  subcategories?: CategorySubcategories[];

  @SpeakeasyMetadata({ data: "json, name=top_level" })
  topLevel: boolean;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}
