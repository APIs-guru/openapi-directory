import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesStreetSegment } from "./tflapipresentationentitiesstreetsegment";


export class TflApiPresentationEntitiesStreet extends SpeakeasyBase {
  @Metadata({ data: "json, name=closure" })
  closure?: string;

  @Metadata({ data: "json, name=directions" })
  directions?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=segments", elemType: shared.TflApiPresentationEntitiesStreetSegment })
  segments?: TflApiPresentationEntitiesStreetSegment[];

  @Metadata({ data: "json, name=sourceSystemId" })
  sourceSystemId?: number;

  @Metadata({ data: "json, name=sourceSystemKey" })
  sourceSystemKey?: string;
}
