import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class V3Direction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=direction_id" })
  directionId?: number;

  @SpeakeasyMetadata({ data: "json, name=direction_name" })
  directionName?: string;

  @SpeakeasyMetadata({ data: "json, name=route_id" })
  routeId?: number;

  @SpeakeasyMetadata({ data: "json, name=route_type" })
  routeType?: number;
}
