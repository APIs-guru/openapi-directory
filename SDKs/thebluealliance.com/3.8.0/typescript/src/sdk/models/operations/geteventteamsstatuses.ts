import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventTeamsStatusesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;
}


export class GetEventTeamsStatusesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetEventTeamsStatusesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetEventTeamsStatusesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEventTeamsStatusesPathParams;

  @Metadata()
  headers: GetEventTeamsStatusesHeaders;

  @Metadata()
  security: GetEventTeamsStatusesSecurity;
}


export class GetEventTeamsStatusesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TeamEventStatus })
  getEventTeamsStatuses200ApplicationJsonObject?: Map<string, shared.TeamEventStatus>;
}
