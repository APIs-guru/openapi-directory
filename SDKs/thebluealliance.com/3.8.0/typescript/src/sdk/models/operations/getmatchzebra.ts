import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMatchZebraPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=match_key" })
  matchKey: string;
}


export class GetMatchZebraHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetMatchZebraSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetMatchZebraRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMatchZebraPathParams;

  @SpeakeasyMetadata()
  headers: GetMatchZebraHeaders;

  @SpeakeasyMetadata()
  security: GetMatchZebraSecurity;
}


export class GetMatchZebraResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  zebra?: shared.Zebra;
}
