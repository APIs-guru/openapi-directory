import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesIdentifier } from "./tflapipresentationentitiesidentifier";



export class TflApiPresentationEntitiesJourneyPlannerRouteOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directions" })
  directions?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lineIdentifier" })
  lineIdentifier?: TflApiPresentationEntitiesIdentifier;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
