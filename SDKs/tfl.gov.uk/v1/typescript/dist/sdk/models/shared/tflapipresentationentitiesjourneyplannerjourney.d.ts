import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesJourneyPlannerJourneyFare } from "./tflapipresentationentitiesjourneyplannerjourneyfare";
import { TflApiPresentationEntitiesJourneyPlannerLeg } from "./tflapipresentationentitiesjourneyplannerleg";
/**
 * Object that represents an end to end journey (see schematic).
**/
export declare class TflApiPresentationEntitiesJourneyPlannerJourney extends SpeakeasyBase {
    arrivalDateTime?: Date;
    duration?: number;
    fare?: TflApiPresentationEntitiesJourneyPlannerJourneyFare;
    legs?: TflApiPresentationEntitiesJourneyPlannerLeg[];
    startDateTime?: Date;
}
