import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesJourneyPlannerJourneyPlannerCycleHireDockingStationData } from "./tflapipresentationentitiesjourneyplannerjourneyplannercyclehiredockingstationdata";
import { TflApiPresentationEntitiesJourneyPlannerJourneyVector } from "./tflapipresentationentitiesjourneyplannerjourneyvector";
import { TflApiPresentationEntitiesJourneyPlannerJourney } from "./tflapipresentationentitiesjourneyplannerjourney";
import { TflApiPresentationEntitiesLine } from "./tflapipresentationentitiesline";
import { TflApiPresentationEntitiesJourneyPlannerSearchCriteria } from "./tflapipresentationentitiesjourneyplannersearchcriteria";
/**
 * A DTO representing a list of possible journeys.
**/
export declare class TflApiPresentationEntitiesJourneyPlannerItineraryResult extends SpeakeasyBase {
    cycleHireDockingStationData?: TflApiPresentationEntitiesJourneyPlannerJourneyPlannerCycleHireDockingStationData;
    journeyVector?: TflApiPresentationEntitiesJourneyPlannerJourneyVector;
    journeys?: TflApiPresentationEntitiesJourneyPlannerJourney[];
    lines?: TflApiPresentationEntitiesLine[];
    recommendedMaxAgeMinutes?: number;
    searchCriteria?: TflApiPresentationEntitiesJourneyPlannerSearchCriteria;
    stopMessages?: string[];
}
