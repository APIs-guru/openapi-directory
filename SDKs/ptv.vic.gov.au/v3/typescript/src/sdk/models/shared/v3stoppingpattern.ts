import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { V3PatternDeparture } from "./v3patterndeparture";
import { V3Direction } from "./v3direction";
import { V3Disruption } from "./v3disruption";
import { V3Run } from "./v3run";
import { V3Status } from "./v3status";
import { V3StoppingPatternStop } from "./v3stoppingpatternstop";


export class V3StoppingPattern extends SpeakeasyBase {
  @Metadata({ data: "json, name=departures", elemType: shared.V3PatternDeparture })
  departures?: V3PatternDeparture[];

  @Metadata({ data: "json, name=directions", elemType: shared.V3Direction })
  directions?: Map<string, V3Direction>;

  @Metadata({ data: "json, name=disruptions", elemType: shared.V3Disruption })
  disruptions?: V3Disruption[];

  @Metadata({ data: "json, name=routes" })
  routes?: Map<string, Map<string, any>>;

  @Metadata({ data: "json, name=runs", elemType: shared.V3Run })
  runs?: Map<string, V3Run>;

  @Metadata({ data: "json, name=status" })
  status?: V3Status;

  @Metadata({ data: "json, name=stops", elemType: shared.V3StoppingPatternStop })
  stops?: Map<string, V3StoppingPatternStop>;
}
