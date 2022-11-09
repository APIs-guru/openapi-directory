import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { V3Disruption } from "./v3disruption";
import { V3Status } from "./v3status";


export class V3DisruptionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=disruption" })
  disruption?: V3Disruption;

  @Metadata({ data: "json, name=status" })
  status?: V3Status;
}
