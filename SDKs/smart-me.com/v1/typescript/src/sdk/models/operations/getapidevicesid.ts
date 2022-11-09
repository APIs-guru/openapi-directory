import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiDevicesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetApiDevicesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiDevicesIdPathParams;
}


export class GetApiDevicesIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  device?: shared.Device;

  @Metadata()
  statusCode: number;
}
