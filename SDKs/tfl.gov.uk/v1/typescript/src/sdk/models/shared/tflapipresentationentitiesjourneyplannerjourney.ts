import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesJourneyPlannerJourneyFare } from "./tflapipresentationentitiesjourneyplannerjourneyfare";
import { TflApiPresentationEntitiesJourneyPlannerLeg } from "./tflapipresentationentitiesjourneyplannerleg";



// TflApiPresentationEntitiesJourneyPlannerJourney
/** 
 * Object that represents an end to end journey (see schematic).
**/
export class TflApiPresentationEntitiesJourneyPlannerJourney extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arrivalDateTime" })
  arrivalDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=fare" })
  fare?: TflApiPresentationEntitiesJourneyPlannerJourneyFare;

  @SpeakeasyMetadata({ data: "json, name=legs", elemType: TflApiPresentationEntitiesJourneyPlannerLeg })
  legs?: TflApiPresentationEntitiesJourneyPlannerLeg[];

  @SpeakeasyMetadata({ data: "json, name=startDateTime" })
  startDateTime?: Date;
}
