import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TagMetadataConnectionsVideos
/** 
 * Information about the videos related to this tag.
**/
export class TagMetadataConnectionsVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// TagMetadataConnections
/** 
 * A collection of information that is connected to this resource.
**/
export class TagMetadataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=videos" })
  videos: TagMetadataConnectionsVideos;
}


// TagMetadata
/** 
 * Metadata about the group.
**/
export class TagMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections" })
  connections: TagMetadataConnections;
}


export class Tag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canonical" })
  canonical: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: TagMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}
