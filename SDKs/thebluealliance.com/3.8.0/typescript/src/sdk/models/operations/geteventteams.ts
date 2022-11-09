import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventTeamsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;
}


export class GetEventTeamsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetEventTeamsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetEventTeamsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEventTeamsPathParams;

  @Metadata()
  headers: GetEventTeamsHeaders;

  @Metadata()
  security: GetEventTeamsSecurity;
}


export class GetEventTeamsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Team })
  teams?: shared.Team[];
}
