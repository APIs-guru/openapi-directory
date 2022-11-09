import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetStatusHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetStatusSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetStatusRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetStatusHeaders;

  @Metadata()
  security: GetStatusSecurity;
}


export class GetStatusResponse extends SpeakeasyBase {
  @Metadata()
  apiStatus?: shared.ApiStatus;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
