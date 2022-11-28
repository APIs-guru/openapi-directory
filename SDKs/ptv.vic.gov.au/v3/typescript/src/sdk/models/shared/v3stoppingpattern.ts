import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { V3PatternDeparture } from "./v3patterndeparture";
import { V3Direction } from "./v3direction";
import { V3Disruption } from "./v3disruption";
import { V3Run } from "./v3run";
import { V3Status } from "./v3status";
import { V3StoppingPatternStop } from "./v3stoppingpatternstop";



export class V3StoppingPattern extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=departures", elemType: V3PatternDeparture })
  departures?: V3PatternDeparture[];

  @SpeakeasyMetadata({ data: "json, name=directions", elemType: V3Direction })
  directions?: Map<string, V3Direction>;

  @SpeakeasyMetadata({ data: "json, name=disruptions", elemType: V3Disruption })
  disruptions?: V3Disruption[];

  @SpeakeasyMetadata({ data: "json, name=routes" })
  routes?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata({ data: "json, name=runs", elemType: V3Run })
  runs?: Map<string, V3Run>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: V3Status;

  @SpeakeasyMetadata({ data: "json, name=stops", elemType: V3StoppingPatternStop })
  stops?: Map<string, V3StoppingPatternStop>;
}
