import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamMatchesByYearKeysPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetTeamMatchesByYearKeysHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamMatchesByYearKeysSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamMatchesByYearKeysRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamMatchesByYearKeysPathParams;

  @Metadata()
  headers: GetTeamMatchesByYearKeysHeaders;

  @Metadata()
  security: GetTeamMatchesByYearKeysSecurity;
}


export class GetTeamMatchesByYearKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTeamMatchesByYearKeys200ApplicationJsonStrings?: string[];
}
