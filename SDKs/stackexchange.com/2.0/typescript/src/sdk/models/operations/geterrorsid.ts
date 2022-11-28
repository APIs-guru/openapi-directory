import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetErrorsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetErrorsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetErrorsIdPathParams;
}


export class GetErrorsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
