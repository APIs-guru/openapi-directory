import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { V3ResultRoute } from "./v3resultroute";


export class V3ResultStop extends SpeakeasyBase {
  @Metadata({ data: "json, name=route_type" })
  routeType?: number;

  @Metadata({ data: "json, name=routes", elemType: shared.V3ResultRoute })
  routes?: V3ResultRoute[];

  @Metadata({ data: "json, name=stop_distance" })
  stopDistance?: number;

  @Metadata({ data: "json, name=stop_id" })
  stopId?: number;

  @Metadata({ data: "json, name=stop_landmark" })
  stopLandmark?: string;

  @Metadata({ data: "json, name=stop_latitude" })
  stopLatitude?: number;

  @Metadata({ data: "json, name=stop_longitude" })
  stopLongitude?: number;

  @Metadata({ data: "json, name=stop_name" })
  stopName?: string;

  @Metadata({ data: "json, name=stop_sequence" })
  stopSequence?: number;

  @Metadata({ data: "json, name=stop_suburb" })
  stopSuburb?: string;
}
