import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesKnownJourney } from "./tflapipresentationentitiesknownjourney";
import { TflApiPresentationEntitiesPeriod } from "./tflapipresentationentitiesperiod";
export declare class TflApiPresentationEntitiesSchedule extends SpeakeasyBase {
    firstJourney?: TflApiPresentationEntitiesKnownJourney;
    knownJourneys?: TflApiPresentationEntitiesKnownJourney[];
    lastJourney?: TflApiPresentationEntitiesKnownJourney;
    name?: string;
    periods?: TflApiPresentationEntitiesPeriod[];
}
