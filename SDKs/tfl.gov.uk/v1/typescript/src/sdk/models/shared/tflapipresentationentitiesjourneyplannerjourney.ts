import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesJourneyPlannerJourneyFare } from "./tflapipresentationentitiesjourneyplannerjourneyfare";
import { TflApiPresentationEntitiesJourneyPlannerLeg } from "./tflapipresentationentitiesjourneyplannerleg";


// TflApiPresentationEntitiesJourneyPlannerJourney
/** 
 * Object that represents an end to end journey (see schematic).
**/
export class TflApiPresentationEntitiesJourneyPlannerJourney extends SpeakeasyBase {
  @Metadata({ data: "json, name=arrivalDateTime" })
  arrivalDateTime?: Date;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=fare" })
  fare?: TflApiPresentationEntitiesJourneyPlannerJourneyFare;

  @Metadata({ data: "json, name=legs", elemType: shared.TflApiPresentationEntitiesJourneyPlannerLeg })
  legs?: TflApiPresentationEntitiesJourneyPlannerLeg[];

  @Metadata({ data: "json, name=startDateTime" })
  startDateTime?: Date;
}
