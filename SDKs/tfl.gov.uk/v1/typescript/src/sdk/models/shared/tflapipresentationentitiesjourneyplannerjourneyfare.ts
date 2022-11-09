import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesJourneyPlannerFareCaveat } from "./tflapipresentationentitiesjourneyplannerfarecaveat";
import { TflApiPresentationEntitiesJourneyPlannerFare } from "./tflapipresentationentitiesjourneyplannerfare";


export class TflApiPresentationEntitiesJourneyPlannerJourneyFare extends SpeakeasyBase {
  @Metadata({ data: "json, name=caveats", elemType: shared.TflApiPresentationEntitiesJourneyPlannerFareCaveat })
  caveats?: TflApiPresentationEntitiesJourneyPlannerFareCaveat[];

  @Metadata({ data: "json, name=fares", elemType: shared.TflApiPresentationEntitiesJourneyPlannerFare })
  fares?: TflApiPresentationEntitiesJourneyPlannerFare[];

  @Metadata({ data: "json, name=totalCost" })
  totalCost?: number;
}
