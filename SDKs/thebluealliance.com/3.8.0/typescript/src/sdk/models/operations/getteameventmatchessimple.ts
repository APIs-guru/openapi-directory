import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamEventMatchesSimplePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;
}


export class GetTeamEventMatchesSimpleHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamEventMatchesSimpleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamEventMatchesSimpleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamEventMatchesSimplePathParams;

  @SpeakeasyMetadata()
  headers: GetTeamEventMatchesSimpleHeaders;

  @SpeakeasyMetadata()
  security: GetTeamEventMatchesSimpleSecurity;
}


export class GetTeamEventMatchesSimpleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata({ elemType: shared.Match })
  matches?: shared.Match[];

  @SpeakeasyMetadata()
  statusCode: number;
}
