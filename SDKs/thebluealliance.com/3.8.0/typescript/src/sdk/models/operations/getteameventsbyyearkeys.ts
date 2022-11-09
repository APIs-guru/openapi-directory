import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamEventsByYearKeysPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetTeamEventsByYearKeysHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamEventsByYearKeysSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamEventsByYearKeysRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamEventsByYearKeysPathParams;

  @Metadata()
  headers: GetTeamEventsByYearKeysHeaders;

  @Metadata()
  security: GetTeamEventsByYearKeysSecurity;
}


export class GetTeamEventsByYearKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTeamEventsByYearKeys200ApplicationJsonStrings?: string[];
}
