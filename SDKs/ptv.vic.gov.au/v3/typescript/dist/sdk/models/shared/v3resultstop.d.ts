import { SpeakeasyBase } from "../../../internal/utils";
import { V3ResultRoute } from "./v3resultroute";
export declare class V3ResultStop extends SpeakeasyBase {
    routeType?: number;
    routes?: V3ResultRoute[];
    stopDistance?: number;
    stopId?: number;
    stopLandmark?: string;
    stopLatitude?: number;
    stopLongitude?: number;
    stopName?: string;
    stopSequence?: number;
    stopSuburb?: string;
}
