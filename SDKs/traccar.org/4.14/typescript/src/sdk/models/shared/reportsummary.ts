import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReportSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=averageSpeed" })
  averageSpeed?: number;

  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: number;

  @SpeakeasyMetadata({ data: "json, name=deviceName" })
  deviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=distance" })
  distance?: number;

  @SpeakeasyMetadata({ data: "json, name=engineHours" })
  engineHours?: number;

  @SpeakeasyMetadata({ data: "json, name=maxSpeed" })
  maxSpeed?: number;

  @SpeakeasyMetadata({ data: "json, name=spentFuel" })
  spentFuel?: number;
}
