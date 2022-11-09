import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { V3Departure } from "./v3departure";
import { V3Direction } from "./v3direction";
import { V3Disruption } from "./v3disruption";
import { V3Run } from "./v3run";
import { V3Status } from "./v3status";
import { V3StopModel } from "./v3stopmodel";


export class V3DeparturesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=departures", elemType: shared.V3Departure })
  departures?: V3Departure[];

  @Metadata({ data: "json, name=directions", elemType: shared.V3Direction })
  directions?: Map<string, V3Direction>;

  @Metadata({ data: "json, name=disruptions", elemType: shared.V3Disruption })
  disruptions?: Map<string, V3Disruption>;

  @Metadata({ data: "json, name=routes" })
  routes?: Map<string, Map<string, any>>;

  @Metadata({ data: "json, name=runs", elemType: shared.V3Run })
  runs?: Map<string, V3Run>;

  @Metadata({ data: "json, name=status" })
  status?: V3Status;

  @Metadata({ data: "json, name=stops", elemType: shared.V3StopModel })
  stops?: Map<string, V3StopModel>;
}
