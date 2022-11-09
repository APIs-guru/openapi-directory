import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=cycleHireDockingStationData" })
  cycleHireDockingStationData?: TflApiPresentationEntitiesJourneyPlannerJourneyPlannerCycleHireDockingStationData;

  @Metadata({ data: "json, name=journeyVector" })
  journeyVector?: TflApiPresentationEntitiesJourneyPlannerJourneyVector;

  @Metadata({ data: "json, name=journeys", elemType: shared.TflApiPresentationEntitiesJourneyPlannerJourney })
  journeys?: TflApiPresentationEntitiesJourneyPlannerJourney[];

  @Metadata({ data: "json, name=lines", elemType: shared.TflApiPresentationEntitiesLine })
  lines?: TflApiPresentationEntitiesLine[];

  @Metadata({ data: "json, name=recommendedMaxAgeMinutes" })
  recommendedMaxAgeMinutes?: number;

  @Metadata({ data: "json, name=searchCriteria" })
  searchCriteria?: TflApiPresentationEntitiesJourneyPlannerSearchCriteria;

  @Metadata({ data: "json, name=stopMessages" })
  stopMessages?: string[];
}
