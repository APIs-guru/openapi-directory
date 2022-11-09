import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { V3RouteServiceStatus } from "./v3routeservicestatus";


export class V3ResultRoute extends SpeakeasyBase {
  @Metadata({ data: "json, name=route_gtfs_id" })
  routeGtfsId?: string;

  @Metadata({ data: "json, name=route_id" })
  routeId?: number;

  @Metadata({ data: "json, name=route_name" })
  routeName?: string;

  @Metadata({ data: "json, name=route_number" })
  routeNumber?: string;

  @Metadata({ data: "json, name=route_service_status" })
  routeServiceStatus?: V3RouteServiceStatus;

  @Metadata({ data: "json, name=route_type" })
  routeType?: number;
}
