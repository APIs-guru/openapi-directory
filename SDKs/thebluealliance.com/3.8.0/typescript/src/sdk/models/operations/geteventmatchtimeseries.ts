import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventMatchTimeseriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;
}


export class GetEventMatchTimeseriesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetEventMatchTimeseriesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetEventMatchTimeseriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEventMatchTimeseriesPathParams;

  @SpeakeasyMetadata()
  headers: GetEventMatchTimeseriesHeaders;

  @SpeakeasyMetadata()
  security: GetEventMatchTimeseriesSecurity;
}


export class GetEventMatchTimeseriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getEventMatchTimeseries200ApplicationJsonStrings?: string[];
}
