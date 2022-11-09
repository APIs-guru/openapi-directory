import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { V3ResultOutlet } from "./v3resultoutlet";
import { V3ResultRoute } from "./v3resultroute";
import { V3Status } from "./v3status";
import { V3ResultStop } from "./v3resultstop";


export class V3SearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=outlets", elemType: shared.V3ResultOutlet })
  outlets?: V3ResultOutlet[];

  @Metadata({ data: "json, name=routes", elemType: shared.V3ResultRoute })
  routes?: V3ResultRoute[];

  @Metadata({ data: "json, name=status" })
  status?: V3Status;

  @Metadata({ data: "json, name=stops", elemType: shared.V3ResultStop })
  stops?: V3ResultStop[];
}
