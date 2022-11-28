import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAgentDevicesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: number;
}


export class GetAgentDevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAgentDevicesPathParams;
}


export class GetAgentDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
