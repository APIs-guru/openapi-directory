import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamMediaByTagYearPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=media_tag" })
  mediaTag: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetTeamMediaByTagYearHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamMediaByTagYearSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamMediaByTagYearRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamMediaByTagYearPathParams;

  @Metadata()
  headers: GetTeamMediaByTagYearHeaders;

  @Metadata()
  security: GetTeamMediaByTagYearSecurity;
}


export class GetTeamMediaByTagYearResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata({ elemType: shared.Media })
  media?: shared.Media[];

  @Metadata()
  statusCode: number;
}
