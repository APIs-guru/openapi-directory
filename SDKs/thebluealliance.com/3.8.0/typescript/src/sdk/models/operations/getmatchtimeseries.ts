import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMatchTimeseriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=match_key" })
  matchKey: string;
}


export class GetMatchTimeseriesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetMatchTimeseriesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetMatchTimeseriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMatchTimeseriesPathParams;

  @SpeakeasyMetadata()
  headers: GetMatchTimeseriesHeaders;

  @SpeakeasyMetadata()
  security: GetMatchTimeseriesSecurity;
}


export class GetMatchTimeseriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getMatchTimeseries200ApplicationJsonObjects?: Map<string, any>[];
}
