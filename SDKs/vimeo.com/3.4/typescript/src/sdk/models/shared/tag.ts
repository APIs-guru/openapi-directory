import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TagMetadataConnectionsVideos
/** 
 * Information about the videos related to this tag.
**/
export class TagMetadataConnectionsVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// TagMetadataConnections
/** 
 * A collection of information that is connected to this resource.
**/
export class TagMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=videos" })
  videos: TagMetadataConnectionsVideos;
}


// TagMetadata
/** 
 * Metadata about the group.
**/
export class TagMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: TagMetadataConnections;
}


export class Tag extends SpeakeasyBase {
  @Metadata({ data: "json, name=canonical" })
  canonical: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: TagMetadata;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}
