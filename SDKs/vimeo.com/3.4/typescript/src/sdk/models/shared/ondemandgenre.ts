import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OnDemandGenreInteractionsPage
/** 
 * Interactions for On Demand pages that are in this genre.
**/
export class OnDemandGenreInteractionsPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added" })
  added: boolean;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


export class OnDemandGenreInteractions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=page" })
  page: OnDemandGenreInteractionsPage;
}


// OnDemandGenreMetadataConnectionsPages
/** 
 * Information about the On Demand pages related to this group.
**/
export class OnDemandGenreMetadataConnectionsPages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandGenreMetadataConnections
/** 
 * A collection of information connected to this resource.
**/
export class OnDemandGenreMetadataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages: OnDemandGenreMetadataConnectionsPages;
}


export class OnDemandGenreMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections" })
  connections: OnDemandGenreMetadataConnections;
}


export class OnDemandGenre extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canonical" })
  canonical: string;

  @SpeakeasyMetadata({ data: "json, name=interactions" })
  interactions: OnDemandGenreInteractions;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: OnDemandGenreMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}
