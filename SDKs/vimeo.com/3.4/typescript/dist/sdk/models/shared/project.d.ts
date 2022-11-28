import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * A standard connection object indicating how to get all the videos in this project.
**/
export declare class ProjectMetadataConnectionsVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A list of resource URIs related to the project.
**/
export declare class ProjectMetadataConnections extends SpeakeasyBase {
    videos: ProjectMetadataConnectionsVideos;
}
/**
 * The project's metadata.
**/
export declare class ProjectMetadata extends SpeakeasyBase {
    connections: ProjectMetadataConnections;
}
export declare class Project extends SpeakeasyBase {
    createdTime: string;
    metadata: ProjectMetadata;
    modifiedTime: string;
    name: string;
    resourceKey: string;
    uri: string;
    user: User;
}
