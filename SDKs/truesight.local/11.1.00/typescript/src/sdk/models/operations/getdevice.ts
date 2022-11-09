import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDevicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: number;
}


export class GetDeviceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDevicePathParams;
}


export class GetDeviceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
