import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamEventAwardsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;
}


export class GetTeamEventAwardsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamEventAwardsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamEventAwardsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamEventAwardsPathParams;

  @Metadata()
  headers: GetTeamEventAwardsHeaders;

  @Metadata()
  security: GetTeamEventAwardsSecurity;
}


export class GetTeamEventAwardsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Award })
  awards?: shared.Award[];

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
