import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamMediaByYearPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetTeamMediaByYearHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamMediaByYearSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamMediaByYearRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamMediaByYearPathParams;

  @Metadata()
  headers: GetTeamMediaByYearHeaders;

  @Metadata()
  security: GetTeamMediaByYearSecurity;
}


export class GetTeamMediaByYearResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata({ elemType: shared.Media })
  media?: shared.Media[];

  @Metadata()
  statusCode: number;
}
