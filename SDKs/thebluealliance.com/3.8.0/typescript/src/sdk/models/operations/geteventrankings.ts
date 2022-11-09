import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventRankingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;
}


export class GetEventRankingsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetEventRankingsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetEventRankingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEventRankingsPathParams;

  @Metadata()
  headers: GetEventRankingsHeaders;

  @Metadata()
  security: GetEventRankingsSecurity;
}


export class GetEventRankingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  eventRanking?: shared.EventRanking;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
