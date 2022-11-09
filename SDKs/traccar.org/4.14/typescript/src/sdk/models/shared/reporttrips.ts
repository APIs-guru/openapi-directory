import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReportTrips extends SpeakeasyBase {
  @Metadata({ data: "json, name=averageSpeed" })
  averageSpeed?: number;

  @Metadata({ data: "json, name=deviceId" })
  deviceId?: number;

  @Metadata({ data: "json, name=deviceName" })
  deviceName?: string;

  @Metadata({ data: "json, name=distance" })
  distance?: number;

  @Metadata({ data: "json, name=driverName" })
  driverName?: string;

  @Metadata({ data: "json, name=driverUniqueId" })
  driverUniqueId?: number;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=endAddress" })
  endAddress?: string;

  @Metadata({ data: "json, name=endLat" })
  endLat?: number;

  @Metadata({ data: "json, name=endLon" })
  endLon?: number;

  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=maxSpeed" })
  maxSpeed?: number;

  @Metadata({ data: "json, name=spentFuel" })
  spentFuel?: number;

  @Metadata({ data: "json, name=startAddress" })
  startAddress?: string;

  @Metadata({ data: "json, name=startLat" })
  startLat?: number;

  @Metadata({ data: "json, name=startLon" })
  startLon?: number;

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;
}
