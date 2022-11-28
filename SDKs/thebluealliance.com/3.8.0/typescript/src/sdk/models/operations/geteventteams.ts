import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventTeamsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;
}


export class GetEventTeamsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetEventTeamsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetEventTeamsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEventTeamsPathParams;

  @SpeakeasyMetadata()
  headers: GetEventTeamsHeaders;

  @SpeakeasyMetadata()
  security: GetEventTeamsSecurity;
}


export class GetEventTeamsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Team })
  teams?: shared.Team[];
}
