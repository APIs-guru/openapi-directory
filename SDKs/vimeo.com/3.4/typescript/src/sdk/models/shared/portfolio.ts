import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PortfolioMetadataConnectionsVideos
/** 
 * Information about the videos contained within this portfolio.
**/
export class PortfolioMetadataConnectionsVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// PortfolioMetadataConnections
/** 
 * A list of resource URIs related to the album.
**/
export class PortfolioMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=videos" })
  videos: PortfolioMetadataConnectionsVideos;
}


// PortfolioMetadata
/** 
 * Metadata about the album.
**/
export class PortfolioMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: PortfolioMetadataConnections;
}

export enum PortfolioSortEnum {
    Alphabetical = "alphabetical"
,    Clips = "clips"
,    Modified = "modified"
,    Recent = "recent"
}


export class Portfolio extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_time" })
  createdTime: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: PortfolioMetadata;

  @Metadata({ data: "json, name=modified_time" })
  modifiedTime: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=sort" })
  sort: PortfolioSortEnum;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}
