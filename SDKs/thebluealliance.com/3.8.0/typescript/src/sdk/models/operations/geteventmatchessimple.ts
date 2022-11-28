import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventMatchesSimplePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;
}


export class GetEventMatchesSimpleHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetEventMatchesSimpleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetEventMatchesSimpleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEventMatchesSimplePathParams;

  @SpeakeasyMetadata()
  headers: GetEventMatchesSimpleHeaders;

  @SpeakeasyMetadata()
  security: GetEventMatchesSimpleSecurity;
}


export class GetEventMatchesSimpleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata({ elemType: shared.MatchSimple })
  matchSimples?: shared.MatchSimple[];

  @SpeakeasyMetadata()
  statusCode: number;
}
