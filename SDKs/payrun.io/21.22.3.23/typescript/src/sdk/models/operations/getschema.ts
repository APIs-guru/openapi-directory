import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSchemaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DtoDataType" })
  dtoDataType: string;
}


export class GetSchemaHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetSchemaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSchemaPathParams;

  @Metadata()
  headers: GetSchemaHeaders;
}


export class GetSchemaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  getSchema200ApplicationJsonBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
