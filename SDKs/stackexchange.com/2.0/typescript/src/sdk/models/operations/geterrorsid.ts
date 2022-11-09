import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetErrorsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetErrorsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetErrorsIdPathParams;
}


export class GetErrorsIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
