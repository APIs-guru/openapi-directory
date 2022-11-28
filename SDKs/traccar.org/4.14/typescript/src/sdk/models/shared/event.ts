import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: number;

  @SpeakeasyMetadata({ data: "json, name=eventTime" })
  eventTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=geofenceId" })
  geofenceId?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=maintenanceId" })
  maintenanceId?: number;

  @SpeakeasyMetadata({ data: "json, name=positionId" })
  positionId?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
