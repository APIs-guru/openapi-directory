import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TflApiPresentationEntitiesServiceFrequency } from "./tflapipresentationentitiesservicefrequency";
import { TflApiPresentationEntitiesTwentyFourHourClockTime } from "./tflapipresentationentitiestwentyfourhourclocktime";
import { TflApiPresentationEntitiesTwentyFourHourClockTime } from "./tflapipresentationentitiestwentyfourhourclocktime";

export enum TflApiPresentationEntitiesPeriodTypeEnum {
    Normal = "Normal"
,    FrequencyHours = "FrequencyHours"
,    FrequencyMinutes = "FrequencyMinutes"
,    Unknown = "Unknown"
}


export class TflApiPresentationEntitiesPeriod extends SpeakeasyBase {
  @Metadata({ data: "json, name=frequency" })
  frequency?: TflApiPresentationEntitiesServiceFrequency;

  @Metadata({ data: "json, name=fromTime" })
  fromTime?: TflApiPresentationEntitiesTwentyFourHourClockTime;

  @Metadata({ data: "json, name=toTime" })
  toTime?: TflApiPresentationEntitiesTwentyFourHourClockTime;

  @Metadata({ data: "json, name=type" })
  type?: TflApiPresentationEntitiesPeriodTypeEnum;
}
