import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class V3Direction extends SpeakeasyBase {
  @Metadata({ data: "json, name=direction_id" })
  directionId?: number;

  @Metadata({ data: "json, name=direction_name" })
  directionName?: string;

  @Metadata({ data: "json, name=route_id" })
  routeId?: number;

  @Metadata({ data: "json, name=route_type" })
  routeType?: number;
}
