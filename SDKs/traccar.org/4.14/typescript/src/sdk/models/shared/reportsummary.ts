import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReportSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=averageSpeed" })
  averageSpeed?: number;

  @Metadata({ data: "json, name=deviceId" })
  deviceId?: number;

  @Metadata({ data: "json, name=deviceName" })
  deviceName?: string;

  @Metadata({ data: "json, name=distance" })
  distance?: number;

  @Metadata({ data: "json, name=engineHours" })
  engineHours?: number;

  @Metadata({ data: "json, name=maxSpeed" })
  maxSpeed?: number;

  @Metadata({ data: "json, name=spentFuel" })
  spentFuel?: number;
}
