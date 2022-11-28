import { SpeakeasyBase } from "../../../internal/utils";
import { V3StopAccessibility } from "./v3stopaccessibility";
import { V3StopAmenityDetails } from "./v3stopamenitydetails";
import { V3StopLocation } from "./v3stoplocation";
import { V3StopStaffing } from "./v3stopstaffing";
export declare class V3StopDetails extends SpeakeasyBase {
    disruptionIds?: number[];
    routeType?: number;
    routes?: Map<string, any>[];
    stationDescription?: string;
    stationType?: string;
    stopAccessibility?: V3StopAccessibility;
    stopAmenities?: V3StopAmenityDetails;
    stopId?: number;
    stopLandmark?: string;
    stopLocation?: V3StopLocation;
    stopName?: string;
    stopStaffing?: V3StopStaffing;
}
