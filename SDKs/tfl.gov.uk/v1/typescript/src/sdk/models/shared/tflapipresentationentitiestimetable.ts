import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesTimetableRoute } from "./tflapipresentationentitiestimetableroute";


export class TflApiPresentationEntitiesTimetable extends SpeakeasyBase {
  @Metadata({ data: "json, name=departureStopId" })
  departureStopId?: string;

  @Metadata({ data: "json, name=routes", elemType: shared.TflApiPresentationEntitiesTimetableRoute })
  routes?: TflApiPresentationEntitiesTimetableRoute[];
}
