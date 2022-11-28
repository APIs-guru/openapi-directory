import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesStreetSegment } from "./tflapipresentationentitiesstreetsegment";



export class TflApiPresentationEntitiesStreet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=closure" })
  closure?: string;

  @SpeakeasyMetadata({ data: "json, name=directions" })
  directions?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=segments", elemType: TflApiPresentationEntitiesStreetSegment })
  segments?: TflApiPresentationEntitiesStreetSegment[];

  @SpeakeasyMetadata({ data: "json, name=sourceSystemId" })
  sourceSystemId?: number;

  @SpeakeasyMetadata({ data: "json, name=sourceSystemKey" })
  sourceSystemKey?: string;
}
