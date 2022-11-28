import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesJourneyPlannerJourneyPlannerCycleHireDockingStationData } from "./tflapipresentationentitiesjourneyplannerjourneyplannercyclehiredockingstationdata";
import { TflApiPresentationEntitiesJourneyPlannerJourneyVector } from "./tflapipresentationentitiesjourneyplannerjourneyvector";
import { TflApiPresentationEntitiesJourneyPlannerJourney } from "./tflapipresentationentitiesjourneyplannerjourney";
import { TflApiPresentationEntitiesLine } from "./tflapipresentationentitiesline";
import { TflApiPresentationEntitiesJourneyPlannerSearchCriteria } from "./tflapipresentationentitiesjourneyplannersearchcriteria";



// TflApiPresentationEntitiesJourneyPlannerItineraryResult
/** 
 * A DTO representing a list of possible journeys.
**/
export class TflApiPresentationEntitiesJourneyPlannerItineraryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cycleHireDockingStationData" })
  cycleHireDockingStationData?: TflApiPresentationEntitiesJourneyPlannerJourneyPlannerCycleHireDockingStationData;

  @SpeakeasyMetadata({ data: "json, name=journeyVector" })
  journeyVector?: TflApiPresentationEntitiesJourneyPlannerJourneyVector;

  @SpeakeasyMetadata({ data: "json, name=journeys", elemType: TflApiPresentationEntitiesJourneyPlannerJourney })
  journeys?: TflApiPresentationEntitiesJourneyPlannerJourney[];

  @SpeakeasyMetadata({ data: "json, name=lines", elemType: TflApiPresentationEntitiesLine })
  lines?: TflApiPresentationEntitiesLine[];

  @SpeakeasyMetadata({ data: "json, name=recommendedMaxAgeMinutes" })
  recommendedMaxAgeMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=searchCriteria" })
  searchCriteria?: TflApiPresentationEntitiesJourneyPlannerSearchCriteria;

  @SpeakeasyMetadata({ data: "json, name=stopMessages" })
  stopMessages?: string[];
}
