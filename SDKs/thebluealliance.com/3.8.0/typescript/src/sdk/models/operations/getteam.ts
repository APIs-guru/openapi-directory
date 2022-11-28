import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;
}


export class GetTeamHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamPathParams;

  @SpeakeasyMetadata()
  headers: GetTeamHeaders;

  @SpeakeasyMetadata()
  security: GetTeamSecurity;
}


export class GetTeamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  team?: shared.Team;
}
