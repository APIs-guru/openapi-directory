import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesJourneyPlannerFareTapDetails } from "./tflapipresentationentitiesjourneyplannerfaretapdetails";



export class TflApiPresentationEntitiesJourneyPlannerFareTap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=atcoCode" })
  atcoCode?: string;

  @SpeakeasyMetadata({ data: "json, name=tapDetails" })
  tapDetails?: TflApiPresentationEntitiesJourneyPlannerFareTapDetails;
}
