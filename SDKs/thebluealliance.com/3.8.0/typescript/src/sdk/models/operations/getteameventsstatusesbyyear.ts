import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamEventsStatusesByYearPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetTeamEventsStatusesByYearHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamEventsStatusesByYearSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamEventsStatusesByYearRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamEventsStatusesByYearPathParams;

  @Metadata()
  headers: GetTeamEventsStatusesByYearHeaders;

  @Metadata()
  security: GetTeamEventsStatusesByYearSecurity;
}


export class GetTeamEventsStatusesByYearResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TeamEventStatus })
  getTeamEventsStatusesByYear200ApplicationJsonObject?: Map<string, shared.TeamEventStatus>;
}
