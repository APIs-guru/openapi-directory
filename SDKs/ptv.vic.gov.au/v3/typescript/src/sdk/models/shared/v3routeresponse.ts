import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { V3Status } from "./v3status";



export class V3RouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=route" })
  route?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: V3Status;
}
