import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TflApiPresentationEntitiesJourneyPlannerFareTapDetails } from "./tflapipresentationentitiesjourneyplannerfaretapdetails";


export class TflApiPresentationEntitiesJourneyPlannerFareTap extends SpeakeasyBase {
  @Metadata({ data: "json, name=atcoCode" })
  atcoCode?: string;

  @Metadata({ data: "json, name=tapDetails" })
  tapDetails?: TflApiPresentationEntitiesJourneyPlannerFareTapDetails;
}
