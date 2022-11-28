import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventTeamsSimplePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;
}


export class GetEventTeamsSimpleHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetEventTeamsSimpleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetEventTeamsSimpleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEventTeamsSimplePathParams;

  @SpeakeasyMetadata()
  headers: GetEventTeamsSimpleHeaders;

  @SpeakeasyMetadata()
  security: GetEventTeamsSimpleSecurity;
}


export class GetEventTeamsSimpleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TeamSimple })
  teamSimples?: shared.TeamSimple[];
}
