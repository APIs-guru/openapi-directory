import { SpeakeasyBase } from "../../../internal/utils";
import { V3Departure } from "./v3departure";
import { V3Direction } from "./v3direction";
import { V3Disruption } from "./v3disruption";
import { V3Run } from "./v3run";
import { V3Status } from "./v3status";
import { V3StopModel } from "./v3stopmodel";
export declare class V3DeparturesResponse extends SpeakeasyBase {
    departures?: V3Departure[];
    directions?: Map<string, V3Direction>;
    disruptions?: Map<string, V3Disruption>;
    routes?: Map<string, Map<string, any>>;
    runs?: Map<string, V3Run>;
    status?: V3Status;
    stops?: Map<string, V3StopModel>;
}
