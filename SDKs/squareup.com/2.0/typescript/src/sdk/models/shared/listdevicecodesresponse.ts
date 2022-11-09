import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceCode } from "./devicecode";
import { Error } from "./error";


export class ListDeviceCodesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=device_codes", elemType: shared.DeviceCode })
  deviceCodes?: DeviceCode[];

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
