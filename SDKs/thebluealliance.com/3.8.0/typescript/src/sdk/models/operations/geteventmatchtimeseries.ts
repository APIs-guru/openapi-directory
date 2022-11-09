import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventMatchTimeseriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;
}


export class GetEventMatchTimeseriesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetEventMatchTimeseriesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetEventMatchTimeseriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEventMatchTimeseriesPathParams;

  @Metadata()
  headers: GetEventMatchTimeseriesHeaders;

  @Metadata()
  security: GetEventMatchTimeseriesSecurity;
}


export class GetEventMatchTimeseriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getEventMatchTimeseries200ApplicationJsonStrings?: string[];
}
