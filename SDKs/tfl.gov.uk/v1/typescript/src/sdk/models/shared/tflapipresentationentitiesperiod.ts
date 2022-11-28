import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesServiceFrequency } from "./tflapipresentationentitiesservicefrequency";
import { TflApiPresentationEntitiesTwentyFourHourClockTime } from "./tflapipresentationentitiestwentyfourhourclocktime";


export enum TflApiPresentationEntitiesPeriodTypeEnum {
    Normal = "Normal",
    FrequencyHours = "FrequencyHours",
    FrequencyMinutes = "FrequencyMinutes",
    Unknown = "Unknown"
}


export class TflApiPresentationEntitiesPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency?: TflApiPresentationEntitiesServiceFrequency;

  @SpeakeasyMetadata({ data: "json, name=fromTime" })
  fromTime?: TflApiPresentationEntitiesTwentyFourHourClockTime;

  @SpeakeasyMetadata({ data: "json, name=toTime" })
  toTime?: TflApiPresentationEntitiesTwentyFourHourClockTime;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: TflApiPresentationEntitiesPeriodTypeEnum;
}
