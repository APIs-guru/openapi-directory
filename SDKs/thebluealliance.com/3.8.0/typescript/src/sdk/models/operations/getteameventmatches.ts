import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamEventMatchesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;
}


export class GetTeamEventMatchesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamEventMatchesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamEventMatchesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamEventMatchesPathParams;

  @Metadata()
  headers: GetTeamEventMatchesHeaders;

  @Metadata()
  security: GetTeamEventMatchesSecurity;
}


export class GetTeamEventMatchesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata({ elemType: shared.Match })
  matches?: shared.Match[];

  @Metadata()
  statusCode: number;
}
