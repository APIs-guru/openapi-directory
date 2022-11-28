import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { V3Disruptions } from "./v3disruptions";
import { V3Status } from "./v3status";



export class V3DisruptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disruptions" })
  disruptions?: V3Disruptions;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: V3Status;
}
