import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=match_key" })
  matchKey: string;
}


export class GetMatchHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetMatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetMatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMatchPathParams;

  @SpeakeasyMetadata()
  headers: GetMatchHeaders;

  @SpeakeasyMetadata()
  security: GetMatchSecurity;
}


export class GetMatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  match?: shared.Match;

  @SpeakeasyMetadata()
  statusCode: number;
}
