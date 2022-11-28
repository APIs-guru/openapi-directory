import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesServiceFrequency } from "./tflapipresentationentitiesservicefrequency";
import { TflApiPresentationEntitiesTwentyFourHourClockTime } from "./tflapipresentationentitiestwentyfourhourclocktime";
export declare enum TflApiPresentationEntitiesPeriodTypeEnum {
    Normal = "Normal",
    FrequencyHours = "FrequencyHours",
    FrequencyMinutes = "FrequencyMinutes",
    Unknown = "Unknown"
}
export declare class TflApiPresentationEntitiesPeriod extends SpeakeasyBase {
    frequency?: TflApiPresentationEntitiesServiceFrequency;
    fromTime?: TflApiPresentationEntitiesTwentyFourHourClockTime;
    toTime?: TflApiPresentationEntitiesTwentyFourHourClockTime;
    type?: TflApiPresentationEntitiesPeriodTypeEnum;
}
