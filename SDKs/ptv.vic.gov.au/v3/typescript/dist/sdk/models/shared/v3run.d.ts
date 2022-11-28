import { SpeakeasyBase } from "../../../internal/utils";
import { V3VehicleDescriptor } from "./v3vehicledescriptor";
import { V3VehiclePosition } from "./v3vehicleposition";
export declare class V3Run extends SpeakeasyBase {
    destinationName?: string;
    directionId?: number;
    expressStopCount?: number;
    finalStopId?: number;
    geopath?: Map<string, any>[];
    routeId?: number;
    routeType?: number;
    runId?: number;
    runRef?: string;
    runSequence?: number;
    status?: string;
    vehicleDescriptor?: V3VehicleDescriptor;
    vehiclePosition?: V3VehiclePosition;
}
