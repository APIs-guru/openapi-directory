import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDevicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: number;
}


export class GetDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDevicePathParams;
}


export class GetDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
