import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Permission
/** 
 * This is a permission map that contain two object indexes. It is used to link/unlink objects. Order is important. Example: { deviceId:8, geofenceId: 16 }
**/
export class Permission extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeId" })
  attributeId?: number;

  @Metadata({ data: "json, name=calendarId" })
  calendarId?: number;

  @Metadata({ data: "json, name=deviceId" })
  deviceId?: number;

  @Metadata({ data: "json, name=driverId" })
  driverId?: number;

  @Metadata({ data: "json, name=geofenceId" })
  geofenceId?: number;

  @Metadata({ data: "json, name=groupId" })
  groupId?: number;

  @Metadata({ data: "json, name=managedUserId" })
  managedUserId?: number;

  @Metadata({ data: "json, name=userId" })
  userId?: number;
}
