import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { V3Status } from "./v3status";


export class V3RouteResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=route" })
  route?: Map<string, any>;

  @Metadata({ data: "json, name=status" })
  status?: V3Status;
}
