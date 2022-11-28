import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { V3DisruptionMode } from "./v3disruptionmode";
import { V3Status } from "./v3status";



export class V3DisruptionModesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disruption_modes", elemType: V3DisruptionMode })
  disruptionModes?: V3DisruptionMode[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: V3Status;
}
