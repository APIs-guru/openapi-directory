import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetApiTokenStatusHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=api_key" })
  apiKey?: string;
}


export class GetApiTokenStatusRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetApiTokenStatusHeaders;
}


export class GetApiTokenStatusResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
