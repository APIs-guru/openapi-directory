import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { V3Disruption } from "./v3disruption";
import { V3Status } from "./v3status";
import { V3StopGeosearch } from "./v3stopgeosearch";



export class V3StopsByDistanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disruptions", elemType: V3Disruption })
  disruptions?: Map<string, V3Disruption>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: V3Status;

  @SpeakeasyMetadata({ data: "json, name=stops", elemType: V3StopGeosearch })
  stops?: V3StopGeosearch[];
}
