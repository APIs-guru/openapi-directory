import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { V3RouteType } from "./v3routetype";
import { V3Status } from "./v3status";



export class V3RouteTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=route_types", elemType: V3RouteType })
  routeTypes?: V3RouteType[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: V3Status;
}
