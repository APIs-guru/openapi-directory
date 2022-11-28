import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { V3Disruption } from "./v3disruption";
import { V3Status } from "./v3status";
import { V3StopDetails } from "./v3stopdetails";



export class V3StopResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disruptions", elemType: V3Disruption })
  disruptions?: Map<string, V3Disruption>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: V3Status;

  @SpeakeasyMetadata({ data: "json, name=stop" })
  stop?: V3StopDetails;
}
