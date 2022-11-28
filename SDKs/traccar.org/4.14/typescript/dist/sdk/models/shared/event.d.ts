import { SpeakeasyBase } from "../../../internal/utils";
export declare class Event extends SpeakeasyBase {
    attributes?: Map<string, any>;
    deviceId?: number;
    eventTime?: Date;
    geofenceId?: number;
    id?: number;
    maintenanceId?: number;
    positionId?: number;
    type?: string;
}
