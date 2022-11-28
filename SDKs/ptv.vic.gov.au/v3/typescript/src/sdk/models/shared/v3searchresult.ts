import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { V3ResultOutlet } from "./v3resultoutlet";
import { V3ResultRoute } from "./v3resultroute";
import { V3Status } from "./v3status";
import { V3ResultStop } from "./v3resultstop";



export class V3SearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outlets", elemType: V3ResultOutlet })
  outlets?: V3ResultOutlet[];

  @SpeakeasyMetadata({ data: "json, name=routes", elemType: V3ResultRoute })
  routes?: V3ResultRoute[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: V3Status;

  @SpeakeasyMetadata({ data: "json, name=stops", elemType: V3ResultStop })
  stops?: V3ResultStop[];
}
