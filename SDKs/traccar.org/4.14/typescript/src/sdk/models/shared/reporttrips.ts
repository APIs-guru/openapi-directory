import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReportTrips extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=averageSpeed" })
  averageSpeed?: number;

  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: number;

  @SpeakeasyMetadata({ data: "json, name=deviceName" })
  deviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=distance" })
  distance?: number;

  @SpeakeasyMetadata({ data: "json, name=driverName" })
  driverName?: string;

  @SpeakeasyMetadata({ data: "json, name=driverUniqueId" })
  driverUniqueId?: number;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=endAddress" })
  endAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=endLat" })
  endLat?: number;

  @SpeakeasyMetadata({ data: "json, name=endLon" })
  endLon?: number;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=maxSpeed" })
  maxSpeed?: number;

  @SpeakeasyMetadata({ data: "json, name=spentFuel" })
  spentFuel?: number;

  @SpeakeasyMetadata({ data: "json, name=startAddress" })
  startAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=startLat" })
  startLat?: number;

  @SpeakeasyMetadata({ data: "json, name=startLon" })
  startLon?: number;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;
}
