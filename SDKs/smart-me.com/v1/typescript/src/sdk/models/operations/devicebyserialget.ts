import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeviceBySerialGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=serial" })
  serial: number;
}


export class DeviceBySerialGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DeviceBySerialGetQueryParams;
}


export class DeviceBySerialGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  device?: shared.Device;

  @Metadata()
  statusCode: number;
}
