import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeviceAccumulators extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: number;

  @SpeakeasyMetadata({ data: "json, name=hours" })
  hours?: number;

  @SpeakeasyMetadata({ data: "json, name=totalDistance" })
  totalDistance?: number;
}
