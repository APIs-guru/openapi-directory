import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Interactions for On Demand pages that are in this genre.
**/
export declare class OnDemandGenreInteractionsPage extends SpeakeasyBase {
    added: boolean;
    options: string[];
    uri: string;
}
export declare class OnDemandGenreInteractions extends SpeakeasyBase {
    page: OnDemandGenreInteractionsPage;
}
/**
 * Information about the On Demand pages related to this group.
**/
export declare class OnDemandGenreMetadataConnectionsPages extends SpeakeasyBase {
    options: string[];
    uri: string;
}
/**
 * A collection of information connected to this resource.
**/
export declare class OnDemandGenreMetadataConnections extends SpeakeasyBase {
    pages: OnDemandGenreMetadataConnectionsPages;
}
export declare class OnDemandGenreMetadata extends SpeakeasyBase {
    connections: OnDemandGenreMetadataConnections;
}
export declare class OnDemandGenre extends SpeakeasyBase {
    canonical: string;
    interactions: OnDemandGenreInteractions;
    link: string;
    metadata: OnDemandGenreMetadata;
    name: string;
    uri: string;
}
