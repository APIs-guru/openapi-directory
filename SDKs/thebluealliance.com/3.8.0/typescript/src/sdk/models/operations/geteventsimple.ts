import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventSimplePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;
}


export class GetEventSimpleHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetEventSimpleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetEventSimpleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEventSimplePathParams;

  @Metadata()
  headers: GetEventSimpleHeaders;

  @Metadata()
  security: GetEventSimpleSecurity;
}


export class GetEventSimpleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  eventSimple?: shared.EventSimple;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
