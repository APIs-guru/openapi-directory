import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;
}


export class GetEventHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetEventSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetEventRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEventPathParams;

  @Metadata()
  headers: GetEventHeaders;

  @Metadata()
  security: GetEventSecurity;
}


export class GetEventResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  event?: shared.Event;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
