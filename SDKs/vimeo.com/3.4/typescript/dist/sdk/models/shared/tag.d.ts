import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the videos related to this tag.
**/
export declare class TagMetadataConnectionsVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A collection of information that is connected to this resource.
**/
export declare class TagMetadataConnections extends SpeakeasyBase {
    videos: TagMetadataConnectionsVideos;
}
/**
 * Metadata about the group.
**/
export declare class TagMetadata extends SpeakeasyBase {
    connections: TagMetadataConnections;
}
export declare class Tag extends SpeakeasyBase {
    canonical: string;
    metadata: TagMetadata;
    name: string;
    resourceKey: string;
    uri: string;
}
