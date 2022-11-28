import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStatusHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetStatusSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetStatusHeaders;

  @SpeakeasyMetadata()
  security: GetStatusSecurity;
}


export class GetStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiStatus?: shared.ApiStatus;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
