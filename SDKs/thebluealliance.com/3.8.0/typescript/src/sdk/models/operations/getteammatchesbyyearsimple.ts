import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamMatchesByYearSimplePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetTeamMatchesByYearSimpleHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamMatchesByYearSimpleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamMatchesByYearSimpleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamMatchesByYearSimplePathParams;

  @SpeakeasyMetadata()
  headers: GetTeamMatchesByYearSimpleHeaders;

  @SpeakeasyMetadata()
  security: GetTeamMatchesByYearSimpleSecurity;
}


export class GetTeamMatchesByYearSimpleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata({ elemType: shared.MatchSimple })
  matchSimples?: shared.MatchSimple[];

  @SpeakeasyMetadata()
  statusCode: number;
}
