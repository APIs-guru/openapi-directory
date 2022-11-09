import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventInsightsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;
}


export class GetEventInsightsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetEventInsightsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetEventInsightsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEventInsightsPathParams;

  @Metadata()
  headers: GetEventInsightsHeaders;

  @Metadata()
  security: GetEventInsightsSecurity;
}


export class GetEventInsightsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  eventInsights?: shared.EventInsights;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
