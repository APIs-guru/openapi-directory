import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class V3DisruptionDirection extends SpeakeasyBase {
  @Metadata({ data: "json, name=direction_id" })
  directionId?: number;

  @Metadata({ data: "json, name=direction_name" })
  directionName?: string;

  @Metadata({ data: "json, name=route_direction_id" })
  routeDirectionId?: number;

  @Metadata({ data: "json, name=service_time" })
  serviceTime?: string;
}
