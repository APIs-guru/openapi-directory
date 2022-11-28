import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamMatchesByYearPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetTeamMatchesByYearHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamMatchesByYearSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamMatchesByYearRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamMatchesByYearPathParams;

  @SpeakeasyMetadata()
  headers: GetTeamMatchesByYearHeaders;

  @SpeakeasyMetadata()
  security: GetTeamMatchesByYearSecurity;
}


export class GetTeamMatchesByYearResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata({ elemType: shared.Match })
  matches?: shared.Match[];

  @SpeakeasyMetadata()
  statusCode: number;
}
