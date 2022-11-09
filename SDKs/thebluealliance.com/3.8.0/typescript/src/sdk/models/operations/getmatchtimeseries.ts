import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMatchTimeseriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=match_key" })
  matchKey: string;
}


export class GetMatchTimeseriesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetMatchTimeseriesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetMatchTimeseriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMatchTimeseriesPathParams;

  @Metadata()
  headers: GetMatchTimeseriesHeaders;

  @Metadata()
  security: GetMatchTimeseriesSecurity;
}


export class GetMatchTimeseriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getMatchTimeseries200ApplicationJsonObjects?: Map<string, any>[];
}
