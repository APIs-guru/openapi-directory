import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetQueryResponseHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetQueryResponseRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetQueryResponseHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Query;
}


export class GetQueryResponseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  getQueryResponse200ApplicationJsonBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
