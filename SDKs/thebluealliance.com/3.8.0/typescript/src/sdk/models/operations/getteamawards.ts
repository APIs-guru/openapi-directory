import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamAwardsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;
}


export class GetTeamAwardsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamAwardsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamAwardsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamAwardsPathParams;

  @Metadata()
  headers: GetTeamAwardsHeaders;

  @Metadata()
  security: GetTeamAwardsSecurity;
}


export class GetTeamAwardsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Award })
  awards?: shared.Award[];

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
