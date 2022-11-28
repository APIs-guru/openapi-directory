import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class V3RouteType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=route_type" })
  routeType?: number;

  @SpeakeasyMetadata({ data: "json, name=route_type_name" })
  routeTypeName?: string;
}
