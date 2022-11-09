import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { V3Disruptions } from "./v3disruptions";
import { V3Status } from "./v3status";


export class V3DisruptionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=disruptions" })
  disruptions?: V3Disruptions;

  @Metadata({ data: "json, name=status" })
  status?: V3Status;
}
