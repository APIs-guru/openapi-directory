import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiCustomDeviceIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetApiCustomDeviceIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiCustomDeviceIdPathParams;
}


export class GetApiCustomDeviceIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  customDeviceToPost?: shared.CustomDeviceToPost;

  @Metadata()
  statusCode: number;
}
