import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { V3RouteType } from "./v3routetype";
import { V3Status } from "./v3status";


export class V3RouteTypesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=route_types", elemType: shared.V3RouteType })
  routeTypes?: V3RouteType[];

  @Metadata({ data: "json, name=status" })
  status?: V3Status;
}
