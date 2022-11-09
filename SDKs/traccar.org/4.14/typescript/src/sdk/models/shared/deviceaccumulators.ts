import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeviceAccumulators extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceId" })
  deviceId?: number;

  @Metadata({ data: "json, name=hours" })
  hours?: number;

  @Metadata({ data: "json, name=totalDistance" })
  totalDistance?: number;
}
