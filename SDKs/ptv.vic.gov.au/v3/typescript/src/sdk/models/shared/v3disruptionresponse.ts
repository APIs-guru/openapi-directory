import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { V3Disruption } from "./v3disruption";
import { V3Status } from "./v3status";



export class V3DisruptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disruption" })
  disruption?: V3Disruption;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: V3Status;
}
