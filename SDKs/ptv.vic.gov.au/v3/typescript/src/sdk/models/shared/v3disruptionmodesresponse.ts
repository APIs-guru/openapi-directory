import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { V3DisruptionMode } from "./v3disruptionmode";
import { V3Status } from "./v3status";


export class V3DisruptionModesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=disruption_modes", elemType: shared.V3DisruptionMode })
  disruptionModes?: V3DisruptionMode[];

  @Metadata({ data: "json, name=status" })
  status?: V3Status;
}
