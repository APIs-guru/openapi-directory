import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMatchSimplePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=match_key" })
  matchKey: string;
}


export class GetMatchSimpleHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetMatchSimpleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetMatchSimpleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMatchSimplePathParams;

  @SpeakeasyMetadata()
  headers: GetMatchSimpleHeaders;

  @SpeakeasyMetadata()
  security: GetMatchSimpleSecurity;
}


export class GetMatchSimpleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  matchSimple?: shared.MatchSimple;

  @SpeakeasyMetadata()
  statusCode: number;
}
