import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndUserRoute } from "./enduserroute";


export class EndUserRouteEmbeddedObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: EndUserRoute;
}
