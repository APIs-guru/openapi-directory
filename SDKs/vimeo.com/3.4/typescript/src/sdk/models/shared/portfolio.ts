import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PortfolioMetadataConnectionsVideos
/** 
 * Information about the videos contained within this portfolio.
**/
export class PortfolioMetadataConnectionsVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// PortfolioMetadataConnections
/** 
 * A list of resource URIs related to the album.
**/
export class PortfolioMetadataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=videos" })
  videos: PortfolioMetadataConnectionsVideos;
}


// PortfolioMetadata
/** 
 * Metadata about the album.
**/
export class PortfolioMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections" })
  connections: PortfolioMetadataConnections;
}

export enum PortfolioSortEnum {
    Alphabetical = "alphabetical",
    Clips = "clips",
    Modified = "modified",
    Recent = "recent"
}


export class Portfolio extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_time" })
  createdTime: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: PortfolioMetadata;

  @SpeakeasyMetadata({ data: "json, name=modified_time" })
  modifiedTime: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=sort" })
  sort: PortfolioSortEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}
