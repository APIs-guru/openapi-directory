import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesSchedule } from "./tflapipresentationentitiesschedule";
import { TflApiPresentationEntitiesStationInterval } from "./tflapipresentationentitiesstationinterval";


export class TflApiPresentationEntitiesTimetableRoute extends SpeakeasyBase {
  @Metadata({ data: "json, name=schedules", elemType: shared.TflApiPresentationEntitiesSchedule })
  schedules?: TflApiPresentationEntitiesSchedule[];

  @Metadata({ data: "json, name=stationIntervals", elemType: shared.TflApiPresentationEntitiesStationInterval })
  stationIntervals?: TflApiPresentationEntitiesStationInterval[];
}
