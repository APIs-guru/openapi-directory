import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { V3Disruption } from "./v3disruption";
import { V3Status } from "./v3status";
import { V3StopDetails } from "./v3stopdetails";


export class V3StopResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=disruptions", elemType: shared.V3Disruption })
  disruptions?: Map<string, V3Disruption>;

  @Metadata({ data: "json, name=status" })
  status?: V3Status;

  @Metadata({ data: "json, name=stop" })
  stop?: V3StopDetails;
}
