import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class V3RouteType extends SpeakeasyBase {
  @Metadata({ data: "json, name=route_type" })
  routeType?: number;

  @Metadata({ data: "json, name=route_type_name" })
  routeTypeName?: string;
}
