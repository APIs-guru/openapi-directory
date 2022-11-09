import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { User } from "./user";


// ProjectMetadataConnectionsVideos
/** 
 * A standard connection object indicating how to get all the videos in this project.
**/
export class ProjectMetadataConnectionsVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// ProjectMetadataConnections
/** 
 * A list of resource URIs related to the project.
**/
export class ProjectMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=videos" })
  videos: ProjectMetadataConnectionsVideos;
}


// ProjectMetadata
/** 
 * The project's metadata.
**/
export class ProjectMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: ProjectMetadataConnections;
}


export class Project extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_time" })
  createdTime: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: ProjectMetadata;

  @Metadata({ data: "json, name=modified_time" })
  modifiedTime: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @Metadata({ data: "json, name=uri" })
  uri: string;

  @Metadata({ data: "json, name=user" })
  user: User;
}
