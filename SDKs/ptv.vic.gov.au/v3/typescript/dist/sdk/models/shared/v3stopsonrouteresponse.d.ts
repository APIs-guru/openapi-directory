import { SpeakeasyBase } from "../../../internal/utils";
import { V3Disruption } from "./v3disruption";
import { V3Status } from "./v3status";
import { V3StopOnRoute } from "./v3stoponroute";
export declare class V3StopsOnRouteResponse extends SpeakeasyBase {
    disruptions?: Map<string, V3Disruption>;
    geopath?: Map<string, any>[];
    status?: V3Status;
    stops?: V3StopOnRoute[];
}
