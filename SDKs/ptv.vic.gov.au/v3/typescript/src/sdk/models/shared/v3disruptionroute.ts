import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { V3DisruptionDirection } from "./v3disruptiondirection";



export class V3DisruptionRoute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: V3DisruptionDirection;

  @SpeakeasyMetadata({ data: "json, name=route_gtfs_id" })
  routeGtfsId?: string;

  @SpeakeasyMetadata({ data: "json, name=route_id" })
  routeId?: number;

  @SpeakeasyMetadata({ data: "json, name=route_name" })
  routeName?: string;

  @SpeakeasyMetadata({ data: "json, name=route_number" })
  routeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=route_type" })
  routeType?: number;
}
