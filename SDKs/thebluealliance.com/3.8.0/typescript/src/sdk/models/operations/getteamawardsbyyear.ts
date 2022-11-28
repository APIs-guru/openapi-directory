import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamAwardsByYearPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetTeamAwardsByYearHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamAwardsByYearSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamAwardsByYearRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamAwardsByYearPathParams;

  @SpeakeasyMetadata()
  headers: GetTeamAwardsByYearHeaders;

  @SpeakeasyMetadata()
  security: GetTeamAwardsByYearSecurity;
}


export class GetTeamAwardsByYearResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Award })
  awards?: shared.Award[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
