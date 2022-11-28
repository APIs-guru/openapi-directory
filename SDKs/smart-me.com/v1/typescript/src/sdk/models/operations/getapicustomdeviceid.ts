import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiCustomDeviceIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetApiCustomDeviceIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiCustomDeviceIdPathParams;
}


export class GetApiCustomDeviceIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customDeviceToPost?: shared.CustomDeviceToPost;

  @SpeakeasyMetadata()
  statusCode: number;
}
