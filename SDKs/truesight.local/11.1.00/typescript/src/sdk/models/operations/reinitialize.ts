import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReinitializePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: number;
}


export class ReinitializeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReinitializePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ReinitializeActionConfiguration;
}


export class ReinitializeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
