import { SpeakeasyBase } from "../../../internal/utils";
import { V3ResultOutlet } from "./v3resultoutlet";
import { V3ResultRoute } from "./v3resultroute";
import { V3Status } from "./v3status";
import { V3ResultStop } from "./v3resultstop";
export declare class V3SearchResult extends SpeakeasyBase {
    outlets?: V3ResultOutlet[];
    routes?: V3ResultRoute[];
    status?: V3Status;
    stops?: V3ResultStop[];
}
