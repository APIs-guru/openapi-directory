import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { V3DisruptionDirection } from "./v3disruptiondirection";


export class V3DisruptionRoute extends SpeakeasyBase {
  @Metadata({ data: "json, name=direction" })
  direction?: V3DisruptionDirection;

  @Metadata({ data: "json, name=route_gtfs_id" })
  routeGtfsId?: string;

  @Metadata({ data: "json, name=route_id" })
  routeId?: number;

  @Metadata({ data: "json, name=route_name" })
  routeName?: string;

  @Metadata({ data: "json, name=route_number" })
  routeNumber?: string;

  @Metadata({ data: "json, name=route_type" })
  routeType?: number;
}
