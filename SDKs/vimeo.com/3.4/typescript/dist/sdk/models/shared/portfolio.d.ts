import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the videos contained within this portfolio.
**/
export declare class PortfolioMetadataConnectionsVideos extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A list of resource URIs related to the album.
**/
export declare class PortfolioMetadataConnections extends SpeakeasyBase {
    videos: PortfolioMetadataConnectionsVideos;
}
/**
 * Metadata about the album.
**/
export declare class PortfolioMetadata extends SpeakeasyBase {
    connections: PortfolioMetadataConnections;
}
export declare enum PortfolioSortEnum {
    Alphabetical = "alphabetical",
    Clips = "clips",
    Modified = "modified",
    Recent = "recent"
}
export declare class Portfolio extends SpeakeasyBase {
    createdTime: string;
    description: string;
    link: string;
    metadata: PortfolioMetadata;
    modifiedTime: string;
    name: string;
    sort: PortfolioSortEnum;
    uri: string;
}
