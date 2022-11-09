import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventMatchesSimplePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;
}


export class GetEventMatchesSimpleHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetEventMatchesSimpleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetEventMatchesSimpleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEventMatchesSimplePathParams;

  @Metadata()
  headers: GetEventMatchesSimpleHeaders;

  @Metadata()
  security: GetEventMatchesSimpleSecurity;
}


export class GetEventMatchesSimpleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata({ elemType: shared.MatchSimple })
  matchSimples?: shared.MatchSimple[];

  @Metadata()
  statusCode: number;
}
