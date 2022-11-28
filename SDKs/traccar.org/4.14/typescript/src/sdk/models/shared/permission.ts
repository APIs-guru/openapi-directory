import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Permission
/** 
 * This is a permission map that contain two object indexes. It is used to link/unlink objects. Order is important. Example: { deviceId:8, geofenceId: 16 }
**/
export class Permission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeId" })
  attributeId?: number;

  @SpeakeasyMetadata({ data: "json, name=calendarId" })
  calendarId?: number;

  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: number;

  @SpeakeasyMetadata({ data: "json, name=driverId" })
  driverId?: number;

  @SpeakeasyMetadata({ data: "json, name=geofenceId" })
  geofenceId?: number;

  @SpeakeasyMetadata({ data: "json, name=groupId" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "json, name=managedUserId" })
  managedUserId?: number;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: number;
}
