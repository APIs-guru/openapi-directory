import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReportStops extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: number;

  @SpeakeasyMetadata({ data: "json, name=deviceName" })
  deviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=engineHours" })
  engineHours?: number;

  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lon" })
  lon?: number;

  @SpeakeasyMetadata({ data: "json, name=spentFuel" })
  spentFuel?: number;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;
}
