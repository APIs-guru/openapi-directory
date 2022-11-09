import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutDevicesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutDevicesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutDevicesIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Device;
}


export class PutDevicesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  device?: shared.Device;

  @Metadata()
  statusCode: number;
}
