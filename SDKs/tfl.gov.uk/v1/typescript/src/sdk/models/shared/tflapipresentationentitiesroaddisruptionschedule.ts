import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesRoadDisruptionSchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;
}
