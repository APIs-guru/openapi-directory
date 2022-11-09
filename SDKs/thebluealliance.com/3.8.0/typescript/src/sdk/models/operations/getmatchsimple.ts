import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMatchSimplePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=match_key" })
  matchKey: string;
}


export class GetMatchSimpleHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetMatchSimpleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetMatchSimpleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMatchSimplePathParams;

  @Metadata()
  headers: GetMatchSimpleHeaders;

  @Metadata()
  security: GetMatchSimpleSecurity;
}


export class GetMatchSimpleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  matchSimple?: shared.MatchSimple;

  @Metadata()
  statusCode: number;
}
