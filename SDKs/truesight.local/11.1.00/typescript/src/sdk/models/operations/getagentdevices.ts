import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAgentDevicesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: number;
}


export class GetAgentDevicesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAgentDevicesPathParams;
}


export class GetAgentDevicesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
