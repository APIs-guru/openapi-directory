import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamAwardsByYearPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetTeamAwardsByYearHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamAwardsByYearSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamAwardsByYearRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamAwardsByYearPathParams;

  @Metadata()
  headers: GetTeamAwardsByYearHeaders;

  @Metadata()
  security: GetTeamAwardsByYearSecurity;
}


export class GetTeamAwardsByYearResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Award })
  awards?: shared.Award[];

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
