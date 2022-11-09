import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OnDemandGenreInteractionsPage
/** 
 * Interactions for On Demand pages that are in this genre.
**/
export class OnDemandGenreInteractionsPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


export class OnDemandGenreInteractions extends SpeakeasyBase {
  @Metadata({ data: "json, name=page" })
  page: OnDemandGenreInteractionsPage;
}


// OnDemandGenreMetadataConnectionsPages
/** 
 * Information about the On Demand pages related to this group.
**/
export class OnDemandGenreMetadataConnectionsPages extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandGenreMetadataConnections
/** 
 * A collection of information connected to this resource.
**/
export class OnDemandGenreMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages: OnDemandGenreMetadataConnectionsPages;
}


export class OnDemandGenreMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: OnDemandGenreMetadataConnections;
}


export class OnDemandGenre extends SpeakeasyBase {
  @Metadata({ data: "json, name=canonical" })
  canonical: string;

  @Metadata({ data: "json, name=interactions" })
  interactions: OnDemandGenreInteractions;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: OnDemandGenreMetadata;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}
