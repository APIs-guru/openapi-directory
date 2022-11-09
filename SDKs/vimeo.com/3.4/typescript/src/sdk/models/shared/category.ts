import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Picture } from "./picture";
import { Picture } from "./picture";


// CategoryMetadataConnectionsChannels
/** 
 * Information about the channels related to this category.
**/
export class CategoryMetadataConnectionsChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// CategoryMetadataConnectionsGroups
/** 
 * Information about the groups related to this category.
**/
export class CategoryMetadataConnectionsGroups extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// CategoryMetadataConnectionsUsers
/** 
 * Information about the users related to this category.
**/
export class CategoryMetadataConnectionsUsers extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// CategoryMetadataConnectionsVideos
/** 
 * Information about the videos related to this category.
**/
export class CategoryMetadataConnectionsVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// CategoryMetadataConnections
/** 
 * A collection of information that is connected to this resource.
**/
export class CategoryMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=channels" })
  channels: CategoryMetadataConnectionsChannels;

  @Metadata({ data: "json, name=groups" })
  groups: CategoryMetadataConnectionsGroups;

  @Metadata({ data: "json, name=users" })
  users: CategoryMetadataConnectionsUsers;

  @Metadata({ data: "json, name=videos" })
  videos: CategoryMetadataConnectionsVideos;
}


// CategoryMetadataInteractionsFollow
/** 
 * An action indicating if the authenticated user has followed this category.
**/
export class CategoryMetadataInteractionsFollow extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=added_time" })
  addedTime: string;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// CategoryMetadataInteractions
/** 
 * The permissible actions related to the category.
**/
export class CategoryMetadataInteractions extends SpeakeasyBase {
  @Metadata({ data: "json, name=follow" })
  follow: CategoryMetadataInteractionsFollow;
}


// CategoryMetadata
/** 
 * Metadata about the category.
**/
export class CategoryMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: CategoryMetadataConnections;

  @Metadata({ data: "json, name=interactions" })
  interactions: CategoryMetadataInteractions;
}


// CategoryParent
/** 
 * The container of this category's parent category, if the current category is a subcategory.
**/
export class CategoryParent extends SpeakeasyBase {
  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


export class CategorySubcategories extends SpeakeasyBase {
  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


export class Category extends SpeakeasyBase {
  @Metadata({ data: "json, name=icon" })
  icon?: Picture;

  @Metadata({ data: "json, name=last_video_featured_time" })
  lastVideoFeaturedTime: string;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: CategoryMetadata;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=parent" })
  parent: CategoryParent;

  @Metadata({ data: "json, name=pictures" })
  pictures: Picture;

  @Metadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @Metadata({ data: "json, name=subcategories", elemType: shared.CategorySubcategories })
  subcategories?: CategorySubcategories[];

  @Metadata({ data: "json, name=top_level" })
  topLevel: boolean;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}
