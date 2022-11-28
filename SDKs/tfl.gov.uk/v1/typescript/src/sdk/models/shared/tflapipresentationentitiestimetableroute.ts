import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesSchedule } from "./tflapipresentationentitiesschedule";
import { TflApiPresentationEntitiesStationInterval } from "./tflapipresentationentitiesstationinterval";



export class TflApiPresentationEntitiesTimetableRoute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=schedules", elemType: TflApiPresentationEntitiesSchedule })
  schedules?: TflApiPresentationEntitiesSchedule[];

  @SpeakeasyMetadata({ data: "json, name=stationIntervals", elemType: TflApiPresentationEntitiesStationInterval })
  stationIntervals?: TflApiPresentationEntitiesStationInterval[];
}
