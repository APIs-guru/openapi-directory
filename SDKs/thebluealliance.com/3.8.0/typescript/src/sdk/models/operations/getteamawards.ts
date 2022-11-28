import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamAwardsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;
}


export class GetTeamAwardsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamAwardsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamAwardsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamAwardsPathParams;

  @SpeakeasyMetadata()
  headers: GetTeamAwardsHeaders;

  @SpeakeasyMetadata()
  security: GetTeamAwardsSecurity;
}


export class GetTeamAwardsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Award })
  awards?: shared.Award[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
