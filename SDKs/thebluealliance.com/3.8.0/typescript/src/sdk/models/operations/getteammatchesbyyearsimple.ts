import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamMatchesByYearSimplePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetTeamMatchesByYearSimpleHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamMatchesByYearSimpleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamMatchesByYearSimpleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamMatchesByYearSimplePathParams;

  @Metadata()
  headers: GetTeamMatchesByYearSimpleHeaders;

  @Metadata()
  security: GetTeamMatchesByYearSimpleSecurity;
}


export class GetTeamMatchesByYearSimpleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata({ elemType: shared.MatchSimple })
  matchSimples?: shared.MatchSimple[];

  @Metadata()
  statusCode: number;
}
