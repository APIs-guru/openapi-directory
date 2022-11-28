import { SpeakeasyBase } from "../../../internal/utils";
import { V3PatternDeparture } from "./v3patterndeparture";
import { V3Direction } from "./v3direction";
import { V3Disruption } from "./v3disruption";
import { V3Run } from "./v3run";
import { V3Status } from "./v3status";
import { V3StoppingPatternStop } from "./v3stoppingpatternstop";
export declare class V3StoppingPattern extends SpeakeasyBase {
    departures?: V3PatternDeparture[];
    directions?: Map<string, V3Direction>;
    disruptions?: V3Disruption[];
    routes?: Map<string, Map<string, any>>;
    runs?: Map<string, V3Run>;
    status?: V3Status;
    stops?: Map<string, V3StoppingPatternStop>;
}
