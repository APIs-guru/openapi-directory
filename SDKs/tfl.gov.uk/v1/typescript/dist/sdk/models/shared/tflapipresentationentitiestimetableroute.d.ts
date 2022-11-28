import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesSchedule } from "./tflapipresentationentitiesschedule";
import { TflApiPresentationEntitiesStationInterval } from "./tflapipresentationentitiesstationinterval";
export declare class TflApiPresentationEntitiesTimetableRoute extends SpeakeasyBase {
    schedules?: TflApiPresentationEntitiesSchedule[];
    stationIntervals?: TflApiPresentationEntitiesStationInterval[];
}
