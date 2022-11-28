import { SpeakeasyBase } from "../../../internal/utils";
import { Picture } from "./picture";
/**
 * Information about the channels related to this category.
**/
export declare class CategoryMetadataConnectionsChannels extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the groups related to this category.
**/
export declare class CategoryMetadataConnectionsGroups extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the users related to this category.
**/
export declare class CategoryMetadataConnectionsUsers extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * Information about the videos related to this category.
**/
export declare class CategoryMetadataConnectionsVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A collection of information that is connected to this resource.
**/
export declare class CategoryMetadataConnections extends SpeakeasyBase {
    channels: CategoryMetadataConnectionsChannels;
    groups: CategoryMetadataConnectionsGroups;
    users: CategoryMetadataConnectionsUsers;
    videos: CategoryMetadataConnectionsVideos;
}
/**
 * An action indicating if the authenticated user has followed this category.
**/
export declare class CategoryMetadataInteractionsFollow extends SpeakeasyBase {
    added: boolean;
    addedTime: string;
    uri: string;
}
/**
 * The permissible actions related to the category.
**/
export declare class CategoryMetadataInteractions extends SpeakeasyBase {
    follow: CategoryMetadataInteractionsFollow;
}
/**
 * Metadata about the category.
**/
export declare class CategoryMetadata extends SpeakeasyBase {
    connections: CategoryMetadataConnections;
    interactions: CategoryMetadataInteractions;
}
/**
 * The container of this category's parent category, if the current category is a subcategory.
**/
export declare class CategoryParent extends SpeakeasyBase {
    link: string;
    name: string;
    uri: string;
}
export declare class CategorySubcategories extends SpeakeasyBase {
    link: string;
    name: string;
    uri: string;
}
export declare class Category extends SpeakeasyBase {
    icon?: Picture;
    lastVideoFeaturedTime: string;
    link: string;
    metadata: CategoryMetadata;
    name: string;
    parent: CategoryParent;
    pictures: Picture;
    resourceKey: string;
    subcategories?: CategorySubcategories[];
    topLevel: boolean;
    uri: string;
}
