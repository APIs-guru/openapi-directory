import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class V3DisruptionDirection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=direction_id" })
  directionId?: number;

  @SpeakeasyMetadata({ data: "json, name=direction_name" })
  directionName?: string;

  @SpeakeasyMetadata({ data: "json, name=route_direction_id" })
  routeDirectionId?: number;

  @SpeakeasyMetadata({ data: "json, name=service_time" })
  serviceTime?: string;
}
