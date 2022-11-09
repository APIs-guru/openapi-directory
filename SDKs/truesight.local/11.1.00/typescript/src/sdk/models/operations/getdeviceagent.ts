import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceAgentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: number;
}


export class GetDeviceAgentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceAgentPathParams;
}


export class GetDeviceAgentResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
