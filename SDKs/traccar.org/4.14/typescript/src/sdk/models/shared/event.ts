import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Event extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @Metadata({ data: "json, name=deviceId" })
  deviceId?: number;

  @Metadata({ data: "json, name=eventTime" })
  eventTime?: Date;

  @Metadata({ data: "json, name=geofenceId" })
  geofenceId?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=maintenanceId" })
  maintenanceId?: number;

  @Metadata({ data: "json, name=positionId" })
  positionId?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
