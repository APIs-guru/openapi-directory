import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventTeamsStatusesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;
}


export class GetEventTeamsStatusesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetEventTeamsStatusesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetEventTeamsStatusesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEventTeamsStatusesPathParams;

  @SpeakeasyMetadata()
  headers: GetEventTeamsStatusesHeaders;

  @SpeakeasyMetadata()
  security: GetEventTeamsStatusesSecurity;
}


export class GetEventTeamsStatusesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TeamEventStatus })
  getEventTeamsStatuses200ApplicationJsonObject?: Map<string, shared.TeamEventStatus>;
}
