import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamEventAwardsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;
}


export class GetTeamEventAwardsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamEventAwardsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamEventAwardsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamEventAwardsPathParams;

  @SpeakeasyMetadata()
  headers: GetTeamEventAwardsHeaders;

  @SpeakeasyMetadata()
  security: GetTeamEventAwardsSecurity;
}


export class GetTeamEventAwardsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Award })
  awards?: shared.Award[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
