import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This is a permission map that contain two object indexes. It is used to link/unlink objects. Order is important. Example: { deviceId:8, geofenceId: 16 }
**/
export declare class Permission extends SpeakeasyBase {
    attributeId?: number;
    calendarId?: number;
    deviceId?: number;
    driverId?: number;
    geofenceId?: number;
    groupId?: number;
    managedUserId?: number;
    userId?: number;
}
