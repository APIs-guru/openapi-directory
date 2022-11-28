import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutDevicesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutDevicesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutDevicesIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Device;
}


export class PutDevicesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  device?: shared.Device;

  @SpeakeasyMetadata()
  statusCode: number;
}
