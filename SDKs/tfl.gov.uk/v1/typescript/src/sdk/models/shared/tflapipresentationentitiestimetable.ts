import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesTimetableRoute } from "./tflapipresentationentitiestimetableroute";



export class TflApiPresentationEntitiesTimetable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=departureStopId" })
  departureStopId?: string;

  @SpeakeasyMetadata({ data: "json, name=routes", elemType: TflApiPresentationEntitiesTimetableRoute })
  routes?: TflApiPresentationEntitiesTimetableRoute[];
}
