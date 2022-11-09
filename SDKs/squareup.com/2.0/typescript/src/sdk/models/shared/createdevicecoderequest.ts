import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceCode } from "./devicecode";


export class CreateDeviceCodeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=device_code" })
  deviceCode: DeviceCode;

  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey: string;
}
