import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeviceBySerialGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serial" })
  serial: number;
}


export class DeviceBySerialGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DeviceBySerialGetQueryParams;
}


export class DeviceBySerialGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  device?: shared.Device;

  @SpeakeasyMetadata()
  statusCode: number;
}
