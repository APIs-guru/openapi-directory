import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndUserRoute } from "./enduserroute";



export class EndUserRouteEmbeddedObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: EndUserRoute;
}
