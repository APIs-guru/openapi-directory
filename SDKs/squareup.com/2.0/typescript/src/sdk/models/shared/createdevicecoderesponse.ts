import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceCode } from "./devicecode";
import { Error } from "./error";


export class CreateDeviceCodeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=device_code" })
  deviceCode?: DeviceCode;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
