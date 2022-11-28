import { SpeakeasyBase } from "../../../internal/utils";
import { V3RouteServiceStatus } from "./v3routeservicestatus";
export declare class V3ResultRoute extends SpeakeasyBase {
    routeGtfsId?: string;
    routeId?: number;
    routeName?: string;
    routeNumber?: string;
    routeServiceStatus?: V3RouteServiceStatus;
    routeType?: number;
}
