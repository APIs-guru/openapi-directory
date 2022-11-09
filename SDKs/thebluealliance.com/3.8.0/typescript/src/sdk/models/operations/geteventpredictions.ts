import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventPredictionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;
}


export class GetEventPredictionsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetEventPredictionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetEventPredictionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEventPredictionsPathParams;

  @Metadata()
  headers: GetEventPredictionsHeaders;

  @Metadata()
  security: GetEventPredictionsSecurity;
}


export class GetEventPredictionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  eventPredictions?: Map<string, any>;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
