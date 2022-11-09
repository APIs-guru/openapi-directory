import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceMonitorsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: number;
}


export class GetDeviceMonitorsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceMonitorsPathParams;
}


export class GetDeviceMonitorsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
