import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReinitializePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: number;
}


export class ReinitializeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReinitializePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ReinitializeActionConfiguration;
}


export class ReinitializeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
