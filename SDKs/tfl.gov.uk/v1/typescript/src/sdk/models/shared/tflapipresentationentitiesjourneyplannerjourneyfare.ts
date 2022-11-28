import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesJourneyPlannerFareCaveat } from "./tflapipresentationentitiesjourneyplannerfarecaveat";
import { TflApiPresentationEntitiesJourneyPlannerFare } from "./tflapipresentationentitiesjourneyplannerfare";



export class TflApiPresentationEntitiesJourneyPlannerJourneyFare extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caveats", elemType: TflApiPresentationEntitiesJourneyPlannerFareCaveat })
  caveats?: TflApiPresentationEntitiesJourneyPlannerFareCaveat[];

  @SpeakeasyMetadata({ data: "json, name=fares", elemType: TflApiPresentationEntitiesJourneyPlannerFare })
  fares?: TflApiPresentationEntitiesJourneyPlannerFare[];

  @SpeakeasyMetadata({ data: "json, name=totalCost" })
  totalCost?: number;
}
