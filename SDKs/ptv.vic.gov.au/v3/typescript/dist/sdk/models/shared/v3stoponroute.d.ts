import { SpeakeasyBase } from "../../../internal/utils";
import { V3StopTicket } from "./v3stopticket";
export declare class V3StopOnRoute extends SpeakeasyBase {
    disruptionIds?: number[];
    routeType?: number;
    stopId?: number;
    stopLandmark?: string;
    stopLatitude?: number;
    stopLongitude?: number;
    stopName?: string;
    stopSequence?: number;
    stopSuburb?: string;
    stopTicket?: V3StopTicket;
}
