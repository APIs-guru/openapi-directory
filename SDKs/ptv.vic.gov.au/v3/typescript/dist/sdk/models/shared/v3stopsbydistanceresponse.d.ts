import { SpeakeasyBase } from "../../../internal/utils";
import { V3Disruption } from "./v3disruption";
import { V3Status } from "./v3status";
import { V3StopGeosearch } from "./v3stopgeosearch";
export declare class V3StopsByDistanceResponse extends SpeakeasyBase {
    disruptions?: Map<string, V3Disruption>;
    status?: V3Status;
    stops?: V3StopGeosearch[];
}
